import {useState, type ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './lena.module.css';

export default function ErrorPage(): ReactNode {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [hintOpen, setHintOpen] = useState(false);

  const handleUnlock = () => {
    if (answer.trim().toLowerCase() === 'lieblingscousine') {
      window.location.assign('/lena/15');
      return;
    }

    setFeedback('Sayop! Balik.');
  };

  return (
    <Layout title="Error 🌿" description="Final unlock">
      <div className={styles.hero}>
        <span className={styles.heroDeco} aria-hidden="true">🌿</span>
        <h1 className={styles.heroTitle}>A little more</h1>
        <span className={styles.heroDeco} aria-hidden="true">🌿</span>
      </div>

      <main className={styles.pageMain}>
        <div className={styles.container}>
          <div className={styles.finalCard}>
            <p className={styles.finalEyebrow}>Ooops!</p>
            <h2 className={styles.errorTitle}>⛔ Error</h2>
            <div className={styles.finalText}>
              <p>
                Looks like this pit stop hit a little roadblock.
              </p>
              <p>
                You&apos;ll need a trusted friend to help you through the bumps ahead.
              </p>
              <p>
                You know...
              </p>
              <p>
                The one who somehow always knows exactly what to say.
              </p>
              <p>
                The one who holds true, sincere, encouraging, and life-giving words when you need it.
              </p>
              <p>
                The one who once received an emergency drawing of a strawberry pimple. 🍓😂
              </p>
              <p>
                Yes! THAT someone is my friend now too 😜💕
              </p>
              <p>
                Ask her for the password...
              </p>
            </div>

            <div className={styles.passwordGate}>
              <label className={styles.passwordLabel} htmlFor="lena-error-password">Tubag</label>
              <input
                id="lena-error-password"
                className={styles.passwordInput}
                type="text"
                value={answer}
                onChange={(event) => {
                  setAnswer(event.target.value);
                  if (feedback) {
                    setFeedback('');
                  }
                }}
                placeholder="Enter the password"
              />
              <button className={styles.passwordButton} type="button" onClick={handleUnlock}>
                Abli!
              </button>
              {feedback ? (
                <p className={styles.passwordFeedback} role="alert">{feedback}</p>
              ) : null}
            </div>

            <div className={styles.hintLinkWrap}>
              <button className={styles.hintLink} onClick={() => setHintOpen(true)}>
                🌱 Emergency Hint
              </button>
            </div>
          </div>
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
            <p className={styles.modalHintText}>Every journey needs a little Juwel. 💎</p>
            <button className={styles.modalClose} onClick={() => setHintOpen(false)}>
              Got it!
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
