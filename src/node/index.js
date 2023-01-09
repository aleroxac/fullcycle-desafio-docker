const express = require('express')
const app = express()
const port = process.env.APP_PORT || 8080
const db_config = {
    host: process.env.DB_HOST   || 'db',
    user: process.env.DB_USER   || 'root',
    password: process.env.DB_PASS   || 'root',
    database: process.env.DB_DATABASE || 'fullcycle'
}
const database = require('mysql')
const { createConnection } = require('net')
const connection = database.createConnection(db_config)


app.get('/people', (req, res) => {
    connection.query('SELECT * FROM people', function (error, results) {
        if (error) throw error;
        res.send(results.map(item => ({ id: item.people_id, name: item.people_name })));
    });
})

app.get('/people/:name', (req, res) => {
    connection.query(`INSERT INTO people(people_name) VALUES ("${req.params.name}")`, function(err, result){
        if (err) throw err;
        console.log("1 record inserted");
    })

    connection.query('SELECT * FROM people', (error, results) => {
        if (error) throw error;

        let html = `<html><body><h1>Full Cycle Rocks!</h1><ul>`;
        for (let i = 0; i < results.length; i++) {
            html += `<li>${results[i].people_name}</li>`;
        }
        html += '</ul></body></html>';

        res.send(html);
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})
