import { createTableHeader, formatMonthYear, getCurrentMonth, getCurrentYear } from "./calendarUtils.js";

export function setupMonthView(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = "";

    const table = document.createElement("table");
    table.appendChild(createTableHeader()); // Correctly imported

    const tbody = document.createElement("tbody");
    const firstDay = new Date(getCurrentYear(), getCurrentMonth(), 1).getDay();
    const daysInMonth = new Date(getCurrentYear(), getCurrentMonth() + 1, 0).getDate();

    let dayCounter = 1;
    let row = document.createElement("tr");

    for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {
        row.appendChild(document.createElement("td"));
    }

    for (let i = (firstDay === 0 ? 6 : firstDay - 1); i < 7; i++) {
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
    container.appendChild(table);

    document.getElementById("calendar-header-month").textContent = formatMonthYear(getCurrentYear(), getCurrentMonth());
}
