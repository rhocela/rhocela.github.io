import type {ReactNode} from 'react';
import {useState} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './lena.module.css';

interface ChallengePageProps {
  pageNum: string;
  h2Title: ReactNode;
  message: ReactNode;
  challengeText: ReactNode;
  hintText: string;
  /** slug of the next challenge page; omit on the final page */
  nextSlug?: string;
  nextLabel?: string;
}

export default function ChallengePage({
  pageNum,
  h2Title,
  message,
  challengeText,
  hintText,
  nextSlug,
  nextLabel = 'Found it! Next clue →',
}: ChallengePageProps): ReactNode {
  const [hintOpen, setHintOpen] = useState(false);

  return (
    <Layout title={`Challenge ${pageNum} 🌿`} description="Operation Geburtstag">

      <div className={styles.hero}>
        <span className={styles.heroDeco} aria-hidden="true">🌿</span>
        <h1 className={styles.heroTitle}>
          Happy Birthday<br />Mein Liebling
        </h1>
        <span className={styles.heroDeco} aria-hidden="true">🌿</span>
      </div>

      <main className={styles.pageMain}>
        <div className={styles.container}>

          <p className={styles.pageCounter}>Challenge {pageNum}</p>
          <h2 className={styles.sectionTitle}>{h2Title}</h2>

          <div className={styles.messageCard}>
            {message}
          </div>

          <div className={styles.challengeBlock}>
            <p className={styles.challengeLabel}>Your Challenge</p>
            <p className={styles.challengeText}>{challengeText}</p>
          </div>

          <div className={styles.hintLinkWrap}>
            <button className={styles.hintLink} onClick={() => setHintOpen(true)}>
              🌱 Emergency Hint
            </button>
          </div>

          {nextSlug && (
            <div className={styles.ctaSection}>
              <Link to={nextSlug} className={styles.ctaButton}>
                {nextLabel}
              </Link>
            </div>
          )}

        </div>
      </main>

      {hintOpen && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          onClick={() => setHintOpen(false)}
        >
          <div className={styles.modalSheet} onClick={e => e.stopPropagation()}>
            <p className={styles.modalTitle}>🌿 Emergency Hint</p>
            <p className={styles.modalHintText}>{hintText}</p>
            <button className={styles.modalClose} onClick={() => setHintOpen(false)}>
              Got it!
            </button>
          </div>
        </div>
      )}

    </Layout>
  );
}
