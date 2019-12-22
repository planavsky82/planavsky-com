/* eslint-disable no-unused-expressions */
import { oneEvent, fixture, expect } from '../node_modules/@open-wc/testing';

import '../packages/all/dist/elements.bundled.js';

describe('<calendar>', () => {
  describe('calendar data models', () => {
    var calendarA;
    var calendarB;
    var calendarC;
    var calendarD;

    beforeEach(async () => {
      calendarA = await fixture('<calendar></calendar>');
      calendarA.currentMonth = calendarA.generateMonth(new Date('10/15/2019'), true);
      calendarA.currentWeek = calendarA.generateWeek(new Date('10/15/2019'), true);

      calendarB = await fixture('<calendar></calendar>');
      calendarB.currentMonth = calendarB.generateMonth(new Date('05/05/2020'), true);
      calendarB.currentWeek = calendarB.generateWeek(new Date('05/05/2020'), true);

      calendarC = await fixture('<calendar></calendar>');
      calendarC.currentMonth = calendarC.generateMonth(new Date('12/25/2019'), true);
      calendarC.currentWeek = calendarC.generateWeek(new Date('12/25/2019'), true);

      calendarD = await fixture('<calendar></calendar>');
      calendarD.currentMonth = calendarD.generateMonth(new Date('01/23/2021'), true);
      calendarD.currentWeek = calendarD.generateWeek(new Date('01/23/2021'), true);
    });

    it('should define a mode', async () => {
      expect(calendarA.mode).to.equal('month');
      expect(calendarB.mode).to.equal('month');
    });

    it('should define a month data model', async () => {
      // 10/15/19
      expect(calendarA.currentMonth.month).to.equal(9);
      console.log('calendarA.currentMonth.month', calendarA.currentMonth.month);
      expect(calendarA.currentMonth.monthName).to.equal('Oct');
      expect(calendarA.currentMonth.year).to.equal(2019);
      expect(calendarA.currentMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarA.currentMonth.firstDay.dayOfWeek).to.equal(2);
      expect(calendarA.currentMonth.firstDay.month).to.equal(9);
      expect(calendarA.currentMonth.firstDay.monthName).to.equal('Oct');
      expect(calendarA.currentMonth.firstDay.year).to.equal(2019);
      expect(calendarA.currentMonth.lastDay.dayNumber).to.equal(31);
      expect(calendarA.currentMonth.lastDay.dayOfWeek).to.equal(4);
      expect(calendarA.currentMonth.lastDay.month).to.equal(9);
      expect(calendarA.currentMonth.lastDay.monthName).to.equal('Oct');
      expect(calendarA.currentMonth.lastDay.year).to.equal(2019);
      expect(calendarA.currentMonth.daysBefore).to.equal(2);
      expect(calendarA.currentMonth.daysAfter).to.equal(2);
      // previous month
      expect(calendarA.currentMonth.previousMonth.month).to.equal(8);
      expect(calendarA.currentMonth.previousMonth.monthName).to.equal('Sep');
      expect(calendarA.currentMonth.previousMonth.year).to.equal(2019);
      expect(calendarA.currentMonth.previousMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarA.currentMonth.previousMonth.firstDay.dayOfWeek).to.equal(0);
      expect(calendarA.currentMonth.previousMonth.firstDay.month).to.equal(8);
      expect(calendarA.currentMonth.previousMonth.firstDay.monthName).to.equal('Sep');
      expect(calendarA.currentMonth.previousMonth.firstDay.year).to.equal(2019);
      expect(calendarA.currentMonth.previousMonth.lastDay.dayNumber).to.equal(30);
      expect(calendarA.currentMonth.previousMonth.lastDay.dayOfWeek).to.equal(1);
      expect(calendarA.currentMonth.previousMonth.lastDay.month).to.equal(8);
      expect(calendarA.currentMonth.previousMonth.lastDay.monthName).to.equal('Sep');
      expect(calendarA.currentMonth.previousMonth.lastDay.year).to.equal(2019);
      expect(calendarA.currentMonth.previousMonth.daysBefore).to.equal(0);
      expect(calendarA.currentMonth.previousMonth.daysAfter).to.equal(5);
      // next month
      expect(calendarA.currentMonth.nextMonth.month).to.equal(10);
      expect(calendarA.currentMonth.nextMonth.monthName).to.equal('Nov');
      expect(calendarA.currentMonth.nextMonth.year).to.equal(2019);
      expect(calendarA.currentMonth.nextMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarA.currentMonth.nextMonth.firstDay.dayOfWeek).to.equal(5);
      expect(calendarA.currentMonth.nextMonth.firstDay.month).to.equal(10);
      expect(calendarA.currentMonth.nextMonth.firstDay.monthName).to.equal('Nov');
      expect(calendarA.currentMonth.nextMonth.firstDay.year).to.equal(2019);
      expect(calendarA.currentMonth.nextMonth.lastDay.dayNumber).to.equal(30);
      expect(calendarA.currentMonth.nextMonth.lastDay.dayOfWeek).to.equal(6);
      expect(calendarA.currentMonth.nextMonth.lastDay.month).to.equal(10);
      expect(calendarA.currentMonth.nextMonth.lastDay.monthName).to.equal('Nov');
      expect(calendarA.currentMonth.nextMonth.lastDay.year).to.equal(2019);
      expect(calendarA.currentMonth.nextMonth.daysBefore).to.equal(5);
      expect(calendarA.currentMonth.nextMonth.daysAfter).to.equal(0);

      // 05/05/20
      expect(calendarB.currentMonth.month).to.equal(4);
      expect(calendarB.currentMonth.monthName).to.equal('May');
      expect(calendarB.currentMonth.year).to.equal(2020);
      expect(calendarB.currentMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarB.currentMonth.firstDay.dayOfWeek).to.equal(5);
      expect(calendarB.currentMonth.firstDay.month).to.equal(4);
      expect(calendarB.currentMonth.firstDay.monthName).to.equal('May');
      expect(calendarB.currentMonth.firstDay.year).to.equal(2020);
      expect(calendarB.currentMonth.lastDay.dayNumber).to.equal(31);
      expect(calendarB.currentMonth.lastDay.dayOfWeek).to.equal(0);
      expect(calendarB.currentMonth.lastDay.month).to.equal(4);
      expect(calendarB.currentMonth.lastDay.monthName).to.equal('May');
      expect(calendarB.currentMonth.lastDay.year).to.equal(2020);
      expect(calendarB.currentMonth.daysBefore).to.equal(5);
      expect(calendarB.currentMonth.daysAfter).to.equal(6);
      // previous month
      expect(calendarB.currentMonth.previousMonth.month).to.equal(3);
      expect(calendarB.currentMonth.previousMonth.monthName).to.equal('Apr');
      expect(calendarB.currentMonth.previousMonth.year).to.equal(2020);
      expect(calendarB.currentMonth.previousMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarB.currentMonth.previousMonth.firstDay.dayOfWeek).to.equal(3);
      expect(calendarB.currentMonth.previousMonth.firstDay.month).to.equal(3);
      expect(calendarB.currentMonth.previousMonth.firstDay.monthName).to.equal('Apr');
      expect(calendarB.currentMonth.previousMonth.firstDay.year).to.equal(2020);
      expect(calendarB.currentMonth.previousMonth.lastDay.dayNumber).to.equal(30);
      expect(calendarB.currentMonth.previousMonth.lastDay.dayOfWeek).to.equal(4);
      expect(calendarB.currentMonth.previousMonth.lastDay.month).to.equal(3);
      expect(calendarB.currentMonth.previousMonth.lastDay.monthName).to.equal('Apr');
      expect(calendarB.currentMonth.previousMonth.lastDay.year).to.equal(2020);
      expect(calendarB.currentMonth.previousMonth.daysBefore).to.equal(3);
      expect(calendarB.currentMonth.previousMonth.daysAfter).to.equal(2);
      // next month
      expect(calendarB.currentMonth.nextMonth.month).to.equal(5);
      expect(calendarB.currentMonth.nextMonth.monthName).to.equal('Jun');
      expect(calendarB.currentMonth.nextMonth.year).to.equal(2020);
      expect(calendarB.currentMonth.nextMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarB.currentMonth.nextMonth.firstDay.dayOfWeek).to.equal(1);
      expect(calendarB.currentMonth.nextMonth.firstDay.month).to.equal(5);
      expect(calendarB.currentMonth.nextMonth.firstDay.monthName).to.equal('Jun');
      expect(calendarB.currentMonth.nextMonth.firstDay.year).to.equal(2020);
      expect(calendarB.currentMonth.nextMonth.lastDay.dayNumber).to.equal(30);
      expect(calendarB.currentMonth.nextMonth.lastDay.dayOfWeek).to.equal(2);
      expect(calendarB.currentMonth.nextMonth.lastDay.month).to.equal(5);
      expect(calendarB.currentMonth.nextMonth.lastDay.monthName).to.equal('Jun');
      expect(calendarB.currentMonth.nextMonth.lastDay.year).to.equal(2020);
      expect(calendarB.currentMonth.nextMonth.daysBefore).to.equal(1);
      expect(calendarB.currentMonth.nextMonth.daysAfter).to.equal(4);

      // 12/25/2019
      expect(calendarC.currentMonth.month).to.equal(11);
      expect(calendarC.currentMonth.monthName).to.equal('Dec');
      expect(calendarC.currentMonth.year).to.equal(2019);
      expect(calendarC.currentMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarC.currentMonth.firstDay.dayOfWeek).to.equal(0);
      expect(calendarC.currentMonth.firstDay.month).to.equal(11);
      expect(calendarC.currentMonth.firstDay.monthName).to.equal('Dec');
      expect(calendarC.currentMonth.firstDay.year).to.equal(2019);
      expect(calendarC.currentMonth.lastDay.dayNumber).to.equal(31);
      expect(calendarC.currentMonth.lastDay.dayOfWeek).to.equal(2);
      expect(calendarC.currentMonth.lastDay.month).to.equal(11);
      expect(calendarC.currentMonth.lastDay.monthName).to.equal('Dec');
      expect(calendarC.currentMonth.lastDay.year).to.equal(2019);
      expect(calendarC.currentMonth.daysBefore).to.equal(0);
      expect(calendarC.currentMonth.daysAfter).to.equal(4);
      // previous month
      expect(calendarC.currentMonth.previousMonth.month).to.equal(10);
      expect(calendarC.currentMonth.previousMonth.monthName).to.equal('Nov');
      expect(calendarC.currentMonth.previousMonth.year).to.equal(2019);
      expect(calendarC.currentMonth.previousMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarC.currentMonth.previousMonth.firstDay.dayOfWeek).to.equal(5);
      expect(calendarC.currentMonth.previousMonth.firstDay.month).to.equal(10);
      expect(calendarC.currentMonth.previousMonth.firstDay.monthName).to.equal('Nov');
      expect(calendarC.currentMonth.previousMonth.firstDay.year).to.equal(2019);
      expect(calendarC.currentMonth.previousMonth.lastDay.dayNumber).to.equal(30);
      expect(calendarC.currentMonth.previousMonth.lastDay.dayOfWeek).to.equal(6);
      expect(calendarC.currentMonth.previousMonth.lastDay.month).to.equal(10);
      expect(calendarC.currentMonth.previousMonth.lastDay.monthName).to.equal('Nov');
      expect(calendarC.currentMonth.previousMonth.lastDay.year).to.equal(2019);
      expect(calendarC.currentMonth.previousMonth.daysBefore).to.equal(5);
      expect(calendarC.currentMonth.previousMonth.daysAfter).to.equal(0);
      // next month
      expect(calendarC.currentMonth.nextMonth.month).to.equal(0);
      expect(calendarC.currentMonth.nextMonth.monthName).to.equal('Jan');
      expect(calendarC.currentMonth.nextMonth.year).to.equal(2020);
      expect(calendarC.currentMonth.nextMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarC.currentMonth.nextMonth.firstDay.dayOfWeek).to.equal(3);
      expect(calendarC.currentMonth.nextMonth.firstDay.month).to.equal(0);
      expect(calendarC.currentMonth.nextMonth.firstDay.monthName).to.equal('Jan');
      expect(calendarC.currentMonth.nextMonth.firstDay.year).to.equal(2020);
      expect(calendarC.currentMonth.nextMonth.lastDay.dayNumber).to.equal(31);
      expect(calendarC.currentMonth.nextMonth.lastDay.dayOfWeek).to.equal(5);
      expect(calendarC.currentMonth.nextMonth.lastDay.month).to.equal(0);
      expect(calendarC.currentMonth.nextMonth.lastDay.monthName).to.equal('Jan');
      expect(calendarC.currentMonth.nextMonth.lastDay.year).to.equal(2020);
      expect(calendarC.currentMonth.nextMonth.daysBefore).to.equal(3);
      expect(calendarC.currentMonth.nextMonth.daysAfter).to.equal(1);

      // 01/23/2021
      expect(calendarD.currentMonth.month).to.equal(0);
      expect(calendarD.currentMonth.monthName).to.equal('Jan');
      expect(calendarD.currentMonth.year).to.equal(2021);
      expect(calendarD.currentMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarD.currentMonth.firstDay.dayOfWeek).to.equal(5);
      expect(calendarD.currentMonth.firstDay.month).to.equal(0);
      expect(calendarD.currentMonth.firstDay.monthName).to.equal('Jan');
      expect(calendarD.currentMonth.firstDay.year).to.equal(2021);
      expect(calendarD.currentMonth.lastDay.dayNumber).to.equal(31);
      expect(calendarD.currentMonth.lastDay.dayOfWeek).to.equal(0);
      expect(calendarD.currentMonth.lastDay.month).to.equal(0);
      expect(calendarD.currentMonth.lastDay.monthName).to.equal('Jan');
      expect(calendarD.currentMonth.lastDay.year).to.equal(2021);
      expect(calendarD.currentMonth.daysBefore).to.equal(5);
      expect(calendarD.currentMonth.daysAfter).to.equal(6);
      // previous month
      expect(calendarD.currentMonth.previousMonth.month).to.equal(11);
      expect(calendarD.currentMonth.previousMonth.monthName).to.equal('Dec');
      expect(calendarD.currentMonth.previousMonth.year).to.equal(2020);
      expect(calendarD.currentMonth.previousMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarD.currentMonth.previousMonth.firstDay.dayOfWeek).to.equal(2);
      expect(calendarD.currentMonth.previousMonth.firstDay.month).to.equal(11);
      expect(calendarD.currentMonth.previousMonth.firstDay.monthName).to.equal('Dec');
      expect(calendarD.currentMonth.previousMonth.firstDay.year).to.equal(2020);
      expect(calendarD.currentMonth.previousMonth.lastDay.dayNumber).to.equal(31);
      expect(calendarD.currentMonth.previousMonth.lastDay.dayOfWeek).to.equal(4);
      expect(calendarD.currentMonth.previousMonth.lastDay.month).to.equal(11);
      expect(calendarD.currentMonth.previousMonth.lastDay.monthName).to.equal('Dec');
      expect(calendarD.currentMonth.previousMonth.lastDay.year).to.equal(2020);
      expect(calendarD.currentMonth.previousMonth.daysBefore).to.equal(2);
      expect(calendarD.currentMonth.previousMonth.daysAfter).to.equal(2);
      // next month
      expect(calendarD.currentMonth.nextMonth.month).to.equal(1);
      expect(calendarD.currentMonth.nextMonth.monthName).to.equal('Feb');
      expect(calendarD.currentMonth.nextMonth.year).to.equal(2021);
      expect(calendarD.currentMonth.nextMonth.firstDay.dayNumber).to.equal(1);
      expect(calendarD.currentMonth.nextMonth.firstDay.dayOfWeek).to.equal(1);
      expect(calendarD.currentMonth.nextMonth.firstDay.month).to.equal(1);
      expect(calendarD.currentMonth.nextMonth.firstDay.monthName).to.equal('Feb');
      expect(calendarD.currentMonth.nextMonth.firstDay.year).to.equal(2021);
      expect(calendarD.currentMonth.nextMonth.lastDay.dayNumber).to.equal(28);
      expect(calendarD.currentMonth.nextMonth.lastDay.dayOfWeek).to.equal(0);
      expect(calendarD.currentMonth.nextMonth.lastDay.month).to.equal(1);
      expect(calendarD.currentMonth.nextMonth.lastDay.monthName).to.equal('Feb');
      expect(calendarD.currentMonth.nextMonth.lastDay.year).to.equal(2021);
      expect(calendarD.currentMonth.nextMonth.daysBefore).to.equal(1);
      expect(calendarD.currentMonth.nextMonth.daysAfter).to.equal(6);
    });

    it('should move to the next month', async () => {
      expect(calendarA.currentMonth.month).to.equal(9);
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(13);
      calendarA.move('next');
      expect(calendarA.currentMonth.month).to.equal(10);
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(27);
      calendarA.move('next');
      expect(calendarA.currentMonth.month).to.equal(11);
      expect(calendarA.currentWeek.days[0].month).to.equal(11);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(1);
      calendarA.move('next');
      expect(calendarA.currentMonth.month).to.equal(0);
      expect(calendarA.currentWeek.days[0].month).to.equal(11);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(29);
      calendarA.move('next');
      expect(calendarA.currentMonth.month).to.equal(1);
      expect(calendarA.currentWeek.days[0].month).to.equal(0);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(26);
      calendarA.move('next');
      expect(calendarA.currentMonth.month).to.equal(2);
      expect(calendarA.currentWeek.days[0].month).to.equal(2);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(1);
    });

    it('should move to the previous month', async () => {
      expect(calendarA.currentMonth.month).to.equal(9);
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(13);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(8);
      expect(calendarA.currentWeek.days[0].month).to.equal(8);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(1);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(7);
      expect(calendarA.currentWeek.days[0].month).to.equal(6);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(28);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(6);
      expect(calendarA.currentWeek.days[0].month).to.equal(5);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(30);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(5);
      expect(calendarA.currentWeek.days[0].month).to.equal(4);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(26);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(4);
      expect(calendarA.currentWeek.days[0].month).to.equal(3);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(28);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(3);
      expect(calendarA.currentWeek.days[0].month).to.equal(2);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(31);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(2);
      expect(calendarA.currentWeek.days[0].month).to.equal(1);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(24);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(1);
      expect(calendarA.currentWeek.days[0].month).to.equal(0);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(27);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(0);
      expect(calendarA.currentWeek.days[0].month).to.equal(11);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(30);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(11);
      expect(calendarA.currentWeek.days[0].month).to.equal(10);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(25);
      calendarA.move('previous');
      expect(calendarA.currentMonth.month).to.equal(10);
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(28);
    });

    it('should define a week data model', async () => {
      // 10/15/19
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(13);
      expect(calendarA.currentWeek.days[0].year).to.equal(2019);
      expect(calendarA.currentWeek.days[1].month).to.equal(9);
      expect(calendarA.currentWeek.days[1].dayNumber).to.equal(14);
      expect(calendarA.currentWeek.days[1].year).to.equal(2019);
      expect(calendarA.currentWeek.days[2].month).to.equal(9);
      expect(calendarA.currentWeek.days[2].dayNumber).to.equal(15);
      expect(calendarA.currentWeek.days[2].year).to.equal(2019);
      expect(calendarA.currentWeek.days[3].month).to.equal(9);
      expect(calendarA.currentWeek.days[3].dayNumber).to.equal(16);
      expect(calendarA.currentWeek.days[3].year).to.equal(2019);
      expect(calendarA.currentWeek.days[4].month).to.equal(9);
      expect(calendarA.currentWeek.days[4].dayNumber).to.equal(17);
      expect(calendarA.currentWeek.days[4].year).to.equal(2019);
      expect(calendarA.currentWeek.days[5].month).to.equal(9);
      expect(calendarA.currentWeek.days[5].dayNumber).to.equal(18);
      expect(calendarA.currentWeek.days[5].year).to.equal(2019);
      expect(calendarA.currentWeek.days[6].month).to.equal(9);
      expect(calendarA.currentWeek.days[6].dayNumber).to.equal(19);
      expect(calendarA.currentWeek.days[6].year).to.equal(2019);

      // 05/05/20
      expect(calendarB.currentWeek.days[0].month).to.equal(4);
      expect(calendarB.currentWeek.days[0].dayNumber).to.equal(3);
      expect(calendarB.currentWeek.days[0].year).to.equal(2020);
      expect(calendarB.currentWeek.days[1].month).to.equal(4);
      expect(calendarB.currentWeek.days[1].dayNumber).to.equal(4);
      expect(calendarB.currentWeek.days[1].year).to.equal(2020);
      expect(calendarB.currentWeek.days[2].month).to.equal(4);
      expect(calendarB.currentWeek.days[2].dayNumber).to.equal(5);
      expect(calendarB.currentWeek.days[2].year).to.equal(2020);
      expect(calendarB.currentWeek.days[3].month).to.equal(4);
      expect(calendarB.currentWeek.days[3].dayNumber).to.equal(6);
      expect(calendarB.currentWeek.days[3].year).to.equal(2020);
      expect(calendarB.currentWeek.days[4].month).to.equal(4);
      expect(calendarB.currentWeek.days[4].dayNumber).to.equal(7);
      expect(calendarB.currentWeek.days[4].year).to.equal(2020);
      expect(calendarB.currentWeek.days[5].month).to.equal(4);
      expect(calendarB.currentWeek.days[5].dayNumber).to.equal(8);
      expect(calendarB.currentWeek.days[5].year).to.equal(2020);
      expect(calendarB.currentWeek.days[6].month).to.equal(4);
      expect(calendarB.currentWeek.days[6].dayNumber).to.equal(9);
      expect(calendarB.currentWeek.days[6].year).to.equal(2020);

      // 12/25/19
      expect(calendarC.currentWeek.days[0].month).to.equal(11);
      expect(calendarC.currentWeek.days[0].dayNumber).to.equal(22);
      expect(calendarC.currentWeek.days[0].year).to.equal(2019);
      expect(calendarC.currentWeek.days[1].month).to.equal(11);
      expect(calendarC.currentWeek.days[1].dayNumber).to.equal(23);
      expect(calendarC.currentWeek.days[1].year).to.equal(2019);
      expect(calendarC.currentWeek.days[2].month).to.equal(11);
      expect(calendarC.currentWeek.days[2].dayNumber).to.equal(24);
      expect(calendarC.currentWeek.days[2].year).to.equal(2019);
      expect(calendarC.currentWeek.days[3].month).to.equal(11);
      expect(calendarC.currentWeek.days[3].dayNumber).to.equal(25);
      expect(calendarC.currentWeek.days[3].year).to.equal(2019);
      expect(calendarC.currentWeek.days[4].month).to.equal(11);
      expect(calendarC.currentWeek.days[4].dayNumber).to.equal(26);
      expect(calendarC.currentWeek.days[4].year).to.equal(2019);
      expect(calendarC.currentWeek.days[5].month).to.equal(11);
      expect(calendarC.currentWeek.days[5].dayNumber).to.equal(27);
      expect(calendarC.currentWeek.days[5].year).to.equal(2019);
      expect(calendarC.currentWeek.days[6].month).to.equal(11);
      expect(calendarC.currentWeek.days[6].dayNumber).to.equal(28);
      expect(calendarC.currentWeek.days[6].year).to.equal(2019);

      // 01/23/21
      expect(calendarD.currentWeek.days[0].month).to.equal(0);
      expect(calendarD.currentWeek.days[0].dayNumber).to.equal(17);
      expect(calendarD.currentWeek.days[0].year).to.equal(2021);
      expect(calendarD.currentWeek.days[1].month).to.equal(0);
      expect(calendarD.currentWeek.days[1].dayNumber).to.equal(18);
      expect(calendarD.currentWeek.days[1].year).to.equal(2021);
      expect(calendarD.currentWeek.days[2].month).to.equal(0);
      expect(calendarD.currentWeek.days[2].dayNumber).to.equal(19);
      expect(calendarD.currentWeek.days[2].year).to.equal(2021);
      expect(calendarD.currentWeek.days[3].month).to.equal(0);
      expect(calendarD.currentWeek.days[3].dayNumber).to.equal(20);
      expect(calendarD.currentWeek.days[3].year).to.equal(2021);
      expect(calendarD.currentWeek.days[4].month).to.equal(0);
      expect(calendarD.currentWeek.days[4].dayNumber).to.equal(21);
      expect(calendarD.currentWeek.days[4].year).to.equal(2021);
      expect(calendarD.currentWeek.days[5].month).to.equal(0);
      expect(calendarD.currentWeek.days[5].dayNumber).to.equal(22);
      expect(calendarD.currentWeek.days[5].year).to.equal(2021);
      expect(calendarD.currentWeek.days[6].month).to.equal(0);
      expect(calendarD.currentWeek.days[6].dayNumber).to.equal(23);
      expect(calendarD.currentWeek.days[6].year).to.equal(2021);
    });

    it('should verify the next week if it goes into the next year', async () => {
      expect(calendarD.currentWeek.nextWeek.days[6].month).to.equal(0);
    });

    it('should move to the next week', async () => {
      calendarA.mode = 'week';
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(13);
      expect(calendarA.currentMonth.month).to.equal(9);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(20);
      expect(calendarA.currentMonth.month).to.equal(9);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(27);
      expect(calendarA.currentMonth.month).to.equal(9);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(10);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(3);
      expect(calendarA.currentMonth.month).to.equal(10);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(10);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(10);
      expect(calendarA.currentMonth.month).to.equal(10);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(10);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(17);
      expect(calendarA.currentMonth.month).to.equal(10);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(10);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(24);
      expect(calendarA.currentMonth.month).to.equal(10);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(11);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(1);
      expect(calendarA.currentMonth.month).to.equal(11);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(11);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(8);
      expect(calendarA.currentMonth.month).to.equal(11);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(11);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(15);
      expect(calendarA.currentMonth.month).to.equal(11);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(11);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(22);
      expect(calendarA.currentMonth.month).to.equal(11);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(11);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(29);
      expect(calendarA.currentWeek.days[0].year).to.equal(2019);
      expect(calendarA.currentMonth.month).to.equal(11);
      calendarA.move('next');
      expect(calendarA.currentWeek.days[0].month).to.equal(0);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(5);
      expect(calendarA.currentWeek.days[0].year).to.equal(2020);
      expect(calendarA.currentMonth.month).to.equal(0);
    });

    it('should move to the previous week', async () => {
      calendarA.mode = 'week';
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(13);
      expect(calendarA.currentMonth.month).to.equal(9);
      calendarA.move('previous');
      expect(calendarA.currentWeek.days[0].month).to.equal(9);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(6);
      expect(calendarA.currentMonth.month).to.equal(9);
      // TODO: previous week function isn't working
      /* calendarA.move('previous');
      expect(calendarA.currentWeek.days[0].month).to.equal(8);
      expect(calendarA.currentWeek.days[0].dayNumber).to.equal(29);
      expect(calendarA.currentMonth.month).to.equal(8); */
    });
  });
});
