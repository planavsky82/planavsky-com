import { LitElement } from 'lit-element';

import template from './calendar.template';
import styles from './calendar.styles';

export type Mode = 'month' | 'week' | 'day';
export type Direction = 'next' | 'previous';
export type DisplayDayType = 'next' | 'previous' | 'current';
export type DisplayDay = { 
  number: number,
  type: DisplayDayType;
  isToday: boolean;
};
export type DayNames = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface DateShared {
  month: number;
  monthName: string;
  year: number;
}

export interface Day extends DateShared {
  full: Date;
  dayOfWeek: number;
  dayNumber: number;
  fullName: DayNames;
  isToday: boolean;
}

export interface Week {
  startYear: number;
  endYear: number;
  firstDay: Day;
  lastDay: Day;
  days: Day[];
  previousWeek: Week | null;
  nextWeek: Week | null;
  daysOfWeekDisplayType: DisplayDayType[];
}

export interface Month extends DateShared {
  firstDay: Day;
  lastDay: Day;
  daysBefore: number;
  daysAfter: number;
  previousMonth: Month | null;
  nextMonth: Month | null;
  allDays: number[];
  previousDays: number[];
  nextDays: number[];
  displayDays: DisplayDay[];
  displayWeeks: DisplayDay[][];
}

export interface DayTitle {
  name: string;
  fullName: DayNames;
}

export interface ViewPort {
  width: number;
  height: number;
}

@customElement('calendar')
export class Calendar extends LitElement {
  public static styles = styles;

  @property({ type: String })
  public mode: Mode = 'month';

  @property({ type: Date })
  public now: Date = new Date();

  public days: DayTitle[] = this.generateDays();
  public currentWeek: Week = this.generateWeek(this.now, true);
  public currentMonth: Month = this.generateMonth(this.now, true);

  constructor() {
    super();
    window.addEventListener('resize', () => {
      this.resize();
    });
    this.resize();
  }

  private resize() {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    this.mode = 'month';
    if (width < 700) {
      this.mode = 'week';
    }
    this.requestUpdate();
  }

  private generateDay(date: Date): Day {
    return {
      full: date,
      month: date.getMonth(),
      monthName: date.toString().split(' ')[1],
      year: date.getFullYear(),
      dayOfWeek: date.getDay(),
      dayNumber: date.getDate(),
      fullName: this.getFullDayName(date.toString().split(' ')[0]),
      isToday: this.now.getTime() === date.getTime()
    };
  }

  private generateWeek(date: Date, siblingWeeks?: boolean): Week {
    const dayOfWeek = date.getDay();
    const firstDay = this.changeDay(date, dayOfWeek);
    const lastDay = this.changeDay(date, dayOfWeek - 6);
    const daysOfWeek: Day[] = [];
    const daysOfWeekDisplayType: DisplayDayType[] = [];

    /* TODO: apply 'display day type' to Day */
    let type: DisplayDayType = 'current';
    for (let i = 0; i < 7; i++) {
      const day: Day = this.generateDay(this.changeDay(firstDay, i * -1));
      if (day.month > firstDay.getMonth() || (day.month === 0 && firstDay.getMonth() === 11)) {
        type = 'next';
      }

      daysOfWeek.push(day);
      daysOfWeekDisplayType.push(type);
    }

    return {
      startYear: daysOfWeek[0].year,
      endYear: daysOfWeek[6].year,
      firstDay: this.generateDay(firstDay),
      lastDay: this.generateDay(lastDay),
      days: daysOfWeek,
      previousWeek: siblingWeeks ? this.generateWeek(new Date(this.changeDay(lastDay, 7))) : null, 
      nextWeek: siblingWeeks ? this.generateWeek(new Date(this.changeDay(lastDay, -7))) : null,
      daysOfWeekDisplayType: daysOfWeekDisplayType
    };
  }

  private changeDay(date: Date, dayOfWeek: number) {
    return new Date(Number(date) - 1000 * 60 * 60 * 24 * dayOfWeek);
  }

