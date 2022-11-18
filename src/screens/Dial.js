import { Avatar, Button, Grid } from "@mui/material";
import { blue, } from "@mui/material/colors";
import { useState } from "react";
import CallIcon from '@mui/icons-material/Call';

export default function Dial() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    const [display, setDisplay] = useState('');
    function add(event) {
        const newDisplayValue = display + event.target.textContent;
        setDisplay(newDisplayValue);
    }
    function clear() {
        setDisplay('');
    }
    return <>

        <h1>Dialog screen</h1>
        <b>{display}</b>
        <Grid justifyContent='center'  container spacing={{ sm: 2 }} columns={{ sm: 3 }}>

            {numbers.map((number, i) => (
                <Grid item sx='auto' sm={1} key={i}>
                    <Avatar sx={{ height:55, width:55, bgcolor: blue[500], margin:'auto' }} onClick={add}>{number}</Avatar>
                </Grid>
            ))}


        </Grid>


        <Button variant='contained' startIcon={<CallIcon />}> </Button>







    </>
}