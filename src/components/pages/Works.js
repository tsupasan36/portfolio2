import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import CardItem from "../CardItem";
import {Link} from "react-router-dom"

export default function Works() {
  return <>
    <div className="container-works">
        <CardItem
        src={`${process.env.PUBLIC_URL}/images/wayway.jpg`}
        text='WayWay'
        label='React/Laravel'
        path='/wayway'
        />
        <CardItem
        src={`${process.env.PUBLIC_URL}/images/royalclystal.jpg`}
        text='Travel through the Islands of Bali in a Private Cruise'
        label='WordPress'
        path='/works'
        />
        <CardItem
        src={`${process.env.PUBLIC_URL}/images/flipflap.jpg`}
        text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
        label='Jimdo'
        path='/flipflap'
        />
        <CardItem
        src={`${process.env.PUBLIC_URL}/images/portfolio.jpg`}
        text='Experience Football on Top of the Himilayan Mountains'
        label='React'
        path='/'
        />
        <CardItem
        src={`${process.env.PUBLIC_URL}/images/img-8.jpg`}
        text='Ride through the Sahara Desert on a guided camel tour'
        label='Adrenaline'
        path='/works'
        />
    </div>
    <Footer />
  </>
}
