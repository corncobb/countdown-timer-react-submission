import React, { useState, useEffect } from 'react';

import Fab from '@material-ui/core/Fab';
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

import Cockpit from './components/Cockpit'
import Timer from './components/Timer'
import Controls from './components/Controls'

const Home = () => {

    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);

    // When the timer is active or not
    const [isActive, setIsActive] = useState(false);

    // To detect when the start button has been pressed
    const [hasStarted, setHasStarted] = useState(false);

    // Timer speed... duh
    const [timerSpeed, setTimerSpeed] = useState(1);

    // To make a copy of the start minute. There might be a better way to do this
    const [startMinute, setStartMinute] = useState(1)

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (minutes === 0 && seconds === 1) {
                    setIsActive(false)
                    clearInterval(interval);
                }
                else if (seconds === 0) {
                    setMinutes(minutes => minutes - 1);
                    setSeconds(60);
                }
                setSeconds(seconds => seconds - 1)
                // Clears interval once reaches 0

            }, 1000 / timerSpeed);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds, minutes, timerSpeed]);

    const setMinutesHandler = (e) => {
        setMinutes(parseInt(e.target.value))
    }

    function toggle() {
        setIsActive(!isActive);
    }

    const timerSpeedChangedHandler = (event, num) => {
        setTimerSpeed(num);
    }

    const handleTimerStart = () => {
        setIsActive(true);
        setHasStarted(true);
        setStartMinute(minutes);
    }

    const resetHandler = () => {
        setHasStarted(false);
        setIsActive(false);
        setMinutes(1)
        setSeconds(0)
    }

    return (
        <React.Fragment>
            <Cockpit
                minutes={minutes}
                changeTime={setMinutesHandler}
                handleTimerStart={handleTimerStart}
                reset={resetHandler}
                hasStarted={hasStarted}
                isActive={isActive} />

            <Timer minutes={minutes} seconds={seconds} startMinute={startMinute} />
            {hasStarted ? <Fab disabled={minutes === 0 && seconds === 0} onClick={toggle} color="primary" aria-label="add">
                {isActive ? <PauseIcon /> : <PlayArrowIcon />}
            </Fab> : null}
            <Controls timerSpeed={timerSpeed} timerSpeedChangedHandler={timerSpeedChangedHandler} />

        </React.Fragment>
    );
};

export default Home;