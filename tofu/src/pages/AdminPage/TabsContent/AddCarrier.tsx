const AddCarrier = () => {
  return (
    <div className="card">
      <div className="card-header pt-5"></div>
      <div className="card-body">
        <form method="POST">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Carrier's name* </label>
              <input type="text" className="form-control" required />
            </div>
            <div className="col-md-3 mb-3">
              <label className="form-label fw-bold">Upload photo</label>
              <input type="file" className="form-control" />
            </div>
          </div>
          <div className="col-md-12 mb-3">
            <label className="form-label fw-bold">Description*</label>
            <textarea className="form-control" rows={3}>
              {" "}
            </textarea>
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
      </div>
    </div>
  );
};

export default AddCarrier;
