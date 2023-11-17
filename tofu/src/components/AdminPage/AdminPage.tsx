import Tabs, { TabBody, TabHeader } from "../Tabs/Tabs";
import AddCarrier from "./TabsContent/AddCarrier";
import AddTrip from "./TabsContent/AddTrip";
import ReviewTrips from "./TabsContent/ReviewTrips";

export interface Trip {
  departureStation: string;
  arrivalStation: string;
  departureTime: string;
  arrivalTime: string;
  carrier: string;
  price: number;
}

const AdminPage = () => {
  const trips: Trip[] = [
    {
      departureStation: "Львів (Стрийський автовокзал)",
      arrivalStation: "Київ (головний вокзал)",
      departureTime: "09:50",
      arrivalTime: "09:50",
      carrier: "FlixBus",
      price: 500,
    },
    {
      departureStation: "Львів (Стрийський автовокзал)",
      arrivalStation: "Київ (головний вокзал)",
      departureTime: "09:50",
      arrivalTime: "09:50",
      carrier: "FlixBus",
      price: 500,
    },
  ];

  const tabsHeaders: TabHeader[] = [
    { title: "Add trip", targetName: "addtrip" },
    { title: "Review all trips", targetName: "reviewalltrips" },
    { title: "Add Carrier", targetName: "addcarrier" },
  ];

  const tabsBody: TabBody[] = [
    { targetName: "addtrip", presentation: <AddTrip /> },
    {
      targetName: "reviewalltrips",
      presentation: <ReviewTrips trips={trips} />,
    },
    { targetName: "addcarrier", presentation: <AddCarrier /> },
  ];

  return (
    <>
      <main className="container">
        <Tabs tabBody={tabsBody} tabHeaders={tabsHeaders} />
      </main>
    </>
  );
};

export default AdminPage;
