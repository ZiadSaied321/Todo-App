import { useEffect, useState } from "react"

const useLocalStorage = (key, defaultValue) => {
    const [value, setValues] = useState(
    JSON.parse(window.localStorage.getItem(key))||defaultValue

    )

    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(value));
    },[key, value])

    return [value, setValues]
}

export default useLocalStorage