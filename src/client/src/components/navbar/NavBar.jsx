import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import MenuListComposition from './MenuListComposition';
import LanguageSelector from './LanguageSelector';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },

};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton  component={Link} to="/home" edge="start" className={classes.menuButton} color="inherit" aria-label="home">
                        <HomeIcon fontSize="large" />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>Home</Typography>
                    <LanguageSelector />
                    <MenuListComposition />
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);