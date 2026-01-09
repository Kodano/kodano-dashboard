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
  decisao: { label: 'Decisão', color: 'bg-red-100 text-red-800' },
  ideia: { label: 'Ideia', color: 'bg-yellow-100 text-yellow-800' },
  reuniao: { label: 'Reunião', color: 'bg-blue-100 text-blue-800' },
  tecnico: { label: 'Técnico', color: 'bg-green-100 text-green-800' },
  negocio: { label: 'Negócio', color: 'bg-purple-100 text-purple-800' },
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-kodano-600 hover:text-kodano-700 mb-4"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Voltar
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Anotações</h1>
              <p className="text-gray-600 mt-2">
                Registro de decisões, ideias e insights do projeto
              </p>
            </div>
            <button
              onClick={() => setShowForm(!showForm)}
              className="bg-kodano-600 text-white px-6 py-3 rounded-lg hover:bg-kodano-700 transition-colors flex items-center gap-2"
            >
              <PlusIcon className="w-5 h-5" />
              Nova Anotação
            </button>
          </div>
        </div>

        {/* Formulário */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-kodano-600">
            <h3 className="text-xl font-bold mb-4">Nova Anotação</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título
                </label>
                <input
                  type="text"
                  value={newNote.title}
                  onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kodano-500 focus:border-transparent"
                  placeholder="Ex: Decisão sobre arquitetura"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select
                  value={newNote.category}
                  onChange={(e) => setNewNote({ ...newNote, category: e.target.value as Note['category'] })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kodano-500 focus:border-transparent"
                >
                  {Object.entries(CATEGORIES).map(([key, { label }]) => (
                    <option key={key} value={key}>{label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conteúdo
                </label>
                <textarea
                  value={newNote.content}
                  onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kodano-500 focus:border-transparent"
                  placeholder="Descreva a anotação..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAddNote}
                  className="bg-kodano-600 text-white px-6 py-2 rounded-lg hover:bg-kodano-700 transition-colors"
                >
                  Salvar
                </button>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setNewNote({ title: '', content: '', category: 'ideia' });
                  }}
                  className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors"
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
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500">Nenhuma anotação ainda. Crie a primeira!</p>
            </div>
          ) : (
            notes.map((note) => (
              <div
                key={note.id}
                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6 border-l-4 border-kodano-400"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{note.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${CATEGORIES[note.category].color}`}>
                        {CATEGORIES[note.category].label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {format(note.createdAt, "d 'de' MMMM 'de' yyyy 'às' HH:mm", { locale: ptBR })}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteNote(note.id)}
                    className="text-red-600 hover:text-red-800 p-2"
                    title="Excluir anotação"
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-gray-700 whitespace-pre-wrap">{note.content}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
