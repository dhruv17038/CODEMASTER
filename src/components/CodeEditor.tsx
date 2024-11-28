import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, RefreshCw } from 'lucide-react';
import { Problem, TestCase } from '../types';

interface CodeEditorProps {
  problem: Problem;
}

interface TestResult {
  passed: boolean;
  input: string;
  expected: string;
  output: string;
}

export default function CodeEditor({ problem }: CodeEditorProps) {
  const [code, setCode] = useState(problem.starterCode);
  const [results, setResults] = useState<TestResult[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = () => {
    setIsRunning(true);
    const testResults: TestResult[] = [];
    
    try {
      // Create a function from the code string
      const userFunction = new Function(
        'return ' + code
      )();

      // Run test cases
      problem.testCases.forEach((testCase: TestCase) => {
        try {
          const output = userFunction(...testCase.input);
          const passed = JSON.stringify(output) === JSON.stringify(testCase.output);
          
          testResults.push({
            passed,
            input: JSON.stringify(testCase.input),
            expected: JSON.stringify(testCase.output),
            output: JSON.stringify(output)
          });
        } catch (error) {
          testResults.push({
            passed: false,
            input: JSON.stringify(testCase.input),
            expected: JSON.stringify(testCase.output),
            output: 'Error: ' + (error as Error).message
          });
        }
      });
    } catch (error) {
      testResults.push({
        passed: false,
        input: 'N/A',
        expected: 'N/A',
        output: 'Compilation Error: ' + (error as Error).message
      });
    }

    setResults(testResults);
    setIsRunning(false);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="h-[60%] border rounded-lg overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="typescript"
          theme="vs-dark"
          value={code}
          onChange={(value) => setCode(value || '')}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            automaticLayout: true,
          }}
        />
      </div>

      <div className="flex justify-between items-center my-4">
        <h3 className="text-lg font-semibold">Test Results</h3>
        <div className="space-x-2">
          <button
            onClick={() => setCode(problem.starterCode)}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center gap-2"
          >
            <RefreshCw className="h-4 w-4" /> Reset
          </button>
          <button
            onClick={runTests}
            disabled={isRunning}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Play className="h-4 w-4" /> Run Tests
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {results.map((result, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg mb-2 ${
              result.passed ? 'bg-green-50' : 'bg-red-50'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Test Case {index + 1}</span>
              <span
                className={`px-2 py-1 rounded text-sm ${
                  result.passed
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {result.passed ? 'Passed' : 'Failed'}
              </span>
            </div>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">Input:</span> {result.input}</p>
              <p><span className="font-medium">Expected:</span> {result.expected}</p>
              <p><span className="font-medium">Output:</span> {result.output}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}