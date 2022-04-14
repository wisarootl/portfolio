import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ListGroup, Collapse } from 'react-bootstrap'
import { FaAngleRight, FaAngleDown } from 'react-icons/fa'
// import { Link } from 'gatsby'
import { Link } from 'react-scroll'
import { Link as Link2 } from 'gatsby'
import GlobalContext from '../../context/GlobalContext'
import ThemeSwitch from '../ThemeSwitch'

const NestedMenuContainer = styled.div`
  a {
    color: ${({ theme }) => theme.colors.front} !important;
    transition: all 0.3s ease-out;
    font-weight: 700;
    text-transform: lowercase;

    &:hover,
    &:active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
    }
  }

  .list-group-item {
    background-color: transparent;
    font-weight: 700;
    text-transform: lowercase;
    border: 0px;
    color: ${({ theme }) => theme.colors.front};
    padding-left: 0px !important;
    padding-right: 0 !important;
    &:hover,
    &:active,
    &.active {
      color: ${({ theme }) => theme.colors.primary};
      text-decoration: none;
      background-color: transparent;
      // border-bottom: 1px solid rgba(22, 28, 45, 0.125);
    }

    & + .collapse:not(.show) {
      .list-group-item {
        border: none !important;
        border-width: 0 !important;
      }
    }
    & + .collapse.show {
      .list-group-item {
        &:first-child {
          border-top: none !important;
        }
      }
    }
  }
  .collapse + .list-group-item {
    border-top-width: 0;
  }
  /* .list-group-flush:last-child .list-group-item:last-child {
    border-bottom-width: 1px;
  } */
`

const defaultMenuItems = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' }
    ]
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [
      { name: 'profile', label: 'Profile' },
      { name: 'insurance', label: 'Insurance' },
      {
        name: 'notifications',
        label: 'Notifications',
        items: [
          { name: 'email', label: 'Email' },
          {
            name: 'desktop',
            label: 'Desktop',
            items: [
              { name: 'schedule', label: 'Schedule' },
              { name: 'frequency', label: 'Frequency' }
            ]
          },
          { name: 'sms', label: 'SMS' }
        ]
      }
    ]
  }
]

const MenuItem = ({
  label,
  isExternal = false,
  name,
  items,
  depthStep = 20,
  depth = 0,
  ...rest
}) => {
  const [open, setOpen] = useState(false)
  const hasSubItems = Array.isArray(items)

  const gContext = useContext(GlobalContext)

  return (
    <>
      {hasSubItems ? (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
            cursor: pointer;
          `}
          onClick={() => setOpen(!open)}
          className={`d-flex align-items-center justify-content-between ${open ? 'active' : ''}`}
        >
          <span>{label}</span>
          <span>{open ? <FaAngleDown /> : <FaAngleRight />}</span>
        </ListGroup.Item>
      ) : (
        <ListGroup.Item
          {...rest}
          css={`
            padding-left: ${depth * depthStep}px !important;
            padding-right: 0 !important;
          `}
        >
          {isExternal ? (
            <a
              href={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas()
                }
              }}
            >
              {label}
            </a>
          ) : (
            <Link
              to={`${name}`}
              onClick={() => {
                if (gContext.visibleOffCanvas) {
                  gContext.toggleOffCanvas()
                }
              }}
            >
              {label}
            </Link>
          )}
        </ListGroup.Item>
      )}

      {hasSubItems ? (
        <Collapse in={open}>
          <ListGroup>
            {items.map((subItem) => (
              <MenuItem key={subItem.name} depth={depth + 1} depthStep={depthStep} {...subItem} />
            ))}
          </ListGroup>
        </Collapse>
      ) : null}
    </>
  )
}

const NestedMenu = ({ menuItems = defaultMenuItems }) => {
  // ! const gContext = useContext(GlobalContext)

  let menu_items
  // ! if (gContext.isHomepage === false) {
  // console.log(global.location)
  var pathname = undefined
  if (global.location) {
    pathname = global.location.pathname
  } else {
    pathname = undefined
  }

  if (pathname !== '/') {
    menu_items = (
      <>
        <ListGroup.Item>{<Link2 to="/">Home</Link2>}</ListGroup.Item>
      </>
    )
  } else {
    menu_items = (
      <>
        <ListGroup.Item>
          {
            <Link to="about" spy={true} smooth={true} offset={-50} duration={1000} href="#">
              about
            </Link>
          }
        </ListGroup.Item>
        <ListGroup.Item>
          {
            <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={1000} href="#">
              portfolio
            </Link>
          }
        </ListGroup.Item>
        <ListGroup.Item>
          {
            <Link to="experience" spy={true} smooth={true} offset={-50} duration={1000} href="#">
              experience
            </Link>
          }
        </ListGroup.Item>
        <ListGroup.Item>
          {
            <Link to="education" spy={true} smooth={true} offset={-50} duration={1000} href="#">
              education
            </Link>
          }
        </ListGroup.Item>
        <ListGroup.Item>
          {
            <Link to="skills" spy={true} smooth={true} offset={-50} duration={1000} href="#">
              skills
            </Link>
          }
        </ListGroup.Item>

        <ListGroup.Item>
          {
            <Link to="awards" spy={true} smooth={true} offset={-50} duration={1000} href="#">
              awards
            </Link>
          }
        </ListGroup.Item>
      </>
    )
  }

  return (
    <NestedMenuContainer>
      <ListGroup variant="flush">
        {menuItems.map((menuItem, index) => (
          <MenuItem key={`${menuItem.name}${index}`} depthStep={20} depth={0} {...menuItem} />
        ))}

        {menu_items}

        <ListGroup.Item>
          {
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={1000} href="#">
              contact
            </Link>
          }
        </ListGroup.Item>
      </ListGroup>
    </NestedMenuContainer>
  )
}

export default NestedMenu
