import React from 'react'
import { batch, branches } from '../../Utils/constantData' 
import './form.css'

function AddJobsForm() {
    return (
       <div className="col-12">
           <form>
               <div className="row">
                   <div className="col-md-1"></div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                            <label for="company_name" className="font_weight_bold">Company Name&nbsp;<span className="text_feedback">*</span></label>
                            <input className="form-control" name="company_name" type="text" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group  p_10">
                            <label for="position" className="font_weight_bold">Position&nbsp;<span className="text_feedback">*</span></label>
                            <input className="form-control" name="position" type="text" />
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
                                    <div class="form-check" key={index}>
                                    <input class="form-check-input" type="checkbox" id={`inlineCheckbox${index+1}`} value={items.short_form}/>&nbsp;&nbsp;
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
                                    <div class="form-check form-check-inline" key={index}>
                                    <input class="form-check-input" type="checkbox" id={`inlineCheckbox${index+1}`} value={items}/>&nbsp;&nbsp;
                                    <label class="form-check-label" for={`inlineCheckbox${index+1}`}>{items}</label>
                                    </div>
                                )
                            })
                        }
                        </div>
                        <div className="form-group p_10">
                            <label className="font_weight_bold">Eligibility Criteria  &nbsp;<span className="text_feedback">*</span></label><br/>
                            <label className="font_weight_bold">10th-(Percentage or CGPA)</label>
                            <input className="form-control" name="company_name" type="text" />
                            <label className="font_weight_bold">12th-(Percentage)</label>
                            <input className="form-control" name="company_name" type="text" />
                            <label className="font_weight_bold">Graduation-(Overall CGPA)</label>
                            <input className="form-control" name="company_name" type="text" />
                        </div>
                    </div>
               </div>
               <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-5">
                    <div className="form-group p_10">
                    <label className="font_weight_bold">PPT Date&nbsp;<span className="text_feedback">*</span></label>
                    <input type="date" className="form-control"/>    
                    </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form-group p_10">
                        <label className="font_weight_bold">Test Date&nbsp;<span className="text_feedback">*</span></label>
                        <input type="datetime-local" className="form-control"/>    
                        </div>
                    </div>
                </div>
                
           </form>
        </div>
    )
}

export default AddJobsForm
