import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>WORKS</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/wayway.jpg`}
              text='WayWay'
              label='React/Laravel'
              path='/works'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/royalclystal.jpg`}
              text='有限会社　ロイヤルクリスタル'
              label='WordPress'
              path='/works'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/flipflap.jpg`}
              text='トリミングサロン flipflap'
              label='Jimdo'
              path='/works'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/portfolio.jpg`}
              text='My Portfolio'
              label='React'
              path='/'
            />
            <CardItem
              src={`${process.env.PUBLIC_URL}/images/img-8.jpg`}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/works'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
