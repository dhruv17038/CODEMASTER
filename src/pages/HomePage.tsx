import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Trophy, BookOpen } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to CodeMaster</h1>
          <p className="text-xl text-gray-300">Master your coding skills with interactive challenges</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <Code2 className="h-12 w-12 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Practice Problems</h2>
            <p className="text-gray-300 mb-4">Solve coding challenges across different difficulty levels</p>
            <Link to="/problems" className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Start Coding
            </Link>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <Trophy className="h-12 w-12 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Compete</h2>
            <p className="text-gray-300 mb-4">Join coding contests and compete with others</p>
            <Link to="/contests" className="inline-block bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
              View Contests
            </Link>
          </div>

          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <BookOpen className="h-12 w-12 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Track Progress</h2>
            <p className="text-gray-300 mb-4">Monitor your coding journey and improvements</p>
            <Link to="/profile" className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
              View Profile
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose CodeMaster?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
              <p className="text-gray-300">Practice with real-time feedback and explanations</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Diverse Problems</h3>
              <p className="text-gray-300">Challenges ranging from easy to hard difficulty</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Active Community</h3>
              <p className="text-gray-300">Learn and grow with fellow developers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}