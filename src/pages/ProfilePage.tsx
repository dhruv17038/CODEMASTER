import React from 'react';
import { Trophy, Target, Zap, Award, GitBranch, CheckCircle } from 'lucide-react';

const user = {
  name: "Dhruv Agarwal",
  username: "dhruv_dev",
  solvedProblems: 45,
  totalSubmissions: 127,
  streak: 7,
  rank: 1234,
  points: 2500
};

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-3xl text-white font-bold">
              {user.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
            <p className="text-gray-600">@{user.username}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="text-green-500" />
              <span className="font-semibold">Problems Solved</span>
            </div>
            <p className="text-2xl font-bold">{user.solvedProblems}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <GitBranch className="text-blue-500" />
              <span className="font-semibold">Total Submissions</span>
            </div>
            <p className="text-2xl font-bold">{user.totalSubmissions}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="text-yellow-500" />
              <span className="font-semibold">Current Streak</span>
            </div>
            <p className="text-2xl font-bold">{user.streak} days</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="text-yellow-500" />
              <span className="font-semibold">Global Rank</span>
            </div>
            <p className="text-2xl font-bold">#{user.rank}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Award className="text-purple-500" />
              <span className="font-semibold">Total Points</span>
            </div>
            <p className="text-2xl font-bold">{user.points}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold">Two Sum</p>
              <p className="text-sm text-gray-600">Solved • Easy</p>
            </div>
            <span className="text-green-500">Accepted</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold">Valid Parentheses</p>
              <p className="text-sm text-gray-600">Solved • Medium</p>
            </div>
            <span className="text-green-500">Accepted</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold">Palindrome Number</p>
              <p className="text-sm text-gray-600">Attempted • Easy</p>
            </div>
            <span className="text-yellow-500">In Progress</span>
          </div>
        </div>
      </div>
    </div>
  );
}