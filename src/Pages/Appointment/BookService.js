import React from "react";

const BookService = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
  // console.log(service)
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div className="card-body">
        <h2 className="text-xl text-secondary font-bold">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No slots Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <p><small>Price: ${price}</small></p>
        <div className="card-actions justify-center">
          <label
            htmlFor="booking-modal"
            onClick={() => setTreatment(service)}
            disabled={slots.length === 0}
            className="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white border-0"
          >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookService;
