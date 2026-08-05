import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Seis(): ReactNode {
  return (
    <ChallengePage
      pageNum="6 of 15"
      h2Title="The Legendary Object"
      message={
        <>
          <p>Remember that one time when I actually won over you? 😎</p>
          <p>
            Wood or steel,<br />
            black or white,<br />
            sometimes hidden,<br />
            sometimes in plain sight.
          </p>

         
          <p>What am I?</p>
          <p>You guessed... eventually. 😹</p>
        </>
      }
      challengeText={
        <>
          Time for the rematch (where you actually win 😜)<br /><br />
          This legendary object <br />
          Pulled a trick on your mind<br />
          But this time for you, <br />
          There's no guessing required. <br /> <br />
          But because I feel generous today, <br /> 
          Let me leave your with this <br />
          Poem of the century 📜 <br /> 
          As a gift on your Birthday 🤓 <br />  <br /> 

          Some things are worth keeping <br/>
          Smiles, laughters, even tears <br/>
          Some we're meant to discard <br/>
          Like flying thoughts and fears 🪰

        </>
      }
      hintText={
        <>
          I may not be Superman but I'm made of steel. 🗑️ <br /> 
          
        </>
      }
      progress={{current: 6, total: 15}}
    />
  );
}
