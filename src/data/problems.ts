import { Problem } from '../types';

export const problems: Problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 104",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists."
    ],
    starterCode: `function twoSum(nums: number[], target: number): number[] {
    // Your code here
}`,
    testCases: [
      {
        input: [[2,7,11,15], 9],
        output: [0,1]
      },
      {
        input: [[3,2,4], 6],
        output: [1,2]
      }
    ],
    hiddenTestCases: [
      {
        input: [[1,5,8,3], 11],
        output: [1,2]
      }
    ]
  },
  {
    id: 2,
    title: "Palindrome Number",
    difficulty: "Easy",
    description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left."
      }
    ],
    constraints: [
      "-231 <= x <= 231 - 1"
    ],
    starterCode: `function isPalindrome(x: number): boolean {
    // Your code here
}`,
    testCases: [
      {
        input: [121],
        output: true
      },
      {
        input: [-121],
        output: false
      }
    ],
    hiddenTestCases: [
      {
        input: [12321],
        output: true
      }
    ]
  },
  {
    id: 3,
    title: "Valid Parentheses",
    difficulty: "Medium",
    description: "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      {
        input: 's = "()"',
        output: "true",
        explanation: "The parentheses match correctly."
      }
    ],
    constraints: [
      "1 <= s.length <= 104",
      "s consists of parentheses only '()[]{}'."
    ],
    starterCode: `function isValid(s: string): boolean {
    // Your code here
}`,
    testCases: [
      {
        input: ["()"],
        output: true
      },
      {
        input: ["()[]{}"],
        output: true
      }
    ],
    hiddenTestCases: [
      {
        input: ["([{}])"],
        output: true
      }
    ]
  }
];