import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from './styling/Globals';

import { leagueSpartan } from '@/app/ui/fonts';

export const metadata = {
  title: 'Job Listings with Filtering',
  description:
    'This is a solution to the Job Listings with Filtering challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${leagueSpartan.className} antialiased`}>
        <StyledComponentsRegistry>
          {children}
          <GlobalStyles />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
