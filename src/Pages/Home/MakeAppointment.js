import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      class="mb-28 flex justify-center items-center"
    >
      <div class="flex-1 hidden lg:block">
        <img class="mt-[-100px]" src={doctor} alt="" srcset="" />
      </div>
      <div class="flex-1 p-20">
        <h3 class="text-xl text-primary font-bold">Appointment</h3>
        <h3 class="text-3xl my-5 text-white">Make an dAppointment Today</h3>
        <p class="text-white mb-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default MakeAppointment;
