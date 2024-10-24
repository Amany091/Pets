import  { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <div className="counter">
            <p>{count}</p>
            <div>
                <button onClick={() => increment()}>+</button>
                <button onClick={() => decrement()}>-</button>
                <button onClick={() => reset()}>Reset</button>
            </div>
        </div>
    )
}

export default Counter
