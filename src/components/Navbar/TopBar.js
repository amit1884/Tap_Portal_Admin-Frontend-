import Cookies from 'js-cookie'
import React from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { AdminAction } from '../../redux/action/useraction'
function TopBar() {

    const history=useHistory()
    const dispatch=useDispatch()
    const LogoutHandler=()=>{
        dispatch(AdminAction(''))
        Cookies.remove('accessToken')
        history.push('/auth')
    }
    return (
        <div className="topbar_wrapper bg_secondary d_flex justify_content_between align_items_center p_10">
            <div className="logo text_light">Tap Portal</div>
            {
                Cookies.get('accessToken')?
                <ul className="pt_10">
                <li className="list_inline_block ml_10 mr_10 text_light">Profile</li>
                <li className="list_inline_block ml_10 mr_10 text_light" onClick={LogoutHandler}>Logout</li>
            </ul>
            :null
            }
            
        </div>
    )
}

export default TopBar
