import React from 'react'

import Header from 'components/Header'
import Menus from 'components/Menus'
import menus from 'base/menus'
import 'static/style/core.scss'
import 'static/style/_base.scss'
import './CoreLayout.scss'

class CoreLayout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(menus);
    return (
      <div className='core-layout'>
        <div className='header clearfix'>
          <Header />
        </div>
        <div className='layout-aside'>
          <aside className='layout-sider'>
            <Menus menus={menus} />
          </aside>
          <div className='layout-main'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
