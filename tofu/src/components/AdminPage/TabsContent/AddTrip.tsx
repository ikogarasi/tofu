import { FormEvent, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addTicket } from "../../../store/slices/ticketsSlice";
import { Carrier } from "../../../store/slices/carriersSlice";

const cities: string[] = [
  "Київ",
  "Львів",
  "Харків",
  "Одеса",
  "Дніпро",
  "Житомир",
  "Тернопіль",
  "Вінниця",
];

//const carriers: string[] = ["FlixBus", "FlexBus", "FluxBus", "FlaxBus"];

interface ValidFields {
  routeBegin: boolean;
  routeEnd: boolean;
  startDate: boolean;
  endDate: boolean;
  carriersName: boolean;
  price: boolean;
  count: boolean;
}

const AddTrip = () => {
  const carriers = useAppSelector((state) => state.carriers);

  const [routeBeginName, setRouteBeginName] = useState<string>("");
  const [routeEndName, setRouteEndName] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date(98, 0));
  const [carrierName, setCarrierName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const [matchingCities, setMatchingCities] = useState<string[]>([]);
  const [matchingCarriers, setMatchingCarriers] = useState<Carrier[]>(carriers);

  const [isRbDropdownVisible, setIsRbDropdownVisible] =
    useState<boolean>(false);
  const [isReDropdownVisible, setIsReDropdownVisible] =
    useState<boolean>(false);
  const [isCarDropdownVisible, setIsCarDropdownVisible] =
    useState<boolean>(false);

  const [valid, setValid] = useState<ValidFields>({
    routeBegin: true,
    routeEnd: true,
    startDate: true,
    endDate: true,
    carriersName: true,
    price: true,
    count: true,
  });

  const today = new Date().toISOString().slice(0, 16);

  const dispatch = useAppDispatch();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const fields: ValidFields = {
      routeBegin: true,
      routeEnd: true,
      startDate: true,
      endDate: true,
      carriersName: true,
      price: true,
      count: true,
    };

    if (!routeBeginName) {
      fields.routeBegin = false;
    }

    if (
      !routeEndName ||
      routeEndName.toLowerCase() === routeBeginName?.toLowerCase()
    ) {
      fields.routeEnd = false;
    }

    if (price < 1) {
      fields.price = false;
    }

    if (count < 1 || count > 100) {
      fields.count = false;
    }

    if (!carrierName) {
      fields.carriersName = false;
    }

    if (startDate < new Date()) {
      fields.startDate = false;
    }

    if ((endDate as Date) < startDate) {
      fields.endDate = false;
    }

    if (Object.values(fields).indexOf(false) >= 0) {
      setValid(fields);
    } else {
      dispatch(
        addTicket({
          from: routeBeginName,
          to: routeEndName,
          startDate: startDate,
          endDate: endDate,
          carriersName: carrierName,
          price: price,
          amount: count,
        })
      );
    }
  };

  const handleCitiesInputChange = (inputText: string) => {
    const matchingCities = cities.filter((city) =>
      city.toLowerCase().startsWith(inputText.toLowerCase())
    );

    setMatchingCities(matchingCities);
  };

  const handleCarriersInputChange = (inputText: string) => {
    const matchingCarriers = carriers.filter((carrier) =>
      carrier.name.toLowerCase().startsWith(inputText.toLowerCase())
    );

    setMatchingCarriers(matchingCarriers);
  };

  const handleInputClick = (inputNumber: number) => () => {
    switch (inputNumber) {
      case 0:
        setIsRbDropdownVisible(!isRbDropdownVisible);
        setIsReDropdownVisible(false);
        setIsCarDropdownVisible(false);
        break;
      case 1:
        setIsRbDropdownVisible(false);
        setIsReDropdownVisible(!isReDropdownVisible);
        setIsCarDropdownVisible(false);
        break;
      case 2:
        setIsRbDropdownVisible(false);
        setIsReDropdownVisible(false);
        setIsCarDropdownVisible(!isCarDropdownVisible);
        break;
    }
  };

  const handleDropdownItemClick = (
    selectedValue: string,
    inputNumber: number
  ) => {
    switch (inputNumber) {
      case 0:
        setRouteBeginName(selectedValue);
        setIsRbDropdownVisible(false);
        break;
      case 1:
        setRouteEndName(selectedValue);
        setIsReDropdownVisible(false);
        break;
      case 2:
        setCarrierName(selectedValue);
        setIsCarDropdownVisible(false);
        break;
    }
  };

  const onResetClick = () => {
    setRouteBeginName("");
    setRouteEndName("");
    setStartDate(new Date());
    setEndDate(new Date(98, 0));
    setCarrierName("");
    setPrice(0);
    setCount(0);

    setValid({
      routeBegin: true,
      routeEnd: true,
      startDate: true,
      endDate: true,
      carriersName: true,
      price: true,
      count: true,
    });
  };

  return (
    <form method="POST" onSubmit={onSubmit} noValidate={true}>
      <div className="form-group row pb-3">
        <div className="col-sm-6">
          <div className="row">
            <label className="text-dark fw-bold col-sm-4 col-form-label">
              Route begin*
            </label>
            <div className="col-sm-8 mb-2">
              <input
                className={`form-control ${!valid?.routeBegin && "is-invalid"}`}
                id="input-routebegin"
                value={routeBeginName}
                onChange={(e) => {
                  handleCitiesInputChange(e.target.value);
                  setRouteBeginName(e.target.value);
                }}
                onClick={handleInputClick(0)}
              />
              {matchingCities.length > 0 && (
                <Dropdown show={isRbDropdownVisible}>
                  <Dropdown.Menu>
                    {matchingCities.map((city) => (
                      <Dropdown.Item
                        key={city}
                        onClick={() => handleDropdownItemClick(city, 0)}
                      >
                        {city}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <label className="text-dark fw-bold col-sm-3 col-form-label">
              Route end*
            </label>
            <div className="col-sm-9">
              <input
                className={`form-control ${!valid?.routeEnd && "is-invalid"}`}
                value={routeEndName}
                onChange={(e) => {
                  handleCitiesInputChange(e.target.value);
                  setRouteEndName(e.target.value);
                }}
                onClick={handleInputClick(1)}
              />
              {matchingCities.length > 0 && (
                <Dropdown show={isReDropdownVisible}>
                  <Dropdown.Menu>
                    {matchingCities.map((city) => (
                      <Dropdown.Item
                        key={city}
                        onClick={() => handleDropdownItemClick(city, 1)}
                      >
                        {city}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </div>
          </div>
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
            className={`form-control ${!valid?.startDate && "is-invalid"}`}
            type="datetime-local"
            onChange={(e) => {
              setStartDate(new Date(e.target.value));
            }}
            value={startDate.toISOString().slice(0, 16)}
            min={today}
          />
        </div>
      </div>

      <div className="form-group row pb-3 mb-2">
        <label className="text-dark fw-bold col-sm-2 col-form-label">
          End date*
        </label>
        <div className="col-sm-10">
          <input
            className={`form-control ${!valid?.endDate && "is-invalid"}`}
            type="datetime-local"
            id="input-enddate"
            min={startDate.toISOString().slice(0, 16)}
            onChange={(e) => setEndDate(new Date(e.target.value))}
          />
        </div>
      </div>

      <div className="form-group row pb-3 mb-2">
        <label className="text-dark fw-bold col-sm-2 col-form-label">
          Carrier name*
        </label>
        <div className="col-sm-10">
          <input
            className={`form-control ${!valid?.carriersName && "is-invalid"}`}
            id="select-carrier"
            value={carrierName}
            onChange={(e) => {
              handleCarriersInputChange(e.target.value);
              setCarrierName(e.target.value);
            }}
            onClick={handleInputClick(2)}
          />
          {matchingCarriers.length > 0 && (
            <Dropdown show={isCarDropdownVisible}>
              <Dropdown.Menu>
                {matchingCarriers.map((carrier) => (
                  <Dropdown.Item
                    key={carrier.id}
                    onClick={() => handleDropdownItemClick(carrier.name, 2)}
                  >
                    {carrier.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
        </div>
      </div>

      <div className="row pb-3 mb-2">
        <div className="col d-flex justify-content-center">
          <div className="form-group row">
            <label className="text-dark fw-bold col-3 col-form-label">
              Price*
            </label>
            <div className="col">
              <input
                className={`form-control ${!valid?.price && "is-invalid"}`}
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <div className="form-group row">
            <label className="text-dark fw-bold col-3 col-form-label">
              Count*
            </label>
            <div className="col">
              <input
                className={`form-control ${!valid?.count && "is-invalid"}`}
                type="number"
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                max={100}
                id="input-quantity"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-3">
        <div className="d-flex justify-content-end gap-1">
          <button
            className="btn btn-primary"
            style={{ width: "150px" }}
            onClick={onResetClick}
            type="reset"
          >
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
