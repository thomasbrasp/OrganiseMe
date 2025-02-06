// const express = require("express");
// const axios = require("axios");
// const app = express();
//
// const fetchSchedule = async (month, res) => {
//     try {
//         const headers = {
//             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
//             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//             "Cookie": "SSESSa871973c0cd6049896447a5dd7c92d4f=xGksdqoR966O6X6muoGHiSjKKOlQNgbPefNJG85wmyvPWbtT",
//             "Origin": "https://student.ap.be",
//             "Referer": "https://student.ap.be/events",
//             "Sec-Fetch-Dest": "empty",
//             "Sec-Fetch-Mode": "cors",
//             "Sec-Fetch-Site": "same-origin",
//             "X-Requested-With": "XMLHttpRequest"
//         };
//
//         const url = `https://student.ap.be/events/fetch/untis/2025/${month.toString().padStart(2, '0')}`;
//         const response = await axios.get(url, { headers });
//         res.json(response.data);
//     } catch (error) {
//         console.error("Error fetching schedule:", error.response ? error.response.data : error.message);
//         res.status(500).send("Error fetching schedule");
//     }
// };
//
// app.get("/fetch-schedule-1", (req, res) => fetchSchedule(1, res));
// app.get("/fetch-schedule-2", (req, res) => fetchSchedule(2, res));
// app.get("/fetch-schedule-3", (req, res) => fetchSchedule(3, res));
//
// app.listen(5000, () => console.log("Server running on port 5000"));


//The good one
/*const express = require("express");
const axios = require("axios");
const app = express();

const fetchAllSchedules = async (res) => {
    try {
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": "SSESSa871973c0cd6049896447a5dd7c92d4f=xGksdqoR966O6X6muoGHiSjKKOlQNgbPefNJG85wmyvPWbtT",
            "Origin": "https://student.ap.be",
            "Referer": "https://student.ap.be/events",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "X-Requested-With": "XMLHttpRequest"
        };

        const months = [2, 3, 4, 5, 6];
        const scheduleData = {};

        for (const month of months) {
            const url = `https://student.ap.be/events/fetch/untis/2025/${month.toString().padStart(2, '0')}`;
            const response = await axios.get(url, { headers });
            scheduleData[month] = response.data;
        }

        res.json(scheduleData);
    } catch (error) {
        console.error("Error fetching schedules:", error.response ? error.response.data : error.message);
        res.status(500).send("Error fetching schedules");
    }
};

app.get("/fetch-all-schedules", (req, res) => fetchAllSchedules(res));

app.listen(5000, () => console.log("Server running on port 5000"));*/

const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();

const fetchAllSchedules = async (res) => {
    try {
        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Cookie": "SSESSa871973c0cd6049896447a5dd7c92d4f=xGksdqoR966O6X6muoGHiSjKKOlQNgbPefNJG85wmyvPWbtT",
            "Origin": "https://student.ap.be",
            "Referer": "https://student.ap.be/events",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "X-Requested-With": "XMLHttpRequest"
        };

        const months = [2, 3, 4, 5, 6];
        const scheduleData = {};

        for (const month of months) {
            const url = `https://student.ap.be/events/fetch/untis/2025/${month.toString().padStart(2, '0')}`;
            const response = await axios.get(url, { headers });
            scheduleData[month] = response.data;
        }

        // Save the data to a JSON file
        const filePath = path.join(__dirname, "data/scheduleData.json");
        fs.writeFileSync(filePath, JSON.stringify(scheduleData, null, 2), "utf-8");

        console.log("Schedule data saved to scheduleData.json");

        res.json({ message: "Schedule data saved successfully", data: scheduleData });
    } catch (error) {
        console.error("Error fetching schedules:", error.response ? error.response.data : error.message);
        res.status(500).send("Error fetching schedules");
    }
};

app.get("/fetch-all-schedules", (req, res) => fetchAllSchedules(res));

app.listen(5000, () => console.log("Server running on port 5000"));


