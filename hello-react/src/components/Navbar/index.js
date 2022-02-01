import profile from './profile.png'
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="container">

            <div className="one">
                ระบบพยาบาล
            </div>

            <div className="item">
                <ul className="list">
                    <li className="listItem">Menu</li>
                    <li className="listItem">น.ส.สาวสวย ส้มตำอร่อยดี</li>
                    <img src={profile} className="logo" fill="#FFFFFF" />
                </ul>
            </div>

        </nav>
    )
}

export default Navbar
