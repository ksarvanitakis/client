import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setSelectedDate } from '../../features/cart/cartSlice'
import { useDispatch } from "react-redux";
const baseUrl = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

interface CalendarProps {
  chef: Chef
}

async function postBooking(name: string, data = {}) {
  const response = await fetch(`${baseUrl}/chefs/${name}`, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
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
      <button onClick={e => {
        postBooking(chef.name, { selectedDate })
      }
      }>Book date</button>
    </>
  );
}
export default Calendar;