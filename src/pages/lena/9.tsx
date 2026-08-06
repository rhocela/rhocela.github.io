import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Nueve(): ReactNode {
  return (
    <ChallengePage
      pageNum="9 of 15"
      h2Title="Lucky Me!"
      message={
        <>
          <p>One table.</p>
          <p>Three plates.</p>
          <p>Two hot German ladies. <br /> 👯‍♀️😂</p>
          <p>One lucky Filipino.</p>
          <p>And one moment saved in my heart.</p>
          <p><sup>🔑back</sup></p>
        </>
      }
      challengeText={
        <>
          If I was there today... this is the side I'd be sitting. ❤️<br /><br />
          If things remembered people...<br />
          This place, I hope, would remember me.<br /><br />
          It's where all or nothing became a memory.<br />
          What a wonderful morning, what a gift to just be.
        </>
      }
      hintText="Not a dog. Not a chair. Look underneath the four-legged thing where I learned “Alles oder nichts!”"
      progress={{current: 9, total: 15}}
    />
  );
}
