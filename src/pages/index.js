import React from 'react';
import clsx from 'clsx';
import Typed from 'react-typed';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='row'>
          <div className='col col-4'>

            <h1 className="hero__title">
              <img width="60%" style={{ opacity: '70%' }} src='./img/logo.svg'></img>
            </h1>

            <h2 className='hero__subtitle'>
              <Typed
                strings={['>_ ' + siteConfig.tagline]}
                typeSpeed={75}
              />

            </h2>
            {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Get started in 2 min! ⏱️
              </Link>
            </div>
          </div>
          <div className='col col-8'>
            <iframe scrolling='no' frameBorder={'no'} allowtransparency='true' allowFullScreen={true} style={{ width: '70%', height: '600px' }} src='https://asciinema.org/a/459098/iframe?autoplay=1&loop=1&preload=1'> </iframe>

          </div>

        </div>
        <div className='container'>



        </div>
        
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
