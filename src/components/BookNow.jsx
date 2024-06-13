import React from 'react'
import Navbar from './Navbar'

const BookNow = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
                <div className="row">
                    <center>
                        <br /><h3>Book Now</h3><br />
                    </center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">
                                    Patient Name
                                </label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">
                                    Address
                                </label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">
                                    Date
                                </label>
                                <input type="date" className="form-control"/>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">
                                    Slot
                                </label>
                                <select id="" className="form-control">
                                    <option value="Select">Select</option>
                                    <option value="Morning">Morning</option>
                                    <option value="Evening">Evening</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">
                                    Blood Group
                                </label>
                                <select id="" className="form-control">
                                    <option value="Select">Select</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B-</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">
                                    Dr Name
                                </label>
                                <select id="" className="form-control">
                                    <option value="Select">Select</option>
                                    <option value="Morning">Dr.Manu</option>
                                    <option value="Evening">Dr.Ram</option>
                                    <option value="Evening">Dr.George</option>
                                </select>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button className="btn btn-success">Book Now</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default BookNow