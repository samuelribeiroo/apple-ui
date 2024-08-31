import React from 'react'
import { FaRegUser } from 'react-icons/fa'

import './style.scss'

export function SignInButton(): JSX.Element {
  return (
    <>
      <button type="button" className="app-button sign-in">
        <FaRegUser />
        <p>Entre</p>
      </button>
    </>
  )
}

export function SubscribeButton(): JSX.Element {
  return (
    <>
      <button type="button" className="app-button subscribe">
        Assine
      </button>
    </>
  )
}

export function ContinueButon(): JSX.Element {
  return (
    <>
      <button type="button" className="app-button continue">
        Continuar
      </button>
    </>
  )
}

export function FreeTrialButton(): JSX.Element {
  return (
    <>
      <button type="button" className="app-button free-trial">
        Aceitar Teste Gratuito
      </button>
    </>
  )
}
