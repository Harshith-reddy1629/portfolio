import {BiSolidFilePdf} from 'react-icons/bi'
import {Switch, Route} from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Projects from './components/Projects'

import Header from './components/Header'

import P from './components/HR_RES.pdf'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
        <a
          target="_blank"
          rel="noreferrer"
          style={{all: 'unset'}}
          href={P}
          title="RESUME"
        >
          <p className="resume-pdf">
            {' '}
            RESUME
            <BiSolidFilePdf size={18} />
          </p>
        </a>
      </div>
    </div>
  </div>
)

export default App
