import React from 'react'

class SubMenu extends React.Component {

  handleClick = (e) => {
    console.log(e.target.value);
    if (e.target.value === 'on' ) {
      
    }
  }

  render () {
    return (
      <li>
        <input name="option" type="checkbox" onClick={this.handleClick} />{this.props.subMenu.label}
        <ul key="sub1">
        {this.props.subMenu.children.map( (menuItem, index) => <li key={index}><input name="opt" type="checkbox" />{menuItem.label}</li> )}
        </ul>
      </li>
    );
  }
}

SubMenu.propTypes = {
}

export default SubMenu
