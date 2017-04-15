import React, { PropTypes, Component } from 'react'

import './SubMenu.scss'

class SubMenu extends Component {

  handleChange(item) {
    this.props.onCheck(item);
  }

  render () {
    const { checkedKeys, subMenu } = this.props;

    return (
      <li className="submenu">
        <div className="row">
          <span>
            <input
              name="option"
              type="checkbox"
              checked={checkedKeys.has(subMenu.key) ? 'checked' : false}
              onChange={()=>this.handleChange(subMenu)}
            />
            <span className="submenu-title">{subMenu.label}</span>
          </span>

          <span className="submenu-value">{subMenu.value}</span>
        </div>

        <ul>
          {subMenu.children.map((menuItem, index) =>
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
              <span >{menuItem.value}</span>
            </li>
          )}
        </ul>
      </li>
    );
  }
}

SubMenu.propTypes = {
  onCheck: PropTypes.func.isRequired
}

export default SubMenu
