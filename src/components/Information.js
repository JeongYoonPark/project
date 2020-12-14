import React, { useState } from 'react';
import '../css/Information.css';
import phone from '../img/Phone.png';
import email from '../img/Email.png';

function Information() {

    const tab = ["Profile", "Skills", "Contact"];
    const [status, setStatus] = useState(2);

    function tabChange(idx){
        setStatus(idx);
    }
    return (
        <div className="Information">
            <div className="head">
                {tab.map((name, idx) => {
                    return(
                        <div onClick={() => tabChange(idx)} className={status==idx?"selected":""}>
                            {name}
                        </div>
                    );
                })}
            </div>
            <div className="tab_box">
                <div className={(status==0 ? " selected " : "")+"Profile tab"}>
                    
                </div>
                <div className={(status==1 ? " selected " : "")+"Skills tab"}>
                    
                </div>
                <div className={(status==2 ? " selected " : "")+"Contact tab"}>
                    <div class="card">
                        <span className="Info"><img src={phone} alt=""/><span>Phone: 010-4139-8132</span></span>
                        <span className="Info"><img src={email} alt=""/><span>E-mail: pjy20010922@gmail.com</span></span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Information;