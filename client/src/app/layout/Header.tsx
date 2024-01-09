import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Prop {
    darkMode: boolean;
    handleThemeChange: ()=> void;
}

export default function Header({darkMode, handleThemeChange}: Prop) {
   
    return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
            STORE
            </Typography>
            <Switch checked={darkMode} onChange={handleThemeChange}/>
        </Toolbar>
    </AppBar>
    ) 
}