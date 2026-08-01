import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Once(): ReactNode {
  return (
    <ChallengePage
      pageNum="11 of 15"
      h2Title="Soundtrack"
      message={
        <>
          <p>Quick question.</p>
          <p>What song reminds you most of us?</p>
          <p>There isn't a wrong answer.</p>
          <p>Just stay with that memory for a moment. ❤️</p>
        </>
      }
      challengeText="I can't talk but I can speak without touching."
      hintText="Turn on your Bluetooth. NOW!"
      progress={{current: 11, total: 15}}
    />
  );
}
