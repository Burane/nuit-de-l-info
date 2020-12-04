import React, { Suspense } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import Loader from '../loader/Loader'

const useStyles = makeStyles((theme) => ({
    test: {
        marginLeft: 'auto'
    }
}));


function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const classes = useStyles();

    const { t, i18n } = useTranslation();

    const handleClose = (event) => {
        setAnchorEl(null);
        i18n.changeLanguage(event.currentTarget.id);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" color="inherit" aria-haspopup="true" onClick={handleClick}>
                Language
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem id="fr" onClick={handleClose}>Français</MenuItem>
                <MenuItem id="l33tsp34k" onClick={handleClose}>l33t sp34k</MenuItem>
            </Menu>
        </div>
    );
}
export default function languageSelector() {
    return (
        <Suspense fallback={<Loader />}>
            <SimpleMenu />
        </Suspense>
    )
}