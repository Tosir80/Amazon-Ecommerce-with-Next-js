import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import {store ,persistor}  from '../app/store'
import { PersistGate } from 'redux-persist/integration/react'

function MyApp({ Component, pageProps:{ session, ...pageProps } }) {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
     <SessionProvider session={session}>
    <Navbar/>

    <Component {...pageProps} />
    <Footer/>
    </SessionProvider>
    </PersistGate>
    </Provider>
  )
}

export default MyApp
