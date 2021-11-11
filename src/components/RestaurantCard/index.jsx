import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantPhoto, RestaurantInfo, Title, Address } from './styles'

const RestaurantCard = ({ restaurant }) => (
    <Restaurant>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#8a4be6" />
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPhoto 
            src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurant} 
            alt="Foto do Restaurante"
        />
    </Restaurant>
);

export default RestaurantCard;