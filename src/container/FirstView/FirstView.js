import React, {Component} from 'react';
import Auxs from '../../hoc/Auxs';
import YouTube from 'react-youtube';
import YoutubeBackground from 'react-youtube-background';

import FirstViewSection from '../../component/FirstViewSection/FirstViewSection';

class FirstView extends Component {

    constructor(props) {
        super(props);
        console.log(props)

    }

    render() {

        return (
            <div>
                <YoutubeBackground
                    videoId="2c2MJPEerrs">
                    <FirstViewSection scrollClick={this.props.scrollClick} />


                </YoutubeBackground>
            </div>
        )

    }


}

export default FirstView;