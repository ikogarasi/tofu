import Header from "../components/Header"
import  pathPhoto  from './../images/FlixBus.jpg';
import './info-allcarriers.css'
import 'bootstrap/dist/css/bootstrap.css';

export const InfoAllCarriers = () => {

    return(
        <><div>
            <div>
                <div className=" container">
                    <div className="mt-5 input-group w-50">
                        <input type="search" className="form-control rounded" placeholder="Search" />
                        <button type="button" className="btn btn-outline-primary">search</button>
                    </div>
                    <div className="m-1 mt-3 mb-3">
                        <h5>Number of results: 12</h5>
                        <p>
                            1 to 3 of 12
                            items:
                        </p>
                    </div>
                </div>
            </div>

            <div className="d-none d-lg-block">
                <div className="m-5 mb-0 mt-1 rounded-3">
                    <div className="container-fluid py-2 border rounded-3 shadow p-3 mb-5 bg-body rounded">
                
                        <div className="row">
                    
                            <div className="col-md-4 offset-md-1 mx-3 my-3">
                
                                <div className="view overlay">
                                    <img src={pathPhoto} className="img-fluid" alt="Bus image"/>
                                        <a>
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
                            </div>
                            <div className="col-md-6 text-md-left ml-3 mt-3">
                                <h1 className="display-5 fw-bold">FlixBus</h1>
                                <p className="col-md-12 fs-4">Flixmobility GmbH — німецька транспортна компанія, що спеціалізується на організації пасажирських автобусних перевезеннях. Заснована 2013 року в Мюнхені. Станом на 2017 рік, компанія здійснювала рейси на 1400 напрямках у 27 країнах Європи. 2017 FlixBus перевіз 60 млн пасажирів.</p>
                            </div>
                            <div className="col">
                                <button className="btn btn-primary btn-lg" type="button">View details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-lg-none">
                <div className="m-5 mb-0 mt-1 rounded-3">
                    <div className="container-fluid py-2 border rounded-3 shadow p-3 mb-5 bg-body rounded">
                        <div className="row">
                            <div className="col-md-2 offset-md-1 mx-0 my-3">
                                <div className="view overlay">
                                    <img src={pathPhoto} className="img-fluid" alt="Bus image"/>
                                        <a>
                                            <div className="mask rgba-white-slight"></div>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 text-md-left ml-2 mt-3">
                            <h1 className="display-5 fw-bold">FlixBus</h1>
                            <p className="col-md-12 fs-6 cut-text">Flixmobility GmbH — німецька транспортна компанія, що спеціалізується на організації пасажирських автобусних перевезеннях. Заснована 2013 року в Мюнхені. Станом на 2017 рік, компанія здійснювала рейси на 1400 напрямках у 27 країнах Європи. 2017 FlixBus перевіз 60 млн пасажирів.</p>
                        </div>
                        <div className="col">
                            <button className="btn btn-primary btn-lg" type="button">View details</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div><div className="container">
                
            </div></>
    );
}