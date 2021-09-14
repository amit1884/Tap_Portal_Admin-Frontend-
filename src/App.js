import React, { Component } from 'react'
import { Provider } from 'react-redux';
import  store  from './redux/store';
import TopBar from './components/Navbar/TopBar'
import Sidebar  from './components/Navbar/Sidebar'
import './assets/styles/common.css'
import {BrowserRouter,Route, Switch,useHistory} from 'react-router-dom';
import { Routes } from './routes'
class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <BrowserRouter>
                <TopBar/>
                <div className="d_flex main_layout">
                    <Sidebar/>
                    <div className="page_area">
                       {
                           Routes.map((items,index)=>{
                               return(
                                <Route
                                key={items.id}
                                exact={items.exact}
                                path={items.path}
                                component={items.comp}
                              />
                               )
                           })
                       }
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
        )
    }
}

export default App

