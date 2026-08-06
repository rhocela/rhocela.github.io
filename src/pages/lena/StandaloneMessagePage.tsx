import {useState, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './lena.module.css';

interface StandaloneMessagePageProps {
  pageTitle: string;
  pageDescription: string;
  heroTitle: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  titleClassName?: string;
  body: ReactNode;
  hintTitle?: ReactNode;
  hintText?: ReactNode;
  hintLabel?: ReactNode;
  children?: ReactNode;
}

export default function StandaloneMessagePage({
  pageTitle,
  pageDescription,
  heroTitle,
  eyebrow,
  title,
  titleClassName,
  body,
  hintTitle,
  hintText,
  hintLabel,
  children,
}: StandaloneMessagePageProps): ReactNode {
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <>
      <Layout title={pageTitle} description={pageDescription}>
        <div className={styles.hero}>
          <span className={styles.heroDeco} aria-hidden="true">🌿</span>
          <h1 className={styles.heroTitle}>{heroTitle}</h1>
          <span className={styles.heroDeco} aria-hidden="true">🌿</span>
        </div>

        <main className={styles.pageMain}>
          <div className={styles.container}>
            <div className={styles.finalCard}>
              {eyebrow ? <p className={styles.finalEyebrow}>{eyebrow}</p> : null}
              <h2 className={titleClassName ?? styles.finalTitle}>{title}</h2>
              <div className={styles.finalText}>{body}</div>
              {children}
              {hintText ? (
                <div className={styles.hintLinkWrap}>
                  <button className={styles.hintLink} onClick={() => setHintOpen(true)}>
                    {hintLabel ?? '🌱 Emergency Hint'}
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </main>
      </Layout>

      {hintOpen && hintText ? (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setHintOpen(false)}
        >
          <div className={styles.modalSheet} onClick={event => event.stopPropagation()}>
            <p className={styles.modalTitle}>{hintTitle ?? '🌿 Emergency Hint'}</p>
            <p className={styles.modalHintText}>{hintText}</p>
            <button className={styles.modalClose} onClick={() => setHintOpen(false)}>
              Got it!
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}