import React, {PureComponent} from 'react';

class Ball extends PureComponent {
    render() {
        let back = null;
        if (this.props.number <= 10) {
            back = 'red';
        } else if (this.props.number <= 20) {
            back = 'orange';
        } else if (this.props.number <= 30) {
            back = 'yellow';
        } else if (this.props.number <= 40) {
            back = 'green';
        } else {
            back = 'blue';
        }
        
        return (
            <>
                <div className="ball" style={{'backgroundColor':back}}>{this.props.number}</div>
            </>
        );
    }
}

export default Ball;