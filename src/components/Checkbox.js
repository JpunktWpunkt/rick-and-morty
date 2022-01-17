import  React, {useState} from 'react';


const useLocalStorage = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    return useState(value, setValue);
};


const Checkbox = () => {
   const [checked, setChecked] = useLocalStorage(false);
   return <div>
       <input type="checkbox" checked={checked} onChange={() => {
       setChecked(previousState => !previousState)
       }
       } />
   </div>;
};


export default Checkbox;