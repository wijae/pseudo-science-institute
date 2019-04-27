import React, { Component } from 'react';

class GraphComponent extends Component {
    componentDidMount() {
        this.updateCanvas();
    }
    componentDidUpdate() {
        this.updateCanvas();
    }
    updateCanvas() {
        const { can_width, can_height, stick_width, stick_height, contents, gap, margin_down, margin_left } = this.props;
        const ctx = this.refs.canvas.getContext('2d');
        var i;
        console.log("Canvas updated");
        ctx.clearRect(0, 0, can_width, can_height);
        for (i = 0; i < contents.length; i++) {
            var h = parseFloat(stick_height) * parseFloat(contents[i].val) / parseFloat(contents[i].max);
            ctx.fillStyle = contents[i].color;
            ctx.fillRect(margin_left + i * (stick_width + gap), can_height - margin_down - h, stick_width, h);
        }
        ctx.fillStyle = "#000000"

        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(0, can_height - margin_down);
        ctx.lineTo(can_width, can_height - margin_down);
        ctx.stroke();
    }
    render () {
        const { can_width, can_height } = this.props;
        return (
            <div>
                <canvas ref="canvas" width={can_width} height={can_height} />
            </div>
        )
    }
}

export default GraphComponent;