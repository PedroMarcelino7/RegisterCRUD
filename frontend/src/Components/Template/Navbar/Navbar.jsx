import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default props =>
    <aside id='navbar' className={styles.menu_area}>
        <nav className={`menu`}>
            <Link to="/">
                <i className={`fa fa-home`}></i> Home
            </Link>
            <Link to="/users">
                <i className={`fa fa-users`}></i> Users
            </Link>
        </nav>
    </aside>