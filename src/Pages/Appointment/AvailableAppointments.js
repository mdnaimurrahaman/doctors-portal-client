import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookService from './BookService';

const AvailableAppointments = ({date}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState([]);
    
    const formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
        .then(data => {
            setServices(data)
            console.log(data)
        });
    }, [])
    return (
        <div>
            <h4 className='text-center text-xl text-secondary mt-5'>Available Appointments on {format(date,'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
                {
                    services.map(service => <BookService key={service._id} service={service} setTreatment={setTreatment}></BookService>)
                }
                {
                    treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;