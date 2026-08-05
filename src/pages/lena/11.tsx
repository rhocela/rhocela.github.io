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
          <p>Just stay with that memory for a moment. <br /> 🎶</p>
        </>
      }
            challengeText={
        <>
          I have no lips,<br />
          I have no tongue.<br /><br />
          Yet from my depths,<br />
          Songs are sung.<br /><br />
          Quiet I sit,<br />
          both day and night.<br /> 
          Until someone<br />
          wakes me right.<br /><br />
          Come wake me up,<br />
          don't let me hide...<br />
          A familiar voice<br />
          is trapped inside.
        </>
      }
      hintText="Slide your finger on my body from left to right, and then turn on your colored tooth.⚡ "
      progress={{current: 11, total: 15}}
    />
  );
}


