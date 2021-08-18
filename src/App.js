import React, { Component } from 'react'
import Auth from './Pages/Auth/index'
import TopBar from './components/Navbar/TopBar'
import AddJobs from './Pages/AddJobs/index' 
import Sidebar  from './components/Navbar/Sidebar'
import './assets/styles/common.css'
class App extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <div className="d_flex main_layout">
                    <Sidebar/>
                    <div className="page_area">
                        {/* <Auth/> */}
                        <AddJobs/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

