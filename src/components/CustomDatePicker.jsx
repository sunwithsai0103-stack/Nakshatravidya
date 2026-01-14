import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Clock } from 'lucide-react';

const CustomInput = forwardRef(({ value, onClick, className }, ref) => (
    <button onClick={onClick} ref={ref} className={`premium-button flex-1 min-w-[220px] justify-between ${className}`}>
        <div className="flex items-center gap-2">
            <Calendar size={18} className="text-secondary" />
            <span className="font-mono text-sm">{value}</span>
        </div>
        <Clock size={14} className="text-secondary/50" />
    </button>
));

const CustomDatePicker = ({ selectedDate, onChange }) => {
    return (
        <DatePicker
            selected={selectedDate}
            onChange={onChange}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            customInput={<CustomInput />}
            calendarClassName="glass-datepicker high-level-picker"
            popperClassName="glass-popper"
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            withPortal // Full screen portal mode for "High Level" feel
            portalId="root"
        />
    );
};

export default CustomDatePicker;
