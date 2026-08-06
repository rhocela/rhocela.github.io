import {useState, type ReactNode} from 'react';
import ChallengePage from './ChallengePage';
import styles from './lena.module.css';

export default function Tres(): ReactNode {
  const [password, setPassword] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleUnlock = () => {
    if (password.trim().toLowerCase() === 'lena') {
      window.location.assign('/lena/4');
      return;
    }

    setFeedback('Sayop! Balik.');
  };

  return (
    <ChallengePage
      pageNum="3 of 15"
      h2Title="The Accomplice"
      message={
        <>
          <p>One of the things I admire most about you is how you naturally care.</p>
          <p>You somehow keep everything alive.</p>
          <p>
            Plants.<br />
            Horses.<br />
            Bella.<br />
            Even spiders.
          </p>
          <p>(And me 🥹)</p>
          <p>You make us feel safe. And I think it's one of your greatest gifts. ❤️</p>
          <p>
            And speaking of the things you keep safe and alive, someone helped me put this little adventure together.
          </p>
          <p>
            A member of our family has been feeding me classified information...
          </p>
          <p>
            this member has agreed to become my accomplice.
          </p>
          <p>I paid her in boob rubs.  <br />
          She accepted immediately. 🤷🏻‍♀️</p>
          <p><sup>🔑lab</sup></p>
        </>
      }
      challengeText={
        <>
          <strong>Find my accomplice. 😎</strong><br /><br />
          STEP 1:<br />
          Give her a cuddle from me. This is NOT optional.<br /><br />
          STEP 2: <br />
          Bring my accomplice to the garden or anywhere outside. Do a trick and video-record it. <br /> <br /> 
          
          STEP 3: <br />
          Send the video to your Secret Agent via WhatsApp: +65 8145 0718. (Yep, fortunately for you, an innocent bystander has volunteered to be your Secret Agent to give you the next clue!) <br /> <br />

          STEP 4: <br />Along with the video, ask your Secret Againt: “Are you beautiful?” in Bisaya. She will give you the clue to the secret code.<br />
          <br />
          <div className={styles.passwordGate}>
            <label className={styles.passwordLabel} htmlFor="lena-password">Tubag:</label>
            <input
              id="lena-password"
              className={styles.passwordInput}
              type="text"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
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
      hintText={
        <> Secret Agent unreachable? <br /> 🎟️ Call your Uyab hotline. <br /> NOTE: Calling this hotline has consequences. Use only when ABSOLUTELY necessary.</>
      }
      progress={{current: 3, total: 15}}
    />
  );
}
