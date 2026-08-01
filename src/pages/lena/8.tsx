import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Ocho(): ReactNode {
  return (
    <ChallengePage
      pageNum="8 of 15"
      h2Title="Plot Twist"
      message={
        <>
          <p>Before I met you,</p>
          <p>I never imagined someone could turn “AAAAAHHHH!” into “Awww... she's adorable.” 😂</p>
          <p>Yet somehow...</p>
          <p>here we are.</p>
        </>
      }
      challengeText="Go pay a visit to one of the tiniest fluffiest ladies of the house."
      hintText="The tiniest fluffiest lady of the house is a small pet with soft fur and a very cute presence."
      progress={{current: 8, total: 15}}
    />
  );
}
