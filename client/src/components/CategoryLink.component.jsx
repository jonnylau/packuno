const CategoryLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{ children }</span>
  }
  return <a href="#" onClick= { (e) => { onClick() } } >{ children }</a>
};

export default CategoryLink;