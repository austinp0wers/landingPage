import React from 'react'
import Project from '../project/Project'
import "./projectList.css"
import {projectData} from '../../common/ProjectData'

function ProjectList() {
  return (
      <div className='plist-bg'>
    <div className='plist'>
        <div className="plist-texts">
            <h1 className="plist-title">Projects</h1>
            <p className="plist-desc">
                I have taken down all my projects due to some bank transaction issues <br/>
                However if you have any questions about the project, feel free to let me know!
            </p>
        </div>
        <div className="plist-list">
            {projectData.map(project => (
                <Project key={project.id} img={project.img} link={project.link} title={project.title} desc={project.desc} />
            ))}
        </div>
    </div>
    </div>
  )
}

export default ProjectList