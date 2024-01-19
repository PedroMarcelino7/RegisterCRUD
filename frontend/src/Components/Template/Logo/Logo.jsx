import styles from './Logo.module.css'
import { Link } from 'react-router-dom'
import Logo from '../../../Assets/Images/logo.png'

export default props =>
    <aside id='logo' className={styles.logo}>
        <Link to="/" className={styles.logo}>
            <img src={Logo} alt="logo" />
        </Link>
    </aside>