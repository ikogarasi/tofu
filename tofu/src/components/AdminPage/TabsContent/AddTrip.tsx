const AddTrip = () => {
  return (
    <form method="POST">
      <div className="form-group row pb-3 mb-2">
        <label
          className="text-dark fw-bold col-sm-2 col-form-label"
          htmlFor="select-route"
        >
          Route name*
        </label>
        <div className="col-sm-10">
          <select className="form-select" id="select-route" required>
            <option disabled selected>
              Select option
            </option>
          </select>
        </div>
      </div>

      <div className="form-group row pb-3 mb-2">
        <label
          className="text-dark fw-bold col-sm-2 col-form-label"
          htmlFor="input-startdate"
        >
          Start date*
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type="datetime-local"
            id="input-startdate"
            required
          />
        </div>
      </div>

      <div className="form-group row pb-3 mb-2">
        <label
          className="text-dark fw-bold col-sm-2 col-form-label"
          htmlFor="input-enddate"
        >
          End date*
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            type="datetime-local"
            id="input-enddate"
            required
          />
        </div>
      </div>

      <div className="form-group row pb-3 mb-2">
        <label
          className="text-dark fw-bold col-sm-2 col-form-label"
          htmlFor="select-carrier"
        >
          Carrier name*
        </label>
        <div className="col-sm-10">
          <select className="form-select" id="select-carrier" required>
            <option disabled selected>
              Select option
            </option>
          </select>
        </div>
      </div>

      <div className="row pb-3 mb-2">
        <div className="col d-flex justify-content-center">
          <div className="form-group row">
            <label
              className="text-dark fw-bold col-3 col-form-label"
              htmlFor="input-price"
            >
              Price*
            </label>
            <div className="col">
              <input
                className="form-control"
                type="text"
                id="input-price"
                required
              />
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div className="form-group row">
            <label
              className="text-dark fw-bold col-3 col-form-label"
              htmlFor="input-quantity"
            >
              Count*
            </label>
            <div className="col">
              <input
                className="form-control"
                type="number"
                id="input-quantity"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-3">
        <div className="d-flex justify-content-end gap-1">
          <button className="btn btn-primary" style={{ width: "150px" }}>
            Reset
          </button>
          <button
            className="btn btn-success"
            type="submit"
            style={{ width: "150px" }}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTrip;
