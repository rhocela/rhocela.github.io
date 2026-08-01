import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Seis(): ReactNode {
  return (
    <ChallengePage
      pageNum="6 of 15"
      h2Title="The Legendary Object"
      message={
        <>
          <p>Remember that one time when I actually won over you? 😎</p>
          <p>
            Wood or steel,<br />
            black or white,<br />
            sometimes hidden,<br />
            sometimes in plain sight.
          </p>
          <p>What am I?</p>
          <p>You guessed... eventually.</p>
        </>
      }
      challengeText={
        <>
          Time for the rematch (where you actually win 😜)<br /><br />
          Go find the legendary object that pulled a trick on your mind.<br />
          This time... no guessing required. 😉
        </>
      }
      hintText="The legendary object is a small item you already know well—something that once fooled your mind and is now waiting to be found again."
      progress={{current: 6, total: 15}}
    />
  );
}
