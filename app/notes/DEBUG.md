Setting Up Hot Reloading and Debugging
1. Configuring launch.json:
  Set the project path in launch.json.
  Configure it to use `nodemon` for `hot reloading`.

  Updating `package.json` Script:
  - Add a script for start that uses nodemon.
  - This allows running the project with npm start for automated hot reloading.

2. Using Debug Features in Visual Studio Code:
  Debug Console: Execute expressions directly to test their behavior.
  Watch Window: Monitor variable values in real-time.

3. Cool Feature:
  Utilize the Variables Section in the debugger to manipulate variable values.
  Changes affect the program's runtime in real time.
