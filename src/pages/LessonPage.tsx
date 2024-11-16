import React from 'react';
import { useParams } from 'react-router-dom';
import { CodeEditor } from '../components/CodeEditor';
import { ExecutionPanel } from '../components/ExecutionPanel';
import { lessons } from '../data/lessons';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../lib/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function LessonPage() {
  const { lessonId } = useParams();
  const { user } = useAuth();
  const lesson = lessons.find(l => l.id === lessonId);
  const [code, setCode] = React.useState(lesson?.initialCode || '');

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const saveCode = async () => {
    if (!user) return;
    
    try {
      await setDoc(doc(db, 'userCode', `${user.uid}_${lessonId}`), {
        userId: user.uid,
        lessonId,
        code,
        updatedAt: new Date().toISOString()
      });
      alert('Code saved successfully!');
    } catch (error) {
      console.error('Error saving code:', error);
      alert('Failed to save code');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="border-b border-gray-200 dark:border-dark-700 bg-gray-50 dark:bg-dark-900/50 px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{lesson.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">{lesson.description}</p>
        </div>
        
        <div className="p-6">
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-xl font-semibold mb-4">Concept Overview</h2>
            <div dangerouslySetInnerHTML={{ __html: lesson.content }} />
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Try it yourself</h2>
            <div className="bg-gray-50 dark:bg-dark-900/50 rounded-lg p-4 mb-4">
              <p className="text-gray-700 dark:text-gray-300">{lesson.exercise}</p>
            </div>
          </div>

          <div className="mt-6">
            <CodeEditor 
              initialCode={lesson.initialCode}
              onChange={setCode}
            />
          </div>

          <div className="mt-6">
            <ExecutionPanel 
              code={code}
              onSave={user ? saveCode : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}