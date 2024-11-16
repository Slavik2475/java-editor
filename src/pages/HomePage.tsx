import React from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Code2, ArrowRight } from 'lucide-react';
import { lessons } from '../data/lessons';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  
  const filteredLessons = lessons.filter(lesson => 
    lesson.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    lesson.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Learn Java Programming
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Interactive Java tutorials with live code examples and instant feedback
        </p>
      </div>

      {/* Search Section */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search lessons..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredLessons.map((lesson) => (
          <Link
            key={lesson.id}
            to={`/lessons/${lesson.id}`}
            className="group bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 dark:border-dark-700"
          >
            <div className="flex items-start justify-between mb-4">
              <BookOpen className="text-primary-600 dark:text-primary-400" size={24} />
              <ArrowRight className="text-gray-400 group-hover:text-primary-500 transition-colors" size={20} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {lesson.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {lesson.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Start Section */}
      <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden">
        <div className="border-b border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50 px-6 py-4">
          <div className="flex items-center gap-3">
            <Code2 className="text-primary-600 dark:text-primary-400" size={24} />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Quick Start Editor
            </h2>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to jump right in? Try our code editor with a simple example.
          </p>
          <Link
            to="/editor"
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Open Editor <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </main>
  );
}