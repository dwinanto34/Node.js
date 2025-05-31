1. Why Use Express.js?
- With Node.js alone, you need to write extensive code to handle:
  - Extracting requests and responses.
  - Defining routing.
  - Handling incoming requests effectively.
- Express.js simplifies these tasks by providing a robust and easy-to-use framework.

2. Installing Express.js
npm install --save express

3. Running Scripts
npm run start-express
Note: start-express is a custom script and requires the `run` keyword.

4. Middleware
Middleware in Express.js works as a series of functions that process 
requests and responses in sequence:

(Request) >> (Middleware n) >> (Middleware n + 1...) >> (Response)

Purpose of Middleware:
- Modify or log the request before it reaches the route handler.
- Add custom logic, such as authentication or validation.
- Send a response or pass control to the next middleware using next().

