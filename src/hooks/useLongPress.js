import { useRef, useState } from "react";

export const useLongPress = (duration = 600) => {
  const [press, setPress] = useState(false);

  // LONG PRESS
  let timerRef = useRef();

  // start timer when mouseDown or touchStart
  const downHandler = () => {
    // if the click/touch is duration(ms) long then it is a long press
    timerRef.current = setTimeout(() => {
      setPress(true);
    }, duration);
  };

  // else discard the press and remove timer
  const upHandler = () => {
    clearTimeout(timerRef.current);
  };

  return [press, setPress, downHandler, upHandler];
};
