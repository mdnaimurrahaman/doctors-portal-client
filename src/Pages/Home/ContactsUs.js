import React from "react";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const ContactsUs = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="mb-28"
    >
      <div class="card flex-shrink-0 w-full max-w-sm mx-auto">
          <div className=" mt-10 text-center">
              <h3 className="text-xl text-primary">Contact Us</h3>
              <h3 className="text-3xl text-white">Stay connected with us</h3>
          </div>
        <div class="card-body">
          <div class="form-control">
            <input
              type="text"
              placeholder="email address"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-2">
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />

          </div>
          <div class="form-control mt-2">
            <textarea className="" type="textarea"
              placeholder="your messages"
              class="input input-bordered"></textarea>
          </div>
          <div class=" text-center my-6">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsUs;
