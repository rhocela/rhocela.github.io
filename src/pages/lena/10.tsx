import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Diez(): ReactNode {
  return (
    <ChallengePage
      pageNum="10 of 15"
      h2Title="Breathe"
      message={
        <>
          <p>You're really crushing this! I know it. 💪🏻</p>
          <p>And I hope this puts a little smile on your face.</p>
          <p>Now, for the next minute...</p>
          <p>Don't solve anything.</p>
          <p>Go to the porch.</p>
          <p>Sit on your couch.</p>
          <p>Lean back, and relax.</p>
          <p>Take 5 good breaths.</p>
          <p>Be still... :) ❤️❤️</p>
        </>
      }
      challengeText="What came to your mind in the past minute? Call Ash or Mic. Tell them something... anything—AND include at least 1 Bisaya word. They will give you the next step."
      hintText="You read it right. CALL 😜"
      progress={{current: 10, total: 15}}
    />
  );
}
