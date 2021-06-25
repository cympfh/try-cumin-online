import Link from 'next/link'
import React from 'react'
import Version from '../version'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      cumin version: { Version }
    </div>
    <div className="container">
      See <Link href="https://github.com/cympfh/cumin/releases">releases</Link>
    </div>
  </footer>
);

export default Footer
