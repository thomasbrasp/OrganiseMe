import { setupMiniCalendar } from "./miniCalendar.js";

export function createSidebar() {
    const sidebarContainer = document.createElement("div");
    sidebarContainer.id = "sidebarContainer";
    document.body.appendChild(sidebarContainer);

    sidebarContainer.innerHTML = `
        <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
             aria-labelledby="offcanvasWithBothOptionsLabel">
            <div id="mini-calendar"></div>
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Calendar</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <p>Try scrolling the rest of the page to see this option in action.</p>
            </div>
        </div>
    `;

    const sidebarToggle = document.createElement("button");
    sidebarToggle.id = "sidebarToggle";
    sidebarToggle.className = "btn btn-primary position-fixed top-1 start-0 m-3";
    sidebarToggle.textContent = "☰";
    sidebarToggle.setAttribute("data-bs-toggle", "offcanvas");
    sidebarToggle.setAttribute("data-bs-target", "#offcanvasWithBothOptions");
    sidebarToggle.setAttribute("aria-controls", "offcanvasWithBothOptions");
    document.body.appendChild(sidebarToggle);

    // Ensure Mini Calendar is created
    setTimeout(() => {
        setupMiniCalendar("mini-calendar");
    }, 100);
}