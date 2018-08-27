import React, {Component} from 'react';
import Auxs from '../../hoc/Auxs';

import './AboutMeSection.css';


class AboutMeSection extends Component{

    constructor(props) {
        super(props);

        this.state = {

            formContact : {
               inputs : {
                   name : {
                       name: 'name',
                       type: 'text',
                       required: true
                   },
                   email : {
                       name: 'email',
                       type: 'email',
                       required: true
                   },
                   message : {
                       name: 'message',
                       type: 'textarea',
                       required: true
                   }

               }
            }
        }
    }

    render() {
        return(
            <div style={{height: '100vh'}} className={'about-me-wrapper'}>
                <div className={'form-wrapper'}>
                    <h3 className={'form-title'}>Napisz do mnie !</h3>
                    <form action="">
                        <div className="form-group">
                            <input type={'text'} className={'form-control'}/>
                        </div>
                        <br/>
                        <button role={'submit'} className={'btn btn-info form-submit'}>wyślij</button>
                    </form>
                </div>

            </div>
        )
    }
}


export default AboutMeSection;