/* NPM modules */
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Moment from 'react-moment';
/* Material UI */
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Chip from '@material-ui/core/Chip';
/* Own modules */
import Config from '../../config';
/* Assets */
import imageBuy from '../../assets/images/buy.png';
import imageSell from '../../assets/images/sell.png';
/* CSS */
import './AdvertCard.css';

/**
 * Main App
 */
export default class AdvertCard extends Component {
  /**
   * Render
   */
  render() {
    return (
        <Card className='AdvertCard'>
            <CardHeader 
                className='AdvertCard__Header'
                avatar={<img src={`${this.props.type==='buy'?imageBuy:imageSell}`} alt='avatar' />}
                title={<Link to={`/advert/display/${this.props.id}`} className='AdvertCard__Link'><h2>{`${this.props.name.substring(0,18)}...`}</h2></Link>}
                subheader={<Moment className='AdvertCard__Date' fromNow>{this.props.createdAt}</Moment>}
            />
            <CardMedia className='AdvertCard__Media'>
                <img src={`${Config.API_IMAGES}${this.props.photo}`} alt='caption'/>
                <p className='AdvertCard__Price'>
                    {this.props.price} 
                    <span className='AdvertCard__Currency'>€</span>
                </p>
            </CardMedia>
            <CardActions className='AdvertCard__Footer'>
                <Link to={`/advert/display/${this.props.id}`}>
                    <IconButton className='AdvertCard__Link'><VisibilityIcon/></IconButton>
                </Link>
                <div className='AdvertCard__Tags'>
                    {   this.props.tags && 
                        this.props.tags.map((value,i) => {
                            return  <Chip
                                        key={i}
                                        size="small"
                                        label={value}
                                        className={`AdvertCard__Tag AdvertCard__Tag--${value}`}
                                    />
                        })
                    }
                </div>
            </CardActions>
        </Card>
     );
  }
}