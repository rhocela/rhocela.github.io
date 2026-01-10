import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Technical Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Comprehensive documentation including API guides, system operations manuals, 
        integration guides, and user manuals. Creating and managing documentation libraries 
        that are up-to-date, accessible, and aligned with project standards.
      </>
    ),
  },
  {
    title: 'Cross-functional Collaboration',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Working closely with Development, Data Science, and Communications teams to 
        gather requirements and translate complex technical concepts into clear, 
        user-friendly content for both internal and external audiences.
      </>
    ),
  },
  {
    title: 'Agile Leadership',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Serving as Scrum Master, facilitating agile ceremonies and promoting collaboration. 
        Coaching teams on technical writing best practices while fostering a culture of 
        continuous learning and improvement.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
