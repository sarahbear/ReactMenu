import React, { PropTypes, Component } from 'react'

import './SubMenu.scss'

class SubMenu extends Component {

  static propTypes = {
    onCheck: PropTypes.func.isRequired,
    checkedKeys: PropTypes.instanceOf(Set).isRequired,
    subMenu: PropTypes.object.isRequired
  }

  handleChange(item) {
    this.props.onCheck(item);
  }

  render () {
    const { checkedKeys, subMenu } = this.props;

    const menuItems = subMenu.children && subMenu.children.map((menuItem, index) => {
      return (
        <li className="submenu-item row" key={index}>
          <span>
            <input
              name="opt"
              type="checkbox"
              onChange={()=>this.handleChange(menuItem)}
              checked={checkedKeys.has(menuItem.key) ? 'checked' : false}
            />
            <span className="submenu-item-title">{menuItem.label}</span>
          </span>
          <span>{menuItem.value}</span>
        </li>
      )
    })

    return (
      <li className="submenu">
        <div className="row">
          <span className="submenu-info">
            <input
              name="option"
              type="checkbox"
              checked={checkedKeys.has(subMenu.key) ? 'checked' : false}
              onChange={() => this.handleChange(subMenu)}
            />
            <span className="submenu-title">{subMenu.label}</span>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>

          <span className="submenu-value">{subMenu.value}</span>
        </div>

        <ul>
          {menuItems}
        </ul>
      </li>
    );
  }
}

export default SubMenu
