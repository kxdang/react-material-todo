import { useState, useEffect } from "react";

function useLocalStorageState(key, defaultValue) {
  //make piece of state, based off of value in localstorage
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      val = defaultValue;
    }
    return val;
  });

  //useEffect to update localStorage when state changes
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
}

export default useLocalStorageState;
