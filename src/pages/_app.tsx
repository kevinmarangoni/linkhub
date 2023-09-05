import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import StyledComponentsRegistry from '../../lib/registry'

import Theme from '@context/Theme'

export default function App({ Component, pageProps:{session, ...pageProps} }: AppProps) {
  return (
    <StyledComponentsRegistry>
      <SessionProvider session={session}>
        <Theme>
          <Component {...pageProps} />
        </Theme>
      </SessionProvider>
    </StyledComponentsRegistry>
  )
}
