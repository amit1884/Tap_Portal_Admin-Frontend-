import React ,{useReducer}from 'react'
import { initialState, setJobsField } from '../../redux/reducers/addJobReducer';
import { batch, branches } from '../../Utils/constantData' 
import './form.css'

function AddJobsForm() {

    const [state, dispatch] = useReducer(setJobsField, initialState);
    return (
       <div className="col-12">
           <form>
               <div className="row">
                   <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                            <label for="company_name" className="font_weight_bold">Company Name&nbsp;<span className="text_feedback">*</span></label>
                            <input 
                            className="form-control"
                            onChange={(e)=>dispatch({type:'SET_COMPANY_NAME',payload: {company_name :e.target.value}})} 
                            value={state?state.company_name:''}
                            name="company_name" type="text" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group  p_10">
                            <label for="position" className="font_weight_bold">Position&nbsp;<span className="text_feedback">*</span></label>
                            <input 
                            className="form-control" 
                            name="position" 
                            value={state?state.position:''}
                            onChange={(e)=>dispatch({type:'SET_POSITION',payload: {position :e.target.value}})}
                            type="text" />
                        </div>
                    </div>
               </div>
               <div className="row">
                   <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                            <label for="ctc" className="font_weight_bold">CTC&nbsp;<span className="text_feedback">*</span></label>
                            <input className="form-control" 
                            value={state?state.ctc:''}
                            onChange={(e)=>dispatch({type:'SET_CTC',payload: {ctc :e.target.value}})}
                            name="ctc" 
                            type="text" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group  p_10">
                            <label for="base" className="font_weight_bold">Base Pay/BreakDown</label>
                            <input className="form-control" 
                            value={state?state.base:''}
                            onChange={(e)=>dispatch({type:'SET_BASE',payload: {base :e.target.value}})}
                            name="base" 
                            type="text" />
                        </div>
                    </div>
               </div>
               <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="form-group p_10 pl_20">
                        <label for="eligible_branch" className="font_weight_bold">Eligible Branch&nbsp;<span className="text_feedback">*</span></label><br/>

                        {
                            branches.map((items,index)=>{
                                return (
                                    <div className="form-check" key={index}>
                                    <input className="form-check-input" type="checkbox" 
                                    onChange={(e)=>dispatch({type:'SET_BRANCH',payload: {branch :e.target.value}})}id={`inlineCheckbox${index+1}`} value={items.short_form}/>&nbsp;&nbsp;
                                    <label class="form-check-label" for={`inlineCheckbox${index+1}`}>{items.branch}</label>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div className="form-group p_10 pl_20">
                        <label for="eligible_batch" className="font_weight_bold">Eligible Batch&nbsp;<span className="text_feedback">*</span></label><br/>
                        {
                            batch.map((items,index)=>{
                                return (
                                    <div className="form-check form-check-inline" key={index}>
                                    <input 
                                    className="form-check-input" 
                                    onChange={(e)=>dispatch({type:'SET_BATCH',payload: {batch :e.target.value}})}
                                    type="checkbox" id={`inlineCheckbox${index+1}`} value={items.alias}/>&nbsp;&nbsp;
                                    <label class="form-check-label" for={`inlineCheckbox${index+1}`}>{items.year}</label>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="form-group p_10">
                            <label className="font_weight_bold">Eligibility Criteria  &nbsp;<span className="text_feedback">*</span></label><br/>
                            <label className="font_weight_bold">10th-(Percentage or CGPA)</label>
                            <input className="form-control"
                             value={state?state.tenth:''}
                             onChange={(e)=>dispatch({type:'SET_10th_MARKS',payload: {tenth :e.target.value}})}
                            name="10th_marks" type="text" />
                            <label className="font_weight_bold">12th-(Percentage)</label>
                            <input className="form-control" 
                            value={state?state.twelth:''}
                            onChange={(e)=>dispatch({type:'SET_12th_MARKS',payload: {twelth :e.target.value}})}
                            name="12th_marks" type="text" />
                            <label className="font_weight_bold">Graduation-(Overall CGPA)</label>
                            <input className="form-control"
                            value={state?state.gradutaion:''}
                            onChange={(e)=>dispatch({type:'SET_GRAD_MARKS',payload: {gradutaion :e.target.value}})} 
                            name="gradution_cgpa" type="text" />
                        </div>
                    </div>
               </div>
               <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                        <label className="font_weight_bold">PPT Date</label>
                        <input type="date" className="form-control" onChange={(e)=>dispatch({type:'SET_PPT_DATE',payload: {ppt_date :e.target.value}})}/>    
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                        <label className="font_weight_bold">Test Date&nbsp;<span className="text_feedback">*</span></label>
                        <input 
                        onChange={(e)=>dispatch({type:'SET_TEST_DATE',payload: {test_date :e.target.value}})}
                        type="datetime-local" className="form-control"/>    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                        <label className="font_weight_bold">Interview Date(From)&nbsp;<span className="text_feedback">*</span></label>
                        <input 
                        onChange={(e)=>dispatch({type:'SET_INTERVIEW_DATE_FROM',payload: {interview_from :e.target.value}})}
                        type="date" 
                        className="form-control"/>    
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                        <label className="font_weight_bold">Interview Date(To)&nbsp;<span className="text_feedback">*</span></label>
                        <input
                        onChange={(e)=>dispatch({type:'SET_INTERVIEW_DATE_TO',payload: {interview_to :e.target.value}})} 
                        type="date" className="form-control"/>    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                            <label className="font_weight_bold">Job Description</label>
                            <textarea className="form-control"
                            value={state?state.job_desc:''}
                            onChange={(e)=>dispatch({type:'SET_JOB_DESC',payload: {job_desc :e.target.value}})}
                             rows={5}></textarea>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                        <label className="font_weight_bold">Deadline&nbsp;<span className="text_feedback">*</span></label>
                        <input 
                        onChange={(e)=>dispatch({type:'SET_DEADLINE',payload: {deadline :e.target.value}})}
                        type="datetime-local" className="form-control"/>    
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="form-group p_10">
                            <label className="font_weight_bold">Upload Job Description</label>
                            <input type="file" className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <div className="form-group p_10">
                        <button type="submit" className="btn btn-lg btn-primary form-control">Submit</button>
                        </div>
                    </div>
                </div>
           </form>
        </div>
    )
}

export default AddJobsForm
