# Node.js Basics project

## Description :page_facing_up:
This project is a simple Node.js project that demonstrates the basic concepts of Node.js.

---
## Installation :inbox_tray:
```bash
npm install
```
---
## Tasks :page_with_curl:
- [x] Executing basic javascript with Node JS
    + In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.

- [x] Using Process stdin and stdout
    + In the file 1-stdin.js, create a script that will be executed through command line by passing a string argument.
    + It should display the message `Welcome to Holberton School, what is your name?`\
    + The user should be able to input their name and press enter.
    + The program should display `Your name is: <name>`.
    + The program should display `This important software is now closing` before exiting.

- [x] Reading a file synchronously with Node JS
    + In the file 2-read_file.js, create a function that returns an overview of the database.
    + The function must accept a file name as argument.
    + If the file does not exist, it returns an error `Cannot load the database`.
    + If the file exists, it returns an overview of the database in this form:
        ```bash
        Number of students: NUMBER_OF_STUDENTS
        Number of students in CS: NUMBER_OF_STUDENTS_IN_CS. List: LIST_OF_STUDENTS_IN_CS
        Number of students in SWE: NUMBER_OF_STUDENTS_IN_SWE. List: LIST_OF_STUDENTS_IN_SWE
        ...
        ```

- [x] Reading a file asynchronously with Node JS
    + In the file 3-read_file_async.js, create a function that returns an overview of the database.
    + The function must accept a file name as argument.
    + If the file does not exist, it returns an error `Cannot load the database`.
    + If the file exists, it returns an overview of the database in this form:
        ```bash
        Number of students: NUMBER_OF_STUDENTS
        Number of students in CS: NUMBER_OF_STUDENTS_IN_CS. List: LIST_OF_STUDENTS_IN_CS
        Number of students in SWE: NUMBER_OF_STUDENTS_IN_SWE. List: LIST_OF_STUDENTS_IN_SWE
        ...
        ```

- [x] Create a small HTTP server using Node's HTTP module
    + In the file 4-http.js, create a small HTTP server using the HTTP module.
    + The server should listen on port 1245 and return `Hello Holberton School!` for any incoming requests.
    > To run the server :rocket:
    ```bash
    $> node 4-http.js
    ```
    > To test the server :white_check_mark:
    ```bash
    $> curl localhost:1245 && echo ""
    Hello Holberton School!
    $> curl localhost:1245/any && echo ""
    Hello Holberton School!
    ```

---
## Resources :world_map:
Read or watch:
+ [Node.js Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
+ [Process API doc](https://nodejs.org/api/process.html)
+ [Child Process Node.js](https://nodejs.org/api/child_process.html)
+ [Express getting started](https://expressjs.com/en/starter/installing.html)
+ [Mocha documentation](https://mochajs.org/)
+ [Nodemon documentation](https://github.com/remy/nodemon#nodemon)