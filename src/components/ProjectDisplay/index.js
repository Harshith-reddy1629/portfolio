import './index.css'

const ProjectDisplay = props => {
  const {item} = props
  const {projectName, projectLink, projectImg} = item

  return (
    <li
      className="project-box"
      style={{
        background: `linear-gradient(#222222d0,#111111d0),url(${projectImg})`,
        backgroundSize: '100% 100%',
        backgroundPosition: '50% 50%',
      }}
    >
      <img src={projectImg} alt="project" className="project-img" />
      <div className="text-container">
        <h1 className="project-head">{projectName}</h1>
        <a
          href={projectLink}
          className="project-link"
          rel="noreferrer"
          target="_blank"
        >
          <button type="button" className="view-button">
            View Project
          </button>
        </a>
      </div>
    </li>
  )
}

export default ProjectDisplay
