import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Trophy, User2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">CodeMaster</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link to="/problems" className="hover:text-blue-400 transition-colors">
              Problems
            </Link>
            <Link to="/contests" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <Trophy className="h-4 w-4" />
              <span>Contests</span>
            </Link>
            <Link to="/profile" className="flex items-center space-x-1 hover:text-blue-400 transition-colors">
              <User2 className="h-4 w-4" />
              <span>Dhruv Agarwal</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}