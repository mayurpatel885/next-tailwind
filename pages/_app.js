import '../styles/_globals.scss'
import variables from '../styles/variables.module.scss'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp 

// export default function MyApp({ Component, pageProps }) {
//   return (
//     <Layout color={variables.primaryColor}>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }
