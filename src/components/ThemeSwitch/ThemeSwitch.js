import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'
import { Box } from '../Core'
import GlobalContext from '../../context/GlobalContext'
// import { BsSunFill, BsMoonFill, BsHeartFill } from 'react-icons/bs'
// import { FaSun } from 'react-icons/fa'
import { HiSun, HiMoon } from 'react-icons/hi'

// const BoxWrapper = styled(Box)`
//   transition: 0.4s;
//   position: fixed;
//   right: 0;
//   transform: translateX(100%);
//   top: 30%;
//   z-index: 99;
//   &.opened {
//     transform: translate(0);
//   }
// `

// const Panel = styled(Box)`
//   box-shadow: 0 22px 34px rgba(22, 28, 45, 0.18);
//   border: transparent;
//   max-width: 185px;
//   padding-left: 13px;
//   padding-right: 13px;
//   padding-top: 15px;
//   padding-bottom: 15px;
//   text-align: center;
//   border-bottom-left-radius: 25px;
// `

// const TextBox = styled(Box)`
//   color: #ffffff;
//   font-size: 13px;
//   font-weight: 700;
//   letter-spacing: -0.09px;
//   line-height: 26px;
//   padding-bottom: 8px;
// `

const ButtonGroup = styled(Box)`
  box-shadow: 0 12px 34px rgba(22, 28, 45, 0.2);
  border-radius: 33px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  max-width: 153px;
`

const Button = styled.button`
  background: transparent;
  border: none;
  width: 50%;
  font-size: 11px;
  font-weight: 700;
  height: 42px;
  padding-left: 15px;
  padding-right: 15px;
  letter-spacing: 1.38px;
  text-transform: uppercase;
  outline: none !important;
  &.active {
    background-color: #ced4e7;
  }
`

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
    // background-color: black;
    background-color: #2196f3;
    display: flex;
    height: 30px;
    border-radius: 50px;
    width: 60px;
    justify-content: space-between;
    align-items: center;
    position: relative;
    // padding: 0 15px;
    transition: all 0s ease-in-out;
    cursor: pointer;
    border: 4px solid #2196f3;
  }

  .label .fa-moon {
    // color: rgb(250, 250, 250);
    color: rgb(243, 188, 36);
    font-size: 1.3rem;
    margin-right: 3px;
    display: None;
  }

  .label .fa-sun {
    color: rgb(243, 188, 36);
    font-size: 1.3rem;
    margin-left: 3px;
  }

  .blob {
    position: absolute;
    left: 60%;
    // width: 50%;
    width: 22px;
    height: 22px;
    // background: rgb(169, 241, 243);
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
    // background-color: rgb(82, 81, 83);
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
