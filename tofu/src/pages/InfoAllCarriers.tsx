import { useState } from "react";
import "./info-allcarriers.css";
import "bootstrap/dist/css/bootstrap.css";
import { Pagination } from "./Utils/Pagination";
import { useGetAllCarriersQuery } from "../services/carrierApi";

export const InfoAllCarriers = () => {
  const { data: infoCarriers = [] } = useGetAllCarriersQuery();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [carrierPerPage] = useState(3);
  const [carrierList, setCarriersList] = useState(infoCarriers);
  //const [totalPages, setTotalPages] = useState(
    //Math.ceil(carrierList.length / 3) ?? 1);

  const handleSearch = () => {
    setCurrentPage(1);
    const findCarrier =
      carrierList && carrierList?.length > 0
        ? carrierList.filter((c) =>
            c?.title.toLowerCase().startsWith(search.toLowerCase())
          )
        : undefined;
    setCarriersList(findCarrier ?? []);
  };

  const indexOflastCarrier: number = currentPage * carrierPerPage;
  const indexOfFirstCarrier: number = indexOflastCarrier - carrierPerPage;
  const lastItem =
    carrierPerPage * currentPage <= infoCarriers.length
      ? carrierPerPage * currentPage
      : infoCarriers.length;

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  //const limitedData = infoCarriers.slice(indexOfFirstCarrier, lastItem);

  return (
    <>
      <div>
        <div>
          <div className=" container">
            <div className="mt-5 input-group w-50">
              <input
                type="search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setCarriersList(infoCarriers);
                }}
                className="form-control rounded"
                placeholder="Search"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="btn btn-outline-primary"
              >
                Search
              </button>
            </div>
            <div className="m-1 mt-3 mb-3">
              <h5>Number of results: {carrierList?.length}</h5>
              <p>
                {indexOfFirstCarrier + 1} to {lastItem} of {carrierList?.length}{" "}
                items:
              </p>
            </div>
          </div>
        </div>
        {
          infoCarriers?.map((carrier) => {
            return (
              <div className="d-block ">
                <div className="m-5 mb-0 mt-1 rounded-3">
                  <div className="container-fluid py-2 border rounded-3 shadow p-3 mb-5 bg-body rounded">
                    <div className="row">
                      <div className="col-md-4 offset-md-1 mx-3 my-3">
                        <div className="view overlay">
                          <img
                            src={`data:image/png;base64,${carrier.image}`}
                            className="img-fluid"
                            alt="Bus image"
                          />
                          <a>
                            <div className="mask rgba-white-slight"></div>
                          </a>
                        </div>
                      </div>
                      <div className="col-md-6 text-md-left ml-3 mt-3">
                        <h1 className="display-5 fw-bold">{carrier.title}</h1>
                        <p className="col-md-12 fs-4">{carrier.description}</p>
                      </div>
                      <div className="col">
                        <button
                          className="btn btn-primary btn-lg"
                          type="button"
                        >
                          View details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        {carrierList && carrierList.length === 0 && (
          <div className="notFound">No carrier found</div>
        )}
        {/*totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            paginate={paginate}
          />
        )*/}
      </div>
      <div className="container"></div>
    </>
  );
};
