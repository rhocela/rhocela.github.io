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
            width: '180px',
            height: '180px',
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
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          margin: '1.5rem auto',
          flexWrap: 'wrap'
        }}>
          <span style={{fontSize: '0.95rem', fontWeight: 500, opacity: 0.9}}>
            International experience:
          </span>
          <div style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
            <img src="/img/countries/ph-circle-flag.png" alt="Philippines" style={{width: '32px', height: '32px', borderRadius: '50%'}} />
            <img src="/img/countries/sg-circle-flag.png" alt="Singapore" style={{width: '32px', height: '32px', borderRadius: '50%'}} />
            <img src="/img/countries/germany-circle-flag.png" alt="Germany" style={{width: '32px', height: '32px', borderRadius: '50%'}} />
            <img src="/img/countries/lux-circle-flag.png" alt="Luxembourg" style={{width: '32px', height: '32px', borderRadius: '50%'}} />
          </div>
        </div>

        <p style={{fontSize: '1.1rem', maxWidth: '720px', margin: '20px auto', lineHeight: '1.7'}}>
          Senior Technical Writer II at Luxembourg National Data Services (LNDS). I treat documentation as a product and build documentation functions from the ground up. In my current role, I establish quality standards and processes aligned with Agile methodologies and docs-as-code principles. I manage the entire documentation lifecycle and serve as Scrum Master to a cross-functional team to drive continuous improvement.
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginTop: '2rem'
        }}>
          <Link
            className="button button--secondary button--lg"
            to="/portfolio">
            View my portfolio
          </Link>
          <a
            href="/files/rhocela-pasigna-cv.pdf"
            download
            style={{
              textDecoration: 'underline',
              fontSize: '1rem',
              color: 'white',
              opacity: 0.9
            }}>
            Download CV
          </a>
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
