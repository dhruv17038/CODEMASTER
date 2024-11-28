import React from 'react';
import { contests } from '../data/contests';
import { Calendar, Clock, Users } from 'lucide-react';

export default function ContestsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Upcoming Contests</h1>

      <div className="grid gap-6">
        {contests.map(contest => (
          <div key={contest.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold mb-2">{contest.title}</h2>
                <div className="flex flex-col gap-2 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{contest.startTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{contest.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{contest.registered} registered</span>
                  </div>
                </div>
              </div>
              
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}