import React from "react";
import styles from './Home.module.scss';
import {Header} from '../Header';

const Home: React.FC<EmptyObject> = () => {

    return (
        <div className={styles.home}>
             <Header />
        </div>
    )
}

export {Home};