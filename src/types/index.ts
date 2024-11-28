export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: Example[];
  constraints: string[];
  starterCode: string;
  testCases: TestCase[];
  hiddenTestCases: TestCase[];
}

export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface TestCase {
  input: any[];
  output: any;
}

export interface User {
  name: string;
  username: string;
  solvedProblems: number;
  totalSubmissions: number;
  streak: number;
  rank: number;
  points: number;
}

export interface Contest {
  id: number;
  title: string;
  startTime: string;
  duration: string;
  registered: number;
  problems: Problem[];
}