import React from 'react';
import Footer from '../components/Footer.component.jsx';
import AddItem from '../containers/AddItem.container.jsx';
import VisibleItemList from '../containers/VisibleItemList.container.jsx';
import WeatherCont from '../containers/Weather.container.jsx';

const Home = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <Footer />
    <WeatherCont />
  </div>
);

export default Home;