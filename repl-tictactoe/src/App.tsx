
import React, { FC, useState } from 'react';
import './App.css'

interface SquareProps {
  value: string;
  onChange: (event: React.MouseEvent) => void; // onChange is a function that returns void
}

const Square: FC<SquareProps> = ({value, onChange}) => {
  return (
  <button onClick={onChange} style={{height: '50px', width: '50px'}}>{value}</button>
  )
};

function App() {

  const [value, setValue] = useState(Array(9).fill(null));
  const [xo, setXO] = useState<boolean>(true);

  // let win;

  function handleClick(i: number, event: React.MouseEvent) {
    event.preventDefault();
    if(winner(value) || value[i]) {
      return
    }
    const newArr = value.slice();
    if(xo){
      newArr[i] = 'X';
      setValue(newArr);
      setXO(!xo);
      // win = winner(value);
      console.log("inside if: ", value, win);
    }
    else if(!xo) {
      newArr[i] = 'O';
      setValue(newArr);
      setXO(!xo);
      // win = winner(value);
      // console.log("o: ", value, win);
    }
    console.log("outside if: ", value);
  }

  const win = winner(value);
  console.log("outside function: ", value);
  

  function winner(value: { [key: number]: string | number }) {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i=0; i< win.length; i++){
      const [a,b,c] = win[i];
      if(value[a] && value[a] === value[b] && value[b]=== value[c]) {
        return value[a];
      }
    }
    return null;
  }

  function reset() {
    setValue(Array(9).fill(null));
  }

  const Board = () => {
    return (
      <div>
        <div className='row'>
          <Square value={value[0]} onChange={(event: React.MouseEvent)=>handleClick(0,event)}></Square>
          <Square value={value[1]} onChange={(event: React.MouseEvent)=>handleClick(1,event)}></Square>
          <Square value={value[2]} onChange={(event: React.MouseEvent)=>handleClick(2,event)}></Square>
        </div>
        <div className='row'>
          <Square value={value[3]} onChange={(event: React.MouseEvent)=>handleClick(3,event)}></Square>
          <Square value={value[4]} onChange={(event: React.MouseEvent)=>handleClick(4,event)}></Square>
          <Square value={value[5]} onChange={(event: React.MouseEvent)=>handleClick(5,event)}></Square>
        </div>
        <div className='row'>
          <Square value={value[6]} onChange={(event: React.MouseEvent)=>handleClick(6,event)}></Square>
          <Square value={value[7]} onChange={(event: React.MouseEvent)=>handleClick(7,event)}></Square>
          <Square value={value[8]} onChange={(event: React.MouseEvent)=>handleClick(8,event)}></Square>
        </div>
      </div>
    )
  };

  return (
    <div>
      <p>The winner is {win}</p>
      <Board></Board>
      <button onClick={reset}>Restart</button>
    </div>
  )
}

export default App
