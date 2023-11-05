import React from 'react';
import Bookingform from './BookingForm';

const Booking = (props) => {
    return (
        <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} SubmitForm={props.submitForm}/>
    )
};

export default Bookings;