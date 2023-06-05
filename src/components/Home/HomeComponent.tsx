import React from 'react';
import styles from './Home.module.scss';
import { Header } from '../Header';
import { NavigationBar } from '../NavigationBar';
import { HomePageBanner } from './HomePageBanner';
import { Category } from './BasedOnCategory';
import { BankersTrending } from './BankersTrending';
import { HowItWorks } from './HowItWorks';

const Home: React.FC<EmptyObject> = () => {
  return (
    <div className={styles.home}>
      <Header />
      <NavigationBar />
      <HomePageBanner />
      <Category />
      <BankersTrending />
      <HowItWorks />
    </div>
  );
};

export { Home };
