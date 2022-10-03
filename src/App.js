import { Drop, DropItem, NavBar, NavItem } from "./components";



function App() {
  return (
    <div className='app' >
<NavBar>
  <NavItem item="a" >
    <Drop>
      <DropItem>a a</DropItem>
      <DropItem>a b</DropItem>
      <DropItem>a c</DropItem>
    </Drop>
  </NavItem>
  <NavItem item="b" >
    <Drop>
      <DropItem>b a</DropItem>
      <DropItem>b b</DropItem>
      <DropItem>b c</DropItem>
    </Drop>
  </NavItem>
  <NavItem item="c" >
    <Drop>
      <DropItem>c a</DropItem>
      <DropItem>c b</DropItem>
      <DropItem>c c</DropItem>
    </Drop>
  </NavItem>
</NavBar>
    </div>
  );
}

export default App;
