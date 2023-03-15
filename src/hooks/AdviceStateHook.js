import {useState} from 'react';

const UseAdviceState = (initialValue) => {

    const [value, setValue] = useState(initialValue);
    
    return [value, setValue];
}

export default UseAdviceState;