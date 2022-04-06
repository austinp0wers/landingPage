import React from 'react'
import './project.css'

function Project({img, link, desc, title}) {
  return (
  <div className='project-wrapper'>
    <div className='project'>
        <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
        </div>
        <a href={link}>
        <img src={img} alt="" className="p-img" />    
        </a>
    </div>
    <div className='proj-desc'>
      <p className='p-descr'>
      <b>{title}</b><br/>
      {desc}
      </p>
    </div>
</div>
  )
}

export default Project