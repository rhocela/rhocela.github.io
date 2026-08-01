import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Cuatro(): ReactNode {
  return (
    <ChallengePage
      pageNum="4 of 15"
      h2Title="Mission Accomplished"
      message={
        <>
          <p>Well done! You have caught the accomplice.</p>
          <p>
            Before I met you, I never imagined I'd love someone else's dog this much.
          </p>
          <p>
            But somewhere between the countless “Raus Pipis!”... and the clingy blonde fur everywhere...
          </p>
          <p>
            Bella quietly became family to me too.
          </p>
          <p>
            I'm sure she still thinks I'm just this weird human who occasionally steals your attention...
          </p>
          <p>
            But little does she know my secret agenda is to get her fully in my team to make our favorite person happy for the rest of our lives. ❤️
          </p>
        </>
      }
      challengeText={
        <>
          <strong>Emergency Hint</strong><br /><br />
          Not where humans sit.<br />
          Not where spiders sleep.<br /><br />
          <strong>Banished from the green throne...</strong><br />
          <strong>She claimed the grey one and made it her home.</strong><br /><br />
          <strong>Turn it over. 👑🐾</strong>
        </>
      }
      hintText={
        <>Not where humans sit. Not where spiders sleep. The clue is on the grey seat/cover that Bella claimed as her home.</>
      }
      progress={{current: 4, total: 15}}
    />
  );
}
