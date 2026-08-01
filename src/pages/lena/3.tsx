import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function Tres(): ReactNode {
  return (
    <ChallengePage
      pageNum="3 of 15"
      h2Title="The Accomplice"
      message={
        <>
          <p>One of the things I admire most about you is how naturally you care.</p>
          <p>You somehow keep everything alive.</p>
          <p>
            Plants.<br />
            Horses.<br />
            Bella.<br />
            Even spiders.
          </p>
          <p>(And me 🥹.)</p>
          <p>You make us feel safe. And I think it's one of your greatest gifts. ❤️</p>
          <p>
            And speaking of the things you keep safe and alive, someone helped me put this little adventure together.
          </p>
          <p>
            A member of our family has been feeding me classified information...
          </p>
          <p>
            ...and has agreed to become my official accomplice.
          </p>
          <p>I paid her in belly rubs.</p>
          <p>She accepted immediately. 🤷🏻‍♀️</p>
        </>
      }
      challengeText={
        <>
          <strong>Find my accomplice. 😎</strong><br /><br />
          Give her a cuddle from me.<br />
          This is NOT optional.<br />
          Don't skip this or my accomplice will tell!<br /><br />
          Bring her to the garden (or anywhere outside).<br />
          Ask her to perform one of her favorite tricks, record it, and send the video to this secret agent via WhatsApp: +65 8145 0718.<br /><br />
          Along with one message—and one message only:<br />
          Ask this person “Are you beautiful?” in Bisaya.<br />
          Nothing else. Quick! Before this agent loses patience!
        </>
      }
      hintText={
        <>The accomplice is your dog. Give her a cuddle from me and send the video to the number above.</>
      }
      progress={{current: 3, total: 15}}
    />
  );
}
