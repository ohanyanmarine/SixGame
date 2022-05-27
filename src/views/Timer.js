import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setChangeStageAction} from '../store/actions';
import {gameDifficulty} from '../store/selectors';

export default function Timer() {
  const [seconds, setSeconds] = useState(10);
  const dispatch = useDispatch();
  const difficulty = useSelector(gameDifficulty);

  useEffect(() => {
    let interval = null;
    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds !== 0) {
      clearInterval(interval);
    } else if (seconds === 0) {
      dispatch(setChangeStageAction(difficulty));
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return seconds;
}
