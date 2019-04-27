import React, {Component} from 'react'
import Score from './Score.js'

class Player extends Component{
    constructor(props){
        super(props);
        this.state = {
            mental: 0,
            hexwater: 0,
            pyramid: 0,
            onion: 0,
            date: 1,
        };
        this.resetGameState = this.resetGameState.bind(this);
        this.applyHexwater = this.applyHexwater.bind(this);  
        this.applyPyramid = this.applyPyramid.bind(this);  
        this.applyOnion = this.applyOnion.bind(this);  
        this.applyGame = this.applyGame.bind(this);   
        this.applySleep = this.applySleep.bind(this); 
    }
    // lifecyles
    shouldComponentUpdate(nextProps, nextState){
        /*
        const mentalFlag = this.state.mental === nextState.mental;`
        const hexwaterFlag = this.state.hexwater === nextState.hexwater;`
        const pyramidFlag = this.state.pyramid === nextState.pyramid;
        const onionFlag = this.state.onion === nextState.onion;
        return !(mentalFlag && hexwaterFlag && pyramidFlag && onionFlag);
        */
       return this.state.date !== nextState.date
    }
    // initialize state before mount
    componentWillMount(){
        this.setState({
            mental: 100,
            hexwater: 0,
            pyramid: 0,
            onion: 0,
            date: 1,
        })
    }

    // reset the game
    resetGameState(){
        console.log("reset")
        const {handleGameState} = this.props;
        this.setState({
            mental: 100,
            hexwater: 0,
            pyramid: 0,
            onion: 0,
            date: 1,
        });
        handleGameState(false, false);
    }

    // handlers for player actions
    applyHexwater(){
        const {mental, hexwater, date} = this.state;
        // random int 1~16
        const up = Math.floor(Math.random()*16)+1;
        console.log("studied hexwater, add " + up);
        // update state
        this.setState({
            ...this.state,
            mental: Math.max(0, mental - 10),
            hexwater: Math.min(100, hexwater + up),
            // add date
            date: date + 1,
        });
        console.log("exectued setstate");
    }
    applyPyramid(){
        const {mental, pyramid, date} = this.state;
        // random int 1~16
        const up = Math.floor(Math.random()*16)+1;
        console.log("studied pyramid, add " + up);
        // update state
        this.setState({
            ...this.state,
            mental: Math.max(0, mental - 10),
            pyramid: Math.min(100, pyramid + up),
            // add date
            date: date + 1,
        });
        console.log("exectued setstate");
    }
    applyOnion(){
        const {mental, onion, date} = this.state;
        console.log("assignment onion, add 20");
        // update state
        this.setState({
            ...this.state,
            mental: Math.max(0, mental -5),
            onion: Math.min(100, onion + 20),
            // add date
            date: date + 1,
        });
        console.log("exectued setstate");
    }
    applyGame(){
        const {mental, date} = this.state;
        // random int 10, 20, 30, 40
        const up = (Math.floor(Math.random()*4) + 1) * 10;
        console.log("played game, add " + up);
        // update state
        this.setState({
            ...this.state,
            mental: Math.min(100, mental + up),
            // add date
            date: date + 1,
        })
    }
    applySleep(){
        const {mental, date} = this.state;
        console.log("sleep, add 25");
        // update state
        this.setState({
            ...this.state,
            mental: Math.min(100, mental + 25),
            // add date
            date: date + 1,
        })
    }

    // main render functions
    render(){
        // for Game states, not ended or win or lose
        const {handleGameState} = this.props;
        const {mental, hexwater, pyramid, onion, date} = this.state;
        if (mental === 0){
            handleGameState(true, true);
        }
        if (date > 40 && mental > 0){
            handleGameState(true, false);
        }
        // render!
        return(
            <div>
                <h4>플레이어 상황</h4><br/>
                날짜 : {date}<br/>
                멘탈: {mental}<br/>
                육각수분석 이해도 : {hexwater}<br/>
                피라미드명상 이해도 : {pyramid}<br/>
                양파욕하기 과제 : {onion}<br/>
                <button onClick={this.applyHexwater}>공부하기 : 육각수 개론</button><br/>
                <button onClick={this.applyPyramid}>공부하기 : 피라미드 명상론</button><br/>
                <button onClick={this.applyOnion}>과제하기 : 양파에게 욕하기</button><br/>
                <button onClick={this.applyGame}>게임하기 : 야스오는 과학</button><br/>
                <button onClick={this.applySleep}>명상하기 : 개운한 꿀잠타임</button><br/>
                <Score mental={mental}
                        hexwater = {hexwater}
                        pyramid = {pyramid}
                        onion = {onion}/>
                <button onClick={this.resetGameState}>다시하기 : 빠른손절후 휴학</button>
            </div>
        )
    }
}

export default Player;