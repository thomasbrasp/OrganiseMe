import {
    goToToday,
    goToPreviousMonth,
    goToNextMonth,
    formatMonthYear,
    getCurrentMonth,
    getCurrentYear
} from "./calendarUtils.js";

export function setupMiniCalendar(containerId = "mini-calendar") {
    let calendarContainer = document.getElementById(containerId);

    if (!calendarContainer) {
        console.error("Mini Calendar container not found!");
        return; // Prevent errors if the sidebar isn't ready yet
    }

    calendarContainer.innerHTML = `
        <div class="miniCalendar-container">
            <div class="miniCalendar-navigation">
                <span id="miniCalendar-prev" class="miniCalendar-arrow">&#9665;</span>
                <span id="miniCalendar-month" class="miniCalendar-month"></span>
                <span id="miniCalendar-next" class="miniCalendar-arrow">&#9655;</span>
            </div>
            <div id="miniCalendar-container"></div>
            <a href="#" id="miniCalendar-todayBtn">Go to Today</a>
        </div>
    `;

    document.getElementById("miniCalendar-prev").addEventListener("click", () => {
        goToPreviousMonth();
        updateMiniCalendar();
    });

    document.getElementById("miniCalendar-next").addEventListener("click", () => {
        goToNextMonth();
        updateMiniCalendar();
    });

    document.getElementById("miniCalendar-todayBtn").addEventListener("click", () => {
        goToToday();
        updateMiniCalendar();
    });

    updateMiniCalendar(); // Initial render
}

function updateMiniCalendar() {
    generateMiniCalendar("miniCalendar-container");
}

function generateMiniCalendar(containerId) {
    const miniCalendarContainer = document.getElementById(containerId);
    if (!miniCalendarContainer) return;

    miniCalendarContainer.innerHTML = "";

    const table = document.createElement("table");
    table.innerHTML = `<thead><tr>${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        .map(day => `<th>${day}</th>`).join("")}</tr></thead>`;

    const tbody = document.createElement("tbody");
    const firstDay = new Date(getCurrentYear(), getCurrentMonth(), 1).getDay();
    const daysInMonth = new Date(getCurrentYear(), getCurrentMonth() + 1, 0).getDate();

    let dayCounter = 1;
    let row = document.createElement("tr");

    for (let i = 0; i < firstDay; i++) {
        row.appendChild(document.createElement("td"));
    }

    for (let i = firstDay; i < 7; i++) {
        let cell = document.createElement("td");
        cell.textContent = dayCounter++;
        row.appendChild(cell);
    }
    tbody.appendChild(row);

    while (dayCounter <= daysInMonth) {
        row = document.createElement("tr");
        for (let i = 0; i < 7; i++) {
            let cell = document.createElement("td");
            if (dayCounter <= daysInMonth) {
                cell.textContent = dayCounter++;
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);
    miniCalendarContainer.appendChild(table);

    document.getElementById("miniCalendar-month").textContent = formatMonthYear(getCurrentYear(), getCurrentMonth());
}
