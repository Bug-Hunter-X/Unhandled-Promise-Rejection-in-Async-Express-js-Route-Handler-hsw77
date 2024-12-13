# Unhandled Promise Rejection in Async Express.js Route Handler

This repository demonstrates a common error in Express.js applications: unhandled promise rejections in asynchronous route handlers.  The `bug.js` file shows the problematic code, where an asynchronous operation to fetch user data lacks proper error handling.  This can lead to application crashes if the database query fails or encounters an unexpected error.

The `bugSolution.js` file provides a corrected version with robust error handling using `try...catch` blocks and proper response handling for various error scenarios.  This ensures the application remains stable and gracefully handles errors, providing informative responses to the client.