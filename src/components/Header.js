import React, { useState } from 'react';
import '../css/Header.css';

function Header() {
    function noti(event){
        window.alert(event.target.getAttribute('idx'));
    }
    
    return (
        <div className="Header">
            <div className="NavBar">
                <div idx="1" onClick={noti}>1</div>
                <div idx="2" onClick={noti}>2</div>
                <div idx="3" onClick={noti}>3</div>
                <div idx="4" onClick={noti}>4</div>
            </div>
        </div>
    )
}

export default Header;