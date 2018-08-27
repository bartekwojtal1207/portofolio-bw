import React, {Component} from 'react';
import Input from './AboutMeForm/AboutMeForm';

import './AboutMeSection.css';


class AboutMeSection extends Component{

    constructor(props) {
        super(props);

        this.state = {
            inputs: [
                {name: 'name', type: 'text', required: true},
                {name: 'email', type: 'email', required: true},
                {name: 'message', type: 'text', required: true}
            ]
        }
    }

    render() {
        let formInput = null;
        const inputs = [
            ...this.state.inputs
        ];

        const input = inputs.map((input, id) =>
            <div className="form-group" key={id+'input-wrapp'}>
                <Input key={id}
                   type={input.type}
                   name={input.name}
                   required={input.required}/>
            </div>
        );


        return(
            <div style={{height: '100vh'}} className={'about-me-wrapper'}>
                <div className={'form-wrapper'}>
                    <h3 className={'form-title'}>Napisz do mnie !</h3>
                    <form action="">
                        {input}
                        <br/>
                        <button role={'submit'} className={'btn btn-info form-submit'}>wyślij</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default AboutMeSection;