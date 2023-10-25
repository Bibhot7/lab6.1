
import { NavLink } from 'react-router-dom'


export default function NavBar() {


return (
<nav className="NavBar">

<ul className="menu">
<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/dashboard">Dashboard</NavLink></li>
<li><NavLink to="/about">About</NavLink></li>
</ul> {/* ++ Add another page with route and component */}
</nav>
)
}