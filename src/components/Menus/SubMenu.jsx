import React, { PropTypes, Component } from 'react'

import './SubMenu.scss'

class SubMenu extends Component {

  handleChange(item) {
    this.props.onCheck(item);
  }

  render () {
    const { checkedKeys } = this.props;

    return (
      <li className="submenu">
        <input
          name="option"
          type="checkbox"
          checked={checkedKeys.has(this.props.subMenu.key) ? 'checked' : false}
          onChange={()=>this.handleChange(this.props.subMenu)}
        />
        {this.props.subMenu.label}

        <ul>
          {this.props.subMenu.children.map((menuItem, index) =>
            <li className="submenu-item" key={index}>
              <input
                name="opt"
                type="checkbox"
                onChange={()=>this.handleChange(menuItem)}
                checked={checkedKeys.has(menuItem.key) ? 'checked' : false}
              />
              {menuItem.label}
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
