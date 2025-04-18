import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'Deep Learning' ?
            <ToggleButton active value="Deep Learning'" onClick={() => setToggle('Deep Learning')}>DEEP LEARNING</ToggleButton>
            :
            <ToggleButton value="Deep Learning" onClick={() => setToggle('Deep Learning')}>DEEP LEARNING</ToggleButton>
          }
          <Divider />
          {toggle === 'NLP' ?
            <ToggleButton active value="NLP" onClick={() => setToggle('NLP')}>NLP</ToggleButton>
            :
            <ToggleButton value="NLP" onClick={() => setToggle('NLP')}>NLP</ToggleButton>
          }
          <Divider />
          {toggle === 'ML' ?
            <ToggleButton active value="ML" onClick={() => setToggle('ML')}>ML</ToggleButton>
            :
            <ToggleButton value="ML" onClick={() => setToggle('ML')}>ML</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects