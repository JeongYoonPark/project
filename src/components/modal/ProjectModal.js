import React, { useState } from 'react';
import '../../css/ProjectModal.css';
import HTML from '../../img/HTML5.png';
import CSS from '../../img/CSS3.png';
import JS from '../../img/JavaScript.png';
import jQuery from '../../img/jQuery.png';
import Sass from '../../img/Sass.png';
import PHP from '../../img/Php.png';
import MySQL from '../../img/MySQL.png';
import Project1 from '../../img/project2.png';

function ProjectModal(props) {

    const modal = document.querySelector(".Modal-Background");
    const close = document.querySelector(".close");

    function CloseModal(e){
        e.preventDefault();
        if(e.target == modal || e.target == close){
        
            props.onHide();
            modal.style.display = "none";
        }
    }
    return (
        <div 
            className="Modal-Background" 
            style={{display: props.show ? "block" : "none"}}
            onClick={CloseModal}
        >
            <div className="Modal-Box">
            <p className="close-btn"><span className="close">X</span></p>
                <div class="Modal-Wrap">
                    <div className="Modal_divide">
                    <h2>백오피스 개발</h2>
                    <h2>주문확인, 상품등록 등 전반적인 서비스의 관리기능 구현</h2>
                    <h3>근무지 : 달리셔스</h3>
                    <h3>참여인원 : 1명</h3>
                    <div className="icon_box">
                        <img src={HTML} className="icon" alt=""/>
                        <img src={CSS} className="icon" alt=""/>
                        <img src={Sass} className="icon" alt=""/>
                        <img src={JS} className="icon" alt=""/>
                        <img src={jQuery} className="icon" alt=""/>
                        <img src={PHP} className="icon" alt=""/>
                        <img src={MySQL} className="icon" alt=""/>
                    </div>
                    <div className="Description">
                        <img src={Project1} alt=""/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectModal;