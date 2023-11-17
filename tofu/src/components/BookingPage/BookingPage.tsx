import About from "./About";
import Booking from "./Booking";

export interface TripData {
  departureStation: string;
  arrivalStation: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
}

const BookingPage = () => {
  return (
    <>
      <br />

      <main className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7 col-md">
            <Booking />
          </div>
          <div className="col-xl-4 col-lg-5 col-md">
            <About />
          </div>
        </div>
      </main>
    </>
  );
};

export default BookingPage;
