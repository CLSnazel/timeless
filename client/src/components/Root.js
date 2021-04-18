import React from 'react'
import Interactive from 'react-interactive';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { Content, H1, LinkDiv } from './Root.styles'
import Alarms from './Alarms';

export default function Root({ location }) {
  const username = 'Pac-Man'
  return (
    <>
      <Content>
        <H1>Good Morning,<br/>{username}.</H1>
          <LinkDiv>
          <Interactive
            as={HashLink}
            smooth
            to={`${location.pathname}#alarms`}
            >
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </Interactive>
          </LinkDiv>
      </Content>
      <Alarms />
    </>
  )
}
