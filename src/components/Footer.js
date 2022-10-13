import {Link} from 'react-router-dom'
import './Header.css';

const Footer = (props) => {
    return (
        <header style={{ height: "100px", overflow: 'hidden' }} className="footer">
            <nav className="nav">
                <Link to="/">
                    <img src="https://i.imgur.com/mkqRQDd.jpg"/>
                </Link>
                <div>Garden Buddy</div>
            </nav>
        </header>
    )
}



export default Footer