"use strict";

function showPopUpForm() {
  const popUpContainer = document.createElement("div");
  popUpContainer.id = "popUp-Container";
  popUpContainer.innerHTML = `
 
 <div class="event-pop-up-container">
      <div class="container">
      
        <form action="get">
          <button class="popUp-CloseBtn">X</button>
          <!-- Event title -->
          <div class="event-pop-up-divider">
            <label for="">Event title</label>
            <input type="text" />
          </div>
          <!-- Event description -->
          <div class="event-pop-up-divider">
            <label for="description">Event description </label>
            <input type="text" name="description" size="25" maxlength="45" />
            <div class="subtext">Max 45 characters*</div>
          </div>
          <!-- Date picker -->
          <div class="event-pop-up-divider">
            <label for="Date"> Date</label>
            <input type="date" name="Event datum" id="DateTime" />
          </div>
          <!-- From-To-Time selector -->
          <div class="event-pop-up-divider event-pop-up-small-row">
            <div class="vertical-event-layout">
              <label for="start-time" class="event-row-label">Start time</label>
              <input name="start-time" type="time" class="time-input" />
            </div>

            <div class="vertical-event-layout">
              <label for="end-time">End time</label>
              <input name="end-time" type="time" class="time-input" />
            </div>
          </div>
          <!-- Event urgency picker -->
          <div class="event-pop-up-divider">
            <label for="Event-Urgency">Event Urgency</label>
            <select name="Event-Urgency" id="Event-Urgency">
              <option value="Urgent">Urgent</option>

              <option value="Mildly-Urgent">Mildly urgent</option>

              <option value="Not-Urgent" selected>Not urgent</option>
            </select>
          </div>
          <!-- Event color picker -->
          <div class="event-pop-up-divider">
            <div class="color-options">
              <label>Choose an event</label>
              <select name="" id="">
                <option value="Deadline">Deadline</option>
                <option value="Exam">Exam</option>
                <option value="Study">Study session</option>
                <option value="Class">Class</option>
              </select>
            </div>
            <input type="hidden" name="selected-color" id="selected-color" />
            <!-- <option value="Red">Red</option>

              <option value="Green">Green</option>

              <option value="Blue">Blue</option>
              <option value="Purple">Purple</option>
              <option value="Orange">Orange</option> -->
          </div>
          <!-- Email Notification -->
          <div class="event-pop-up-divider">
            <label for="E-mail">Get a notification</label>
            <input type="email" name="E-mail" />
          </div>
          <input type="submit"> 
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(popUpContainer);
  document.querySelector(".close-btn").addEventListener("click", function () {
    document.body.removeChild(popUpContainer);
  });
}
document.querySelector("#open-popUp").addEventListener("click", showPopUpForm);
