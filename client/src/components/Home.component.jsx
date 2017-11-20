import React from 'react';
import Footer from '../components/Footer.component.jsx';
import AddItem from '../containers/AddItem.container.jsx';
import VisibleItemList from '../containers/VisibleItemList.container.jsx';

const Home = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <Footer />
  </div>
);

export default Home;