import { SqlHandler } from "./SqlHandler.mjs";
import express from 'express';
import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from "url";
import {exec} from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.urlencoded({ extended: true }));

const data = fs.readFileSync('./sql.conf', {encoding:'utf8',flags:'r'});
var params = data.split(',');

var sql = new SqlHandler(params[0],params[1],params[2],params[3].trim(),"vuln");

app.use(express.json());

app.get('/',function(req,res){
    res.sendFile(__dirname + '/login.html');
});

app.get('/command', function(req,res){
    res.sendFile(__dirname + '/command.html')
});

app.post('/command',function(req,res){
    const {ip} = req.body;
    exec("ping " + ip, (err, stdout, stderr) => {
        if (err){
            res.send(err);
            res.end();
        }else if (stderr){
            res.send(stderr);
            res.end();
        }else{
            res.send(stdout);
            res.end();
        }
        
    });
});

app.post('/auth', async function(req,res){
    const {username, password} = req.body;
    if (username && password){
        var result = await sql.queryInjection("SELECT * FROM login WHERE username = '" + username + "' AND password = '" + password + "'");
        console.log(result);
        if (result[0][0] == undefined){
            res.send("Invalid login");
            res.end();
        }else{
            res.redirect('/home');
        }

    }else{
        res.send("Please enter a username and password!");
        res.end();
    }
});

app.get('/home', function(req,res){
    res.send("Welcome to the app!");
    res.end();
});

app.listen(3000);

