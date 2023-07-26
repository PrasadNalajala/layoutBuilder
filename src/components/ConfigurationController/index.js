// Write your code here
import './index.css'
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'

class ConfigurationController extends Component {
  render() {
    return (
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
            onToggleShowContent,
          } = value

          return (
            <div className="config-bg">
              <h1 className="layout-h1">Layout</h1>

              <input
                type="checkbox"
                id="contentCheckbox"
                checked={showContent}
                onChange={onToggleShowContent}
              />
              <label htmlFor="contentCheckbox">Content</label>
              <br />
              <input
                type="checkbox"
                id="leftNavbarCheckbox"
                checked={showLeftNavbar}
                onChange={onToggleShowLeftNavbar}
              />
              <label htmlFor="leftNavbarCheckbox">Left Navbar</label>
              <br />
              <input
                type="checkbox"
                id="rightNavbarCheckbox"
                checked={showRightNavbar}
                onChange={onToggleShowRightNavbar}
              />
              <label htmlFor="rightNavbarCheckbox">Right Navbar</label>
            </div>
          )
        }}
      </ConfigurationContext.Consumer>
    )
  }
}

export default ConfigurationController
