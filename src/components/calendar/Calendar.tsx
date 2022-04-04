import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import "react-datepicker/dist/react-datepicker.css";
import  {setSelectedDate} from '../../features/cart/cartSlice'
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../features/hooks";



const Calendar = () => {
  const [selectedDate, setSelected] = useState(new Date());
  const selectedDate9 = useAppSelector(state=>state.cart.date)
  const [bookedDates, setBookedDates] = useState<any>([]);
  const dispatch = useDispatch();
  console.log(selectedDate9)
  return (
    <>
      <DatePicker selected={selectedDate}
        onChange={(date: Date) =>{ 
          setSelected(date)
          dispatch(setSelectedDate(date.toLocaleDateString()))
        }}
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