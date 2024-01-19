import styles from './Footer.module.css'

export default props =>
    <footer id='footer' className={styles.footer}>
        <span>
            Desenvolvido com <i className={`fa fa-heart text-danger`}></i> por <b>Cod<span className={`text-danger`}>3</span>r</b>
        </span>
    </footer>