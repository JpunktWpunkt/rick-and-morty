import  React, { useState, useEffect } from 'react';


const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const storedValue = JSON.parse(window.localStorage.getItem(key));
        setValue(storedValue);
    }, [key]);


    const storedValue = (newValue) => {
        window.localStorage.setItem(key,JSON.stringify(newValue));
        setValue(newValue);
    }
    return [value, storedValue];
};

const Checkbox = ({id}) => {
   const [checked, setChecked] = useLocalStorage(id, false);
   return <div>
       <input type="checkbox" checked={checked} onChange={() => {
       setChecked(!checked)
       }
       } />
   </div>;
};


export default Checkbox;