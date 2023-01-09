import '../styles/globals.css'
import Link from 'next/link'
function MyApp({ Component, pageProps }) {
  return <div>
     <div className="navbar">
        <Link href="/">Ranjan Palai</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
     </div>
     <Component {...pageProps} />
  </div>
}

export default MyApp
