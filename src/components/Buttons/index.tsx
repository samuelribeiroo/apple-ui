import React from 'react'
import { FaRegUser } from 'react-icons/fa'
import type { ButtonProps } from '../../types'

import './style.scss'

export function SignInButton({ onClick }: ButtonProps): JSX.Element {
  return (
    <>
      <button
        type="button"
        className="app-button sign-in-btn"
        onClick={onClick}
      >
        <FaRegUser />
        <p>Entre</p>
      </button>
    </>
  )
}

export function SubscribeButton(): JSX.Element {
  return (
    <>
      <button type="button" className="app-button subscribe-btn">
        Assine
      </button>
    </>
  )
}

export function ContinueButton(): JSX.Element {
  return (
    <>
      <button type="button" className="app-button continue-btn">
        Continuar
      </button>
    </>
  )
}

export function FreeTrialButton({ onClick }: ButtonProps): JSX.Element {
  return (
    <>
      <button
        type="button"
        className="app-button free-trial-btn"
        onClick={onClick}
      >
        Aceitar Teste Gratuito
      </button>
    </>
  )
}
