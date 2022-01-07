import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from  'react-redux';
import * as actions from  '../actions/count';
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
import Windows from '../img/Windows.png';
import Linux from '../img/Linux.png';
import Redux from '../img/redux.png';
import Flutter from '../img/Flutter.png';
import ProjectModal from '../components/modal/ProjectModal.js';
import MobileModal from '../components/modal/MobileModal.js';

const Information = () => {

    const tab = ["Profile", "Project", "Contact"];
    const [status, setStatus] = useState(1);

    const dispatch = useDispatch();
    const [localCount, setLocalCount] = useState(0);
    const [show, modalShow] = useState(false);
    const [mobile, mobileShow] = useState(false);

    const { count:storeCount } = useSelector((state) => state.count);
    useEffect(() => {
        console.log('Component did mount');
    }, []);

    // const increaseCount = useCallback(() => {
    //     setLocalCount(localCount + 1);
    //     dispatch(actions.increaseCount());
    // }, [localCount, dispatch]);

    // const decreaseCount = useCallback(() => {
    //     setLocalCount(localCount - 1);
    //     dispatch(actions.decreaseCount());
    // }, [localCount, dispatch]);

    function tabChange(idx){
        setStatus(idx);
    }
    function popmodal(e) {
        e.preventDefault();
        modalShow(true);
    }
    function popmobile(e) {
        e.preventDefault();
        mobileShow(true);
    }
    return (
        <section className="Information">
            {/* <>
      {'Function component'}
      <div>
        <div>
          {`localCount: ${localCount}`}
        </div>
        <div>
          {`storeCount: ${storeCount}`}
        </div>
      </div>
      <div onClick={increaseCount}>
        {'+'}
      </div>
      <div onClick={decreaseCount}>
        {'-'}
      </div>
    </> */}
            <ProjectModal show={show} onHide={() => modalShow(false)}/>
            <MobileModal show={mobile} onHide={() => mobileShow(false)}/>
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
                        <h1 className="active">Introduce</h1>
                        <div className="profile">
                            <div className="InfoBox">
                                <img className="profileImg" src={profile} alt=""/>
                                <h3>박정윤</h3>
                                <br/>
                                <h3>2001-09-22(만 20세)</h3>
                                <br/>
                                <h3>달리셔스(주)<br/>개발팀 2019-11 ~ 2021-03</h3>
                            </div>
                            <div className="container">
                                <div className="SkillList">
                                    <h2>FRONT-END</h2>
                                    <div className="front skill_box">
                                        <span><img src={HTML} alt=""/></span>
                                        <span><img src={CSS} alt=""/></span>
                                        <span><img src={Sass} alt=""/></span>
                                        <span><img src={ReactImg} alt=""/></span>
                                        <span><img src={Redux} className="icon" alt=""/></span>
                                        <span><img src={Flutter} alt=""/></span>
                                        <span><img src={jQuery} alt=""/></span>
                                        <span><img src={JS} alt=""/></span>
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
                    </div>  
                </div>
                <div className={(status==1 ? " display " : "")+"Project tab"}>
                    {/* <h1>Company</h1> */}
                    <div className="Company">
                        <div className="ProjectBox" onClick={popmodal}>
                            <h2>백오피스 개발</h2>
                            <h3>2019-11 ~ 2021-03</h3>
                        </div>
                        <div className="ProjectBox" onClick={popmobile}>
                            <h2>모바일 웹</h2>
                            <h3>2020-10 ~ 2021-03</h3>
                        </div>
                    </div>
                    {/* <h1>Personal</h1>
                    <div className="Personal">
                        <div>

                        </div>
                    </div> */}
                </div>
                <div className={(status==2 ? " display " : "")+"Contact tab"}>
                    <div className="card">
                        <span className="Info"><img src={phone} alt=""/><span>Phone: 010-4139-8132</span></span>
                        <span className="Info"><img src={email} alt=""/><span><a href="mailto:pjy20010922@gmail.com" target="_blank">E-mail: pjy20010922@gmail.com</a></span></span>
                        <span className="Info"><img src={GitHub} alt=""/><span><a href="https://github.com/JeongYoonPark" target="_blank">GitHub: https://github.com/JeongYoonPark</a></span></span>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Information;