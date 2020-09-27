import React, {useEffect, useState} from 'react';

const DynamicRouter = (props) => {
    const [params, setParams] = useState('');

    useEffect(()=>{
        console.group();
        console.log(props.location);
        console.log(props.history);
        console.log(props.match);
        console.groupEnd();
        setParams(props.match.params.name);

        // 쿼리스트링 받기
        const urlSearchParams = new URLSearchParams(props.location.search.slice(1));
        console.log(urlSearchParams.get('hello')); // hello라는 key 값을 갖는 query를 가져옴
        
    }, [params])

    return (
        <>
            <div>DynamicRouter</div>
            <div>params : {params}</div>
        </>
    )
}

export default DynamicRouter;