  private generateMonth(date: Date, siblingMonths?: boolean): Month {
    const month = date.getMonth();
    const year = date.getFullYear();
    const firstDay = this.generateDay(new Date(year, month, 1));
    const lastDay = this.generateDay(new Date(year, month + 1, 0));
    const previous = this.checkMonth(month, year, 'previous');
    const previousMonth = siblingMonths ? this.generateMonth(new Date(previous)) : null;
    const next = this.checkMonth(month, year, 'next');
    const nextMonth = siblingMonths ? this.generateMonth(new Date(next)) : null;
    const daysBefore = firstDay.dayOfWeek;
    const daysAfter = 6 - lastDay.dayOfWeek; // "6" is the index of the 7th day of the week;
    const allDays = this.getRange(firstDay.dayNumber, lastDay.dayNumber + 1);
    const previousDays = previousMonth && daysBefore > 0 ? previousMonth.allDays.slice(daysBefore * -1) : [];
    const nextDays = this.getRange(1, daysAfter + 1);

    /* TODO: apply 'display day type' to Day. instead of creating DisplayDays, this should generate actual Day objects */
    let type: DisplayDayType = 'previous';
    const displayDays: DisplayDay[] = previousDays.concat(allDays, nextDays).map((day: number) => {
      if (day === 1 && type === 'current') {
        type = 'next';
      }
      if (day === 1 && type === 'previous') {
        type = 'current';
      }
      return {
        number: day,
        type: type,
        isToday: type === 'current' && this.now.getDate() === day
      };
    });

    let counter = 0;
    const displayWeeks: DisplayDay[][] = [];
    let tempWeek: DisplayDay[] = [];
    displayDays.forEach((day: DisplayDay) => {
      counter++;
      tempWeek.push(day);
      if (counter === 7) {
        counter = 0;
        displayWeeks.push(tempWeek);
        tempWeek = [];
      }
    });

    return {
      month: month,
      monthName: date.toString().split(' ')[1],
      year: year,
      firstDay: firstDay,
      lastDay: lastDay,
      daysBefore: daysBefore,
      daysAfter: daysAfter,
      previousMonth: previousMonth,
      nextMonth: nextMonth,
      allDays: allDays,
      previousDays: previousDays,
      nextDays: nextDays,
      displayDays: displayDays,
      displayWeeks: displayWeeks
    };
  }

  private getRange(start: number, end: number) {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
  }

  generateDays(): DayTitle[] {
    const week = [];
    const current = new Date();
    const first = current.getDate() - current.getDay();
    current.setDate(first);
    for (let i = 0; i < 7; i++) {
      week.push({
        name: new Date(+current).toString().split(' ')[0],
        fullName: this.getFullDayName(new Date(+current).toString().split(' ')[0]) as DayNames
      });
      current.setDate(current.getDate() + 1);
    }
    return week;
  }

  getFullDayName (name: string) {
    switch (name) {
      case 'Mon':
        return 'Monday';
      case 'Tue':
        return 'Tuesday';
      case 'Wed':
        return 'Wednesday';
      case 'Thu':
        return 'Thursday';
      case 'Fri':
        return 'Friday';
      case 'Sat':
        return 'Saturday';
      default:
        return 'Sunday';
    }
  }

  previous() {
    this.move('previous');
  }

  next() {
    this.move('next');
  }

  move(direction: Direction): void {
    if (this.mode === 'month') {
      // change month
      const newMonth: string = this.checkMonth(this.currentMonth.month, this.currentMonth.year, direction);
      this.currentMonth = this.generateMonth(new Date(newMonth), true);
      // change week
      this.currentWeek = this.generateWeek(new Date(this.currentMonth.month + 1 + '/1/' + this.currentMonth.year), true);
    } else {
      if (this.currentWeek.nextWeek && this.currentWeek.previousWeek) {
        // change month
        this.currentMonth = this.generateMonth(this.currentWeek.nextWeek.days[0].full, true);
        // change week
        if (direction === 'next') {
          this.currentWeek = this.generateWeek(this.currentWeek.nextWeek.days[0].full, true);
        } else {
          this.currentWeek = this.generateWeek(this.currentWeek.previousWeek.days[0].full, true);
        }
      }
    }
    this.requestUpdate();
  }

  checkMonth(month: number, year: number, direction: Direction): string {
    if (direction === 'next') {
      return month === 11 ? '1/1/' + (year + 1) : month + 2 + '/1/' + year;
    } else {
      return month === 0 ? '12/1/' + (year - 1) : month + '/1/' + year;
    }
  }

  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'calendar': Calendar;
  }
}
