import React from 'react'
import SingleJobCard from '../../components/JobList/SingleJobCard'
import { testJobs} from '../../Utils/constantData'
function index() {
    return (
        <div className="d_flex p_20 flex_direction_column">
            <div className="font-lg mb_10">
                <p className="text_center"><u>All Available Jobs</u></p>
            </div>
            <div className="row">
                <div className="col-md-2 col-sm-12"></div>
                <div className="col-md-4 col-sm-12">
                <form>
                    <select className="form-control">
                        <option value="all">All</option>
                        <option value="ce">Civil Engineering</option>
                        <option value="cse">Computer Science and Engineering</option>
                        <option value="ee">Electrical Engineering</option>
                        <option value="ece">Electrical and Eclectronics Engineering</option>
                        <option value="me">Mechanical Engineering</option>
                        <option value="meta">Metallurgy Engineering</option>
                        <option value="pi">Production and Industrial Engineering</option>
                    </select>
                </form>
                </div>
                <div className="col-md-4">
                    <select className="form-control">
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                    </select>
                </div>
            </div><br/>
               <div className="row">
                    {
                    testJobs.map((item,index)=>{

                        return(
                            <SingleJobCard data={item} key={index}/>
                        )
                    })
                    }
               </div>

               <div className="d_flex justify_content_center">
                    <button className="btn btn-success">Load More</button>
               </div>
        </div>
    )
}

export default index
