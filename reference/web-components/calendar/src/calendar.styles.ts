const styles = css`{{default}}`;
const customStyles = css`

  .calendar-wrapper {
    perspective: none;
	  perspective-origin: 0 0;
  }

  .calendar-cube {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
    animation: spin 1s linear;
  }

  .calendar-cube div {
    position: absolute;
    width: 100%;
    min-height: 400px;
    background: rgba(255,255,255,0.1);
    box-shadow: inset 0 0 30px rgba(125,125,125,0.8);
    font-size: 20px;
    text-align: center;
    color: rgba(0,0,0,0.5);
    font-family: sans-serif;
    text-transform: uppercase;
  }

  .back {
    transform: translateZ(-50%) rotateY(180deg);
  }

  .right {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .left {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .top {
    transform: rotateX(-90deg) translateY(-50%);
    transform-origin: top center;
  }

  .bottom {
    transform: rotateX(90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .front {
    transform: translateZ(50%);
  }

  @keyframes spin {
    from { transform: rotateY(0); }
    to { transform: rotateY(90deg); }
  }

  .calendar {
    //max-width: 750px;
    //height: 700px;
    width: 100%;
  }

  .calendar-header {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-weight: 400;
    background: #e4e4e4;
    border: 1px solid #bbb;
    margin-bottom: 2px;
    padding: 0 5px;
  }

  .calendar-header button {
    background: #1a8099;
    color: #fff;
    border: 0;
    font-size: 14px;
    margin: 5px 15px;
    border-radius: 25px;
    padding: 10px 20px;
    cursor: pointer;
  }

  .calendar-days-header {
    display: flex;
    width: 100%;
  }

  .calendar-days-header > div {
    background: #4a4a4a;
    color: #fff;
    border: 1px solid #6a6a6a;
    width: 100%;
    padding: 8px;
  }

  .calendar-week {
    display: flex;
    width: 100%;
  }

  .calendar-day {
    border: 1px solid #6a6a6a;
    width: 100%;
    height: 8em;
    padding: 8px;
    background: #fff;
  }

  .calendar-day.previous, .calendar-day.next {
    color: #888;
    border-color: #888;
  }

  .calendar-day.today {
    background: #89e3f9;
  }

  .calendar-week-view {
    border: 1px solid black;
    background: #fdfcf6;
  }

  .calendar-week-view-day {
    border-bottom: 1px solid black;
    padding: 15px;
  }

  .calendar-week-view-day-title {
    display: flex;
    font-weight: bold;
  }

  .calendar-week-view-day-title div:nth-child(2) {
    margin-left: auto;
  }

  .calendar-week-view-day.previous, .calendar-week-view-day.next {
    color: #888;
    border-bottom: 1px solid #888;
  }

  .calendar-week-view-day.today {
    background: #89e3f9;
  }

  .calendar-week-view-day-content {
    min-height: 70px;
    background: #fff;
    border-top: 1px solid #222;
    border-left: 2px solid #444;
  }
`;

export default [styles, customStyles, lifionTheme];
