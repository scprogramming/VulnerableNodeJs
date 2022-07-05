import * as fs from 'fs'
import { SqlHandler } from './SqlHandler.mjs';

const data = fs.readFileSync('./sql.conf', {encoding:'utf8',flags:'r'});
var params = data.split(',');

var sqlConn = new SqlHandler(params[0],params[1],params[2],params[3].trim(),"vuln");

sqlConn.queryNoReturnNoParam("CREATE TABLE IF NOT EXISTS login(username VARCHAR(255),password VARCHAR(255))");
sqlConn.queryNoReturnNoParam(`INSERT INTO login VALUES 
('admin','123456'),
('bob','password1'),
('sarah','2391a2b')`);

sqlConn.close();


