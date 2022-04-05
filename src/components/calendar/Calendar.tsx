import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setSelectedDate } from '../../features/cart/cartSlice'
import { useDispatch } from "react-redux";

interface CalendarProps {
  chef: Chef
}

const Calendar = ({ chef }: CalendarProps) => {
  const [selectedDate, setSelected] = useState(new Date());
  const dispatch = useDispatch();
  const formattedBookedDates = chef.bookedDates.map(date => {
    return new Date(date)
  })
  return (
    <>
      <DatePicker selected={selectedDate}
        onChange={(date: Date) => {
          setSelected(date)
          dispatch(setSelectedDate(date.toLocaleDateString()))
        }}
        minDate={new Date()}
        excludeDates={formattedBookedDates}
        showYearDropdown
        scrollableMonthYearDropdown
        dateFormat="yyyy MM dd"
        inline
      />
    </>
  );
}
export default Calendar;