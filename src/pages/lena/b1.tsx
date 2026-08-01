import type {ReactNode} from 'react';
import ChallengePage from './ChallengePage';

export default function B1(): ReactNode {
  return (
    <ChallengePage
      pageNum='Backup'
      h2Title='Backup Page 1'
      message={<p>Placeholder content for backup page 1.</p>}
      challengeText='This is a backup page.'
      hintText='No hint yet.'
    />
  );
}

