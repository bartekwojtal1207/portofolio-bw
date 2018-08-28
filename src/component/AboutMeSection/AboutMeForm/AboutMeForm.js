import React, {Component} from 'react';
import Auxs from '../../../hoc/Auxs';

const input = (props) => {

    return (
        <Auxs>
            <input className={'form-control'}
                   onChange={props.change}
                   // value={props.value}
                   type={props.type}
                   required={props.required}
                   placeholder={props.name}
                   name={props.name} />
        </Auxs>
    )
};


export default input;