import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Router extends React.Component {
  constructor(props) {
    super(props)
    this.history = window.history;
    this.state = {
      path: ''
    }
  }

  componentDidMount() {
    this.history.route = (name) => {
      this.setState({
        path: this.getpath()
      })
      window.history.pushState(null, null, name); // 只改变当前url，不刷新页面
    }
  }
  static childContextTypes = {
    path: PropTypes.string
  }

  getChildContext() {
    return {
      path: this.getpath()
    }
  }

  getpath() {
    return (window.location.pathname.match(/\/[^?=&#]+/) || [])?.[0]?.replace('/', '');
  }
  render()
  {
    return (
      <>
        {this.props.children}
      </>
    )
  }
}

export class Route extends React.Component {
  static contextTypes = {
    path: PropTypes.string
  }
  render() {
    const { path, component: Component } = this.props;
    if(path === this.context.path) return <Component />
    return null;
  }
}