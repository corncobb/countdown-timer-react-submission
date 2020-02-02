import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles(() => ({
    root: {
        width: 300,
        marginTop: '60px'
    },
}));

const marks = [
    {
        value: 1,
        label: '1x',
    },
    {
        value: 1.5,
        label: '1.5x',
    },
    {
        value: 2,
        label: '2x',
    },

];



const Controls = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                defaultValue={1}
                onChange={props.timerSpeedChangedHandler}
                step={.5}
                marks={marks}
                min={1}
                max={2}
            />
        </div>
    )
}

export default Controls;
