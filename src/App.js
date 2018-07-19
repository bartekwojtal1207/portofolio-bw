import React, {Component} from 'react';
import './App.css';
import FirstView from './container/FirstView/FirstView';
import AboutMe from './container/AboutMeContainer/AboutMe';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {

    scrollClickHandler = () => {
        scrollToComponent(this.AboutMe, { offset: 0, align: 'middle', duration: 1000, ease:'inQuint'});
    };

    render() {
        return (
            <div className="App">
                <FirstView scrollClick={()=> this.scrollClickHandler()}/>
                <div ref={(div) => { this.AboutMe = div; }}>
                    <AboutMe/>
                </div>
            </div>
        );
    }
}

export default App;
