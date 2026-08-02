import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Doce(): ReactNode {
  return (
    <ChallengePage
      pageNum="12 of 15"
      h2Title="Our Little Bubble"
      message={
        <>
          <p>Every journey with you in this little bubble has been worth taking.</p>
          <p>Every distance.</p>
          <p>Every conversation.</p>
          <p>Every guessing game.</p>
          <p>Every laugh.</p>
          <p>Every happy tear.</p>
          <p>...and every time this other chick somehow decides it's the perfect time to interrupt! 😂</p>
          <p>YES even our white little bubble isn't safe from this hunt. 😂</p>
          <p>❤️</p>
        </>
      }
      challengeText={
        <>
          <p>Your challenge:</p>
          <p>I don't wear a cape, yet I rescue each mess.</p>
          <p>From sh*t to stink, I quietly say &quot;yes&quot;.</p>
          <p>I sit here and I patiently wait,</p>
          <p>Behind this tiny door, I await my fate.</p>
        </>
      }
      hintText="You sneezed. My hands are dirty. I need to wipe this mess."
      progress={{current: 12, total: 15}}
    />
  );
}
