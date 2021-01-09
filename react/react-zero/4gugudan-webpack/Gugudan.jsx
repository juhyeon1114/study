const React = require('react');
const { useState, useRef } = React;

const GuGudan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9)); //구조분해할당
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if (parseInt(value) === first*second) {
            setResult( prevResult => {
                return `${value} 정답`;
            }); //prev 로 상태를 바꿔주면 비동기 문제가 생기지 않는다
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
            setCount(count+1);
        } else {
            setResult('오답');
            setValue('');
        }
        inputRef.current.focus();
    }
    const onChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <div>{first} X {second} = ?</div>
            <form onSubmit={onSubmit}>
                <input ref={inputRef} className="world" htmlFor="hello" type="number" value={value} onChange={onChange}/>
                <button type="submit">입력</button>
            </form>
            <div>{result}</div>
            <div>{count}</div>
        </>
    );
}

module.exports = GuGudan;