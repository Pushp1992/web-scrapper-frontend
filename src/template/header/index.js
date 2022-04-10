import React from 'react';
import classnames from 'classnames';
import Button from '@material-ui/core/Button';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import Grid from '@material-ui/core/Grid';
import './header.css';

const styles = {
    direction: 'row',
    alignItems: 'center',
}


const Header = (props) => {
    return (
        <div className="header-container">
            <div className="header-left">
                <div>Location</div>
                <div>{props.location}</div>
            </div>
            <div className="header-right">
                <Button className="header-btn" variant="outlined" size="small" color="primary" startIcon={<MyLocationIcon />}>
                    <label>Change location</label>
                </Button>
            </div>
        </div>
    )
}

export default Header;
