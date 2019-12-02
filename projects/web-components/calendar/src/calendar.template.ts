import { Calendar } from './calendar';

export default function template(this: Calendar) {
  return html`
    <div class="calendar">
      <!-- <div class="calendar-wrapper">
        <div class="calendar-cube">
          <div class="front">front</div>
          <div class="back">back</div>
          <div class="top">top</div>
          <div class="bottom">bottom</div>
          <div class="left">left</div>
          <div class="right">right</div>
        </div>
      </div> -->
      
      <div class="calendar-header">
        <button @click="${this.previous}">< Previous</button>
        ${this.mode === 'month' ? 
          html`<div class="calendar-month-year">${this.currentMonth.monthName} ${this.currentMonth.year}</div>` :
          html`<div class="calendar-month-year">${this.currentWeek.days[0].monthName} ${this.currentWeek.startYear}</div>`
        }
        <button @click="${this.next}"}>&nbsp;&nbsp;Next >&nbsp;&nbsp;</button>
      </div>

      ${this.mode === 'month' ? 
        html`<div class="calendar-days-header">
            ${this.days.map(
              (day) =>
                html`
                  <div>${day.fullName}</div>
                `
            )}
          </div>
          <div class="calendar-month">
            ${this.currentMonth.displayWeeks.map(
              (week) =>
              html`
                <div class="calendar-week">
                ${week.map((day) =>
                  html`
                    <div class="calendar-day ${day.type} ${day.isToday ? 'today' : ''}">${day.number}</div>
                  `
                )}
                </div>
              `
            )}
          </div>
        </div>` : 
        html`<div class="calendar-week-view">
          ${this.currentWeek.days.map(
            (day, index) =>
              html`
                <div class="calendar-week-view-day ${this.currentWeek.daysOfWeekDisplayType[index]} ${day.isToday ? 'today' : ''}">
                  <div class="calendar-week-view-day-title">
                    <div>${day.fullName}</div>
                    <div>${day.dayNumber}</div>
                  </div>
                  <div class="calendar-week-view-day-content">
                    
                  </div>
                </div>
              `
          )}
        </div>`
      }
  `;
}
