import React from 'react'

const ViewBooking = () => {
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
                            <tr>
                                        <th scope="row">index</th>
                                        <td>patient_1</td>
                                        <td>value.Dr_name_1</td>
                                        <td>date_1</td>
                                        <td>slot_1</td>
                                    </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewBooking