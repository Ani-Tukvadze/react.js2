import { useEffect, useState } from 'react';
import Button from './Button';

export default function Counter({ start, increase, decrease }) {

    const [number, setNumber] = useState(start || 0);
    const [value, setValue] = useState('');

    function submit (e) {
        e.preventDefault()
        if (value > 0) {
            setNumber(parseInt(value))
        }


    }

    return (

        <div className="Counter">
            <form onSubmit={(e) => submit(e)}>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="number" />
            <button>submit</button>
            </form>
            <h3>Counter</h3>
            <p>{number}</p>
            <Button 
            text={'Increment'}
            onClick={() => {
                setNumber(number + increase);
            }}
          />
            <Button
            text={'Decrement'} 
            onClick={() => {
                if (number > 0) {
                setNumber(number - decrease);
                }else{
                    setNumber(0);
                }
             }}
           />

        </div>
    )
}

