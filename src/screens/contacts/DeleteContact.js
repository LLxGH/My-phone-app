import {DeleteOutline} from "@mui/icons-material";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import axios from "axios";
import {useState} from "react";

export default function DeleteContact({contacts,setContacts,contactPos}){
    const [open, setOpen]=useState(false);

    const closeDialog=()=>setOpen(false);
    const openDialog=()=>setOpen(true);
    function remove (){
        const id=contacts[contactPos].id;
        axios.delete('/persons/+id')
            .then(resp=>{
                contacts.splice(contactPos,1);
                setContacts([...contacts]);
                closeDialog();
            })
            .catch (err=>{
                console.log(err);
            })
    }
    return<>
    <DeleteOutline onClick{openDialog}/>
    <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Delete Contact</DialogTitle>
        <DialogContent>
            <Typography>
                Are you sure you wan to delete this contact?<br/>
                Name: {contacts[contactPos].name}<br/>
                Phone: {contacts[contactPos].phone}
            </Typography>
        </DialogContent>
        <DialogActions>
            <Button onClick={closeDialog}>Cancel</Button>
            <Button onClick={remove}>Delete</Button>
        </DialogActions>
    </Dialog>
    </>
}