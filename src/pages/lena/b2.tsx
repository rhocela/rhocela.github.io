import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function B2(): ReactNode {
  return (
    <ChallengePage
      pageNum='Backup'
      h2Title='Backup Page 2'
      message={<p>Placeholder content for backup page 2.</p>}
      challengeText='This is a backup page.'
      hintText='No hint yet.'
    />
  );
}

