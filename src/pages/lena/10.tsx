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
          <p>And I hope this has caused a smile on your face.</p>
          <p>Now, for the next minute...</p>
          <p>Don't solve anything.</p>
          <p>Go to the porch.</p>
          <p>Sit on the couch.</p>
          <p>Lean back, and relax.</p>
          <p>Take 5 good breaths.</p>
          <p>Be still :) <br /> 🤍</p>
        </>
      }
      challengeText={
        <>
          <p>What came to your mind in the past minute? </p> 
          <p>Well, because you've been so good in these challenges, two new Secret Agents have come to your rescue! 🕵🏻‍♀️🕵🏻‍♂️</p>
          <p> They call themselves your "Spokespersons".🎙️</p> 
          <p> Call one of your Spokespersons. Tell them one full sentence in German and translate it to Bisaya. They'll give you the clue to the next secret code.</p>
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
              placeholder="Secret code"
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
      hintText="You read it right. CALL 📞😜"
      progress={{current: 10, total: 15}}
    />
  );
}
