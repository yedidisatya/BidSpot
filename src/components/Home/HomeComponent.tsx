import React from 'react';
import styles from './Home.module.scss';
import { Header } from '../Header';
import { NavigationBar } from '../NavigationBar';
import { HomePageBanner } from './HomePageBanner';

const Home: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.home}>
      <Header />
      <NavigationBar />
      <HomePageBanner />
    </div>
  );
};

export { Home };
