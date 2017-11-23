import React from 'react';
import Footer from '../components/Footer.component';
import AddItem from '../containers/AddItem.container';
import VisibleItemList from '../containers/VisibleItemList.container';
import WeatherCont from '../containers/Weather.container';

const Trip = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <Footer />
    <WeatherCont />
  </div>
);

export default Trip;