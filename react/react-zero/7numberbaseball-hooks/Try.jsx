import React, {memo} from 'react';
import TryList from './TryList';

const Try = memo((props) => {
    return (
        <>
            <ul>
                {props.tries.map((v, idx) => <TryList value={v} index={idx}></TryList> )}
            </ul>
        </>
    );
    
});

export default Try;