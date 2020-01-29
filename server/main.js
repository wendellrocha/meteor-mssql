// Server entry point, imports all server code

import '/imports/startup/server';
import '/imports/startup/both';

sql = require('mssql');

const config = {
    user: 'sa',
    password: 'ag0r@-3ss@-eh-segur4',
    server: 'localhost',
    database: 'TestDB'
}

Meteor.startup(() => {
    sql.connect(config, (err) => {
        new sql.Request().query('SELECT @@SERVERNAME', (err, result) => {
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