import React, { useEffect, useState } from 'react';
import Header from '../header';
import { useLocation } from "react-router"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MediaTable from '../../component/table';

const ResultPage = () => {
    const location = useLocation();
    const pageStateData = location.state;
    const [mediaData, setMediaData] = useState(pageStateData);

    useEffect(() => {
        setMediaData(pageStateData);
    }, [])

    const headerProps = {
        location: 'India' || '',
    };

    const imageData = {
        data: mediaData.imageList || []
    };
    const videoData = {
        data: mediaData.videoList || []
    };

    return (
        <div className="listingpage-container">
            <Header className="listingpage-container--header" {...headerProps} />
            <Container className="listingpage-container--item" maxWidth="lg">
                {
                    mediaData.imageList.length &&
                    <Grid className="card-grid" item xs>
                        <h2>Image list</h2>
                        <MediaTable {...imageData} />
                    </Grid>
                }
                {
                    (mediaData.videoList.length) ?
                        <Grid className="card-grid" item xs>
                            <h2>Video list</h2>
                            <MediaTable  {...videoData} />
                        </Grid> : ''
                }
            </Container>
        </div>
    )
}

export default ResultPage;
