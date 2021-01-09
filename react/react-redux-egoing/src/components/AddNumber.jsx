import React, {useState} from 'react';

const AddNumber = (props) => {
  const [size, setSize] = useState(1);

  const onClickPlusBtn = () => {
    console.log(props);
    props.onClickPlusBtn(size);
  };
  const onChangeSize = (e) => {
    setSize(e.target.value);
  };

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={onClickPlusBtn}></input>
      <input type="text" value={size} onChange={onChangeSize}></input>
    </div>
  )
};

export default AddNumber;