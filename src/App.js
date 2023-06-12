import { useMemo , useState } from 'react';
import "./styles.css";

const DEFAULT_WEIGHT = 0;
const DEFAULT_HEIGHT = 0;

export default function App() {
  const [weight, setWeight] = useState(DEFAULT_WEIGHT)
  const [height, setHeight] = useState(DEFAULT_HEIGHT)


function onWeightChange(event){
  const inputWeight = event.target.value;
  setWeight(inputWeight)
}

function onHeightChange(event){ 
  const inputHeight = event.target.value;
  setHeight(inputHeight)
  
}

const output = useMemo(() => {
  const calculatedHeight = height / 100;
  return (weight / (calculatedHeight * calculatedHeight)).toFixed(1);
}, [weight, height]);


  return(
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-selection">
        <p className="slider-output">Weight: {weight}kg</p>
        <input
          className="input-slider"
          onChange={onWeightChange}
          type="range"
          step="1"
          min="40"
          max="220"
        />
        <p className="slider-output">Height: {height}cm</p>
        <input 
        className='input-slider'
        onChange={onHeightChange}
        type='range'
        step="1"
        min="140"
        max="240" />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  )

}