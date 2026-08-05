import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Siete(): ReactNode {
  return (
    <ChallengePage
      pageNum="7 of 15"
      h2Title="Foundation"
      message={
        <>
          <p>Before we continue...</p>
          <p>I couldn't make a treasure hunt about us without stopping here.</p>
          <p>Because I genuinely believe God wrote this chapter long before either of us knew it.</p>
          <p>I want to thank you for opening your heart to God again.</p>
          <p>If there was only one gift to give you, I'd choose that for you in a heartbeat. </p>
          <p>I'm only sure of a few things in this life--one of them is that you are so precious to God, and that God loves you sooo dearly, abosuletly and uncondtionally, more than I or anyone ever could.</p>
          <p>As you open your heart to the posibility that THIS God is real, I trust that wherever it leads you, it's where the true and living God wants you to be. </p>
          <p> 🤍</p>
        </>
      }
      challengeText={
        <>
          Do you remember me?<br /><br />
          For a little while, I belonged to someone else.<br />
          Then one day, I finally found where I was always meant to be.<br /><br />
          Someone once said I was never hers to keep.<br />
          And that she was only my carrier<br />
          Until I find my rightful owner.<br />
          And THAT, I did.<br /><br />
          You might think my story ends there...<br />
          But it doesn't.<br /><br />
          I was never really THE gift.<br />
          I was only pointing you toward something greater.<br />
          A message.<br />
          A promise.<br />
          A Word that will never change.<br />
          A Word that will never return void.<br /><br />
          Come and visit me where I live.
        </>
      }
      hintText="Where I live has many leaves, but I'm not a plant or a tree. They say the Word of God is imprinted in me."
      progress={{current: 7, total: 15}}
    />
  );
}
