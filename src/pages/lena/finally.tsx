import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import styles from './lena.module.css';

export default function FinallyPage(): ReactNode {
  return (
    <Layout title="Finally 🌿" description="Happy Birthday, Mein Liebling">
      <div className={styles.hero}>
        <span className={styles.heroDeco} aria-hidden="true">🌿</span>
        <h1 className={styles.heroTitle}>
          Happy Birthday<br />Mein Liebling
        </h1>
        <span className={styles.heroDeco} aria-hidden="true">🌿</span>
      </div>

      <main className={styles.pageMain}>
        <div className={styles.container}>
          <div className={styles.finalCard}>
            <p className={styles.finalEyebrow}></p>
            <h2 className={styles.finalTitle}>Finally</h2>

            <div className={styles.finalText}>
              <p>♥️</p>
              <p> <strong> Happy Birthday, My Darling!  </strong> </p>
              <p> 
                I hope you enjoyed this little adventure as much as I enjoyed creating it—just by thinking about you in the little pit stops you visited today.
              </p>
              <p>
                You are my answered prayer.
              </p>
              <p>
                And my prayer is for you to flourish in God&apos;s hands, and experience the fulfillment of all your heart&apos;s desires.
              </p>
              <p>
                I can&apos;t wait to see you again.
              </p>
              <p>
                Consider this one very long, very tight, <br /> slightly naughty hug.😄
              </p>
              <p> ---</p>
              <p className={styles.finalSignature}>
                 </p>

              <p><sup>Did you notice the little keywords I left along the way? Send the 15-word sentence to me if you know it! </sup></p>
              <p> ♥️ </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
