import { FormEvent, useState } from "react";
import { useCreateCarrierMutation } from "../../../services/carrierApi";

const AddCarrier = () => {
  const [carriersName, setCarriersName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const [validCarrierName, setValidCarrierName] = useState<boolean>(true);
  const [addCarrier] = useCreateCarrierMutation();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    setImage(file);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!carriersName) {
      setValidCarrierName(false);
    } else {
      setValidCarrierName(true);
      await addCarrier({
        title: carriersName,
        description: description,
        image: image,
      });
    }
    console.log("ff");
  };

  return (
    <form method="POST" className="card" onSubmit={onSubmit} noValidate={true}>
      <div className="card-header pt-5"></div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label fw-bold">Carrier's name* </label>
            <input
              type="text"
              className={`form-control ${!validCarrierName && "is-invalid"}`}
              onChange={(e) => setCarriersName(e.target.value)}
            />
          </div>
          <div className="col-md-3 mb-3">
            <label className="form-label fw-bold">Upload photo</label>
            <input
              type="file"
              className="form-control"
              accept="image/jpeg, image/png"
              onChange={(e) => handleImageUpload(e)}
            />
          </div>
        </div>
        <div className="col-md-12 mb-3">
          <label className="form-label fw-bold">Description</label>
          <textarea
            className="form-control"
            rows={3}
            onChange={(e) => setDescription(e.target.value)}
          >
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
      </div>
    </form>
  );
};

export default AddCarrier;
