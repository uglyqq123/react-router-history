import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Router extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hash: ''
    }
  }

  static childContextTypes = {
    hash: PropTypes.string
  }

  getChildContext() {
    return {
      hash: this.getHash()
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        hash: this.getHash()
      })
    })
  }
  getHash() {
    return (window.location.hash.match(/#[^?=&#]+/) || [])?.[0]?.replace('#', '');
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
    hash: PropTypes.string
  }
  render() {
    const { path, component: Component } = this.props;
    const { hash } = this.context;
    if(path === hash) return <Component />
    return null;
  }
}