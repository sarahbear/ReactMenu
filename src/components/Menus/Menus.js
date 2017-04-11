import React from 'react'
import './Menus.scss'

class Menus extends React.Component {

  state = {
    checkedKeys: []
  }
  onChange = (key) => {
    this.setState({ key })
  }

  render () {
    const menuProps = {
      menus: this.props.menus,
      checkedKeys: this.state.checkedKeys,
      onChange: this.onChange
    }

    return (
      <div>
        <span>招聘职位</span>
        <span>清空</span>
        <ul>
          <li>
            <input name="option" type="checkbox" />Option 1
            <ul key="sub1">
              <li key="1"><input name="opt" type="checkbox" />Option 1</li>
              <li key="2"><input name="opt" type="checkbox" />Option 2</li>
              <li key="3"><input name="opt" type="checkbox" />Option 3</li>
              <li key="4"><input name="opt" type="checkbox" />Option 4</li>
            </ul>
          </li>
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
