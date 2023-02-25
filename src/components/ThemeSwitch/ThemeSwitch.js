import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import GlobalContext from '../../context/GlobalContext'
import { HiSun, HiMoon } from 'react-icons/hi'

const Div = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .container.night {
    background-color: rgba(17, 16, 34, 0.911);
  }

  .label {
    background-color: #2196f3;
    display: flex;
    height: 30px;
    border-radius: 50px;
    width: 60px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transition: all 0s ease-in-out;
    cursor: pointer;
    border: 4px solid #2196f3;
  }

  .label .fa-moon {
    color: rgb(243, 188, 36);
    font-size: 1.3rem;
    margin-right: 3px;
    display: None;
    margin-left: auto;
  }

  .label .fa-sun {
    color: rgb(243, 188, 36);
    font-size: 1.3rem;
    margin-left: 3px;
  }

  .blob {
    position: absolute;
    left: 58%;
    width: 22px;
    height: 22px;
    background: ${({ theme }) => theme.colors.light};
    border-radius: 50px;
    transition: 0.1s ease all;
  }
  .checkbox {
    opacity: 0;
    position: absolute;
  }
  .info {
    display: block;
    margin-top: 50px;
  }
  .info.night {
    color: white;
  }

  .checkbox:checked + .label .blob {
    left: 0;
  }

  .checkbox:checked + .label .fa-moon {
    display: block;
  }

  .checkbox:checked + .label .fa-sun {
    display: None;
  }

  .checkbox:checked + .label {
    display: flex;
    justify-content: end;
  }

  .checkbox:checked + .label {
    background-color: ${({ theme }) => theme.colors.ash};
    border: 4px solid ${({ theme }) => theme.colors.ash};
  }
`

const ThemeSwitch = (props) => {
  const [active, setActive] = useState(false)
  const gContext = useContext(GlobalContext)

  return (
    <>
      <Div>
        <div className="night-mode-button">
          <input
            type="checkbox"
            className="checkbox"
            id="night-mode"
            onClick={() => {
              var checkBox = document.getElementById('night-mode')
              if (checkBox.checked === true) {
                gContext.changeTheme({
                  bodyDark: true,
                  headerDark: true,
                  footerDark: true
                })
              } else {
                gContext.changeTheme({
                  bodyDark: false,
                  headerDark: false,
                  footerDark: false
                })
              }
            }}
          />
          <label htmlFor="night-mode" className="label">
            <HiSun className="fa-sun" />
            <HiMoon className="fa-moon" />
            <div className="blob"></div>
          </label>
        </div>
      </Div>
    </>
  )
}

export default ThemeSwitch
