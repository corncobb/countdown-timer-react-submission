import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Cockpit = (props) => {

    return (
        <div>
            {props.hasStarted ? <Button
                onClick={props.reset}
                disabled={props.isActive}
                variant="contained"
                color="secondary">Reset</Button>
                :
                <React.Fragment>
                    <TextField
                        inputProps={{ min: "1", step: "1" }}
                        error={!props.minutes}
                        helperText="Enter a valid number"
                        type="number"
                        value={String(props.minutes)}
                        onChange={props.changeTime}
                        label="Enter minutes"
                        size="small"
                        variant="outlined" />
                    <Button
                        onClick={props.handleTimerStart}
                        disabled={!props.minutes}
                        variant="contained" color="primary">Start</Button>
                </React.Fragment>}
        </div>
    )
}

export default Cockpit;