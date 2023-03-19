import { PostList } from '../components/PostList'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <><Component {...pageProps} /><PostList /></>
}

export default MyApp
