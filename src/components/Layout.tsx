import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Try Cumin Online' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.png"></link>
    </Head>
    <section className="section">
      <div className="container">
        {children}
      </div>
    </section>
    <Footer />
  </div>
)

export default Layout
