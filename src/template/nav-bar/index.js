import React from 'react';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import logo from '../../image/logo-horizontal.svg';
import avatar from '../../image/user-icon.svg';
import './nav-bar.css';

const NavBar = () => {
    return (
        <Grid className="navbar-container" container direction="row" justifyContent="space-between" alignItems="center">
            <Grid className="logo" item xs={3}>
                {/* <span>icon</span>
                <span>deliveroo</span> */}
                <Avatar className="logo-avatar" alt="Deliveroo" src={logo} />
            </Grid>
            <Grid className="username" item xs={3}>
                {/* <Link to='/listing'>List Page</Link> */}
                <Avatar className="user-icon" alt="avatar" src={avatar} />
                <span>Pushp Singh</span>
            </Grid>
        </Grid>
    )
}

export default NavBar;