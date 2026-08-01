import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function B3(): ReactNode {
  return (
    <ChallengePage
      pageNum='Backup'
      h2Title='Backup Page 3'
      message={<p>Placeholder content for backup page 3.</p>}
      challengeText='This is a backup page.'
      hintText='No hint yet.'
    />
  );
}

