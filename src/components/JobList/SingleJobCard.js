import React from 'react'
import './singlejob.css'
import { FaTrash,FaPen,FaEye } from 'react-icons/fa'
function SingleJobCard({data}) {
    console.log(data,data.interview[0])
    return (
        <div className="offset-md-1 col-md-10">
            <div className="card d_flex m_10">
                <div className="row">
                    <div className="col-md-2">
                       <div className="company_logo">
                           <div style={{width:'200px',height:'180px',background:'gray'}}></div>
                       </div>
                    </div>
                    <div className="col-md-7">
                        <div className="job_desc">
                            <h5><u>{data.company_name}</u></h5>
                            <p className="desg">{data.position}</p>
                            <p><b>CTC</b> - 20 LPA(15 base + 5 Esop)</p>
                            <p><b>PPT Date</b> : {data.ppt}</p>
                            <p><b>Test Date</b> : {data.test}</p>
                            <p><b>Interview Date</b> : {data.interview[0]} - {data.interview[1]}</p>
                        </div>
                    </div>
                    <div className="col-md-3 btn_container d-flex  align_items_center">
                        <div className="">
                        <button className="btn btn-outline-primary mr_10 "><FaEye/></button>
                        <button className="btn btn-outline-warning mr_10 "><FaPen/></button>
                        <button className="btn btn-outline-danger "><FaTrash/></button>
                        <div className="deadline">
                            <p>{data.deadline[0]}({data.deadline[1]})</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleJobCard
