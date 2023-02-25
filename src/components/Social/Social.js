import React from 'react'
import styled from 'styled-components'
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa'
import { color, background } from 'styled-system'

const SocialContainer = styled.div`
  .social-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.65rem;
    border: none;
    transition: 0.4s;
    font-size: 1.5rem;
    ${color}
    ${background}

    :hover {
      transform: translateY(-5px);
    }
  }
`

function copy_email_icon() {
  /* Get the text field */
  var copyText = 'l.wisaroot@gmail.com'

  navigator.clipboard.writeText(copyText)

  /* Alert the copied text */
  var tooltip = document.getElementById('copy-tooltip')
  tooltip.innerHTML = 'Copied!'
}

function mouse_out_email_icon() {
  var tooltip = document.getElementById('copy-tooltip')
  tooltip.innerHTML = 'L.Wisroot@gmail.com'
}

const Social = ({ items, outline, inverse, className, ...rest }) => {
  return (
    <SocialContainer
      className={`d-flex ${className}`}
      {...rest}
      color="bg"
      bg="heading"
      css={`
        .copy-tooltip {
          position: relative;
          // display: inline-block;
          border-bottom: 1px dotted black;
        }

        .copy-tooltip .tooltiptext {
          visibility: hidden;
          width: 150px;
          background-color: ${({ theme }) => theme.colors.frontShade};
          color: ${({ theme }) => theme.colors.bg};
          text-align: center;
          border-radius: 6px;
          padding: 5px;
          font-size: 0.85rem;

          /* Position the tooltip */
          position: absolute;
          z-index: 1;
          bottom: 120%;
          left: 50%;
          margin-left: -80px;
        }

        .copy-tooltip .tooltiptext::after {
          content: '';
          position: absolute;
          top: 99.5%;
          left: 50%;
          border-width: 5px;
          border-style: solid;
          border-color: ${({ theme }) => theme.colors.frontShade} transparent transparent
            transparent;
        }

        .copy-tooltip:hover .tooltiptext {
          visibility: visible;
        }

        a {
          cursor: pointer;
        }
      `}
    >
      <a rel="noopener noreferrer" onClick={copy_email_icon} onMouseLeave={mouse_out_email_icon}>
        <div className="social-icon copy-tooltip">
          <span
            css={`
              margin-top: -5px;
            `}
          >
            <span className="tooltiptext" id="copy-tooltip">
              L.Wisroot@gmail.com
            </span>
            <FaEnvelope />
          </span>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/wisaroot/" target="_blank" rel="noopener noreferrer">
        <div className="social-icon">
          <span
            css={`
              margin-top: -5px;
            `}
          >
            <FaLinkedinIn />
          </span>
        </div>
      </a>
      <a href="https://github.com/wisarootl" target="_blank" rel="noopener noreferrer">
        <div className="social-icon">
          <span
            css={`
              margin-top: -5px;
            `}
          >
            <FaGithub />
          </span>
        </div>
      </a>
    </SocialContainer>
  )
}

export default Social
