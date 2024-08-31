import React from 'react'
import './style.scss'

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="global-footer">
        <div className="footer-wrapper">
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          <ul className="service-items">
            <li>Termos de serviço</li>
            <li>Apple TV e privacidade</li>
            <li>Política de cookies</li>
            <li>Suporte</li>
          </ul>
        </div>
        <span>
          <ul className="available-countries">
            <li>Estados Unidos</li>
            <li>Español (México)</li>
          </ul>
        </span>
      </footer>
    </>
  )
}
