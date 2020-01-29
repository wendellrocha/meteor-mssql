// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';

sql = require('mssql');

const config = {
    user: 'sa',
    password: 'senha-super-segura-para-o-local-host',
    server: 'localhost',
    database: 'TestDB'
}

Meteor.startup(() => {
    sql.connect(config, (err) => {
        new sql.Request().query('SELECT * FROM sys.databases', (err, result) => {
            if (err) {
                console.log('--------- Connection error -----------');
                console.log(err);
                console.log('--------- Connection error -----------');
            }

            console.dir(result);
        })
    });

    sql.on('error', err => {
        console.log('--------- Error -----------');
        console.log(err)
        console.log('--------- Error -----------');
    })
});