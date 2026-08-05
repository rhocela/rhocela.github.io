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
          <p>You've solved the first challenge.</p>
          <p>
            Well, what can I say...<br />
            “Guilty as charged.” 😂
          </p>
          <p>
            But nothing dissolves my guilt but to hear you say,<br />
            “It’s not stealing if it’s ALSO yours.”
          </p>
          <p>Thank you, meine Herzen. 🥹</p>
          <p>Now you're officially equipped for the next adventure—in the WILD!</p>
        </>
      }
      challengeText="Somewhere in this home lives the biggest proof that your thumb not only has a color. It also has magical powers—even velvet thrives in your hands!"
      hintText="I am green. I have velvent skin and white veins. 🌱"
      progress={{current: 2, total: 15}}
    />
  );
}
