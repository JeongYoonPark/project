import React, { useState } from 'react';
import '../../css/ProjectModal.css';
import HTML from '../../img/HTML5.png';
import CSS from '../../img/CSS3.png';
import JS from '../../img/JavaScript.png';
import jQuery from '../../img/jQuery.png';
import Sass from '../../img/Sass.png';
import PHP from '../../img/Php.png';
import MySQL from '../../img/MySQL.png';
import Project1 from '../../img/project1.png';

function ProjectModal(props) {

    const modal = document.querySelector(".Modal-Background");
    const close = document.querySelector(".close");

    function CloseModal(e){
        e.preventDefault();
        if(e.target == modal || e.target == close){
            props.onHide();
            console.log(modal);
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
                <h2>달리셔스 BackOffice 제작</h2>
                        <div className="icon_box">
                            {/* <img src={HTML} className="icon" alt=""/> */}
                            <img src={CSS} className="icon" alt=""/>
                            <img src={Sass} className="icon" alt=""/>
                            <img src={JS} className="icon" alt=""/>
                            <img src={jQuery} className="icon" alt=""/>
                            <img src={PHP} className="icon" alt=""/>
                            <img src={MySQL} className="icon" alt=""/>
                        </div>
                        {/* <img src={Project1} className="Image" alt=""/>
                        <h4>
                            BackOffice 개발.<br/>
                            상품, 식단, 주문, 컨텐츠 등등 <br/> 운영의 전반적인 부분을 관리하는 사이트    
                        </h4> */}
            </div>
        </div>
    )
}

export default ProjectModal;