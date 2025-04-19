import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems,LinkedInButton, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '30;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href='#about'><strong>About</strong></NavLink>
          <NavLink href='#skills'><strong>Skills</strong></NavLink>
          <NavLink href='#experience'><strong>Experience</strong></NavLink>
          <NavLink href='#projects'><strong>Projects</strong></NavLink>
          <NavLink href='#education'><strong>Education</strong></NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>

          <LinkedInButton href={Bio.linkedin} target="_blank">LinkedIn Profile</LinkedInButton>
        </ButtonContainer>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href='#about' onClick={() => setIsOpen(!isOpen)}><strong>About</strong></MobileLink>
            <MobileLink href='#skills' onClick={() => setIsOpen(!isOpen)}><strong>Skills</strong></MobileLink>
            <MobileLink href='#experience' onClick={() => setIsOpen(!isOpen)}><strong>Experience</strong></MobileLink>
            <MobileLink href='#projects' onClick={() => setIsOpen(!isOpen)}><strong>Projects</strong></MobileLink>
            <MobileLink href='#education' onClick={() => setIsOpen(!isOpen)}><strong>Education</strong></MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
