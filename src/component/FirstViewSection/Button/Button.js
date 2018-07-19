import React, {Component} from 'react';
import './Button.css';
const ScrollFirstViewBtn = (props) => {

    return (
        <button  className="btn btn-primary btn-next-view" onClick={props.scrollClick}>
            {props.children}
        </button>
    )
};

export default ScrollFirstViewBtn;