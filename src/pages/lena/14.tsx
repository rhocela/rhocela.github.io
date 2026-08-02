import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Catorce(): ReactNode {
  return (
    <ChallengePage
      pageNum="14 of 15"
      h2Title="Team Germany"
      message={
        <>
          <p>Speaking of home...</p>
          <p>Thank you for giving me room in yours.</p>
          <p>Your mom Anne, Freddie, and Maddie...</p>
          <p>Every one of them has made it easy for me to imagine what &quot;family with you&quot; could look and feel like.</p>
          <p>❤️</p>
        </>
      }
      challengeText={
        <>
          <p>Team Philippines has completed their mission.</p>
          <p>Now it's time to recruit Team Germany. 🇩🇪 </p>
          <p>There's someone...</p>
          <p>who used to be under the same roof.</p>
          <p>Now they're hours away.</p>
          <p>Tell this person one thing you miss about them...</p>
          <p>and one thing you love most about them.</p>
        </>
      }
      hintText="Look into the mirror and find the male version of you!"
      progress={{current: 14, total: 15}}
    />
  );
}
