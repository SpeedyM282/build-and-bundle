
import React from 'react';
import './App.scss';


interface CounterBtn {
  label: string;
  onClick: (event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

const CounterBtn: React.FunctionComponent<CounterBtn> = ({ label, onClick }) => {

  return (
    <div className="counter-btn" onClick={onClick}>
      {label}
    </div>
  )
}


interface CounterDisplayProps {
  count: number;
};

const CounterDisplay: React.FunctionComponent<CounterDisplayProps> = ({ count }) => {
  return (
    <div className='counter-display' >{count}</div>
  );
}

const App: React.FunctionComponent = () => {
  const [count, setCount] = React.useState<number>(0);

  const inc = (event) => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  }

  return (
    <div className='app' >
      <CounterBtn label={"-"} onClick={dec} />
      <CounterDisplay count={count} />
      <CounterBtn label={"+"} onClick={inc} />
    </div>
  )
}

export default App;
