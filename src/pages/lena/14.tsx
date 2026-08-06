import {useState, type ReactNode} from 'react';
import ChallengePage from './ChallengePage';
import styles from './lena.module.css';

export default function Catorce(): ReactNode {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUnlock = () => {
    if (answer.trim().toLowerCase() === 'peridot') {
      window.location.assign('/lena/error');
      return;
    }

    setFeedback('Sayop! Balik.');
  };

  return (
    <ChallengePage
      pageNum="14 of 15"
      h2Title="Team Germany"
      message={
        <>
          <p>Speaking of home...</p>
          <p>Thank you for giving me room in yours.</p>
          <p>Your mom, Freddie, and Maddie...</p>
          <p>Every one of them has made it easy for me to imagine what &quot;family with you&quot; could look and feel like.</p>
          <p>🏡</p>
          <p><sup>🔑todo-todo</sup></p>
        </>
      }
      challengeText={
        <>
          <p>Team Philippines has completed their mission.</p>
          <p>Now it's time to recruit Team Germany. 🇩🇪 </p>
          <p>There is someone who used to be under the same roof.</p>
          <p>Now this person is hours away.</p>
          <p>To get the next clue, tell this person two things: </p> 
          <p> One thing you miss about them, and one thing you love about them. Then ask for the clue.</p>
          <div className={styles.passwordGate}>
            <label className={styles.passwordLabel} htmlFor="lena-14-password">Tubag</label>
            <input
              id="lena-14-password"
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
        </>
      }
      hintText="Look into the mirror and find the male version of you!"
      progress={{current: 14, total: 15}}
    />
  );
}
