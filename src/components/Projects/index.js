import {Component} from 'react'

import ProjectDisplay from '../ProjectDisplay'

import safeList from './projectslist.json'

// import listOfProjexts from '../ProjectsList'

import './index.css'

class Projects extends Component {
  state = {pageStatus: 'Failed', listofmyprojects: []}

  componentDidMount() {
    this.fetchingData()
  }

  fetchingData = async () => {
    this.setState({pageStatus: 'Loading'})

    try {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      }

      const response = await fetch(
        process.env.REACT_APP_MY_PROJECTS_API,
        requestOptions,
      )

      const recieved = await response.json()

      const result = recieved.sort((a, b) => b.id - a.id)

      if (response.ok === true) {
        this.setState({pageStatus: 'Success', listofmyprojects: result})
      } else {
        this.setState({pageStatus: 'Failed'})
      }
    } catch (error) {
      this.setState({pageStatus: 'Success', listofmyprojects: safeList})
    }
  }

  successView = () => {
    const {listofmyprojects} = this.state

    // const listOfProjexts = listOfProjexts

    return (
      <div className="project-container">
        <div className="para-container">
          <p className="project-text">
            I have collected a diverse range of{' '}
            <span className="span-element">Projects</span> that showcase my{' '}
            <span className="span-element">skills</span> and{' '}
            <span className="span-element">experience</span>. Each project
            represents a unique challenge I have tackled, and a chance for me to
            demonstrate my <span className="span-element">creativity</span> and{' '}
            <span className="span-element">problem-solving</span> abilities.{' '}
          </p>
        </div>
        <div className="projects-container">
          <ul className="projects-list-container">
            {listofmyprojects.map(each => (
              <ProjectDisplay key={each.id} item={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {pageStatus} = this.state

    switch (pageStatus) {
      case 'Loading':
        return (
          <div className="failed-loading-view">
            <p>Loading...</p>
            {/* <div className="box"> </div> */}
            {/* <div className="box"> </div> */}
          </div>
        )
      case 'Success':
        return this.successView()
      case 'Failed':
        return (
          <div className="failed-loading-view">
            <p>OOPS! Something went Wrong</p>
            <button type="button" className="fv-b" onClick={this.fetchingData}>
              Try Again
            </button>
          </div>
        )

      default:
        return null
    }
  }
}

export default Projects
