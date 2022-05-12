import React from "react";
import Banner from "./Banner";
import ContactsUs from "./ContactsUs";
import Footer from "./Footer";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import SecondBanner from "./SecondBanner";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div class="container mx-auto ">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <SecondBanner></SecondBanner>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <ContactsUs></ContactsUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
