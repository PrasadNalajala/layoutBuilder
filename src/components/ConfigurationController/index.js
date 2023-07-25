// Write your code here
import './index.css'
import {Component} from 'react'

class ConfigurationController extends Component {
  render() {
    return (
      <div className="config-bg">
        <h1 className="layout-h1">Layout</h1>

        <input type="checkbox" id="contentCheckbox" />
        <label htmlFor="contentCheckbox">Content</label>
        <br />
        <input type="checkbox" id="leftNavbarCheckbox" />
        <label htmlFor="leftNavbarCheckbox">Left Navbar</label>
        <br />
        <input type="checkbox" id="rightNavbarCheckbox" />
        <label htmlFor="rightNavbarCheckbox">Right Navbar</label>
      </div>
    )
  }
}

export default ConfigurationController
