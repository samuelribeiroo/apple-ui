import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material'
import type { AccordionSlots } from '@mui/material/Accordion'
import Fade from '@mui/material/Fade'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import React from 'react'
import './style.scss'

export function FAQ(): JSX.Element {
  return (
    <>
      <div style={{ padding: '20px' }} className="accordion-container">
        <Typography variant="h2" gutterBottom className="accordion-heding">
          Questões? Nós temos as respostas.
        </Typography>

        <Accordion
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          className="accordion-box"
        >
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="summary"
            sx={{
              '&:focus': {
                border: '2px solid #0a84ff',
                borderRadius: '8px',
              },
            }}
          >
            <Typography className="accordion-title">
              O que eu preciso para assistir ao MLS Season Pass?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-paragraph">
              Para assistir a jogos gratuitos e assinar o MLS Season Pass, será
              necessário iniciar sessão com seu ID Apple. Saiba{' '}
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="">como criar um ID apple.</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          className="accordion-box"
        >
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="summary"
            sx={{
              '&:focus': {
                border: '2px solid #0a84ff',
                borderRadius: '8px',
              },
            }}
          >
            <Typography className="accordion-title">
              Onde posso assistir ao MLS Season Pass?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="text-paragraph">
              O MLS Season Pass está disponível no app Apple TV no iPhone, iPad,
              Mac, Apple TV 4K e Apple TV HD.  Também é possível encontrar
              o app Apple TV nas melhores smart TVs, dispositivos de streaming,
              decodificadores e consoles de jogos.  Se você usa um
              dispositivo Android, pode assistir e assinar na web em{' '}
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="">tv.apple.com/mls</a>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          slots={{ transition: Fade as AccordionSlots['transition'] }}
          slotProps={{ transition: { timeout: 400 } }}
          className="accordion-box"
        >
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="summary"
            sx={{
              '&:focus': {
                border: '2px solid #0a84ff',
                borderRadius: '8px',
              },
            }}
          >
            <Typography className="accordion-title">
              Como posso assistir Lionel Messi no MLS Season Pass?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className='accordion-details-container'>
            <Typography className="text-paragraph">
              Você pode assistir a Messi e a todas as partidas do Inter Miami CF
              com uma assinatura do MLS Season Pass. <br /> Para se inscrever,
              crie um Apple ID gratuito. Em seguida, vá para o aplicativo Apple
              TV ou em{' '}
              {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
              <a href="">tv.apple.com/mls</a>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
