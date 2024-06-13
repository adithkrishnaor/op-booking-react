import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBooking = () => {

    const [data, setData] = useState([])
    const fetchdata = () => {
        axios.get("http://localhost:8080/view").then(
            (response) => {
                setData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error)
                alert(error.message)
            }
        )
    }
    useEffect(() => { fetchdata() }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <center>
                        <br /> <h3> View All </h3> <br />
                    </center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table  table-striped  table-hover">
                            <thead>
                                <tr class="table-secondary">
                                    <th scope="col">#</th>
                                    <th scope="col">Patient Name</th>
                                    <th scope="col">Dr. Name</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Slot</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value, index) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{value.pname}</td>
                                                    <td>{value.drname}</td>
                                                    <td>{value.date}</td>
                                                    <td>{value.slot}</td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewBooking