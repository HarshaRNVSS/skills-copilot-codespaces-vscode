// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Read the comments.json file
// 4. Send the comments.json file as a response

const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).end();
            return;
        }

        res.json(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// Run the web server
// 1. Run the web server
// 2. Visit http://localhost:3000/comments
// 3. Check if the comments.json file is being sent as a response