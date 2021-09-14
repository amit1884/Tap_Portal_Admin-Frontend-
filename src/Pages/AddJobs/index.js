import React from 'react'
import AddJobsForm from '../../components/Forms/AddJobsForm'

function index() {
    return (
        <div className="d_flex p_20 flex_direction_column">
            <div className="font-lg mb_10">
                <p className="text_center">Add Jobs</p>
            </div>
            <div className="row">
            <AddJobsForm/>
            </div>
        </div>
    )
}

export default index
