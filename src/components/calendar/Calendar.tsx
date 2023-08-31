import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { CalendarContainer } from "./Calendar.style";
import UpArrow from "../../assets/UpArrow.svg";

export interface Event {
  title: string;
  date: string;
  isComplete?: boolean;
  isNearest?: boolean;
}

interface CalendarProps {
  events: Event[];
  onMonthChange: (month: number) => void;
}

function Calendar({ events, onMonthChange }: CalendarProps) {
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const calendarOptions = {
    plugins: [dayGridPlugin],
    initialView: "dayGridMonth",
    locale: "ko",
    buttonText: {
      today: "오늘",
      month: "월",
    },
    dayCellContent: (args: { dayNumberText: string }) =>
      args.dayNumberText.replace("일", ""),
    headerToolbar: {
      center: "today",
      right: "prev,next",
    },
    titleFormat: (date: { date: { year: number; month: number } }) => {
      const year = date.date.year;
      const month = String(date.date.month + 1).padStart(2, "0");
      return `${year}.${month}`;
    },
    events,
    eventColor: "#3498db",
    eventClassNames: (event: any) => {
      const classes: string[] = [];
      if (event.event.extendedProps.isComplete) {
        classes.push("completed");
      }
      if (event.event.extendedProps.isNearest) {
        classes.push("nearest");
      }
      return classes;
    },

    height: "auto",
    datesSet: (info: { start: { getMonth: () => number } }) => {
      const currentMonth = info.start.getMonth() + 1;
      onMonthChange(currentMonth);
    },
  };
  return (
    <CalendarContainer>
      <div className="calendarTitle">
        <h2>오챌 캘린더</h2>
        <img src={UpArrow} onClick={toggleCalendarVisibility} alt="arrow" />
      </div>
      {isCalendarVisible && (
        <div className="calendarStyle">
          <FullCalendar {...calendarOptions} />
        </div>
      )}
    </CalendarContainer>
  );
}

export default Calendar;
