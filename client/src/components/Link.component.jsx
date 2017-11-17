const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{ children }</span>
  }
  return <a href="#" onClick= { (e) => { onClick() } } >{ children }</a>
};

export default Link;