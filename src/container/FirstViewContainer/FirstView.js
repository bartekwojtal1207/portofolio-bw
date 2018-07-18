import React, {Component} from 'react';
import Auxs from '../../hoc/Auxs';
import YouTube from 'react-youtube';
import YoutubeBackground from 'react-youtube-background'

class FirstView extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        const opts = {
            height: '100%',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls : 0,
                disablekb: 1,
                showinfo: 0,
                autohide: 1,
                loop: 1,
                modestbranding: 1
            }
        };

        return (
            <div>
                <YoutubeBackground
                    videoId="oLbNS3mAIB0">
                    <div style={{height: '100vh', position: 'relative', zIndex: '2'}}>
                        asdsadsadd
                    </div>
                </YoutubeBackground>
            </div>
        )

    }


}

export default FirstView;