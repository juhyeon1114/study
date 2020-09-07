import React, {memo} from 'react';

const TryList = memo((props) => {    
    return (
        <>
            <li key={props.idx}>{props.value.try}<br/>{props.value.result}</li>
        </>
    );
 
});

export default TryList;