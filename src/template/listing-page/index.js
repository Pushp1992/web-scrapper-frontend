import React, { useState, useEffect } from 'react';
import Header from '../header';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../global.css';
import './listing-page.css';

let data = [];

const ListingPage = () => {
    const [restaurantList, setRestaurantList] = useState({});
    useEffect(() => {
        setRestaurantList(!data);
    }, []);

    const headerProps = {
        location: restaurantList?.neighborhood || '',
    };

    return (
        <div className="listingpage-container">
            <Header className="listingpage-container--header" {...headerProps} />
            <Container className="listingpage-container--item" maxWidth="lg">
                <div className="listpage-count">
                    <span>{`${restaurantList.restaurants?.length} Restaurants`}</span>
                </div>
                {
                    restaurantList.restaurants?.length &&
                    <Grid container spacing={3}>
                        {
                            restaurantList.restaurants.map((item) => {
                                return (
                                    <Grid className="card-grid" key={item.id} item xs={12} sm={6} md={4} lg={4}>
                                        <Card className="card-container">
                                            <CardActionArea>
                                                <CardMedia
                                                    className="cardMedia"
                                                    image={item.image}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="h1">
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="textSecondary" component="p">
                                                        <ul className="card-container--tags">
                                                            {
                                                                item?.tags?.length &&
                                                                item.tags.map((tag, index) => {
                                                                    return (
                                                                        <li key={index}>{tag}</li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button className="card-container--quick-view-btn" size="small" color="primary">
                                                    Quick View
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                }
            </Container>
        </div>
    )
}

export default ListingPage;