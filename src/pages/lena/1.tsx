import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Uno(): ReactNode {
  return (
    <ChallengePage
      pageNum="1 of 15"
      h2Title="Not-So-Smooth Criminal"
      message={
        <>
          <p>I thought of all the things I've done to you over the past 4 months...</p>
          <p>
            The teasing.<br />
            The distractions.<br />
            The terrible jokes.<br />
            The constant stealing of your attention.
          </p>
          <p>
            But if you ever took me to court... ⚖️<br />
            I know exactly what I'd be convicted of.
          </p>
          <p>
            Fortunately for me...<br />
            you're the only witness.
          </p>
          <p>...and somehow you keep letting me get away with it. 😂</p>
        </>
      }
      challengeText={
        <>
          Every adventure needs the right equipment.<br />
          Begin by finding yours:<br /><br />
          I've committed many crimes in this house,<br />
          yet I somehow never live in fear.<br /><br />
          I've done it once, maybe twice...<br />
          Okay fine—REPEATEDLY! If I'm being precise<br /><br />
          So go and check the crime scene<br />
          Investigate and find the clue<br />
          It's where every piece is grouped by two...<br />
          And matching pairs disappear from your view. 🫢
        </>
      }
      hintText={
        <>The scene of the crime is inside a <strong>shelf</strong> where your feet get dressed. If you empty it out, you'll find a <strong>coded</strong> body laying on the ground.</>
      }
    />
  );
}
