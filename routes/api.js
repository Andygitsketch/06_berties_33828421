// Create a new router
const express = require("express")
const router = express.Router()

router.get('api/books', function (req, res, next) {

    // Query database to get all the books
    let sqlquery = "SELECT * FROM books"

    // Execute the sql query
    db.query(sqlquery, (err, result) => {
        // Return results as a JSON object
        if (err) {
            res.json(err)
            next(err)
        }
        else {
            res.json(result)
        }
    })
})

router.get('/search_result', function(req, res, next) {
        let sqlquery = "SELECT * FROM books WHERE name LIKE ?"; // query database to get all the books
        // execute sql query
        search_text = ["%"+req.query.search_text+"%"]
        db.query(sqlquery, search_text, (err, result) => {
            if (err) {
                next(err)
            }
            res.render("list.ejs", {availableBooks:result})
         });
    });

    router.get('/api/books', function(req, res, next) {
        let sqlquery = "SELECT * FROM books ORDER BY name BETWEEN 5 AND 10"; // query database to get all the books sorting by price from the most expensive book
        // execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                next(err)
            }
            res.render("list.ejs", {availableBooks:result})
         });
    });

    
    router.get('/api/books', function(req, res, next) {
        let sqlquery = "SELECT * FROM books ORDER BY price DESC"; // query database to get all the books
        // execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                next(err)
            }
            res.render("list.ejs", {availableBooks:result})
         });
    });

    
    router.get('/api/books', function(req, res, next) {
        let sqlquery = "SELECT * FROM books ORDER BY name ASC"; // query database to get all the books
        // execute sql query
        db.query(sqlquery, (err, result) => {
            if (err) {
                next(err)
            }
            res.render("list.ejs", {availableBooks:result})
         });
    });

    // Export the router object so index.js can access it
module.exports = router
