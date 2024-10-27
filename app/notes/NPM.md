1. Run `npm init` to initialize a Node.js project and set up package management.
- After running this command, a `package.json` file will be created.

2. Inside `package.json`, there is a scripts section by default.
- By default, you’ll find a `test` script. Running `npm test` will execute the command 
specified for `test`.

3. You can add custom scripts as needed. For example, add a `start` script to run `node app.js`:

```
"scripts": {
  "start": "node app.js"
}
```

Now, running `npm start` will execute `node app.js`.

4. Now, let’s add another script called `start-server` to run `node app.js`:

```
"scripts": {
  "start-server": "node app.js"
}
```

When you try running `npm start-server`, you’ll get an error. This is because `npm start` 
is a special script name that doesn’t require `run`.
For custom scripts like `start-server`, use `npm run start-server`.

5. Install 3rd party packages, by visiting `https://www.npmjs.com` to search for packages.

Example commands:
- `npm install nodemon` install `nodemon` as a dependency
- `npm install nodemon --save` install `nodemon` (used in production)
- `npm install nodemon --save-dev` install `nodemon` (used only in development)
- `npm install nodemon --g` install `nodemon` globally on your machine

Running `npm install` will:
- Install packages listed in `package.json` if they’re not already installed.
- Update to the latest compatible version if a caret (^) is specified, e.g., `^1.0.0`.
- All installed packages will be saved in the `node_modules` folder.

6. The `package-lock.json` file is an auto-generated file in Node.js projects that is created 
when you run `npm install`. It is used to lock down the exact versions of all dependencies and 
sub-dependencies, ensuring consistency across environments.

7. `nodemon` is a package used for hot-reloading in development. It automatically restarts 
the Node.js server whenever it detects changes in the source files, making development faster 
and more efficient.
