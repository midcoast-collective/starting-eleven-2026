"use client";

import { Box, Divider } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const CalendarContainer = styled.div`
  background-color: white;
  border: 1px solid #d1d3db;
  border-radius: 5px;
  text-align: center;
  margin-top: 8px;
  position: absolute;
  z-index: 1000;
`;

const InputContainer = styled.div`
  position: relative;
  padding: 15px 15px 5px 15px;
`;

const DateInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
  border: 1px solid #d1d3db;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const MonthYear = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #6a6e7a;
`;

const CalendarTable = styled.table`
  width: 100%;
  margin-bottom: 10px;
  border-spacing: 0;
`;

const TableHeader = styled.th`
  color: #888;
  font-weight: normal;
  padding: 5px 0;
`;

const TableData = styled.td`
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
  border: 1px solid #d1d3db;
  &:hover {
    border: 1px solid var(--color-black);
  }
  &.selected {
    background-color: #007bff;
    border: 1px solid #007bff;
  }
`;

const CalendarFooter = styled.div`
  font-size: 1rem;
  color: #666;
  padding: 16px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6a6e7a;
  font-weight: bold;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
  background-color: transparent;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
`;

const CardContainer = styled.div`
  background: transparent;
  border: 1px solid #d1d3db;
  margin: 2rem 0;
`;

const TitleBook = styled.p`
  color: var(--color-green);
  margin: unset;
`;

const Hours = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const TimeContainer = styled.div`
  display: flex;
  padding: 0 15px;
  width: 100%;
`;

const TimeInput = styled.select`
  padding: 10px;
  border: 1px solid #d1d3db;
  font-size: 14px;
  width: 50%;
  &:hover {
    color: gray;
  }
`;
const ButtonBook = styled.button`
  width: 100%;
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 7px 15px;
  border: none;
  font-size: 1.5rem;
  margin: 2rem 0;
`;
const LaBookCard = () => {

  const today = new Date();
  const [selectedDate, setSelectedDate] = useState({
    date: null,
    month: null,
    year: null,
  });
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<TableData key={`empty-start-${i}`} />);
    }

    // Fill in the days of the month
    for (let date = 1; date <= daysInMonth; date++) {
      const isSelectedDate =
        selectedDate.date === date &&
        selectedDate.month === currentMonth &&
        selectedDate.year === currentYear;

      calendarDays.push(
        <TableData
          key={date}
          className={isSelectedDate ? "selected" : ""}
          onClick={() => handleDateClick(date)}
        >
          {date}
        </TableData>
      );
    }

    const totalCells = 35;
    const emptyCellsToFill = totalCells - calendarDays.length;

    for (let i = 0; i < emptyCellsToFill; i++) {
      calendarDays.push(<TableData key={`empty-end-${i}`} />);
    }
    const rows = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      rows.push(<tr key={`row-${i}`}>{calendarDays.slice(i, i + 7)}</tr>);
    }

    return rows;
  };

  const handleDateClick = (date) => {
    setSelectedDate({ date, month: currentMonth, year: currentYear });
    setFormattedDate(
      `${monthNames[currentMonth].slice(0, 3)} ${date}, ${currentYear}`
    );
    setCalendarVisible(false);
  };

  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((prev) => prev + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  const goToPrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((prev) => prev - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date();
        time.setHours(hour);
        time.setMinutes(minute);
        const formattedTime = time.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        options.push(
          <option key={`${hour}:${minute}`} value={formattedTime}>
            {formattedTime}
          </option>
        );
      }
    }
    return options;
  };
  return (
    <div>
      <CardContainer>
        <Box
          sx={{
            p: "20px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TitleBook>Add details to view total price</TitleBook>
          <Hours>
            <span style={{ fontSize: "1.2rem" }}>⚡</span> $400–$900{" "}
            <span style={{ fontSize: "1.2rem" }}>/hr</span>
          </Hours>
          <span>4 hr minimum</span>
        </Box>
        <Divider sx={{ width: "100%" }} />
        <InputContainer>
          <h4>Date and time*</h4>
          <DateInput
            readOnly
            value={formattedDate || "Select a date"}
            onClick={() => setCalendarVisible(!calendarVisible)}
          />
          {calendarVisible && (
            <CalendarContainer>
              <CloseButton
                style={{
                  border: "1px solid #e2e3e8",
                  borderRadius: "50%",
                  height: "35px",
                  width: "35px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#fff",
                  color: "#6a6e7a",
                }}
              >
                <span onClick={() => setCalendarVisible(false)}>x</span>
              </CloseButton>
              <CalendarHeader>
                <Button onClick={goToPrevMonth}>&lt;</Button>
                <MonthYear>{`${monthNames[currentMonth]} ${currentYear}`}</MonthYear>
                <Button onClick={goToNextMonth}>&gt;</Button>
              </CalendarHeader>
              <CalendarTable>
                <thead>
                  <tr>
                    <TableHeader>Su</TableHeader>
                    <TableHeader>Mo</TableHeader>
                    <TableHeader>Tu</TableHeader>
                    <TableHeader>We</TableHeader>
                    <TableHeader>Th</TableHeader>
                    <TableHeader>Fr</TableHeader>
                    <TableHeader>Sa</TableHeader>
                  </tr>
                </thead>
                <tbody>{generateCalendarDays()}</tbody>
              </CalendarTable>
              <CalendarFooter>Updated 1 week ago</CalendarFooter>
            </CalendarContainer>
          )}
        </InputContainer>
        <TimeContainer>
          <TimeInput
            id="start-time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          >
            <option value="">start time</option>
            {generateTimeOptions()}
          </TimeInput>

          <TimeInput
            id="end-time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          >
            <option value="">end time</option>
            {generateTimeOptions()}
          </TimeInput>
        </TimeContainer>
        <p style={{ padding: "10px 15px" }}>Extend a day</p>
        <h4 style={{ padding: "5px 15px" }}>Attendees</h4>
        <TimeContainer>
          <TimeInput
            id="end-time"
            style={{ width: "100%" }}
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            Placeholder=">1-25 people"
          >
            <option value="">1 - 25 people</option>
            <option value="">26 - 50 people</option>
            <option value="">51 - 100 people</option>
          </TimeInput>
        </TimeContainer>
        <div style={{ padding: "0 15px" }}>
          <ButtonBook>Book Now</ButtonBook>
          <p>You won’t be charged yet.</p>
          <div>
            <h3>⚡ Instant Book</h3>
            <p style={{padding:"5px 30px"}}>
              After payment, your booking will be instantly confirmed. Free
              cancellation within 24 hours of confirmation.
            </p>
          </div>
        </div>
      </CardContainer>
    </div>
  );
};

export default LaBookCard;
