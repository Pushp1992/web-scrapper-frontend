import React, { useState, useEffect } from 'react';
import Header from '../header';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { mediaService } from '../../utils/service';
import { isValidUrl } from '../../utils/input-validation';
import '../global.css';
import './listing-page.css';

let data = [];

const ListingPage = () => {
    const [mediaUrlList, setMediaUrlList] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [webUrlData, setWebUrlData] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    useEffect(() => {
        getUrlList(searchTerm || '');
    }, []);

    const headerProps = {
        location: 'dominos' || '',
    };

    const getUrlList = (data) => {
        mediaService.fetchMediaUrl(data)
            .then(response => {
                if (response.statusCode !== 200) {
                    console.log('No Media Url fetched');
                    return;
                }
                setMediaUrlList(response);
            }).catch(err => {
                console.error(`Error getting URL list. ${err.message}`);
                return;
            });
    };

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setWebUrlData({ ...webUrlData, [name]: value });
    };

    const handleClick = (e) => {
        e.preventDefault();

        const data = Object.values(webUrlData).filter(el => el !== '');
        const isAllurlvalid = isValidUrl(data);

        if (!isAllurlvalid) {
            console.log('One or more entered Web Url format is invalid, please cross check');
            return;
        };

        const requestPayload = {
            url: data
        };

        mediaService.scrapWebUrl(requestPayload)
            .then(response => {
                if (!response) {
                    console.log(`unable to execue the operation`);
                }

                if (response.statusCode !== 200) {
                    console.log(`${response.statusMessage}`);
                    return;
                }
                console.log(`Successfully able to scrap media url(s)`);
            }).catch(err => {
                console.error(`Error scrapping URL(s). ${err.message}`);
                return;
            });
    };

    return (
        <div className="listingpage-container">
            <Header className="listingpage-container--header" {...headerProps} />
            <Container className="listingpage-container--item" maxWidth="lg">
                <Grid container direction="row" spacing={3}>
                    <Grid className="card-grid" item xs={12} sm={6} md={4} lg={4}>
                        <form>
                            <TextField className="inputFieldStyle" label="enter weburl" variant="outlined" color="primary"
                                fullWidth size="small" name="input1" value={webUrlData.input1} onChange={handleChange} />
                            <TextField className="inputFieldStyle" label="enter weburl" variant="outlined" color="primary"
                                fullWidth size="small" name="input2" value={webUrlData.input2} onChange={handleChange} />
                            <TextField className="inputFieldStyle" label="enter weburl" variant="outlined" color="primary"
                                fullWidth size="small" name="input3" value={webUrlData.input3} onChange={handleChange} />
                            <Button variant="contained" color="primary" onClick={handleClick}>Start Scrapping</Button>
                        </form>
                    </Grid>
                    <Grid className="card-grid" item xs={12} sm={6} md={4} lg={4}>
                        <h2>Add anime text here</h2>
                    </Grid>
                </Grid>
                {
                    (mediaUrlList.count !== 0) ?
                        <>
                            <div className="listpage-count">
                                <span>{`Data for ${mediaUrlList.count} Web URL is shown`}</span>
                            </div>
                            <Grid container spacing={3}>
                                {
                                    (mediaUrlList?.data || []).map((itemObject) => {
                                        return (
                                            <Grid className="card-grid" key={itemObject._id} item xs={12} sm={6} md={4} lg={4}>
                                                <Card className="card-container">
                                                    <CardActionArea>
                                                        <CardMedia
                                                            className="cardMedia"
                                                            image={itemObject?.imageList[5].imgUrl}
                                                            title="Contemplative Reptile"
                                                        />
                                                        <CardContent>
                                                            <Typography gutterBottom variant="h6" component="h1">
                                                                {itemObject.name}
                                                            </Typography>
                                                            <Typography variant="body2" color="textSecondary" component="p">
                                                                <a href={itemObject.url} target="_blank">{itemObject.url}</a>
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
                        </>
                        : <h2>No Web URL scrapped till now</h2>
                }
            </Container>
        </div>
    )
}

export default ListingPage;