// import React from 'react';
import './sunglass.css'
import Watch from '../watch/watch';
import { add, multiply, divideTheFirstNumberByTHeSecondNumber as divide} from '../../Utils/calculate';
import { useEffect } from 'react';
// import add from '../../Utils/calculate';

const Sunglass = () => {
    const first = 55;
    const second = 199;
    const sum = add(first, second)
    const mult = multiply(first, second)
    const vaag = divide(first, second)

    useEffect()
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;