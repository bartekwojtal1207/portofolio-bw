import React, {Component} from 'react';
import Auxs from '../../hoc/Auxs';
import ScrollFirstViewBtn from './Button/Button';
import './FirstViewSection.css';

class FirstViewSection extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <Auxs>
                <div style={{height: '100vh', position: 'relative', zIndex: '2', top: '50vh'}} >
                    <ScrollFirstViewBtn scrollClick={this.props.scrollClick}>
                        Przejdź dalej <i className="demo-icon icon-right-big"></i>
                    </ScrollFirstViewBtn>
                </div>
            </Auxs>
        )
    }
}


export default FirstViewSection;