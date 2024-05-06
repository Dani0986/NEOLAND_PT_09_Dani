import { useEffect, useState } from "react"

export const useDebounce = (value,delay) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay|| 200);
  
    return () => {
      clearTimeout(timer)
    }
  }, [delay,value])
  
  return debouncedValue
  
}

