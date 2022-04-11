import React, { useState, useEffect } from 'react';
import Header from '../header';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';

import { CardList } from '../../component/card';
import { mediaService } from '../../utils/service';
import { isValidUrl } from '../../utils/input-validation';
import '../global.css';
import './listing-page.css';

let data = [];

const ListingPage = () => {
    const [mediaUrlList, setMediaUrlList] = useState({});
    // const [filteredUrl, setFilteredUrl] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [webUrlData, setWebUrlData] = useState({
        input1: '',
        input2: '',
        input3: ''
    });

    useEffect(() => {
        getUrlList(searchTerm);
    }, [searchTerm]);

    const headerProps = {
        location: 'India' || '',
    };

    const getUrlList = (data) => {
        mediaService.fetchMediaUrl(data)
            .then(response => {
                if (response.statusCode !== 200) {
                    console.log('No Media Url fetched');
                    return;
                }
                if (searchTerm) {
                    setMediaUrlList(response);
                } else {
                    setMediaUrlList(response);
                }

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

    const handleSearch = (e) => {
        e.preventDefault();
        getUrlList(searchTerm);
    };

    const clearSearch = (e) => {
        e.preventDefault();
        setSearchTerm('');
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

    console.log('mediaUrlList', mediaUrlList);
    return (
        <div className="listingpage-container">
            <Header className="listingpage-container--header" {...headerProps} />
            <Container className="listingpage-container--item" maxWidth="lg">
                <Grid container direction="row" spacing={3} justifyContent="space-between">
                    <Grid className="card-grid" item xs={12} sm={6} md={4} lg={4}>
                        <form>
                            <TextField className="inputFieldStyle" label="enter weburl" variant="outlined" color="primary"
                                fullWidth size="small" name="input1" value={webUrlData.input1} onChange={handleChange} />
                            <TextField className="inputFieldStyle" label="enter weburl" variant="outlined" color="primary"
                                fullWidth size="small" name="input2" value={webUrlData.input2} onChange={handleChange} />
                            <TextField className="inputFieldStyle" label="enter weburl" variant="outlined" color="primary"
                                fullWidth size="small" name="input3" value={webUrlData.input3} onChange={handleChange} />
                            <Grid>
                                <Button variant="contained" color="primary" onClick={handleClick}>Start Scrapping</Button> &nbsp; &nbsp;
                            <Button variant="outlined" color="primary" onClick={handleSearch}>Fetch Scrapped Data</Button>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                {
                    (mediaUrlList.count !== 0) ?
                        <>
                            <div className="listpage-count">
                                <Grid container direction="row" spacing={3} justifyContent="space-between">
                                    <Grid className="card-grid" item xs={12} sm={6} md={4} lg={4}>
                                        <span>{`Data for ${mediaUrlList.count} Web URL is shown`}</span>
                                    </Grid>
                                    <Grid className="card-grid" item xs={12} sm={6} md={4} lg={4}>
                                        <form>
                                            <Paper component="form" className="root" style={{ maxWidth: '340px' }}>
                                                <InputBase placeholder="Search by domain" inputProps={{ 'aria-label': 'search google maps' }}
                                                    value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                                <IconButton type="submit" className="iconButton" aria-label="search" onClick={handleSearch}>
                                                    <SearchIcon />
                                                </IconButton>
                                                <IconButton aria-label="delete" color="primary" onClick={clearSearch}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Paper>
                                        </form>
                                    </Grid>
                                </Grid>

                            </div>
                            <Grid container spacing={3}>
                                {
                                    (mediaUrlList.data || []).map((itemObject) => {
                                        return (
                                            <Grid className="card-grid" key={itemObject._id} item xs={12} sm={6} md={4} lg={4}>
                                                <CardList itemObject={itemObject} />
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