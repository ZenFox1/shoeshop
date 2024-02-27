import { useEffect,useState,useDelay } from "react";
const useLocalStorage = (name, defaultValue) => {

    const [currentValue, setCurrentValue] = useState(JSON.parse(localStorage.getItem(name)) ?? defaultValue);
    const callback = useDelay(delay, currentValue);

    useEffect(() => {
        localStorage.setItem(name, JSON.stringify(currentValue));
    }, [currentValue]);

    return [currentValue, setCurrentValue];
}

export default useLocalStorage;