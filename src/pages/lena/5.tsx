import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Cinco(): ReactNode {
  return (
    <ChallengePage
      pageNum="5 of 15"
      h2Title="Our Favorite Distance"
      message={
        <>
          <p>Whenever we're together...</p>
          <p>some part of me always ends up touching you.</p>
          <p>
            A hand.<br />
            A hug.<br />
            A rub.
          </p>
          <p>Somehow my body has an involuntary habit of wandering off until it finds its favorite place.</p>
          <p>I don't even think about it anymore.</p>
          <p>I guess my body just knows where it belongs. ❤️</p>
        </>
      }
      challengeText={
        <>
          The next time we share a moment in this place...<br />
          Not even real silver can stop my pace<br />
          So say a little prayer, like we always do<br />
          And go where my wandering feet always find you
        </>
      }
      hintText="A place where we dine. Where my feet touch your thighs. Take your seat and look under."
      progress={{current: 5, total: 15}}
    />
  );
}
