import './App.css';
import Buttons from './Conponents/Buttons';

function App() {
  return (
    <div className="App">
      <div className='align'>
        <Buttons size="large" color="blue" >BUTTON</Buttons>
        <Buttons size="medium" color="blue">BUTTON</Buttons>
        <Buttons size="small" color="blue">BUTTON</Buttons>
      </div>
      <div className='align'>
        <Buttons size="large" color="black" >BUTTON</Buttons>
        <Buttons size="medium" color="black">BUTTON</Buttons>
        <Buttons size="small" color="black">BUTTON</Buttons>
      </div>
      <div className='align'>
        <Buttons size="large" color="pink" >BUTTON</Buttons>
        <Buttons size="medium" color="pink">BUTTON</Buttons>
        <Buttons size="small" color="pink">BUTTON</Buttons>
      </div>
      <div className='align'>
        <Buttons size="large" color="blue" outline >BUTTON</Buttons>
        <Buttons size="medium" color="black" outline >BUTTON</Buttons>
        <Buttons size="small" color="pink" outline >BUTTON</Buttons>
      </div>
      <Buttons size="large" color="blue" fullWidth>BUTTON</Buttons>
      <Buttons size="large" color="black" fullWidth>BUTTON</Buttons>
      <Buttons size="large" color="pink" fullWidth>BUTTON</Buttons>
    </div>
  );
}

export default App;
