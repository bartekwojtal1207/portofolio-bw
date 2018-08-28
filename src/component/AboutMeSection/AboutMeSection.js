import React, {Component} from 'react';
import Input from './AboutMeForm/AboutMeForm';
import axios from '../../axios-form';
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
                email: '',
                message: ''
            }
        }
    }

    componentDidMount() {
        axios.get('/contact-form.json')
            .then(response => {
                // const users = response.data.slice(0,4);
                // const updatedUsers = users.map(user => {
                //     return {
                //         ...user,
                //         club: 'test'
                //     }
                // });
                // this.setState({users: updatedUsers})
                console.log(response)
            }).catch(error => {
            console.log(error)
        })
    }

    clickHandler(event) {
        event.preventDefault()
        const data  = {
          title: this.state.inputsValue.name,
          body: this.state.inputsValue.message
        };
console.log(data)
        axios.post('/contact-form.json', data)
            .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    changeInputHandler(event, id) {
        const inputValue = {
            ...this.state.inputsValue
        };

        inputValue[id] = event.target.value;
        this.setState({ inputsValue: inputValue });
    }

    render() {

        const inputs = [
            ...this.state.inputs
        ];

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
                        <button className={'btn btn-info form-submit'}  onClick={(event)=> {this.clickHandler(event)}} >wyślij</button>
                    </form>
                </div>
                <div className={'logo-wrapper'}>
                    <img src={frontLogo} alt="logo"/>
                    <p style={{marginTop : '17px', fontWeight: '300'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque quam massa, eu vulputate risus feugiat sit amet. Nunc et urna vitae dolor pulvinar hendrerit</p>
                </div>
            </div>
        )
    }
}


export default AboutMeSection;