import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
  buttonText: string;
  buttonLink: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Technical documentation',
    image: require('@site/static/img/technical-documentation.png').default,
    description: (
      <>
        I build documentation systems that engineers actually use. From API references to 
        operational guides, I create content that reduces support tickets and speeds up 
        onboarding. Docs-as-code workflows keep everything current and version-controlled.
      </>
    ),
    buttonText: 'View portfolio',
    buttonLink: '/portfolio',
  },
  {
    title: 'Cross-functional collaboration',
    image: require('@site/static/img/collaboration.png').default,
    description: (
      <>
        I bridge technical and non-technical teams, turning discussions into 
        actionable documentation. By working directly with technical teams across the stack, I catch 
        knowledge gaps and create content that serves both internal teams and end users.
      </>
    ),
    buttonText: 'Read testimonials',
    buttonLink: '/testimonials',
  },
  {
    title: 'Agile leadership',
    image: require('@site/static/img/agile.png').default,
    description: (
      <>
        As Scrum Master, I keep teams moving—identifying blockers, managing dependencies, escalating issues,
        and surfacing risks before they derail sprints. I facilitate standups and Agile ceremonies 
        that lead to action, not just discussion.
      </>
    ),
    buttonText: 'Learn more',
    buttonLink: '/about',
  },
];

function Feature({title, image, description, buttonText, buttonLink}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className="text--center">
          <img className={styles.featureImg} src={image} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <div style={{marginTop: '1.5rem'}}>
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
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
