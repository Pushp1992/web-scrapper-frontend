import React from 'react';
import Header from '../header';
import { useLocation } from "react-router"
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ResultPage = () => {

    const location = useLocation();

    console.log(location);

    const headerProps = {
        location: 'dominos' || '',
    };

    return (
        <div className="listingpage-container">
            <Header className="listingpage-container--header" {...headerProps} />
            <Container className="listingpage-container--item" maxWidth="lg">
                <h4>Write your condition here</h4>
            </Container>
        </div>
    )
}

export default ResultPage;
