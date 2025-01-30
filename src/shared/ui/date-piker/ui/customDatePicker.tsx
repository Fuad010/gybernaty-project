import React, { FC } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledDatePickerInput = styled.input`
  background-color: #30333f;
  height: 42px;
  width: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border-radius: 15px;
  color: #e5e6ee;
  font-size: 14px;
  font-weight: 700;
  border-color: rgba(1, 1, 1, 0);
  outline: none;
  transition: 0.1s linear;

  &::placeholder {
    color: #8e919d;
    font-size: 16px;
    font-weight: 700;
  }

  &:focus {
    border-color: rgba(1, 1, 1, 1);
  }
`;

const DatePickerWrapper = styled.div`
  position: relative;
  width: 100%;
  & .react-datepicker-wrapper{
    width:100%;
  }
  & .react-datepicker-popper{
    transform: translate(0px, 52px) !important; 
  }
`;

export const CustomDatePicker: FC<Props> = ({ value, onChange }) => {
  const handleDateChange = (date: Date | null) => {
    if (date) {
      // Преобразуем дату в строку (ISO формат) и вызываем onChange
      const event = {
        target: {
          value: date.toISOString().split('T')[0],
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  return (
    <DatePickerWrapper>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={handleDateChange}  // Передаем кастомный обработчик
        dateFormat="yyyy-MM-dd"
        customInput={<StyledDatePickerInput />}
      />
    </DatePickerWrapper>
  );
};
