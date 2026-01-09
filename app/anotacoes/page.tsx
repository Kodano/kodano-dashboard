"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface Note {
  id: string;
  title: string;
  content: string;
  category: 'decisao' | 'ideia' | 'reuniao' | 'tecnico' | 'negocio';
  createdAt: Date;
}

const CATEGORIES = {
  decisao: { label: 'Decisão', color: 'bg-red-500/20 text-red-400 border-red-500/30' },
  ideia: { label: 'Ideia', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  reuniao: { label: 'Reunião', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  tecnico: { label: 'Técnico', color: 'bg-green-500/20 text-green-400 border-green-500/30' },
  negocio: { label: 'Negócio', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
};

export default function Anotacoes() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      title: 'Kodano será Gateway inicialmente',
      content: 'Confirmado com CEO: começaremos como gateway de pagamentos e evoluiremos para subadquirente em 12-24 meses. Foco inicial em integrações com adquirentes (Rede, Cielo, Stone).',
      category: 'decisao',
      createdAt: new Date('2026-01-08'),
    },
    {
      id: '2',
      title: 'Infraestrutura 100% AWS',
      content: 'Toda infraestrutura será na AWS região São Paulo (sa-east-1). Compliance LGPD e Banco Central exigem residência de dados no Brasil.',
      category: 'tecnico',
      createdAt: new Date('2026-01-08'),
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    category: 'ideia' as Note['category'],
  });

  const handleAddNote = () => {
    if (!newNote.title.trim() || !newNote.content.trim()) return;

    const note: Note = {
      id: Date.now().toString(),
      ...newNote,
      createdAt: new Date(),
    };

    setNotes([note, ...notes]);
    setNewNote({ title: '', content: '', category: 'ideia' });
    setShowForm(false);
  };

  const handleDeleteNote = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta anotação?')) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Link
            href="/"
            className="inline-flex items-center text-kodano-400 hover:text-kodano-300 mb-6 transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Voltar
          </Link>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-5xl font-bold text-gradient mb-2">Anotações</h1>
              <p className="text-gray-400 font-inter">
                Registro de decisões, ideias e insights do projeto
              </p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="btn-primary flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              Nova Anotação
            </button>
          </div>
        </div>

        {/* Formulário */}
        {showForm && (
          <div className="card p-6 mb-8 border-l-4 border-kodano-600 animate-slide-down">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Nova Anotação</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                  Título
                </label>
                <input
                  type="text"
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  className="input w-full"
                  placeholder="Ex: Decisão sobre arquitetura"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                  Categoria
                </label>
                <select
                  value={newNote.category}
                  onChange={(e) => setNewNote({ ...newNote, category: e.target.value as Note['category'] })}
                  className="input w-full"
                >
                  {Object.entries(CATEGORIES).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-inter">
                  Conteúdo
                </label>
                <textarea
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  rows={4}
                  className="input w-full resize-none"
                  placeholder="Descreva a anotação..."
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={handleAddNote}
                  className="btn-primary"
                >
                  Salvar
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setNewNote({ title: '', content: '', category: 'ideia' });
                  }}
                  className="btn-secondary"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Lista de Anotações */}
        <div className="space-y-4">
          {notes.length === 0 ? (
            <div className="text-center py-16 card">
              <p className="text-gray-400 font-inter">Nenhuma anotação ainda. Crie a primeira!</p>
            </div>
          ) : (
            notes.map((note, index) => (
              <div
                key={note.id}
                className="card p-6 border-l-4 border-kodano-500 hover:border-accent-500 group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <h3 className="text-2xl font-bold text-gray-100 group-hover:text-gradient transition-all duration-300">
                        {note.title}
                      </h3>
                      <span className={`badge border ${CATEGORIES[note.category].color}`}>
                        {CATEGORIES[note.category].label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 font-inter">
                      {format(note.createdAt, "d 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="text-red-400 hover:text-red-300 p-2 hover:bg-red-500/10 rounded-lg transition-all duration-200"
                    title="Excluir anotação"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-300 whitespace-pre-wrap font-inter leading-relaxed">
                  {note.content}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
