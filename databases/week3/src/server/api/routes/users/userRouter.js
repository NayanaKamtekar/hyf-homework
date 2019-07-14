'use strict';

const sql = require('./../../../db');
// router setup
const express = require('express');
const router = express.Router({ mergeParams: true });

function handleError(res, error) {
    res.status(500);
    res.end(JSON.stringify({
        message: "A SQL error occurred.",
        error: error.sqlMessage
    }));
}


router.get('/test', (req, res, next) => {
    // body requests
    console.log(req.body);
    // query parameters
    console.log(req.query);
    sql.query(`SELECT * FROM \`homework_lesson3\`.users;`, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


router.post('/', (req, res, next) => {
    //POST: http://localhost:5000/api/users/
   /* added user
    {
        "email": "nayana@hyf.dk",
        "password": "coding_at_hyf",
        "create_time": "2019-02-02 22:00:00",
        "age": 30,
        "name": "Nayana Kamtekar",
        "country": "India"
    }
    */

    let dbQuery = `INSERT INTO \`homework_lesson3\`.users (email, password, create_time, age, name, country) VALUES ('${req.body.email}', '${req.body.password}', '${req.body.create_time}', ${req.body.age}, '${req.body.name}', '${req.body.country}')`;

    sql.query(dbQuery, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


router.get('/', (req, res, next) => {
    //GET: http://localhost:5000/api/users?age=31&country=denmark
    //GET: http://localhost:5000/api/users?sort=name&order=asc
    //GET: http://localhost:5000/api/users?min-age=29&max-age=36
    //GET: http://localhost:5000/api/users?min-age=29&max-age=36&country=india
    //GET: http://localhost:5000/api/users?age=30

    var where_clause;
    var order_clause;
    var dbQuery = `SELECT * FROM \`homework_lesson3\`.users`;

    for (const key in req.query) {
        let keyLower = key.toLowerCase();
        let min_max = keyLower.split('-');//split the key with '-'and gives array

        //Building up of order clause
        if (keyLower === 'sort') {
            if (order_clause !== undefined) { // if we have already encounter order by field (variable)
                order_clause = `${order_clause}, ${req.query[key]}`
            }
            else {
                order_clause = `${req.query[key]}`
            }
        }
        else if (keyLower !== 'order') { //Building up of where clause
            if (min_max.length < 2) {
                if (where_clause !== undefined) {
                    where_clause = `${where_clause} AND ${key} = '${req.query[key]}'`;
                }
                else {
                    where_clause = `${key} = '${req.query[key]}'`;
                }
            }
            else {
                if (where_clause !== undefined) {
                    if (min_max[0] === 'min') {
                        where_clause = `${where_clause} AND ${min_max[1]} > '${req.query[key]}'`;
                    }
                    else if (min_max[0] === 'max') {
                        where_clause = `${where_clause} AND ${min_max[1]} < '${req.query[key]}'`;
                    }                    
                }
                else {
                    if (min_max[0] === 'min') {
                        where_clause = `${min_max[1]} > '${req.query[key]}'`;
                    }
                    else if (min_max[0] === 'max') {
                        where_clause = `${min_max[1]} < '${req.query[key]}'`;
                    } 
                }                
            }
        }
    }

    //continuation of building up of order clause
    for (const key in req.query) {
        let keyLower = key.toLowerCase();

        if (keyLower === 'order') {
            if (order_clause !== undefined) {
                order_clause = `${order_clause} ${req.query[key]}`;
            }
            break; //Search for asc or desc keyword and stops after first encounter
        }
    }

    // Attached WHERE and ORDER BY clause to dbQuery
    if (where_clause !== undefined) {
        dbQuery = ` ${dbQuery} WHERE ${where_clause}`;
    }

    if (order_clause !== undefined) {
        dbQuery = ` ${dbQuery} ORDER BY ${order_clause}`;
    }

    sql.query(dbQuery, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result)); 
    });   
});


router.get('/:email', (req, res, next) => {
    //http://localhost:5000/api/users/benjamin@hyf.dk

    console.log(req.params.email)
    // Create the sql that returns a specific user matching the email
    let dbQuery = `SELECT * FROM \`homework_lesson3\`.users WHERE LOWER(email) = LOWER('${req.params.email}')`;
    
    sql.query(dbQuery, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


router.put('/:email', (req, res, next) => {
    //PUT: http://localhost:5000/api/users/nayana@hyf.dk?age=31&email=nKamtekar@hyf.dk

    // Create the sql that updates information about a user matching the email
    var set_clause;
    
    //Building up of set clause
    for (const key in req.query) {
        if (set_clause !== undefined) {
            set_clause = `${set_clause}, ${key} = '${req.query[key]}'`;
        }
        else {
            set_clause = `${key} = '${req.query[key]}'`;
        }
    }

    let dbQuery = `UPDATE \`homework_lesson3\`.users SET ${set_clause} WHERE LOWER(email) = LOWER('${req.params.email}')`;
    
    sql.query(dbQuery, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


router.delete('/:email', (req, res, next) => {
    //DELETE: http://localhost:5000/api/users/nKamtekar@hyf.dk

    // Delete the information about a user matching the email
    let dbQuery = `DELETE FROM \`homework_lesson3\`.users WHERE LOWER(email) = LOWER('${req.params.email}')`;
    
    sql.query(dbQuery, function (error, result) {
        res.setHeader('Content-Type', 'application/json');
        if (error) return handleError(res, error);
        res.end(JSON.stringify(result));
    });
});


module.exports = router;