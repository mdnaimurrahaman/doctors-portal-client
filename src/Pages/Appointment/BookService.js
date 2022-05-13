import React from "react";

const BookService = ({service}) => {
    const {name, slots} = service;
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl text-center">
      <div class="card-body">
        <h2 class="text-xl text-secondary font-bold">{name}</h2>
        <p>{
            slots.length > 0
           ? <span>{slots[0]}</span>
           : <span className="text-red-500">No slots Available</span>
            }</p>
        <p>{slots.length} {slots.length > 1 ? 'spaces': 'space'} Available</p>
        <div class="card-actions justify-center">
          <button disabled={slots.length === 0} class="btn btn-primary uppercase bg-gradient-to-r from-secondary to-primary text-white border-0">Book Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default BookService;