const filePath = './data/userstories.json'; // Update the path relative to your index.html

// Fetch the JSON file and parse it
fetch(filePath)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(userstories => {
        // Log the data
        console.table(userstories);

        // If you'd like a tabular format showing the first 10 items:
        console.table(userstories.slice(0, 10));
    })
    .catch(error => {
        console.error('Error fetching or parsing JSON data:', error);
    });

// const fs = require('fs');
// const path = require('path');
//
// const filePath = path.join(__dirname, '../data/userstories.json');
//
// // Read the JSON file and parse it
// const userstories = JSON.parse(fs.readFileSync(filePath, 'utf8'));
//
//
// // Log the full data instead of using console.table
// console.table(userstories)
// // OR if you still want a tabular format but with full visibility:
//
// console.table(userstories.slice(0, 10));