// app.get("/fetch-schedule-1", async (req, res) => {
//     try {
//         // Set up headers exactly as in the original request
//         const headers = {
//             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
//             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//             "Cookie": "SSESSa871973c0cd6049896447a5dd7c92d4f=xGksdqoR966O6X6muoGHiSjKKOlQNgbPefNJG85wmyvPWbtT",
//             "Origin": "https://student.ap.be",
//             "Referer": "https://student.ap.be/events",
//             "Sec-Fetch-Dest": "empty",
//             "Sec-Fetch-Mode": "cors",
//             "Sec-Fetch-Site": "same-origin",
//             "X-Requested-With": "XMLHttpRequest"
//         };
//
//         // If the request has a body, send it formatted properly
//         const postData = qs.stringify({
//             // Add parameters here if required, otherwise keep it empty
//         });
//
//         const response1 = await axios.get("https://student.ap.be/events/fetch/untis/2025/01", { headers });
//         res.json(response1.data);  // Returns JSON response
//     } catch (error) {
//         console.error("Error fetching schedule:", error.response ? error.response.data : error.message);
//         res.status(500).send("Error fetching schedule");
//     }
// });
//
// app.get("/fetch-schedule-2", async (req, res) => {
//     try {
//         // Set up headers exactly as in the original request
//         const headers = {
//             "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36",
//             "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
//             "Cookie": "SSESSa871973c0cd6049896447a5dd7c92d4f=xGksdqoR966O6X6muoGHiSjKKOlQNgbPefNJG85wmyvPWbtT",
//             "Origin": "https://student.ap.be",
//             "Referer": "https://student.ap.be/events",
//             "Sec-Fetch-Dest": "empty",
//             "Sec-Fetch-Mode": "cors",
//             "Sec-Fetch-Site": "same-origin",
//             "X-Requested-With": "XMLHttpRequest"
//         };
//
//         // If the request has a body, send it formatted properly
//         const postData = qs.stringify({
//             // Add parameters here if required, otherwise keep it empty
//         });
//
//         const response1 = await axios.get("https://student.ap.be/events/fetch/untis/2025/02", { headers });
//         res.json(response1.data);  // Returns JSON response
//     } catch (error) {
//         console.error("Error fetching schedule:", error.response ? error.response.data : error.message);
//         res.status(500).send("Error fetching schedule");
//     }
// });
//
// app.listen(5000, () => console.log("Server running on port 5000"));

// app.get("/fetch-schedule", async (req, res) => {
//     try {
//         const headers = {
//             "accept": "application/json",
//             "accept-language": "en-US,en;q=0.9,nl;q=0.8",
//             "priority": "u=1, i",
//             "sec-ch-ua": '"Not A(Brand";v="8", "Chromium";v="132", "Google Chrome";v="132"',
//             "sec-ch-ua-mobile": "?0",
//             "sec-ch-ua-platform": '"Windows"',
//             "sec-fetch-dest": "empty",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-site": "same-origin",
//             "tenant-id": "3257400"
//         };
//
//         const url = "https://arche.webuntis.com/WebUntis/api/public/timetable/weekly/data?elementType=1&elementId=44010&date=2025-02-03&formatId=3";
//
//         const response = await axios.get(url, { headers, withCredentials: true });
//
//         res.json(response.data);
//     } catch (error) {
//         console.error("Error fetching schedule:", error.response ? error.response.data : error.message);
//         res.status(500).send("Error fetching schedule");
//     }
// });
//
// app.listen(5000, () => console.log("Server running on port 5000"));
//
// <input type="https://arche.webuntis.com/WebUntis/api/public/timetable/weekly/data?elementType=1&elementId=44010&date=2025-02-03&formatId=3"/>

// const fs = require("fs");
//
// const fetchSchedule = async () => {
//     try {
//         const url = "https://arche.webuntis.com/WebUntis/api/public/timetable/weekly/data?elementType=1&elementId=44010&date=2025-02-03&formatId=3";
//
//         const headers = {
//             "accept": "application/json",
//             "accept-language": "en-US,en;q=0.9,nl;q=0.8",
//             "priority": "u=1, i",
//             "sec-ch-ua": "\"Not A(Brand\";v=\"8\", \"Chromium\";v=\"132\", \"Google Chrome\";v=\"132\"",
//             "sec-ch-ua-mobile": "?0",
//             "sec-ch-ua-platform": "\"Windows\"",
//             "sec-fetch-dest": "empty",
//             "sec-fetch-mode": "cors",
//             "sec-fetch-site": "same-origin",
//             "tenant-id": "3257400"
//         };
//
//         const response = await axios.get(url, { headers, withCredentials: true });
//
//         // Save the JSON response to a file
//         fs.writeFileSync("schedule.json", JSON.stringify(response.data, null, 2));
//
//         console.log("Schedule data saved to schedule.json");
//     } catch (error) {
//         console.error("Error fetching schedule:", error.response ? error.response.data : error.message);
//     }
// };
//
// fetchSchedule();
