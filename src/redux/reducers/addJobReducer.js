export const initialState={
    company_name:'',
    position:'',
    ctc:'',
    base:'',
    batch:{
        final:false,
        pre_final:false,
        new:false
    },
    branch:{
        CE:false,
        CSE:false,
        ECE:false,
        EE:false,
        ME:false,
        META:false,
        PI:false,
        MTECH:false
    },
    tenth:'',
    twelth:'',
    gradutaion:'',
    ppt:'',
    test:'',
    interview_to:'',
    interview_from:'',
    deadline:'',
    job_desc:''
}


export const setJobsField=(state = initialState, action)=>{

    switch(action.type)
    {
        case 'SET_COMPANY_NAME':
            return {
                ...state,
                company_name:action.payload.company_name
            };
        case 'SET_POSITION':
            return {
                ...state,
                position:action.payload.position
            }
        case 'SET_CTC':
        return {
            ...state,
            ctc:action.payload.ctc
        }
        case 'SET_BASE':
        return {
            ...state,
            base:action.payload.base
        }
        case 'SET_JOB_DESC':
        return {
            ...state,
            job_desc:action.payload.job_desc
        }
        case 'SET_BRANCH':

            let temp={...state.branch}
            temp[action.payload.branch]=!temp[action.payload.branch]
            return{
                ...state,
                branch:temp
            }

        case 'SET_BATCH':

            let temp1={...state.batch}
            temp1[action.payload.batch]=!temp1[action.payload.batch]
            return{
                ...state,
                batch:temp1
            };

        case 'SET_10th_MARKS':
            return{
                ...state,
                tenth:action.payload.tenth
            }

        case 'SET_12th_MARKS':
        return{
            ...state,
            twelth:action.payload.twelth
        }

        case 'SET_GRAD_MARKS':
        return{
            ...state,
            gradutaion:action.payload.gradutaion
        }

        case 'SET_PPT_DATE':
            return{
                ...state,
                ppt:action.payload.ppt_date
            }

        case 'SET_TEST_DATE':
            return{
                ...state,
                test:action.payload.test_date
            }

        case 'SET_INTERVIEW_DATE_FROM':
            return{
                ...state,
                interview_from:action.payload.interview_from
            }
        case 'SET_INTERVIEW_DATE_TO':
            return{
                ...state,
                interview_to:action.payload.interview_to
            }
        case 'SET_DEADLINE':
            return{
                ...state,
                deadline:action.payload.deadline
            }
        default:
            return state;
    }
}