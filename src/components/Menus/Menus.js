import React, { PropTypes, Component } from 'react'
import _ from 'lodash'

import SubMenu from './SubMenu'
import './Menus.scss'

class Menus extends Component {

  state = {
    checkedKeys: new Set()
  }

  static propTypes = {
    menus: PropTypes.array.isRequired
  }

  // click clear
  handleClearClick = (e) => {
    e.preventDefault();
    this.setState({
      checkedKeys: new Set()
    });
  }

  handleCheck = (item) => {
    let checkedKeys = this.state.checkedKeys
    const { menus } = this.props
    let menuIndex = _.findIndex(menus, (o) => o.key == item.key )

    if (menuIndex > -1) {
      // if upper menu
      if (checkedKeys.has(item.key)) {
        // already checked, uncheck all child menu
        menus[menuIndex].children.forEach((menu) => checkedKeys.delete(menu.key))
        checkedKeys.delete(item.key)
      } else {
        // not checked, check all child menu
        menus[menuIndex].children.forEach((menu) => checkedKeys.add(menu.key))
        checkedKeys.add(item.key)
      }
    } else {
      // if sub menu
      if (checkedKeys.has(item.key)) {
        checkedKeys.delete(item.key)
      } else {
        checkedKeys.add(item.key)
      }
      // Process Child Check
      menus.forEach(menu => {
        let count = 0
        menu.children.forEach(menuItem => {
          checkedKeys.has(menuItem.key) && count++
        })

        if (count < menu.children.length) {
          checkedKeys.delete(menu.key)
        } else {
          checkedKeys.add(menu.key)
        }
      })
    }
    this.setState({checkedKeys})
  }

  render () {
    const { menus } = this.props

    const subMenu = menus.map((subMenu, index) => {
      return (
        <SubMenu
          checkedKeys={this.state.checkedKeys}
          key={index}
          subMenu={subMenu}
          onCheck={this.handleCheck}
        />
      )
    })

    return (
      <div className="menu">
        <span className="menu-title">招聘职位</span>
        <a href="#" className="clear-button" onClick={this.handleClearClick}>清空</a>
        <ul>
          {subMenu}
        </ul>
      </div>
    );
  }
}

export default Menus
