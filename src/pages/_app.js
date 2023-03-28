import { ProgressBar } from '@/styles/loading/spinner'
import Layout from '../layout/layoutComponent'
import { GlobalStyle } from '../styles/global'

export default function App({ Component, pageProps }) {
  return <>
  <GlobalStyle/>
  <ProgressBar
  color="#29d"
  startPosition={0.3}
  stopDelayMs={200}
  height={3}
/>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
}

