// Write your code here
import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="leftNav">
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item4</li>
              </ul>
            </div>
          ) : (
            <></>
          )}
          {showContent ? (
            <div className="content">
              <h1>Content</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet,consectetur adiplscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam.
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
          {showRightNavbar ? (
            <div className="rightNav">
              <h1>Right Navbar </h1>
              <div>
                <p>Ad 1</p>
              </div>
              <div>
                <p>Ad 2</p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
