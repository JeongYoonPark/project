import React, { useState, useEffect } from 'react';
import '../css/Profile.css';

function Profile() {
        useEffect(() => {
            const text = '박정윤의 Portfolio입니다.';
            var arr = text.split('');
            var target = document.getElementsByClassName('Name');
            console.log(target);

            var idx = 0;
            var start = false;
            
            if(start===false){
                start = true;
                var type = setInterval(typing, 500);
            }
            function typing(){
                if(idx < arr.length){
                    var txt = arr[idx];
                    target.innerHTML += txt;
                    idx++
                }else{
                    clearInterval(type);
                }
            }
        });
    return (
        <div className="Profile">
            <div className="Wrap">
                <h1 className="Name"></h1>
            </div>
        </div>
    )
}

export default Profile;