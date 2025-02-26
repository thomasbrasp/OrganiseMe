"use strict";

// function showPopUpForm() {
//   const popUpContainer = document.createElement("div");
//   popUpContainer.id = "popUp-Container";
//   popUpContainer.innerHTML = `

//  <div class="event-pop-up-container">
//       <div class="container">

//         <form action="get">
//           <button class="popUp-CloseBtn">X</button>
//           <!-- Event title -->
//           <div class="event-pop-up-divider">
//             <label for="">Event title</label>
//             <input type="text" />
//           </div>

//           <!-- Event description -->
//           <div class="event-pop-up-divider">
//             <label for="description">Event description </label>
//             <input type="text" name="description" size="25" maxlength="45" />
//             <div class="subtext">Max 45 characters*</div>
//           </div>

//           <!-- Date picker -->
//           <div class="event-pop-up-divider">
//             <label for="Date"> Date</label>
//             <input type="date" name="Event datum" id="DateTime" />
//           </div>

//           <!-- From-To-Time selector -->
//           <div class="event-pop-up-divider event-pop-up-small-row">
//             <div class="vertical-event-layout">
//               <label for="start-time" class="event-row-label">Start time</label>
//               <input name="start-time" type="time" class="time-input" />
//             </div>

//             <div class="vertical-event-layout">
//               <label for="end-time">End time</label>
//               <input name="end-time" type="time" class="time-input" />
//             </div>
//           </div>

//           <!-- Event urgency picker -->
//           <div class="event-pop-up-divider">
//             <label for="Event-Urgency">Event Urgency</label>
//             <select name="Event-Urgency" id="Event-Urgency">
//               <option value="Urgent">Urgent</option>

//               <option value="Mildly-Urgent">Mildly urgent</option>

//               <option value="Not-Urgent" selected>Not urgent</option>
//             </select>
//           </div>

//           <!-- Event color picker -->
//           <div class="event-pop-up-divider">
//             <div class="color-options">
//               <label>Choose an event</label>
//               <select name="" id="">
//                 <option value="Deadline">Deadline</option>
//                 <option value="Exam">Exam</option>
//                 <option value="Study">Study session</option>
//                 <option value="Class">Class</option>
//               </select>
//             </div>

//             <input type="hidden" name="selected-color" id="selected-color" />
//             <!-- <option value="Red">Red</option>

//               <option value="Green">Green</option>

//               <option value="Blue">Blue</option>
//               <option value="Purple">Purple</option>
//               <option value="Orange">Orange</option> -->
//           </div>
//           <!-- Email Notification -->
//           <div class="event-pop-up-divider">
//             <label for="E-mail">Get a notification</label>
//             <input type="email" name="E-mail" />
//           </div>
//           <input type="submit">
//         </form>
//       </div>
//     </div>
//   `;
//   document.body.appendChild(popUpContainer);
//   document.querySelector(".close-btn").addEventListener("click", function () {
//     document.body.removeChild(popUpContainer);
//   });
// }
// document.querySelector("#open-popUp").addEventListener("click", showPopUpForm);

let popUpExists = false;
function createPopUpForm() {
  if (popUpExists) return;
  else {
    const popUpContainer = document.createElement("div");
    popUpContainer.id = "popUp-Container";
    popUpContainer.class = "popUp-Overlay";

    const popUpContent = document.createElement("div");
    popUpContent.class = "popUp-Content";

    const popUpForm = document.createElement("form");
    //
    const popUpTitleLabel = document.createElement("label");
    popUpTitleLabel.textContent = "Event title";
    const popUpTitleInput = document.createElement("input");
    popUpTitleInput.class = "popUp-Input";
    popUpTitleInput.required = true;
    popUpTitleInput.type = "text";
    popUpTitleLabel.appendChild(popUpTitleInput);
    //
    const popUpDescriptionLabel = document.createElement("label");
    popUpDescriptionLabel.textContent = "Event description";
    const popUpDescriptionInput = document.createElement("input");
    popUpDescriptionInput.type = "text";
    popUpTitleInput.required = true;
    popUpDescriptionInput.maxLength = 45;
    const popUpDescriptionSubText = document.createElement("small");
    popUpDescriptionSubText.id = "popUp-Subtext";
    popUpDescriptionSubText.innerText = "(Max length is 45 characters)";
    popUpDescriptionInput.appendChild(popUpDescriptionSubText);
    popUpDescriptionLabel.appendChild(popUpDescriptionInput);
    //
    const popUpDateLabel = document.createElement("label");
    popUpDateLabel.textContent = "Date";
    const popUpDateInput = document.createElement("input");
    popUpDateInput.type = "date";
    popUpDateInput.required = true;
    popUpDateLabel.appendChild(popUpDateInput);

    //
    const timeDivider = document.createElement("div");
    timeDivider.class = "vertical-alignment";

    const popUpStartTimeLabel = document.createElement("label");
    popUpStartTimeLabel.textContent = "Start time";
    const popUpStartTimeInput = document.createElement("input");
    popUpStartTimeInput.type = "time";
    popUpStartTimeInput.required = true;

    const popUpEndTimeLabel = document.createElement("label");
    popUpEndTimeLabel.textContent = "End time";
    const popUpEndInput = document.createElement("input");
    popUpEndInput.type = "time";
    popUpEndInput.required = true;
    popUpStartTimeLabel.appendChild(popUpStartTimeInput);
    popUpEndTimeLabel.appendChild(popUpEndInput);

    timeDivider.appendChild(popUpStartTimeLabel, popUpEndTimeLabel);
    //
    const popUpEventUrgencyLabel = document.createElement("label");
    popUpEventUrgencyLabel.textContent = "Event Urgency";
    const popUpEventUrgencySelect = document.createElement("select");
    popUpEventUrgencySelect.defaultValue = "Not Urgent";

    const urgencyOptions = ["Not Urgent", "Mildly Urgent", "Urgent"];
    urgencyOptions.forEach((optionText) => {
      const option = document.createElement("option");
      option.textContent = optionText;
      popUpEventUrgencySelect.appendChild(option);
    });
    //
    const popUpEventPickerLabel = document.createElement("label");
    popUpEventPickerLabel.textContent = "Choose an event";
    const popUpEventPickerSelect = document.createElement("select");

    const eventOptions = ["Birthday", "Diner", "School", "Sports", "Meeting"];
    eventOptions.forEach((eventText) => {
      const eventOption = document.createElement("option");
      eventOption.textContent = eventText;
      popUpEventPickerSelect.appendChild(eventOption);
    });
    popUpEventPickerLabel.appendChild(popUpEventPickerSelect);

    // buttons
    const closeButton = document.createElement("button");
    closeButton.id = "closeFormBtn";
    const submitButton = document.createElement("button");
    submitButton;
  }
}
