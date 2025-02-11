const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();

// Headers voor AP student rooster
const apHeaders = {
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

// Headers voor WebUntis
const webUntisHeaders = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 OPR/116.0.0.0",
    "Accept": "application/json",
    "Cookie": 'traceId=9bd2848517f7912f33a50336651f11eb6b542b5b; schoolname="_YXAtaG9nZXNjaG9vbC1hbnR3ZXJwZW4="; Tenant-Id="3257400"; JSESSIONID=6EA714E74CA48947A7888061D8157D9D;',
    "Referer": "https://arche.webuntis.com/WebUntis/embedded.do?showSidebar=false",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "Tenant-Id": "3257400"
};

// Haal AP-studentenroosters op
const fetchAPSchedules = async () => {
    try {
        const months = [2, 3, 4, 5, 6];
        const scheduleData = {};

        for (const month of months) {
            const url = `https://student.ap.be/events/fetch/untis/2025/${month.toString().padStart(2, '0')}`;
            const response = await axios.get(url, { headers: apHeaders });
            scheduleData[month] = response.data;
        }

        fs.writeFileSync(path.join(__dirname, "data/apScheduleData.json"), JSON.stringify(scheduleData, null, 2), "utf-8");
        console.log("AP schedule data saved.");
        return scheduleData;
    } catch (error) {
        console.error("Error fetching AP schedules:", error.response ? error.response.data : error.message);
        throw new Error("Failed to fetch AP schedules.");
    }
};

// Haal WebUntis timegrid op
const fetchWebUntisTimegrid = async () => {
    try {
        const url = "https://arche.webuntis.com/WebUntis/api/public/timegrid?schoolyearId=26";
        const response = await axios.get(url, { headers: webUntisHeaders });

        fs.writeFileSync(path.join(__dirname, "data/webUntisTimegrid.json"), JSON.stringify(response.data, null, 2), "utf-8");
        console.log("WebUntis timegrid data saved.");
        return response.data;
    } catch (error) {
        console.error("Error fetching WebUntis timegrid:", error.response ? error.response.data : error.message);
        throw new Error("Failed to fetch WebUntis timegrid.");
    }
};

// API endpoint om beide roosters op te halen
app.get("/fetch-all-schedules", async (req, res) => {
    try {
        const apData = await fetchAPSchedules();
        const untisTimegrid = await fetchWebUntisTimegrid();

        res.json({ message: "Schedules fetched successfully", apData, untisTimegrid });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
