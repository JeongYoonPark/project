import React, { useState, useEffect } from 'react';
import '../css/Profile.css';

var str = '';
var start = false;
const text = '주니어개발자 박정윤입니다.';
var arr = text.split('');
var idx = 0;
var type = '';
function Profile() {
    const [title, setState] = useState("");
    const [status, setStatus] = useState(false);
    function typing(){
        if(idx < arr.length){
            var txt = arr[idx];
            str +=txt;
            var string = str;
            setState(string);
            idx++
        }else{
            clearInterval(type);
        }
    }
    useEffect(()=>{
        function start(){
            if(status===false){
                setStatus(true);
                type = setInterval(typing, 140);
            }
        }
        start();
    })
    return (
        <div className="Head">
            <div className="Wrap">
                <h1 className="title">안녕하세요</h1>
                <h1 className="title Name">{title}</h1>
            </div>
        </div>
    )
}

export default Profile;