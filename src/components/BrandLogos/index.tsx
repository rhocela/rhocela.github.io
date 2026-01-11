import type {ReactNode} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Heading from '@theme/Heading';

const logos = [
  { src: '/img/brands-ive-worked-with/1-lnds.png', alt: 'LNDS' },
  { src: '/img/brands-ive-worked-with/2-mobilab.png', alt: 'Mobilab' },
  { src: '/img/brands-ive-worked-with/2-zyllem.png', alt: 'Zyllem' },
  { src: '/img/brands-ive-worked-with/3-intel.png', alt: 'Intel' },
  { src: '/img/brands-ive-worked-with/4-logo.png', alt: 'Bosch' },
  { src: '/img/brands-ive-worked-with/5-lenovo.png', alt: 'Lenovo' },
  { src: '/img/brands-ive-worked-with/6-dell.png', alt: 'Dell' },
  { src: '/img/brands-ive-worked-with/7-toshiba.png', alt: 'Toshiba' },
  { src: '/img/brands-ive-worked-with/8-lexmark.png', alt: 'Lexmark' },
];

function Logo({src, alt}: {src: string; alt: string}): ReactNode {
  return (
    <div className={styles.logoItem}>
      <img src={src} alt={alt} className={styles.logoImg} />
    </div>
  );
}

export default function BrandLogos(): ReactNode {
  return (
    <section className={clsx('container', styles.wrapper)}>
      <Heading as="h2" className={styles.heading}>Brands I've worked with</Heading>
      <div className={styles.grid}>
        {logos.map((logo, i) => (
          <Logo key={i} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}
