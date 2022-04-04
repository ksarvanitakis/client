import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// const unavailableDates = ["", "2022-04-07", "2022-04-20"];



// const Calendar = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(null);
//   const onChange = (dates) => {
//     const [start, end] = dates;
//     setStartDate(start);
//     setEndDate(end);
//   };
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={onChange}
//       startDate={startDate}
//       endDate={endDate}
//       selectsRange
//       inline
//     />
//   );
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookedDates, setBookedDates] = useState([])

  const bookedDates = (date) => {
    const exclDates = date !== new Date().toString() //(2*24*60*60*1000)
    console.log(exclDates)
    return ( exclDates)
  }

  return (
    <DatePicker selected={selectedDate}
      filterDate = {bookedDates}
      onChange={(date) => setSelectedDate(date)}
      minDate={new Date()}
      // maxDate={}
      // isClearable
      showYearDropdown
      scrollableMonthYearDropdown
      // showTimeSelect
      // selectsStart
      // selectsEnd
      dateFormat="yyyy MM dd"
      inline
    />

export default Calendar;