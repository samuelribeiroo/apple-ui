import React, { useState } from 'react'
import { IoSearch } from 'react-icons/io5'
import { SignInButton } from '../Buttons'
import ModalComponent from '../Modal'
import HeaderLogoSVG from '../../assets/HeaderLogo.svg'
import MobileMenu from '../../assets/mobile-menu.svg'
import Arrow from '../../assets/diagonal-arrow.svg'
import './style.scss'
import AuthComponent from '../AuthComponent'

export default function GlobalHeader(): JSX.Element {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)

  const closeModal = () => setModalOpen(false)

  return (
    <>
      <header className="global-header">
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
        <img
          src={MobileMenu}
          alt=""
          width={38}
          height={24}
          className="mobile-menu"
          onClick={() => alert('oi')}
        />
        <div>
          <img
            src={HeaderLogoSVG}
            alt="Apple TV Logo"
            width={24}
            height={24}
            fetchPriority="high"
          />
          <p>Abrir TV</p>
          <a href="https://www.svgrepo.com/svg/104834/diagonal-arrow">
            <img src={Arrow} alt="Apple TV Logo" width={12} height={10} />
          </a>
        </div>
        <span className="header-text-wrapper">
          <p>Apple TV+</p>
          <p>MLS</p>
        </span>
        <span className="sign-container">
          <IoSearch className="search-icon" />
          <input type="text" placeholder="Buscar" />
          <SignInButton onClick={openModal} />
        </span>
      </header>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal}>
        <AuthComponent />
      </ModalComponent>
    </>
  )
}
