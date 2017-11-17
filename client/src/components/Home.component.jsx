import React from 'react'
import FilterLink from '../containers/FilterLink.container.jsx'
import AddItem from '../containers/AddItem.container.jsx'
import VisibleItemList from '../containers/VisibleItemList.container.jsx'

const Home = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <FilterLink />
  </div>
)

export default Home;