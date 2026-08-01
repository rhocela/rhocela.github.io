import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Dos(): ReactNode {
  return (
    <ChallengePage
      pageNum="2 of 15"
      h2Title="Living Proof"
      message={
        <>
          <p>Congratulations! 🧦</p>
          <p>You've already solved the first challenge.</p>
          <p>
            I wasn't too worried...<br />
            I knew you'd immediately think, “If a pair is missing...” 😂
          </p>
          <p>
            And nothing dissolves my guilt quite like hearing you say,<br />
            “It’s not stealing if it’s ALSO yours.”
          </p>
          <p>Thank you, meine Herzen. 🥹</p>
          <p>Now you're officially equipped for today's adventure in the wild.</p>
        </>
      }
      challengeText="Somewhere in this home lives the biggest proof that your thumb not only has a color—it also has magical powers that even velvet thrives in your hands."
      hintText="Velvet green body. White veins. 🌱"
    />
  );
}
