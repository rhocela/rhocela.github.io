import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Quince(): ReactNode {
  return (
    <ChallengePage
      pageNum="15 of 15"
      h2Title="Koko-who?!"
      message={
        <>
          <p>BRAVO here we go!</p>
          <p>You are down to the last pitstop of this little adventure!</p>
          <p>You&apos;ve nearly reached the end.</p>
          <p>Or maybe...</p>
          <p>just the beginning. ❤️</p>
          <p>I hope every challenge today has kept you company and has given you a little piece of us.</p>
          <p>And now for your final clue...</p>
          <p>Do you remember the time we played <strong>Kokology</strong>?</p>
          <p>I have a question for you:</p>
          <p><i>“It&apos;s your birthday today, and you&apos;ve received gifts from family and friends. Who gave you the biggest present?”</i></p>
          <p>I still remember your answer.</p>
          <p>And more importantly...</p>
          <p>I remember <strong>why</strong>.</p>
          <p>This is someone whose love for you has never needed proof... </p>
          <p>💗</p>
        </>
      }
      challengeText={
        <>
          <p>I know it&apos;s summer <br />
          But soon it's over<br />
          Next comes fall, autumn <br /> 
          And finally, winter <br /> <br />
          
          As cold as it gets <br />
          I stand on my feet <br /> 
          I dress to my best <br />
          I have places to visit </p>

          <p>Before I walk away,<br />
          There&apos;s a nook on my way</p>
          <p>Where winter sleeps, <br /> Waiting for its reprise, <br /> 
          Black and yellow <br /> 
          Side by side</p>
        </>
      }
      hintText="Up you go, don't lose your track. 🪜 Where yellow hangs beside the black. Look underneath... that's where I'm at. 👀"
      progress={{current: 15, total: 15}}
    />
  );
}
