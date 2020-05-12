import React from 'react'

export default function Layout({ header, children }) {
  return (
    <header>
      {header}
      {children}
    </header>
  )
}
