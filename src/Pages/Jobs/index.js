import React,{ useEffect, useState } from 'react'
import { getAllJobs } from '../../api'
import SingleJobCard from '../../components/JobList/SingleJobCard'
import { batch, testJobs} from '../../Utils/constantData'
import {useSelector} from 'react-redux'
function JobsIndex() {

    const [branchFilter,setBranchFilter]=useState('All')
    const [batchFilter,setBatchFilter]=useState('All')
    const [data,setData]=useState([])
    // const val=useSelector(state=>console.log(state.AdminReducer))
    useEffect( async ()=>{
        const response = await getAllJobs();

        console.log(response)
    },[])
    useEffect(()=>{
        console.log(branchFilter,batchFilter)
        if(branchFilter!=='All' || batchFilter!=='All')
        {
            let temp=testJobs.filter((item)=>{
                return item.eligible_branch.includes(branchFilter) && item.batch.includes(batchFilter)
            })
            setData(temp)
        }
       else 
       setData(testJobs)
    },[branchFilter, batchFilter])
    return (
        <div className="d_flex p_20 flex_direction_column">
            <div className="font-lg mb_10">
                <p className="text_center"><u>All Available Jobs</u></p>
            </div>
            <div className="row">
                <div className="col-md-2 col-sm-12"></div>
                <div className="col-md-4 col-sm-12">
                <form>
                    <select className="form-control" 
                    value={branchFilter} 
                    onChange={(e)=>setBranchFilter(e.target.value)}
                    >
                        <option value="All">All</option>
                        <option value="CE">Civil Engineering</option>
                        <option value="CSE">Computer Science and Engineering</option>
                        <option value="EE">Electrical Engineering</option>
                        <option value="ECE">Electrical and Electronics Engineering</option>
                        <option value="ME">Mechanical Engineering</option>
                        <option value="META">Metallurgy Engineering</option>
                        <option value="PI">Production and Industrial Engineering</option>
                    </select>
                </form>
                </div>
                <div className="col-md-4">
                    <select className="form-control"
                    value={batchFilter} 
                    onChange={(e)=>setBatchFilter(e.target.value)}
                    >
                    <option value="All">All</option>
                    {
                            batch.map((items,index)=>{
                                return (
                                    <option key={index} value={items.year}>{items.year}</option>
                                )
                            })
                        }
                    </select>
                </div>
            </div><br/>
               <div className="row">
                   {data?.length === 0 ? 'No data found :(':null}
                    {
                    data?.map((item,index)=>{

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

export default JobsIndex
