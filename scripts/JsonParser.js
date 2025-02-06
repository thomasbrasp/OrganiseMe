const fs = require("fs");
const path = require("path");
const crypto = require("crypto"); // Used for generating unique IDs

// Function to generate a unique ID based on start and end time
const generateUID = (start, end) => {
    return crypto.createHash("md5").update(start + end).digest("hex");
};

// Function to extract teacher and location from description
const parseDescription = (description) => {
    const locationMatch = description.match(/Locatie:\s?([^<]+)/);
    const teachersMatch = description.match(/Lesgevers:\s?([^<]+)/);

    return {
        location: locationMatch ? locationMatch[1].trim() : "",
        teacher: teachersMatch ? teachersMatch[1].trim() : "",
    };
};

// Go up one level from 'scripts/' and into 'data/'
const filePath = path.resolve(__dirname, "../data/scheduleData.json");
const outputFilePath = path.resolve(__dirname, "../data/transformedSchedule.json");

console.log("Reading from:", filePath);
console.log("Saving to:", outputFilePath);

// Read and transform the data
const transformScheduleData = () => {
    try {
        // Read JSON file
        const rawData = fs.readFileSync(filePath, "utf-8");
        const schedules = JSON.parse(rawData);

        let transformedData = [];

        // Iterate through all months
        Object.values(schedules).forEach((events) => {
            events.forEach((event) => {
                const { location, teacher } = parseDescription(event.description);

                // Transform event structure
                const transformedEvent = {
                    id: generateUID(event.start, event.end),
                    title: event.title,
                    teacher: teacher,
                    location: location,
                    start: event.start,
                    end: event.end,
                    color: event.color,
                };

                transformedData.push(transformedEvent);
            });
        });

        // Sort by start date
        transformedData.sort((a, b) => new Date(a.start) - new Date(b.start));

        // Save transformed and sorted data back to a new JSON file
        fs.writeFileSync(outputFilePath, JSON.stringify(transformedData, null, 2), "utf-8");

        console.log("Transformed data saved successfully in transformedSchedule.json");
    } catch (error) {
        console.error("Error processing schedule data:", error.message);
    }
};

// Run the transformation
transformScheduleData();
