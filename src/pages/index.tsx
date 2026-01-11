import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import BrandLogos from '@site/src/components/BrandLogos';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img 
          src="/img/rhocela-headshot.png" 
          alt="Rhocela Pasigna" 
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            objectFit: 'cover',
            margin: '0 auto 2rem',
            display: 'block',
            border: '4px solid var(--ifm-color-primary-lightest)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p style={{fontSize: '1.1rem', maxWidth: '720px', margin: '20px auto', lineHeight: '1.7'}}>
          Senior Technical Writer who treats documentation as a product. I build and lead 
          documentation functions from the ground up, establishing practices, standards, and processes 
          like docs-as-code. Managing the entire documentation lifecycle while fostering a culture of 
          excellence through knowledge sharing. Also serving as Scrum Master to drive continuous improvement.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/portfolio">
            View My Portfolio
          </Link>
          <Link
            className="button button--primary button--lg"
            style={{marginLeft: '10px'}}
            to="/about">
            Learn More About Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <BrandLogos />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
