import React, {Component} from 'react';

class Score extends Component{
    static defaultProps = {
        mental: 0,
        hexwater: 0,
        pyramid: 0,
        onion: 0,
    }
    constructor(props){
        super(props);
        this.state={
            score: 0,
        }
        this.computeScore = this.computeScore.bind(this);
    }
    computeScore(){
        const {mental, hexwater, pyramid, onion} = this.props;
        const newscore = (mental*100 + hexwater*50 + pyramid*50)*onion/100;
        return newscore;
    }

    render(){
        return(
            <div>Score : {this.computeScore()}</div>
        )
    }
}

export default Score;