import { FormEvent, useState } from "react";
import styles from "./BookingPage.module.css";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import validator from "validator";

interface BookingFields {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phoneNumber: boolean;
}

const Booking = () => {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [validFields, setValidFields] = useState<BookingFields>({
    firstName: true,
    lastName: true,
    email: true,
    phoneNumber: true,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const fields: BookingFields = {
      firstName: true,
      lastName: true,
      email: true,
      phoneNumber: true,
    };

    if (!firstName) {
      fields.firstName = false;
    }

    if (!lastName) {
      fields.lastName = false;
    }

    if (!validator.isMobilePhone(phoneNumber)) {
      fields.phoneNumber = false;
    }

    if (!validator.isEmail(email)) {
      fields.email = false;
    }

    setValidFields(fields);
  };

  return (
    <form onSubmit={handleSubmit} noValidate={true}>
      <div className="card pb-3 mb-3">
        <div className="card-body pt-4">
          <h3>Оформлення квитка</h3>
          <div className="row">
            <div className="col-6 mb-3">
              <label className="text-secondary mb-2">Ім'я</label>
              <input
                type="text"
                className={`form-control ${
                  !validFields.firstName && "is-invalid"
                }`}
                placeholder="Іван"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="text-secondary mb-2">Прізвище</label>
              <input
                type="text"
                className={`form-control ${
                  !validFields.lastName && "is-invalid"
                }`}
                placeholder="Хвищун"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-6">
            <p className="text-dark">Місце в автобусі</p>
            <div className="row border border-dark rounded w-100 pt-2 pb-2 ms-1">
              <div className="col-2 text-start">
                <WeekendOutlinedIcon />
              </div>
              <div className="col-8 text-center">
                <span>Вільна розсадка</span>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body ps-0 pt-4">
          <h3 className="ps-3">Інформація про покупця</h3>
          <div className={`${styles["custom-border__left"]} mb-4`}>
            Вказуйте коректні e-mail та номер телефону, тому що вони необхідні
            для ідентифікації користувача, отримання квитка, можливості
            авторизації в особистому кабінеті та можливості повернути квиток
          </div>
          <div className="row ps-3">
            <div className="col-6 mb-3">
              <label className="text-secondary mb-2">Email</label>
              <input
                type="email"
                id="firstNameInput"
                className={`form-control ${!validFields.email && "is-invalid"}`}
                placeholder="xiocompan@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-6">
              <label className="text-secondary mb-2">Телефон</label>
              <input
                type="text"
                id="firstNameInput"
                className={`form-control ${
                  !validFields.phoneNumber && "is-invalid"
                }`}
                placeholder="+380 __ ___ ____"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="ps-3 d-flex justify-content-center row pt-3">
            <button
              //href="https://youtu.be/Jxq5C67fqWs?si=0VmtSMBSESfDu5Ud"
              type="submit"
              className="btn btn-primary fw-bold w-50"
            >
              Забронювати
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Booking;
