import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
  buttonText: string;
  buttonLink: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Documentation leadership',
    emoji: '📚',
    description: (
      <>
        I build documentation systems that engineers actually use—selecting the right tools, establishing standards, and defining processes for each use case. From API references to operational guides, I create content that reduces 
        support tickets and speeds up onboarding. Docs-as-code workflows keep everything current and version-controlled.
      </>
    ),
    buttonText: 'View portfolio',
    buttonLink: '/portfolio',
  },
  {
    title: 'Cross-functional collaboration',
    emoji: '🤝',
    description: (
      <>
        From marketing to engineering teams, data to cloud teams, 
        I work across the stack to capture knowledge and create content 
        that serves both internal and external audiences. By bridging teams, 
        I ensure documentation is accurate, comprehensive, and aligned with user needs.
      </>
    ),
    buttonText: 'Read testimonials',
    buttonLink: '/testimonials',
  },
  {
    title: 'Versatile leadership',
    emoji: '⚡',
    description: (
      <>
      I've worked through a spectrum of roles—as a team member, documentation lead, individual contributor, and Scum Master.
       This experience has given me insights into team dynamics, leadership, and collaborating effectively across roles, seniority levels, and working styles.
      </>
    ),
    buttonText: 'Learn more',
    buttonLink: '/about',
  },
  {
    title: 'Global perspective',
    emoji: '🌍',
    description: (
      <> 
      My career has taken me across Asia and Europe, working with individuals and partnering with clients from different cultures, languages, and backgrounds.  
      I adapt well to different communication styles and cultural expectations, and this flexibility makes me effective in any team environment and strengthens how I document for diverse audiences.
      </>
    ),
    buttonText: 'See my background',
    buttonLink: '/about',
  },
  {
    title: 'Cross-industry expertise',
    emoji: '🏢',
    description: (
      <>
        My experience spans writing for marketing consulting for business IT products, logistics SaaS platforms, data integration 
        and cloud adoption, and currently government data services. Each industry has brought different technical challenges and learning opportunities, 
        with the common thread being the need to translate complex domain knowledge into usable, effective documentation. 
      </>
    ),
    buttonText: 'Explore experience',
    buttonLink: '/about',
  },
];

function Feature({title, emoji, description, buttonText, buttonLink}: FeatureItem, index: number) {
  const isEven = index % 2 === 0;
  
  return (
    <div className={clsx('col col--12')} style={{
      marginBottom: '2.5rem',
      display: 'flex',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '85%',
        background: 'var(--ifm-color-emphasis-0)',
        borderRadius: '16px',
        padding: '2rem 2.5rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        border: '1px solid var(--ifm-color-emphasis-200)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '2rem',
          textAlign: 'left',
          flexDirection: isEven ? 'row-reverse' : 'row'
        }}>
          <div style={{
            fontSize: '3rem',
            minWidth: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '0.25rem',
            flexShrink: 0
          }}>
            {emoji}
          </div>
          <div style={{flex: 1}}>
            <Heading as="h3" style={{marginBottom: '0.75rem', fontSize: '1.4rem'}}>{title}</Heading>
            <p style={{marginBottom: '1.25rem', lineHeight: '1.7', opacity: 0.9}}>{description}</p>
            <Link
              className="button button--primary button--sm"
              to={buttonLink}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
