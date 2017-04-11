import React from 'react'

import SubMenu from './SubMenu'
import './Menus.scss'

class Menus extends React.Component {

  state = {
    checkedKeys: []
  }

  onChange = (keys) => {
    this.setState({ checkedKeys: keys })
  }

  onCheckAllChange = (e) => {
    this.setState({
      checkedKeys: []
    });
  }

  render () {
    const menuProps = {
      menus: this.props.menus,
      checkedKeys: this.state.checkedKeys,
      onChange: this.onChange
    }

    return (
      <div className="menu">
        <span className="menu-title">招聘职位</span>
        <a href="#" className="clear-button" onClick={this.onCheckAllChange}>清空</a>
        <ul>
          <SubMenu  />
          <li>
            <input name="option" type="checkbox" />Option 1
            <ul>
              <li key="5"><input type="checkbox" />Option 5</li>
              <li key="6"><input type="checkbox" />Option 6</li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}

Menus.propTypes = {
  menus: React.PropTypes.array.isRequired
}

export default Menus
