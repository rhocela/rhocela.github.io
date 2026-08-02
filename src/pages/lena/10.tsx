import {useState, type ReactNode} from 'react';
import ChallengePage from './ChallengePage';
import styles from './lena.module.css';

export default function Diez(): ReactNode {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUnlock = () => {
    if (answer.trim() === '35') {
      window.location.assign('/lena/11');
      return;
    }

    setFeedback('Sayop! Balik.');
  };

  return (
    <ChallengePage
      pageNum="10 of 15"
      h2Title="Breathe"
      message={
        <>
          <p>You're really crushing this! I know it. 💪🏻</p>
          <p>And I hope this puts a little smile on your face.</p>
          <p>Now, for the next minute...</p>
          <p>Don't solve anything.</p>
          <p>Go to the porch.</p>
          <p>Sit on your couch.</p>
          <p>Lean back, and relax.</p>
          <p>Take 5 good breaths.</p>
          <p>Be still... :) ❤️❤️</p>
        </>
      }
      challengeText={
        <>
          <p>What came to your mind in the past minute? Call Ash or Mic. Tell them something... anything—AND include at least 1 Bisaya word. They will give you the next step.</p>
          <div className={styles.passwordGate}>
            <label className={styles.passwordLabel} htmlFor="lena-10-password">Tubag</label>
            <input
              id="lena-10-password"
              className={styles.passwordInput}
              type="number"
              inputMode="numeric"
              value={answer}
              onChange={(event) => {
                setAnswer(event.target.value);
                if (feedback) {
                  setFeedback('');
                }
              }}
              placeholder="Type the password"
            />
            <button className={styles.passwordButton} type="button" onClick={handleUnlock}>
              Abli!
            </button>
            {feedback ? (
              <p className={styles.passwordFeedback} role="alert">{feedback}</p>
            ) : null}
          </div>
        </>
      }
      hintText="You read it right. CALL 😜"
      progress={{current: 10, total: 15}}
    />
  );
}
