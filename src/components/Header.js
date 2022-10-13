import {Link} from 'react-router-dom'
import './Header.css';

const Header = (props) => {
    return (
        <header style={{ height: "480px", overflow: 'hidden' }} className="header">
            <nav className="nav">
                <Link to="/">
                    <img src="https://i.imgur.com/mkqRQDd.jpg"/>
                </Link>
                <div>Garden Buddy</div>
            </nav>
            <img style={{ width: "100%" }} src="https://i.imgur.com/ZB1QaaX.jpg" />
        </header>
    )
}


// placeholder header image: https://media.istockphoto.com/photos/group-portrait-of-a-creative-business-team-standing-outdoors-three-picture-id1146473249?b=1&k=20&m=1146473249&s=612x612&w=0&h=-q1guVCuei7X3BFKwWC2bLUOX8BeIaC04pG5s_xfn_c=

export default Header