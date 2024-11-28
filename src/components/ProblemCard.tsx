import React from 'react';
import { Link } from 'react-router-dom';
import { Problem } from '../types';

interface ProblemCardProps {
  problem: Problem;
}

export default function ProblemCard({ problem }: ProblemCardProps) {
  const difficultyColor = {
    Easy: 'text-green-500',
    Medium: 'text-yellow-500',
    Hard: 'text-red-500'
  }[problem.difficulty];

  return (
    <Link to={`/problems/${problem.id}`}>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{problem.title}</h3>
          <span className={`${difficultyColor} font-medium`}>
            {problem.difficulty}
          </span>
        </div>
        <p className="mt-2 text-gray-600 line-clamp-2">
          {problem.description}
        </p>
      </div>
    </Link>
  );
}