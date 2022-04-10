import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const CardList = ({itemObject}) => {
    console.log(itemObject);
    return (
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
    )
};