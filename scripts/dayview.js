document.addEventListener("DOMContentLoaded", () => {
    const calendarContainer = document.getElementById("calendarContainer");

    // Date Formatting
    const formatDate = (date) => date.toLocaleDateString("nl-BE", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

    // Create and configure the top bar with date heading and controls
    const header = document.createElement("div");
    header.className = "calendar-header";

    const dateHeading = document.createElement("h2");
    const currentDate = new Date();
    dateHeading.textContent = formatDate(currentDate);

    const controls = document.createElement("div");
    controls.className = "controls";

    const viewSelect = document.createElement("select");
    ["dag", "week", "maand"].forEach(view => {
        const option = document.createElement("option");
        option.value = view;
        option.textContent = view;
        viewSelect.appendChild(option);
    });

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "zoeken";

    const addButton = document.createElement("button");
    addButton.className = "add-event";
    addButton.textContent = "Event Toevoegen";

    controls.append(viewSelect, searchInput, addButton);
    header.append(dateHeading, controls);
    calendarContainer.appendChild(header);

    // Create Calendar
    const calendar = document.createElement("div");
    calendar.className = "calendar";

    const hoursDiv = document.createElement("div");
    hoursDiv.className = "hours";
    for (let i = 0; i <= 23; i++) {
        const hour = document.createElement("div");
        hour.className = "hour";
        hour.textContent = i.toString().padStart(2, "0");
        hoursDiv.appendChild(hour);
    }

    const eventsDiv = document.createElement("div");
    eventsDiv.className = "events";

    // Event Handling
    const events = [];



    // Initial Render
    calendar.append(hoursDiv, eventsDiv);
    calendarContainer.appendChild(calendar);
    renderEvents();
});
