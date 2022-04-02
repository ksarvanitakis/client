import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} 
    onChange={(date:Date) => setStartDate(date)}
    minDate = { new Date() } 
    isClearable 
    showYearDropdown
    scrollableMonthYearDropdown 
    showTimeSelect/>
  );
};

export default Calendar;
