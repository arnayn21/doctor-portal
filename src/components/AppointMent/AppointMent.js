import React, { useState } from 'react';
import './AppointMent.css'
import DateFix from '../DateFix/DateFix';
import ServiceList from '../ServiceList/ServiceList';

const AppointMent = () => {
    const [date, setDate] = useState(new Date())
    
    const handleDate = d => {
        setDate(d)
    }

    
    return (
        <div className='container'>
            <h1 className="text-info">Appointment</h1>
            
            <DateFix date={date} handleDate={handleDate}></DateFix>
            
            <ServiceList date={date}></ServiceList>
        </div>
    );
};

export default AppointMent;