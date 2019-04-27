import React, {Component} from 'react';

class Score extends Component{
    static defaultProps = {
        mental: 0,
        hexwater: 0,
        pyramid: 0,
        onion: 0,
		};

		state = {
				score: 0,
		};

    render(){
        return(
            <div>Score : {this.computeScore()}</div>
        )
    }

    computeScore = () => {
        const {mental, hexwater, pyramid, onion} = this.props;
        const newscore = (mental*100 + hexwater*50 + pyramid*50)*onion/100;
        return newscore;
    }
}

export default Score;