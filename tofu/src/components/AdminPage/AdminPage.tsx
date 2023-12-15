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
  const tabsHeaders: TabHeader[] = [
    { title: "Add Carrier", targetName: "addcarrier" },
    { title: "Add Trip", targetName: "addtrip" },
    { title: "Review all trips", targetName: "reviewalltrips" },
  ];

  const tabsBody: TabBody[] = [
    { targetName: "addcarrier", presentation: <AddCarrier /> },
    { targetName: "addtrip", presentation: <AddTrip /> },
    {
      targetName: "reviewalltrips",
      presentation: <ReviewTrips />,
    },
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
