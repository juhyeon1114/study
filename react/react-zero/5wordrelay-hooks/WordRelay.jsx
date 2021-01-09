const React = require('react');
const {useState, useRef}  = React;

const WordRelay = () => {
    const [word, setWord] = useState('끝말잇기');
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (word[word.length - 1] === value[0]) {
            setResult('맞음');
            setWord(value);
            setValue('');
        } else {
            setResult('틀림');
            setValue(e.target.value);
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return (
        <>
            <div>
                <div>{word}</div>
                <form onSubmit={onSubmitForm}>
                    <label htmlFor="thisislabel"></label>
                    <input ref={inputRef} value={value} onChange={onChangeInput}/>
                    <button className="thisisclass" type="submit">입력</button>
                </form>
                <div>{result}</div>
            </div>
        </>
    );
    
}

export default WordRelay;