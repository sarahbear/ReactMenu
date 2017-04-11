import React from 'react'

class SubMenu extends React.Component {

  render () {

    return (
      <li>
        <input name="option" type="checkbox" />Option 1
        <ul key="sub1">
          <li key="1"><input name="opt" type="checkbox" />Option 1</li>
          <li key="2"><input name="opt" type="checkbox" />Option 2</li>
          <li key="3"><input name="opt" type="checkbox" />Option 3</li>
          <li key="4"><input name="opt" type="checkbox" />Option 4</li>
        </ul>
      </li>
    );
  }
}

SubMenu.propTypes = {
}

export default SubMenu
