import React from 'react'

function TopBar() {
    return (
        <div className="topbar_wrapper bg_secondary d_flex justify_content_between align_items_center p_10">
            <div className="logo text_light">Tap Portal</div>
            <ul className="pt_10">
                <li className="list_inline_block ml_10 mr_10 text_light">Profile</li>
                <li className="list_inline_block ml_10 mr_10 text_light">Logout</li>
            </ul>
        </div>
    )
}

export default TopBar
