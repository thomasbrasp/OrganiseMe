document.addEventListener("DOMContentLoaded", () => {
    const calendarContainer = document.getElementById("calendarContainer");
    if (!calendarContainer) {
        console.error("#calendarContainer niet gevonden.");
        return;
    }

    // Helper function to format date
    const formatDate = (date) =>
        date.toLocaleDateString("nl-BE", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        });

    let currentDate = new Date();

    const updateDateHeading = () => {
        dateHeading.textContent = formatDate(currentDate);
    };

    // Create Top Bar
    const header = document.createElement("div");
    header.className = "calendar-header";

    const dateHeading = document.createElement("h2");
    updateDateHeading();

    const controls = document.createElement("div");
    controls.className = "controls";

    const previousDayButton = document.createElement("button");
    previousDayButton.textContent = "← Vorige dag";
    previousDayButton.addEventListener("click", () => {
        currentDate.setDate(currentDate.getDate() - 1);
        updateDateHeading();
    });

    const nextDayButton = document.createElement("button");
    nextDayButton.textContent = "Volgende dag →";
    nextDayButton.addEventListener("click", () => {
        currentDate.setDate(currentDate.getDate() + 1);
        updateDateHeading();
    });

    const viewSelect = document.createElement("select");
    const viewOptions = ["dag", "week", "maand"];
    viewOptions.forEach((view) => {
        const option = document.createElement("option");
        option.value = view;
        option.textContent = view;
        viewSelect.appendChild(option);
    });

    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.placeholder = "Zoek";

    const addEventButton = document.createElement("button");
    addEventButton.className = "add-event";
    addEventButton.textContent = "Evenement toevoegen";

    addEventButton.addEventListener("click", () => {
        const popupScript = document.createElement("script");
        popupScript.src = "popup.js";
        popupScript.onload = () => console.log("popup.js geladen.");
        document.body.appendChild(popupScript);
    });

    controls.append(previousDayButton, nextDayButton, viewSelect, searchInput, addEventButton);
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
        hour.textContent = `${i.toString().padStart(2, "0")}:00`;
        hoursDiv.appendChild(hour);
    }

    const eventsDiv = document.createElement("div");
    eventsDiv.className = "events";

    calendar.append(hoursDiv, eventsDiv);
    calendarContainer.appendChild(calendar);
});
