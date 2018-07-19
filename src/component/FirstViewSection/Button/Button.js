import React, {Component} from 'react';
import Auxs from '../../../hoc/Auxs';
import FirstViewSection from "../FirstViewSection";

const ScrollFirstViewBtn = (props) => {

    return (
        <button  className="btn btn-primary btn-next-view" onClick={props.scrollClick}>
            {props.children}
        </button>
    )

};

export default ScrollFirstViewBtn;