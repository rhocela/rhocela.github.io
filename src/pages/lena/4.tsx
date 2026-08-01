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
            But little does she know my secret agenda is to get her fully on my team to make our favorite person happy for the rest of our lives. ❤️
          </p>
        </>
      }
      challengeText={
        <>
         
          Now that my accomplice has completed her mission...<br />
          She's earned a well-deserved rest.<br />
          Every queen deserves a throne.<br />
          Find hers.

        </>
      }
      hintText={
        <>Banished from the green cushions, she claimed the grey one and made it her home. (Turn it over).</>
      }
      progress={{current: 4, total: 15}}
    />
  );
}
