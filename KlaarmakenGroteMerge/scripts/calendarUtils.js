let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

export function getCurrentMonth() {
    return currentMonth;
}

export function getCurrentYear() {
    return currentYear;
}

export function goToPreviousMonth() {
    currentMonth -= 1;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear -= 1;
    }
}

export function goToNextMonth() {
    currentMonth += 1;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear += 1;
    }
}

export function goToToday() {
    const today = new Date();
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
}

export function formatMonthYear(year, month) {
    return new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(new Date(year, month));
}
