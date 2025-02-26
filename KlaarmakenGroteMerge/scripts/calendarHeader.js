// calendarHeader.js

export function createHeader(containerId, onPrev, onNext, onViewChange, onAddEvent) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`setupHeader: Element with ID "${containerId}" not found.`);
        return;
    }

    // Create header structure
    container.innerHTML = `
        <header class="calendar-header">
            <span id="${containerId}-prev" class="calendar-arrow">&#9665;</span>
            <h2 id="${containerId}-month" class="calendar-month"></h2>
            <span id="${containerId}-next" class="calendar-arrow">&#9655;</span>
            <select id="${containerId}-viewSelector">
                <option value="week">Week</option>
                <option value="month" selected>Maand</option>
                <option value="day">Dag</option>
            </select>
            <button class="add-event" id="${containerId}-addEventBtn">Event Toevoegen</button>
        </header>
    `;

    // Attach event listeners
    document.getElementById(`${containerId}-prev`).addEventListener("click", onPrev);
    document.getElementById(`${containerId}-next`).addEventListener("click", onNext);
    document.getElementById(`${containerId}-viewSelector`).addEventListener("change", (event) => {
        console.log(`View changed to: ${event.target.value}`);
        onViewChange(event.target.value);
    });
    document.getElementById(`${containerId}-addEventBtn`).addEventListener("click", onAddEvent);
}
