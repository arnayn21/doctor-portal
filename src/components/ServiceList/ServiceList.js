import React, { useState, useEffect } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const ServiceList = (props) => {
    const [services, setServices] = useState([])
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [appointmentInfo, setAppointmentInfo] = useState({});
    
    useEffect(()=>{
        fetch('https://salty-woodland-73970.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
            setServices(data)
        })
    },[])


    const openModal = (title,time,startTime) => {
        setAppointmentInfo({title,time,startTime,date: props.date})
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

    
    return (
        <div>
            <h3 className="text-info m-4">
                Available Appointments on {props.date.toLocaleDateString(undefined, options)}
            </h3>
            {/* <button onClick={updateServices}>add services</button> */}
            <div className="row">
                {
                    services.map(el => <div 
                        key={el._id} 
                        className="col-md-4 d-flex justify-content-center">
                        <ServiceInfo
                            title={el.title}
                            time={el.time}
                            startTime={el.startTime}
                            date={props.date}
                            openModal={openModal}
                        ></ServiceInfo>
                    </div>)
                }
            </div>
            <AppointmentForm
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                appointmentInfo={appointmentInfo}
            ></AppointmentForm>
        </div>
    );
};

export default ServiceList;