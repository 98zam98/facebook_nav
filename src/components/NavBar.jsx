
const NavBar = (x) => {
  return (
    <nav className="NavBar" >
      <ul className="NavBar-Nav" >
        {x.children}
      </ul>
    </nav>
  )
}

export default NavBar