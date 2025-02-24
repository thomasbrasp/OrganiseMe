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

    const prevArrow = document.createElement("span");
    prevArrow.className = "arrow";
    prevArrow.innerHTML = "&#9665;";

    const nextArrow = document.createElement("span");
    nextArrow.className = "arrow";
    nextArrow.innerHTML = "&#9655;";

    const monthTitle = document.createElement("span");
    monthDiv.appendChild(prevArrow);
    monthDiv.appendChild(monthTitle);
    monthDiv.appendChild(nextArrow);

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    thead.innerHTML = `<tr><th>MA</th><th>DI</th><th>WO</th><th>DO</th><th>VR</th><th>ZA</th><th>ZO</th></tr>`;
    const tbody = document.createElement("tbody");

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

    // Event List in Sidebar
    const eventList = document.createElement("div");
    eventList.className = "event-list";
    sidebar.appendChild(eventList);

    // Main Calendar View
    const mainCalendar = document.createElement("section");
    mainCalendar.className = "calendar";

    const header = document.createElement("header");
    header.innerHTML = `<h2></h2><select><option>Maand</option><option>Week</option><option>Dag</option></select><button class="add-event">Event Toevoegen</button>`;

    const calendarGrid = document.createElement("section");
    calendarGrid.className = "calendar-grid";

    mainCalendar.appendChild(header);
    mainCalendar.appendChild(calendarGrid);

    // Append everything to container
    container.appendChild(sidebar);
    container.appendChild(mainCalendar);
    body.appendChild(container);

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    let events = [
        { day: 2, title: "Test Event", time: "12u-14u", color: "green" },
        { day: 8, title: "Meeting", time: "10u-11u", color: "purple" }
    ];

    function updateCalendar() {
        monthTitle.textContent = new Intl.DateTimeFormat("nl-NL", { month: "long", year: "numeric" }).format(new Date(currentYear, currentMonth));
        header.querySelector("h2").textContent = monthTitle.textContent;

        tbody.innerHTML = ""; // Clear previous table
        calendarGrid.innerHTML = ""; // Clear grid
        eventList.innerHTML = "<h3>Aankomende evenementen</h3>"; // Clear sidebar events

        let firstDay = new Date(currentYear, currentMonth, 1).getDay();
        let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        firstDay = (firstDay === 0) ? 6 : firstDay - 1; // Adjust for Monday start

        let dayCounter = 1;
        for (let i = 0; i < 6; i++) { // Max 6 rows in a month
            let tr = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                let td = document.createElement("td");
                if ((i === 0 && j < firstDay) || dayCounter > daysInMonth) {
                    td.textContent = "";
                } else {
                    td.textContent = dayCounter;
                    if ([5, 6].includes(new Date(currentYear, currentMonth, dayCounter).getDay())) {
                        td.classList.add("grayed");
                    }
                    dayCounter++;
                }
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }

        // Main grid view
        for (let i = 1; i <= daysInMonth; i++) {
            let dayDiv = document.createElement("div");
            dayDiv.className = "day";
            dayDiv.textContent = i;

            events.forEach(event => {
                if (event.day === i) {
                    let eventDiv = document.createElement("div");
                    eventDiv.className = `event ${event.color}`;
                    eventDiv.innerHTML = `${event.title} <br> ${event.time}`;
                    dayDiv.appendChild(eventDiv);

                    let eventSidebarItem = document.createElement("div");
                    eventSidebarItem.className = `event-sidebar ${event.color}`;
                    eventSidebarItem.innerHTML = `<strong>${event.title}</strong> - ${event.time} (Dag ${event.day})`;
                    eventList.appendChild(eventSidebarItem);
                }
            });

            calendarGrid.appendChild(dayDiv);
        }
    }

    prevArrow.addEventListener("click", () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    nextArrow.addEventListener("click", () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    todayLink.addEventListener("click", (e) => {
        e.preventDefault();
        currentDate = new Date();
        currentMonth = currentDate.getMonth();
        currentYear = currentDate.getFullYear();
        updateCalendar();
    });

    updateCalendar();
});
