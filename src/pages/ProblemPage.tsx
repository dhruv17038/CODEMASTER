import React from 'react';
import { useParams } from 'react-router-dom';
import { problems } from '../data/problems';
import CodeEditor from '../components/CodeEditor';
import ReactMarkdown from 'react-markdown';

export default function ProblemPage() {
  const { id } = useParams();
  const problem = problems.find(p => p.id === Number(id));

  if (!problem) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Problem not found</h1>
      </div>
    );
  }

  const difficultyColor = {
    Easy: 'text-green-500',
    Medium: 'text-yellow-500',
    Hard: 'text-red-500'
  }[problem.difficulty];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-3xl font-bold">{problem.title}</h1>
              <span className={`${difficultyColor} font-medium`}>
                {problem.difficulty}
              </span>
            </div>
            <div className="prose max-w-none">
              <ReactMarkdown>{problem.description}</ReactMarkdown>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Examples</h2>
            <div className="space-y-4">
              {problem.examples.map((example, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">Example {index + 1}:</p>
                  <div className="space-y-1">
                    <p><span className="font-medium">Input:</span> {example.input}</p>
                    <p><span className="font-medium">Output:</span> {example.output}</p>
                    {example.explanation && (
                      <p><span className="font-medium">Explanation:</span> {example.explanation}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Constraints</h2>
            <ul className="list-disc list-inside space-y-1">
              {problem.constraints.map((constraint, index) => (
                <li key={index}>{constraint}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="h-[800px]">
          <CodeEditor problem={problem} />
        </div>
      </div>
    </div>
  );
}