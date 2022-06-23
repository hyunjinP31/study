import './App.css';
import styled from 'styled-components'
import Buttons from './Components/Buttons';
import Dialog from './Components/Dialog';
import { useState } from 'react';
import Box from './Components/Box';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 50px;
  border: 1px solid black;
  padding: 10px;
`;

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = ()=>{
    setDialog(true);
  }
  const onCancel = ()=>{
    setDialog(false);
    console.log('취소');
  }
  const onConfirm = ()=>{
    setDialog(false);
    console.log('확인');
  }

  return (
    <div className="App">
      <>
        <AppBlock>
          <Buttons> BUTTON1 </Buttons>
          <Buttons> BUTTON2 </Buttons>
          <Buttons onClick={onClick}> BUTTON3 </Buttons>
        </AppBlock>
        <Dialog title="정말 삭제하시겠습니까?" confirmText="삭제" cancelText="취소" visible={dialog} onCancel={onCancel} onConfirm={onConfirm}>
          데이터를 삭제하시겠습니까?
        </Dialog>
        <Box></Box>
      </>
      
    </div>
  );
}

export default App;
