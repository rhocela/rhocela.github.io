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
          <p>I never imagined someone could turn </p>
          <p>“AAAAAHHHH!”</p>
          <p>into</p>
          <p>“Awww... she's adorable.” 😂</p>
          <p>Yet somehow...</p>
          <p>Here we are.</p>
        </>
      }
      challengeText="Go pay a visit to one of the fluffy ladies of the house."
      hintText="Look under the wooden plank of your first Iiiiiiiiiiii! 🕷️"
      progress={{current: 8, total: 15}}
    />
  );
}
