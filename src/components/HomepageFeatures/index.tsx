import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: ReactNode;
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
  },
  {
    title: 'Agile leadership',
    image: require('@site/static/img/agile.png').default,
    description: (
      <>
        As Scrum Master, I keep teams moving—identifying blockers, managing dependencies, 
        and surfacing risks before they derail sprints. I facilitate standups and retrospectives 
        that actually lead to action, not just discussion.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={image} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
