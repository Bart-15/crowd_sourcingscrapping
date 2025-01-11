const express = require("express");
const app = express();

app.get('/', (res, req) => {
    const sql = require("mssql");

    const config = {}

    sql.connect(config, (err) => {
        if(err) console.error(err);
        const request = new sql.Request();

        request.query('', (err, recordset) => {
            if(err) console.error(err);

            res.send(recordset);
        })
    })
})

const server = app.listen(5173, () => console.log('Server os loading'))