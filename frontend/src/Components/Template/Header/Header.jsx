import styles from './Header.module.css'

export default props =>
    <header id='header' className={`${styles.header} d-none d-sm-flex flex-column`}>
        <h1 className={`mt-3`}>
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>

        <p className={`lead text-muted`}>{props.subtitle}</p>
    </header>