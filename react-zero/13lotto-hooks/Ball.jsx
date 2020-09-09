import React, {memo} from 'react';

const Ball = memo((props) => {
    let back = null;
    if (props.number <= 10) {
        back = 'red';
    } else if (props.number <= 20) {
        back = 'orange';
    } else if (props.number <= 30) {
        back = 'yellow';
    } else if (props.number <= 40) {
        back = 'green';
    } else {
        back = 'blue';
    }
    
    return (
        <>
            <div className="ball" style={{'backgroundColor':back}}>{props.number}</div>
        </>
    );
});

export default Ball;