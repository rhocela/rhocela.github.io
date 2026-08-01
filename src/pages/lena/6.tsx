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
      hintText={
        <>
          Some things are worth holding on to.<br />
          Some things are meant to disappear.<br />
          Flying thoughts and fears<br />
          You know where they belong.
        </>
      }
      progress={{current: 6, total: 15}}
    />
  );
}
