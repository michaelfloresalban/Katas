FizzBuzzWhizz Kata - Solution

This repository contains my implementation of the FizzBuzzWhizz kata in TypeScript, along with its corresponding unit tests using Jest.

Technical Explanation

My solution is based on evaluating a number against a set of cumulative rules. To achieve this, I separated the logic into a helper function and the main execution function.

Prime Number Validation

I implemented an isPrime helper function to determine if a given number is prime. It first discards numbers less than or equal to 1, as they are not prime. Then, for efficiency, it iterates from 2 up to the square root of the number. If any exact divisor is found, it returns false; otherwise, it returns true.

Main Execution Logic

The core logic resides in the game function. I initialized an empty string called result to accumulate the words based on the conditions met:

I use the modulo operator (input % 3 === 0) to check if the number is a multiple of 3. If true, I append "Fizz" to the string.

I use the modulo operator (input % 5 === 0) to check if the number is a multiple of 5. If true, I append "Buzz".

I pass the number to my isPrime function. If it evaluates to true, I append "Whizz".

Since the conditions are evaluated sequentially and the strings are concatenated, combinations are handled automatically. For instance, passing the number 3 triggers both the multiple of 3 check and the prime check, resulting in "FizzWhizz".

Finally, I evaluate the length of the result string. If it is still empty (meaning no rules were met), I return the original number. Otherwise, I return the concatenated string.

Testing Strategy

To validate the logic, I wrote a test suite using Jest. I created 40 explicit unit tests, covering every single number from 1 to 40 individually.

I chose to write these 40 blocks explicitly instead of using a loop or parameterized tests to ensure absolute clarity on what the expected output is for each specific number, fully covering all possible combinations of rules within that range.

Setup and Execution

To run the project locally, install the dependencies and execute the test suite:

npm install
npm run test
