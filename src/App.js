import React, {useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux';
import  store  from './redux/store';
import TopBar from './components/Navbar/TopBar'
import Sidebar  from './components/Navbar/Sidebar'
import './assets/styles/common.css'
import {BrowserRouter,Route, Switch,useHistory} from 'react-router-dom';
import { Routes } from './routes'
import Cookies from 'js-cookie';
import { AdminAction } from './redux/action/useraction';

const Routing=()=>{

    const history=useHistory()
    const dispatch=useDispatch()
    useEffect(()=>{

        const user=Cookies.get('accessToken')
        
        if(user){
           
            dispatch(AdminAction(user));
            console.log('loggedin...')
        }
        else{
          history.push("/auth")
        }
      },[])

      return(
          <Switch>
               {
                Routes.map((items)=>{
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
          </Switch>
      )
}
const App = () => {
        const isUser=Cookies.get('accessToken')
        return (
        <Provider store={store}>
            <BrowserRouter>
                <TopBar/>
                <div className="d_flex main_layout">
                    {isUser?<Sidebar/>:null}
                    <div className={isUser?'page_area':'page_area_not_valid'}>
                       <Routing/>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
        )
    }
export default App

