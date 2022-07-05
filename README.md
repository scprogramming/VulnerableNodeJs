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