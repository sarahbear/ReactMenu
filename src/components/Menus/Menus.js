import React from 'react'

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
        <ul key="sub1">
          <li key="1"><input name="opt" type="checkbox" />Option 1</li>
          <li key="2"><input name="opt" type="checkbox" />Option 2</li>
          <li key="3"><input name="opt" type="checkbox" />Option 3</li>
          <li key="4"><input name="opt" type="checkbox" />Option 4</li>
        </ul>
        <ul>
          <li key="5"><input type="checkbox" />Option 5</li>
          <li key="6"><input type="checkbox" />Option 6</li>
        </ul>
      </div>
    );
  }
}

Menus.propTypes = {
  menus: React.PropTypes.array.isRequired
}

export default Menus
