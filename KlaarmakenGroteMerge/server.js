
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
            "Cookie": "SSESSa871973c0cd6049896447a5dd7c92d4f=nqb%2CKfB3atQkUVWTyR7%2CvWJI34t%2C9DYw0RUaMzSIgjFDKQal",
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
