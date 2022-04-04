import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";



const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState<any>([]);

  return (
    <>
      <DatePicker selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        minDate={new Date()}
        excludeDates={bookedDates}
        showYearDropdown
        scrollableMonthYearDropdown
        dateFormat="yyyy MM dd"
        inline
      />
      <button onClick={e => {
        const bookedDatesArray = bookedDates.concat(selectedDate)
        console.log(bookedDatesArray)
        setBookedDates(bookedDatesArray)
      }
      }>Book date</button>
    </>
  );
}
export default Calendar;