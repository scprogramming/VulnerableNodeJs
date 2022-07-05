import * as mysql from 'mysql2'

export class SqlHandler{
    constructor(host,port,user,pass,database){
        this.mySqlConn = mysql.createConnection({
            host:host,
            port:port,
            user:user,
            password:pass,
            database:database
        });

        this.mySqlConn.connect(function(err){
            if (err){
                throw err;
            }
        });
    }

    queryNoReturnNoParam(query){
        this.mySqlConn.query(query);
    }

    async queryInjection(query){
        var result = await this.mySqlConn.promise().query(query);
        return result;
    }

    close(){
        this.mySqlConn.end();
    }
}

