import React ,{useState}from 'react'
import './form.css'
import Logo from '../../assets/images/logoNITJSR.png'
function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    return (
        <div className="d_flex justify_content_center align_items_center page_min_height">
            <div className="login_box d_flex flex_direction_column justify_content_center align_items_center bg_light" >
                <div className="d_flex flex_direction_column justify_content_start align_items_center">
                    <img src ={Logo} alt="" className="form_logo"/>
                    <p className="text_align">Login to Admin Portal</p>
                </div>
                <form className="login_form">
                    <div className="m_10">
                    <input 
                    className="p_10"
                    type="email" 
                    placeholder="Enter email id" 
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required/>
                    </div>
                    <div className="m_10">
                    <input  
                    className="p_10" 
                    type="password" 
                    placeholder="Enter password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)} 
                    required/>
                    </div>
                    <p className="font-xs">Forgot Password ?</p>
                    <button className="login_btn bg_secondary btn_border_none btn_outline_none">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
