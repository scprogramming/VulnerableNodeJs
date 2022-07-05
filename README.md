# VulnerableNodeJS

The purpose of this application is to provide a Node.js based vulnerable app that is easy to use and setup.

## Setup Instructions

To set this application up, you will need:

* Node.js (LTS or latest)
* MySQL

To setup this application, use the following steps:

1. Create a database named vuln in MySQL: `CREATE DATABASE vuln`
2. Update the text in `sql.conf` to match your mySQL IP, port, SQL username and password
3. Run `npm i mysql2` and `npm i express` to install node dependencies
4. Run `node installer.mjs` to setup the application
5. Run `node .` to start the server

At this point, the server has started on port 3000. There are two endpoints currently available:

* `/` which is the login page for the application.
* `/command` which is a location to run commands.

The login page has 3 valid logins stored in the database. It is also vulnerable to SQL injection.

The command page runs a ping against the IP input. It is also vulnerable to command injection. 
