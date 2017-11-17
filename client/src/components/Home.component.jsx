import React from 'react'
import FilterLink from './FilterLink.container'
import AddItem from '../containers/AddItem.container'
import VisibleItemList from '../containers/VisibleItemList.container'

const Home = () => (
  <div>
    <AddItem />
    <VisibleItemList />
    <FilterLink />
  </div>
)

export default Home;