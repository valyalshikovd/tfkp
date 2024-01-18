import {useCallback, useEffect, useRef, useState} from "react";
import Button from '@mui/material/Button';
import Page from "./Page";



function App() {
    const [mode , setMode] = useState(3);
    const [isChoised, setChoised] = useState(false)
    function modeChange(mode) {
        setMode(mode)
        setChoised(true)
    }

  return (
    <div className="App">
        { isChoised ?
            <div>
                <Page mode={mode}></Page>
            </div>
            :
        <div>
            <Button onClick={ () => modeChange(1)}>на 3</Button>
            <Button onClick={ () => modeChange(2)}>на 4</Button>
            <Button onClick={ () => modeChange(3)}>Все</Button>
        </div>
        }

    </div>
  );
}

export default App;
