import React from 'react';
import clsx from 'clsx';
import Typed from 'react-typed';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useThemeContext from '@theme/hooks/useThemeContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { isDarkTheme } = useThemeContext();
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='row'>
          <div className='col col--5' style={{ textAlign: 'left', marginTop: '4rem' }}>

            <h1 className="hero__title">
                <img width="50%" style={{ opacity: '70%' }} src= {isDarkTheme ? './img/logo.svg' : './img/logo.svg'}></img>
            </h1>

            {/* <h1>
            Headless virtual machines made 
            <Typed
                strings={[
                  'simple',
                  'basic',
                  'flexible']}
                  typeSpeed={100}
                  backSpeed={100}
                  backDelay={1000}
                  shuffle
                  loop >
                </Typed>
            </h1> */}

            <div className="hero__subtitle">{siteConfig.tagline}</div>

            <div className='row' style={{ marginTop: '2rem' }}>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--md"
                  to="/docs">
                  Get started in 2 min (or less)! ⏱️
                </Link>
              </div>
              <div className={styles.buttons}>
                <Link
                  className="button button--outline button--secondary button--md"
                  to="/docs#installation">
                  Download
                </Link>
              </div>
            </div>

          </div>
          <div className='col col--7'>
            <iframe className='item shadow--md' scrolling='no' frameBorder={'no'} allowtransparency='true' allowFullScreen={true} style={{ width: '100%', height: '340px' }} src='https://asciinema.org/a/tinQvVZuBA14Fr5swXKN1ZDfV/iframe?autoplay=1&loop=1&preload=1'> </iframe>
          </div>

        </div>
      </div>


    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}

        <section className={styles.features}>
          <div className="container">

            <div className="card-demo">
              <div className="card margin--md padding--lg item shadow--md">
                <div className='row'>

                  <div className='col col--5'>
                    <div className="card__header">
                      <h3>Step 1 -- Download the default base image (Ubuntu 22.04 LTS)</h3>
                    </div>
                    <div className="card__body">
                      <p>
                        run <code>vm pull distro:codeName</code> to pull a base image. basicvm will download Ubuntu 22.04 LTS if you don't specify an image name.
                      </p>
                    </div>

                  </div>
                  <div className='col col--7'>
                    <iframe className='item shadow--md' scrolling='no' frameBorder={'no'} allowtransparency='true' allowFullScreen={true} style={{ width: '100%', height: '315px' }} src='https://asciinema.org/a/0hjiamBI1LN7qffg69FiKXLwM/iframe?autoplay=0&loop=0&preload=1'> </iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        <section className={styles.features}>
          <div className="container">

            <div className="card-demo">
              <div className="card margin--md padding--lg item shadow--md">
                <div className='row'>

                  <div className='col col--5'>
                    <div className="card__header">
                      <h3>Step 2 -- Create a vm using the default base image (Ubuntu 22.04 LTS)</h3>
                    </div>
                    <div className="card__body">
                      <p>
                        run <code>vm start name distro:codeName</code> to create a virtual machine with the given name. basicvm will use Ubuntu 22.04 LTS if you don't specify an image name.
                      </p>
                    </div>

                  </div>
                  <div className='col col--7'>
                    <iframe className='item shadow--md' scrolling='no' frameBorder={'no'} allowtransparency='true' allowFullScreen={true} style={{ width: '100%', height: '315px' }} src='https://asciinema.org/a/7MykA1zrWzkH2vuA72tEwPVzw/iframe?autoplay=0&loop=0&preload=1'> </iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>


        <section className={styles.features}>
          <div className="container">

            <div className="card-demo">
              <div className="card margin--md padding--lg item shadow--md">
                <div className='row'>

                  <div className='col col--5'>
                    <div className="card__header">
                      <h2>Step 3 -- Connect to your virtual machine</h2>
                    </div>
                    <div className="card__body">
                      <p>
                        Your vm is ready! Run <code>vm ssh name</code> to connect to it.
                      </p>
                    </div>

                  </div>
                  <div className='col col--7'>
                    <iframe className='item shadow--md' scrolling='no' frameBorder={'no'} allowtransparency='true' allowFullScreen={true} style={{ width: '100%', height: '315px' }} src='https://asciinema.org/a/cdDzttl1dHZWqJOOCjE1NLLq0/iframe?autoplay=0&loop=0&preload=1'> </iframe>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>



        <section className={styles.features}>
          <div className="container">

            <div className='card-demo'>
              <div className="card margin--md padding--sm item shadow--sm">

                <div className='col col--5'>
                  <div className="card__body">
                    <i>
                      Ahem, that actually took only 50 seconds, from downloading the image to connecting to the vm 😜
                    </i>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
