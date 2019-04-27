import React, {Component} from 'react'
import Player from './Player.js'
import GameUI from './GameUI.js'

class GameCore extends Component{
    constructor(props){
        super(props);
        this.state = {
            mental: 100,
            hexwater: 0,
            pyramid: 0,
            onion: 0,
            date: 1,
            day: 0,
            hasEnd: false,
            hasLose: false,
        }
        this.getGameState = this.getGameState.bind(this);
        this.changeGameState =this.changeGameState.bind(this);
        this.changePlayerState = this.changePlayerState.bind(this);
        this.applyStudy = this.applyStudy.bind(this);
        this.applyOnion = this.applyOnion.bind(this);  
        this.applyGame = this.applyGame.bind(this);   
        this.applySleep = this.applySleep.bind(this);
    }
    
    applyStudy(){
        const {mental, hexwater, pyramid, date} = this.state;
        // random int 1~16
        const up = Math.floor(Math.random()*5)+1;
        const up2 = Math.floor(Math.random()*5)+1;
        // update state
        this.setState({
            ...this.state,
            mental: Math.max(0, mental - 20),
            hexwater: Math.min(100, hexwater + up),
            pyramid: Math.min(100, pyramid + up2),
            // add date
            date: date + 1,
        });
        console.log("exectued applyStudy");
    }

    applyOnion(){
        const {mental, onion, date} = this.state;
        // update state
        this.setState({
            ...this.state,
            mental: Math.max(0, mental -5),
            onion: Math.min(100, onion + 20),
            // add date
            date: date + 1,
        });
        console.log("exectued applyOnion");
    }

    applyGame(){
        const {mental, date} = this.state;
        // random int 10, 20, 30, 40
        const up = (Math.floor(Math.random()*4) + 1) * 10;
        // update state
        this.setState({
            ...this.state,
            mental: Math.min(100, mental + up),
            // add date
            date: date + 1,
        })
        console.log("executed applyGame")
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
        console.log("executed applySleep");
    }

    changeGameState(end, lose){
        this.setState({
            ...this.state,
            hasEnd: end,
            hasLose: lose,
        })
    }
    changePlayerState(bt){
        switch(bt){
            case 'bt0': this.applyStudy(); break;
            case 'bt1': this.applyOnion(); break;
            case 'bt2': this.applyGame(); break;
            case 'bt3': this.applySleep(); break;
            default: break;
        }
    }
    getGameState(){
        if(this.state.hasEnd){
            if(this.state.hasLose){
                return "패배 ㅠㅠㅠ"
            }
            else{
                return "완료!!"
            }
        }
        else{
            return "진행중..."
        }
    }
    render(){
        const { mental, hexwater, pyramid, onion, date, day } = this.state;
        return(
            <div>
                <GameUI mental={mental}
                    hexwater={hexwater}
                    pyramid={pyramid}
                    onion={onion}
                    date={date}
                    day={day}
                    handlePlayerState={this.changePlayerState}/>
                {/*
                <h3>게임 상황 : {this.getGameState()}</h3>
                <Player handleGameState={this.changeGameState}/>
                */}
            </div>
        )
    }
}

export default GameCore;