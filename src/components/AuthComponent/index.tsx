import React, { useState } from 'react'
import AppleLogo from '../../assets/apple-logo-auth.svg'
import { ContinueButton } from '../Buttons'
import './style.scss'

export default function AuthComponent(): JSX.Element {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <>
      <div className="authenticate-view-container">
        <span>
          <img
            src={AppleLogo}
            alt="Apple Logo"
            fetchPriority="auto"
            height={55}
          />
          <h1>Entrar ou Cadastrar-se</h1>
          <p>Insira seu e-mail para começar.</p>
          <input
            type="email"
            required
            placeholder="Insira seu email ou conta Apple."
            style={{
              border: `1.5px solid ${isFocused ? '#007BFF' : '#d1d5db'}`,
              padding: '8px',
              outline: 'none',
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </span>
        <article className="agreements-terms">
          <p>
            As informações da sua Conta Apple são usadas para permitir que você
            faça login com segurança e acesse seus dados. A Apple registra
            certos dados para fins de segurança, suporte e relatórios. Se você
            concordar, a Apple também pode usar as informações da sua Conta
            Apple para enviar e-mails e comunicações de marketing, inclusive com
            base no seu uso dos serviços Apple.
          </p>
          <a
            href="https://developer.apple.com/support/terms/"
            target="_blank"
            rel="noreferrer"
          >
            Veja como seus dados são gerenciados...
          </a>
        </article>
        <ContinueButton />
      </div>
    </>
  )
}
