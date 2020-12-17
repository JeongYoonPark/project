import React, { useState } from 'react';
import '../css/Information.css';
import phone from '../img/Phone.png';
import email from '../img/Email.png';
import profile from '../img/profile.jpg';
import HTML from '../img/HTML5.png';
import CSS from '../img/CSS3.png';
import JS from '../img/JavaScript.png';
import jQuery from '../img/jQuery.png';
import ReactImg from '../img/React.png';
import Sass from '../img/Sass.png';
import PHP from '../img/Php.png';
import MySQL from '../img/MySQL.png';
import Node from '../img/Node.png';
import GitHub from '../img/Github.png';
import Project1 from '../img/project1.png';
import Project3 from '../img/project3.png';
import Project4 from '../img/project4.png';
import Windows from '../img/Windows.png';
import Linux from '../img/Linux.png';

function Information() {

    const tab = ["Profile", "Skills", "Contact"];
    const [status, setStatus] = useState(1);
    const [show, setShow] = useState();

    function tabChange(idx){
        setStatus(idx);
    }
    function showChange(idx){
        if(show==idx){
            setShow();
        }else{
            setShow(idx);
        }
    }
    
    return (
        <section className="Information">
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
                <div className={(status==0 ? " display " : "")+"Profile tab"}>
                    <div className="introduce">
                        <h1 onClick={() => showChange(0)} className={show==0 ? "active" : ""}>Who am I.<span>{show==0 ? "-" : "+"}</span></h1>
                        <div className={(show==0 ? "show" : "hidden") + " profile"}>
                            <div className="InfoBox">
                                <img className="profileImg" src={profile} alt=""/>
                                <h3>박정윤</h3>
                                <h3>2001-09-22(만 19세)</h3>
                                <h3>서울디지텍고등학교 유비쿼터스과 졸업</h3>
                                <h3>달리셔스(주) 개발팀 2020-11 ~ 재직중</h3>
                            </div>
                            
                        </div>
                        <h1 onClick={() => showChange(1)} className={show==1 ? "active" : ""}>Project. <span>{show==1 ? "-" : "+"}</span></h1>
                        <div className={show==1 ? "show" : "hidden"}>
                            <div className="ProjectBox">
                                <h2>달리셔스 BackOffice 제작</h2>
                                <h3>2019-12 ~ ing</h3>
                                <h3>HTML5, CSS3, Sass, PHP, MySQL, Ajax</h3>
                                <img src={Project1} alt=""/>
                            </div>
                            <div className="ProjectBox">
                                <h2>달리셔스 메이커스용 모바일 웹</h2>
                                <h2>2020-10 ~ ing</h2>
                                <h3>HTML5, CSS3, Sass, PHP, MySQL, Ajax</h3>
                                <img src={Project3} className="Mobile" alt=""/>
                                <img src={Project4} className="Mobile" alt=""/>
                            </div>

                        </div>

                    </div>  
                </div>
                <div className={(status==1 ? " display " : "")+"Skills tab"}>
                    <div className="container">
                        <div className="SkillList">
                            <h2>FRONT-END</h2>
                            <div className="front skill_box">
                                <span><img src={HTML} alt=""/></span>
                                <span><img src={CSS} alt=""/></span>
                                <span><img src={JS} alt=""/></span>
                                <span><img src={jQuery} alt=""/></span>
                                <span><img src={ReactImg} alt=""/></span>
                                <span><img src={Sass} alt=""/></span>
                            </div>
                            <h2>BACK-END</h2>
                            <div className="back skill_box">
                                <span><img src={PHP} alt=""/></span>
                                <span><img src={MySQL} alt=""/></span>
                                <span><img src={Node} alt=""/></span>
                            </div>
                            <h2>ETC</h2>
                            <div className="tool skill_box">
                            <span><img src={Windows} alt=""/></span>
                            <span><img src={Linux} alt=""/></span>
                            <span><img src={GitHub} alt=""/></span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={(status==2 ? " display " : "")+"Contact tab"}>
                    <div className="card">
                        <span className="Info"><img src={phone} alt=""/><span>Phone: 010-4139-8132</span></span>
                        <span className="Info"><img src={email} alt=""/><span>E-mail: pjy20010922@gmail.com</span></span>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Information;