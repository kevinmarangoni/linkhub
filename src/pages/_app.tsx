import type { AppProps } from 'next/app'
import StyledComponentsRegistry from '../../lib/registry'

import Theme from '@context/Theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </StyledComponentsRegistry>
  )
}
