import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    root: {},
    row:
    {
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
        width: '100%',
    },
    h1:
    {
        fontSize: "10rem"
    },
    verticalCenter:
    {
        margin: 'auto 0',
    },
    '@keyframes blinker': {
        '50%': { opacity: 0 }
    },
    blink: {
        animationName: '$blinker',
        animationDuration: '1s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
    },

}));

const Timer = (props) => {

    const classes = useStyles();

    // Returns total seconds left
    const totalSeconds = () => {
        return (props.minutes * 60) + props.seconds
    }

    const displayText = () => {
        if (totalSeconds() === 0) {
            return "Time's Up!"
        } else if (totalSeconds() < (props.startMinute * 60) / 2) {
            return "More than halfway there!"
        }
        return
    }

    return (
        <div>
            <p>{displayText()}</p>
            <div className={classes.h1} style={{ color: totalSeconds() <= 20 ? "red" : "black" }}>
                <div className={totalSeconds() <= 10 ? classes.blink : null}>{props.minutes < 10 ? "0" + props.minutes : props.minutes}:{props.seconds < 10 ? "0" + props.seconds : props.seconds}</div>
            </div>
        </div>
    )
}

export default Timer;


