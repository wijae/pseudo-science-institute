import React, { Component } from 'react';

class CalendarComponent extends Component {
    componentDidMount() {
        this.updateCanvas();
		}
		
    componentDidUpdate() {
        this.updateCanvas();
		}
		
    render () {
        const { can_width, can_height } = this.props;
        return (
            <div>
                <canvas ref="canvas" width={can_width} height={can_height} />
            </div>
        )
		}
		
    updateCanvas() {
        const { can_width, can_height } = this.props;
        const ctx = this.refs.canvas.getContext('2d');
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, can_width, can_height);
    }
}

export default CalendarComponent;