import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Styles from './cards.module.css'


export default function CARD(props) {
 

  return (
    <Card className={Styles.root} style={{border: "0px solid  #161618", borderRadius: "0%",boxShadow: "none"}}>
      <CardActionArea>
        <CardMedia
          className={Styles.media}
          image={props.pic}
          title="thumbnail"
        />
        <CardContent style={{backgroundColor:"#161618"}}>
          <Typography gutterBottom variant="h5" component="h2" style={{color:"rgba(255, 255, 255, 0.815)"}}>
            {props.title}
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{color:"#969696"}}>
            {props.des}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor:"#161618"}}>
        <Button size="small" color="primary" href={props.git} target="_blank" style={{color:"#969696"}} >
         Github</Button>
        {props.live?<Button size="small" color="primary"href={props.live} target="_blank" style={{color:"#969696"}}>Live Demo</Button>:null}
      </CardActions>
    </Card>
  );
}