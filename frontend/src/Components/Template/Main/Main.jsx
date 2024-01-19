import React from 'react'
import styles from './Main.module.css'
import Header from '../Header/Header'

export default props =>
    <React.Fragment>
        <Header {...props} />
        <main id='main' className={`${styles.content} container-fluid`}>
            <div className={`p-3 mt-3`}>
                {props.children}
            </div>
        </main>
    </React.Fragment>