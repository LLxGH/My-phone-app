import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';

export default function FormDialog({onCreation, contactsState}) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("")
    const pathUrl='/persons';

    function handleSave() {
        console.log(name);
        console.log(phone);
    }
    const newContact = {
        name: name,
        phone: phone
    }

    axios.post(pathUrl, newContact)
        .then(resp => {
            console.log(resp.data);

            // option 1
            // contacts.push(resp.data);
            // setContacts([...contacts]);
            
            // option 2
            onCreation(resp.data);
        })
        .catch(error => {
            console.log(error);
        });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Fab color="primary" size="small" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Contact</DialogTitle>
                <DialogContent>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="Phone"
                        type="email"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSave}>Save</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}