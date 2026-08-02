import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Trece(): ReactNode {
  return (
    <ChallengePage
      pageNum="13 of 15"
      h2Title="Home"
      message={
        <>
          <p>Okay...</p>
          <p>You've taken the journey.</p>
          <p>You've made it this far.</p>
          <p>It's time to come back home.</p>
          <p>❤️</p>
          <p>One of my favorite things about us...</p>
          <p>is that we never just make food.</p>
          <p>We always end up making memories.</p>
          <p>The moments some would call ordinary...</p>
          <p>have become some of my favorite memories with you.</p>
          <p>Whenever you we arrive home, it's almost always the first place we go to.</p>
          <p>Somehow, this little space in your home has become a home within your home.</p>
          <p>Here we had serious conversations,</p>
          <p>Shared sad and happy tears,</p>
          <p>Danced as we waited,</p>
          <p>Flirted, hugged, and kissed 😜</p>
          <p>A glimpse of what life together could look like.</p>
          <p>Here, we have said several times,</p>
          <p>&quot;I love doing this with you&quot; and</p>
          <p>&quot;I've always wanted a relationship like this.&quot;</p>
        </>
      }
      challengeText={
        <>
          <p>Your Challenge:</p>
          <p>Today's secret ingredient is... ❤️ Love 🧈 Butter and... a mysterious note:</p>
          <p><i>I was sent on a very important mission.</i></p>
          <p><i>Convert one German...</i></p>
          <p><i>into an honorary Asian.</i></p>
          <p><i>Mission Status: KEEP WARM.</i></p>
        </>
      }
      hintText="Ding! Time to serve the rice!"
      progress={{current: 13, total: 15}}
    />
  );
}
