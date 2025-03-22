# Developer Guide

In contrast to the [contribution guide](./contribution-guide.md), these guidelines are more specific to the development process than commit standards. Follow these steps for making changes to the website. Note that some CLI commands may require `sudo` prepended to them to work. 

This guide also presents general knowledge in a way that is as beginner-friendly as possible. We want developers of any experience level (or lack thereof) to feel welcome to contribute to the application.

## Design Philosophy

N4C was designed to teach new web and application developers the fundamentals of web development. The goal is for contributors to understand what happens behind the scenes– so to speak– of applications. As such, we avoid using frameworks where we can, with one notable exception being the Express.js framework used to configure routing. 

## Tech Stack 

React, Bootstrap, Express.js, MySQL, Apache

We are using Node.js v20.12.0 and npm v10.5.0. I recommend installing the Node Version Manager (nvm) to maintain version consistency on both local machines and the web server.

## What to Know

Developers are encouraged to learn the following languages, libraries, and frameworks to contribute to the project. Each bullet is generally ordered front-to-back: client -> server -> data layer -> operating system (OS). Each nested bullet is also sorted by level of abstraction (library first, then framework). I recommend going in order.

### Front-End

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML): Markup for defining webpage structure and elements. This is what the user sees.

- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Styling for positioning elements and adding aesthetics to the webpage.
  * [Sass](https://sass-lang.com): CSS library which adds dynamic styling and flexibility to standard CSS.
  * [Bootstrap](https://getbootstrap.com): CSS framework. Learning Sass before exploring this framework is recommended, as it is used a lot in the background. 

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (JS): Has several uses, but is primarily used to add interactability and dynamism to the front end.
  * [TypeScript](https://www.typescriptlang.org): A [strongly typed](https://medium.com/@fedor.selenskiy/static-dynamic-vs-strong-weak-typing-a-common-misconception-d050f24b7db9) variant of JS.
  * [React](https://react.dev): Javascript library used for creating components (reusable pieces of JSX).

### Back-End

- [Node.js](https://nodejs.org/en): Server-side JavaScript; Used to process and serve files, make server requests, and connect to the website database.  
  * [Express.js](https://expressjs.com): An framework for Node.js.

- [SQL](https://www.w3schools.com/sql/): Query language for working with database management systems (DBMS). Each "flavor" of SQL has its unique syntax, but learning one of any of the following will put you in good standing to understand our database.
  * [MySQL](https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html): Most popular open-source DBMS. Distributed by Oracle
  * [PostgreSQL](https://www.postgresql.org/): Open source DBMS that is popular with web applications 
  * [SQLite](https://www.sqlite.org/index.html): Serverless database system that uses local .sqlite files to store data.

- [Apache](https://www.hostinger.com/tutorials/what-is-apache): A free and open-source web server. We use this as a [reverse proxy](https://www.cloudflare.com/learning/cdn/glossary/reverse-proxy/) for our Express.js server.

- [Linux](https://www.linux.com/what-is-linux/): An open-source operating system. This is the OS shared across the virtual machines developers will access when working with the web server.
  
  * [Terminal](https://ubuntu.com/tutorials/command-line-for-beginners): The Command Line Interface (CLI) for Linux.
  * [RedHat](https://www.redhat.com/en/topics/linux/what-is-linux#why-choose-red-hat): The specific flavor of Linux used for our application.
  
  ### Other
  
  - [Git CLI](https://git-scm.com) & [GitHub](https://github.com): Version control system (VCS) for making changes to the repository.

### Free Websites for Learning

 - [Codecademy](https://www.codecademy.com/catalog)
 - [freeCodeCamp](https://www.freecodecamp.org)
 - [W3Schools](https://www.w3schools.com)
 - [MDN Web Docs](https://developer.mozilla.org/en-US/)
 - [DataCamp](https://www.datacamp.com)

### Additional Knowledge

The following concepts may not be integral to application development, but will certainly aid in your development journey:

  - Other Command Line Interfaces (CLIs), E.g: Command Prompt / PowerShell
  - Visual Studio, Visual Studio Code, and console debuggers
  - Variable naming conventions for each language
  - Figma and interface design tools
  - SVG and XML
  - Semantic Versioning (SemVer)

## Accessing The Website

The N4C website can be accessed from SplashTop with permission from the club director. Log into the virtual machine using a student login, and open Powershell. SSH into the server subnet using the website IP address `10.212.0.133` and your developer login. If you need a login, ask the project lead or club director. Next, `cd` into the project directory at `/var/www/html`. This should bring you to the `NCC-Computer-Club-Website` folder. This is the **root** GitHub repository and the main focus of the project for developers. `cd` once again into `n4c` to access the actual website repository.

### Updating The Repository

From the website Run `git pull` (preferably from the root) to update the repo.

## Setting Up A Dev Environment

When developing on your local machine or using GitHub's Codespaces, first refer to the [contribution guide](./contribution-guide.md) for setting up a new branch. After reading through the guidelines and creating your forked repo, run the following commands:

```
cd n4c
npm run build
npm run compile dev
npm run dev
```

The preceding commands will first navigate to the app directory, giving you access to the `npm` commands, then remove all app dependencies and reinstall them in your development space. After all dependencies have been reinstalled, `npm run dev` will compile and start up the app; the terminal will output the app [URL](http://localhost:5670). 

Navigate to the url. Open the browser console to view further developer instructions. You are now ready to start development.

## Setting Up A Production Environment

These steps are important when you want to replicate the finished application on your local machine, and necessary when booting up the app on the Apache server. Run the following commands:

```
cd n4c
npm run build
npm run compile prod
npm start
```

As with the development steps, the first command brings you to the app directory, and the second will rebuild the app. The last two commands are where the two environments differ: `npm run compile-prod` will use a different compilation setup from the `compile-prod` used under the hood for `npm run dev`. Most importantly, the production command will instruct the [server.js](./n4c/server.js) file to use the `.env` file for server config.
