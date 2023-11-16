import Header from "../../components/Header/Header";

export interface Trip {
  departureStation: string;
  arrivalStation: string;
  departureTime: string;
  arrivalTime: string;
  carrier: string;
  price: number;
}

const AdminPage = () => {
  return (
    <>
      <Header />

      <main className="container">
        <ul className="nav nav-tabs mb-3 mt-5" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="addtrip-tab"
              data-bs-toggle="tab"
              data-bs-target="#addtrip"
              type="button"
              role="tab"
              aria-controls="addtrip"
              aria-selected="true"
            >
              Add trip
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="reviewtrips-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviewtrips"
              type="button"
              role="tab"
              aria-controls="reviewtrips"
              aria-selected="false"
            >
              Review all trips
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="addcarrier-tab"
              data-bs-toggle="tab"
              data-bs-target="#addcarrier"
              type="button"
              role="tab"
              aria-controls="addcarrier"
              aria-selected="false"
            >
              Add carrier
            </button>
          </li>
        </ul>
      </main>
    </>
  );
};

export default AdminPage;
