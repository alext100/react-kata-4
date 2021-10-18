import './App.css';
import Button from './Components/Button';
import { useState } from 'react';

function App() {

    const [firstNumber, setFirstNumber] = useState(1);

    const increment = () => {
        if (firstNumber >= 0 && firstNumber !== 16) {
            setFirstNumber(firstNumber + 1);
        }
    }

    const decrement = () => {
        if (firstNumber > 0 && firstNumber <= 16) {
            setFirstNumber(firstNumber - 1);
        }
    }

    return (
        <>
            <Button classButton="button" text="<<" actionOnClick={decrement} />
            <Button classButton="number button" text={firstNumber} />
            <Button classButton="number button" text={firstNumber + 1} />
            <Button classButton="number button" text={firstNumber + 2} />
            <Button classButton="number button" text={firstNumber + 3} />
            <Button classButton="number button" text={firstNumber + 4} />
            <Button classButton="button" text=">>" actionOnClick={increment} />
        </>
    );
}

export default App;
