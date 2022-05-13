import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  console.log(service)
  return (
    <div class="card lg:max-w-lg bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="card-title">{name}</h2>
        <p>{slots.length}</p>
        <div class="card-actions">
          <button class="btn btn-primary">Accept</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
