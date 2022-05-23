import React, {useEffect, useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Snackbar, Alert, Avatar, Button, Select, FormControl, MenuItem, InputLabel, Typography, AccordionDetails, AccordionSummary, Accordion} from "@mui/material";
import {grey} from "@mui/material/colors";

const List = ({data, usersToPass}) => {

    const [users, setUsers] = useState(usersToPass);
    const [selectedUsers, setSelectedusers] = useState("");
    const [openAlert, setOpenAlert] = useState(false);
    const [newUsers,setNewUsers] = useState([]);

    const onChangeSelect = async (evt) => {
        setSelectedusers(evt.target.value)
    }

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
            setOpenAlert(false);
    };

    const addNewUsers = () => {
        if(selectedUsers !== ""){

            if(!newUsers.includes(selectedUsers)){
                setNewUsers([...newUsers,selectedUsers]);
                setOpenAlert(true);
            }
        }
    }


    return (
        <div style={{margin:10, width:"80%"}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                            {data.email ? <Avatar style={{marginRight:5}}sx={{ bgcolor: grey }}>{data.email.charAt(0).toUpperCase()}</Avatar> : []}
                            <h3>{data.email || data.acronym}</h3>
                        </div>

                    </Typography>
                </AccordionSummary>
                <AccordionDetails style={{display:"flex",justifyContent:"left", alignItems:"top"}}>
                    {data.email ?
                        <Typography>
                            <li>
                                <text>Role: {data.role}</text>
                            </li>
                            <li>
                                <text>Ore per GIORNO: {data.hourPerDay}</text>
                            </li>
                            <li>
                                <text>Ore per SETTIMANA: {data.hourPerWeek}</text>
                            </li>
                            <li>
                                <text>Aggiornato il : {data.updatedAt.substring(0, 10)}</text>
                            </li>
                            <li>
                                <text>Ultimo login: {data.last_login.substring(0, 10)}</text>
                            </li>
                    </Typography> :
                        <Typography style={{display:"flex", flex:"1"}}>
                            <div>
                                <h3>{data.description}</h3>
                            <li>
                                <text>Ore di lavoro stimate: {data.estimatedEffortHours}</text>
                            </li>
                            <li>
                                <text>Settimante stimate: {data.estimatedWeeks}</text>
                            </li>
                            <li>
                                <text>Iniziato il : {data.startDate.substring(0, 10)}</text>
                            </li>
                            <li>
                                <text>Scade il : {data.endDate.substring(0, 10)}</text>
                            </li>
                                <h3>Utenti che ci lavorano</h3>
                                {newUsers.length > 0 ? newUsers.map((u)=>{
                                    return <li>
                                        <strong>{u}</strong>
                                    </li>
                                }) : <text>...</text>}
                            </div>
                            <div style={{display:"flex", flex:"1", justifyContent:"flex-end", alignItems:"flex-end"}}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Utenti</InputLabel>
                                    <Select
                                        disabled={openAlert}
                                        value={selectedUsers.email} //imposta utenti
                                        onChange={onChangeSelect} //setta valore
                                        autoWidth
                                        label="Utenti"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>

                                        {users.map((u)=>{
                                            return <MenuItem value={u.email}>{u.email}</MenuItem>
                                        })}
                                    </Select>
                                </FormControl>
                                <Button variant="contained" style={{marginBottom:8}} color="success" onClick={addNewUsers}>Aggiungi</Button>
                            </div>
                    </Typography>}

                </AccordionDetails>
            </Accordion>
            <Snackbar
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    Utente <strong>{selectedUsers}</strong> aggiunto con successo!
                </Alert>
            </Snackbar>
        </div>
    );
};

export default List;
