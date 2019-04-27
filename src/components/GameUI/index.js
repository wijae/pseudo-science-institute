import React, { Component } from 'react';
import GraphComponent from './GraphComponent.js'
import CalendarComponent from './CalendarComponent.js'
import './GameUI.css'

class GameUI extends Component {		
    render () {
        const { mental, hexwater, pyramid, onion, date, day } = this.props;
        var progression = [
            {
                val: hexwater,
                max: 100,
                color: "#FF0000"
            },
            {
                val: pyramid,
                max: 100,
                color: "#00FF00"
            },
            {
                val: onion,
                max: 100,
                color: "#0000FF"
            }
        ]
        const graph_width = 160;
        const graph_height = 90;
        const graph_stick_width = 40;
        const graph_gap = 10;
        const graph_margin_up = 10;
        const graph_margin_down = 10;
        const graph_margin_left = 10;
        const graph_margin_right = 10;
        const graph_stick_height = graph_height - graph_margin_up - graph_margin_down;

        var cal_width = 360;
        var cal_height = 220;
    

        return (
            <div id="back">
                <div id="prog">
                    {/* left up */}
                    <div id="date">{day === 0? (<div>{date}일 낮</div>) : (<div>{date}일 밤</div>)}</div>
                    <div id="explain">설명설명설명설명설명설명설명설명</div>
                    <div id="progress">
                        <div id="mental">멘탈: {mental}%</div>
                        <div id="graph">
                            {/* progress bar */}
                            <div>진척도</div>
                            <GraphComponent
                            can_width={graph_width}
                            can_height={graph_height}
                            contents={progression}
                            stick_width={graph_stick_width}
                            stick_height={graph_stick_height}
                            gap={graph_gap}
                            margin_up={graph_margin_up}
                            margin_down={graph_margin_down}
                            margin_left={graph_margin_left}
                            margin_right={graph_margin_right}
                            />
                            <div id="graph_text">육각수 피라미드 양파욕</div>
                        </div>
                    </div>
                </div>

                <div id="calendar">
                    {/* Calendar */}
                    <CalendarComponent
                    can_width={cal_width}
                    can_height={cal_height}
                    />
                </div>

                <div>
                    {/* Buttons */}
                    <button onClick={this.handleAction} id="bt0">공부하기</button>
                    <button onClick={this.handleAction} id="bt1">양파욕하기</button>
                    <button onClick={this.handleAction} id="bt2">리신하기</button>
                    <button onClick={this.handleAction} id="bt3">명상하기</button>
                </div>
            </div>
        )
		}
		
    handleAction = (e) => {
        const {handlePlayerState} = this.props;
        const key = e.target.id;
        handlePlayerState(key);    
		}
}

export default GameUI;