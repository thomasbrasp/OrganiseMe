document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const container = document.createElement("section");
    container.className = "container";

    // Sidebar
    const sidebar = document.createElement("aside");
    sidebar.className = "sidebar";

    // Calendar
    const calendarDiv = document.createElement("div");
    calendarDiv.className = "calendar";

    const monthDiv = document.createElement("div");
    monthDiv.className = "month";
    monthDiv.innerHTML = `<span class="arrow">&#9665;</span><span>MEI 2025</span><span class="arrow">&#9655;</span>`;

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    thead.innerHTML = `<tr><th>MA</th><th>DI</th><th>WO</th><th>DO</th><th>VR</th><th>ZA</th><th>ZO</th></tr>`;

    const tbody = document.createElement("tbody");
    const days = [
        ["", "", "", "", "1", "2", "3"],
        ["4", "5", "6", "7", "8", "9", "10"],
        ["11", "12", "13", "14", "15", "16", "17"],
        ["18", "19", "20", "21", "22", "23", "24"],
        ["25", "26", "27", "28", "29", "30", "31"]
    ];

    days.forEach(week => {
        const tr = document.createElement("tr");
        week.forEach(day => {
            const td = document.createElement("td");
            if (!isNaN(day)) td.textContent = day;
            if ([5, 6, 7, 12, 13, 14, 15, 19, 20, 21, 22, 26, 27, 28].includes(parseInt(day))) {
                td.className = "grayed";
            }
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    const todayLink = document.createElement("a");
    todayLink.href = "#";
    todayLink.className = "today";
    todayLink.textContent = "Ga naar vandaag";

    calendarDiv.appendChild(monthDiv);
    calendarDiv.appendChild(table);
    calendarDiv.appendChild(todayLink);
    sidebar.appendChild(calendarDiv);

    // Events Section
    const eventList = document.createElement("section");
    eventList.className = "event-list";
    eventList.innerHTML = `<h4>Evenementen</h4><div class="event purple">Test Event <br> 12u-14u</div><div class="event green">Test Event <br> 12u-14u</div>`;
    sidebar.appendChild(eventList);

    // Main Calendar View
    const mainCalendar = document.createElement("section");
    mainCalendar.className = "calendar";

    const header = document.createElement("header");
    header.innerHTML = `<h2>Februari 2025</h2><select><option>Maand</option><option>Week</option><option>Dag</option></select><button class="add-event">Event Toevoegen</button>`;

    const calendarGrid = document.createElement("section");
    calendarGrid.className = "calendar-grid";

    for (let i = 1; i <= 28; i++) {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.textContent = i.toString();

        if (i === 2 || i === 8) {
            const eventDiv = document.createElement("div");
            eventDiv.className = `day event ${i === 2 ? "green" : "purple"}`;
            eventDiv.innerHTML = "Test Event <br> 12u-14u";
            dayDiv.appendChild(eventDiv);
        }
        calendarGrid.appendChild(dayDiv);
    }

    mainCalendar.appendChild(header);
    mainCalendar.appendChild(calendarGrid);

    // Append everything to container
    container.appendChild(sidebar);
    container.appendChild(mainCalendar);
    body.appendChild(container);
});
