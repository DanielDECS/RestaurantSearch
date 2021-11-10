import React from 'react';
import ReactStars from "react-rating-stars-component";

import { Restaurant, RestaurantPhoto, RestaurantInfo, Title, Address } from './styles'
import restaurante from "../../assets/restaurante-fake.png";

const RestaurantCard = () => (
    <Restaurant>
        <RestaurantInfo>
            <Title>Nome do Restaurante</Title>
            <ReactStars count={5} isHalf value={4} edit={false} activeColor="#8a4be6" />
            <Address>Endereço</Address>
        </RestaurantInfo>
        <RestaurantPhoto src={restaurante} alt="Foto do Restaurante"/>
    </Restaurant>
);

export default RestaurantCard;