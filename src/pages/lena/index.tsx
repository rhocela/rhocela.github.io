import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './lena.module.css';

export default function LenaHome(): ReactNode {
  return (
    <Layout title="Operation Geburtstag 🌿" description="Happy Birthday, Mein Liebling!">

      <div className={styles.hero}>
        <span className={styles.heroDeco} aria-hidden="true">🌿</span>
        <h1 className={styles.heroTitle}>
          Happy Birthday<br />Mein Liebling
        </h1>
        <span className={styles.heroDeco} aria-hidden="true">🌿</span>
      </div>

      <main className={styles.pageMain}>
        <div className={styles.container}>

          <h2 className={styles.sectionTitle}>Operation 🕵🏻‍♀️ Geburtstag</h2>

          <div className={styles.messageCard}>
            <p className={styles.openingLine}>
              <strong>Good morning, Meine Mäusekind! 🐭❤️</strong>
            </p>

            <p className={styles.poem}>
              I wish I could be there to give you<br />
              morning kisses,<br />
              make you tea,<br />
              cook you stir-fry noodles,<br />
              Gassi with you and Bella,<br />
              give you a massage,<br />
              and annoy you all day.
            </p>

            <p className={styles.poem}>
              Unfortunately, my teleportation machine is still in progress.
            </p>

            <p className={styles.poem}>
              So I had to improvise.<br />
              To keep you company on your special day,<br />
              I left little pieces of us around the home.
            </p>

            <p className={styles.poem}>
              I've created a little adventure just for you.<br />
              15 challenges hidden throughout the house.<br />
              Each clue will lead you to a <i>keyword</i><br />
              and a place that holds <br />
              a memory,<br />
              a laugh,<br />
              an inside joke,<br />
              something about you,<br />
              or something we share together.
            </p>

            <p className={styles.poem}>
              The final clue leads you to a little gift waiting patiently for you.
            </p>

            <p className={styles.poem}>
              So take your time,<br />
              laugh at my corny clues,<br />
              roll your eyes when they're terrible,<br />
              and most of all,<br />
              enjoy and know that<br />
              <strong>You Are Loved.</strong>
            </p>

            <p className={styles.closing}>Happy Birthday, My Darling!</p>
            <p className={styles.closing}>I love you more than I love jumpys. 😜🦘 <br />❤️</p>
            
          </div>

          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Ready to unwrap your gift? </h3>
            <Link to="/lena/1" className={styles.ctaButton}>
              Sige Go! 🎁
            </Link>
          </div>

        </div>
      </main>

    </Layout>
  );
}
