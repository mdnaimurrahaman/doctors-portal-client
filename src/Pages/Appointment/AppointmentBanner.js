import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import bg from "../../assets/images/bg.png";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url(${bg})`,
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img style={{ width: 594 }} src={chair} alt="" />
        <div className="lg:mr-20 mr-0 shadow-xl rounded-xl">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
