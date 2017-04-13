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
          {this.props.menus.map((subMenu, index) => <SubMenu key={index} subMenu={subMenu} /> )}
        </ul>
      </div>
    );
  }
}

Menus.propTypes = {
  menus: React.PropTypes.array.isRequired
}

export default Menus
