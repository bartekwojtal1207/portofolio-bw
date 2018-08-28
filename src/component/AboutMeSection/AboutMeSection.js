import React, {Component} from 'react';
import Input from './AboutMeForm/AboutMeForm';
import axios from 'axios';
import './AboutMeSection.css';
import frontLogo from '../../assets/img/test.png';

class AboutMeSection extends Component{

    constructor(props) {
        super(props);

        this.state = {
            inputs: [
                {name: 'name', type: 'text', required: true},
                {name: 'email', type: 'email', required: true},
                {name: 'message', type: 'text', required: true}
            ],
            users: [],
            inputsValue: {
                name: '',
                email: 'sssaaggg',
                message: ''
            }
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.slice(0,4);
                const updatedUsers = users.map(user => {
                    return {
                        ...user,
                        club: 'test'
                    }
                });

                this.setState({users: updatedUsers})
            })
    }

    clickHandler() {
        console.log('click')
    }

    changeInputHandler(event, id) {
        const inputValue = {
            ...this.state.inputsValue
        };
        console.log('change');
        inputValue[id] = event.target.value;

        this.setState({inputsValue: inputValue});
        console.log(this.state.inputsValue)

    }

    render() {
        let formInput = null;

        const inputs = [
            ...this.state.inputs
        ];

        console.log('render');

        const input = inputs.map((input, id) =>
            <div className="form-group" key={id+'input-wrapp'}>
                <Input key={id}
                   type={input.type}
                   name={input.name}
                   change={(event)=> {this.changeInputHandler(event, input.name)}}
                   required={input.required}/>
            </div>
        );

        return(
            <div style={{height: '100vh'}} className={'about-me-wrapper'}>
                <h1>O mnie !</h1>
                <br/>
                <hr/>
                <br/>
                <div className={'form-wrapper'}>
                    <h3 className={'form-title'}>Napisz do mnie !</h3>
                    <form action="">
                        {input}
                        <br/>
                        <button className={'btn btn-info form-submit'} >wyślij</button>
                    </form>
                </div>
                <div className={'logo-wrapper'}>
                    <img src={frontLogo} alt="logo"/>
                </div>
            </div>
        )
    }
}


export default AboutMeSection;