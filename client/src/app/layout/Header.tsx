import { ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, List, ListItem, Switch, Toolbar, Typography, Badge } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    {title: 'Catalog', path: '/Catalog'},
    {title: 'About', path: '/About'},
    {title: 'Contact', path: '/Contact'}
]

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
            <List sx={{display:'flex'}}>
                {midLinks.map(({title, path}) => (
                <ListItem 
                component={NavLink}
                to={path}
                key={path}
                sx={{color: 'inhreit', typography: 'h6'}}>
                    {title.toUpperCase()}
                </ListItem>
            ))}</List>
            <IconButton to='/basket' size='large' edge='start' colour='inherit' sx={{mr:2}}>
                <Badge badgeContent='4' color='secondary'>
                    <ShoppingCart/>
                </Badge>
            </IconButton>
        </Toolbar>
    </AppBar>
    ) 
}