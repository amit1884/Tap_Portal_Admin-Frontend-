import Dashboard from './Pages/Dashobard'
import Auth from './Pages/Auth'
import AddJob from './Pages/AddJobs'
import Jobs from './Pages/Jobs'
export const Routes=[
    {
        id:1,
        path:'/',
        exact:true,
        comp:Dashboard
    },
    {
        id:2,
        path:'/auth',
        exact:true,
        comp:Auth
    },
    {
        id:3,
        path:'/addjob',
        exact:true,
        comp:AddJob
    },
    {
        id:4,
        path:'/jobs',
        exact:true,
        comp:Jobs
    }
]