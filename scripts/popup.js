"use strict";
document.getElementById("eventBtn").addEventListener("click", function () {
  const popUpDiv = document.createElement("div");

  const popUpForm = document.createElement("form");
  popUpForm.setAttribute("is", "popUpEventForm");

  const popUpEventLabels = [
    "Event Title",
    "Event Description",
    "Start Time",
    "End Time",
    "Date",
    "Urgency",
    "Want to get notified?",
  ];
  popUpEventLabels.forEach((Label) => {
    const popUpEventLabel = document.createElement("Label");
    popUpEventLabel.innerHTML = Label;
    const popUpEventTextBox = document.createElement("Input");
    popUpDiv.appendChild(popUpEventLabel);
    popUpDiv.appendChild(popUpEventTextBox);
    popUpDiv.appendChild(popUpForm);
  });
});
