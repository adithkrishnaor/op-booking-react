import React from 'react'
import Navbar from './Navbar'

const Viewdocs = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <center>
                        <br /> <h3> View Doctors </h3> <br />
                    </center>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table  table-striped  table-hover">
                            <thead>
                                <tr class="table-secondary">
                                    <th scope="col">#</th>
                                    <th scope="col">Dr.Name</th>
                                    <th scope="col">Specialization</th>
                                    <th scope="col">Hospital</th>
                                    <th scope="col">Fee</th>
                                    <th scope="col">Book Now</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th scope="row">1</th>
                                    <td>Dr.Manu</td>
                                    <td>Cardiology</td>
                                    <td>AJ Hospital</td>
                                    <td>1000</td>
                                    <td>
                                        <a href="/">Book Now</a>
                                    </td>
                                </tr>
                                <tr>
                                        <th scope="row">2</th>
                                        <td>Dr.Ram</td>
                                        <td>Ortho</td>
                                        <td>KJK Hospital</td>
                                        <td>500</td>
                                        <td>
                                            <a href="http://">Book Now</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Dr.George</td>
                                        <td>Physician</td>
                                        <td>Gvt Hospital</td>
                                        <td>100</td>
                                        <td>
                                            <a href="http://">Book Now</a>
                                        </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewdocs