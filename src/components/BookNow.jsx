import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const BookNow = () => {
    

    const [data, setData] = useState(
        {
            "pname": "",
            "address": "",
            "date": "",
            "slot": "",
            "blood": "",
            "drname": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/book", data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Success")
                } else {
                    alert("Failed")
                }
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }

    return (
    <div>
        <Navbar />
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
                            <input type="text" className="form-control" name='pname' value={data.pname} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Address
                            </label>
                            <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Date
                            </label>
                            <input type="date" className="form-control" name='date' value={data.date} onChange={inputHandler}/>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Slot
                            </label>
                            <select id="" className="form-control"  name='slot' value={data.slot} onChange={inputHandler}>
                                <option value="Select">Select</option>
                                <option value="Morning">Morning</option>
                                <option value="Evening">Evening</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">
                                Blood Group
                            </label>
                            <select id="" className="form-control" name='blood' value={data.blood} onChange={inputHandler}>
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
                            <select id="" className="form-control" name='drname' value={data.drname} onChange={inputHandler}>
                                <option value="Select">Select</option>
                                <option value="Morning">Dr.Manu</option>
                                <option value="Evening">Dr.Ram</option>
                                <option value="Evening">Dr.George</option>
                            </select>
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <center>
                                <button className="btn btn-success" onClick={readValue}>Book Now</button>
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