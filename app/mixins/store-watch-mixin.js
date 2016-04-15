import React from 'react';
import AppStore from '../stores/app-store';

export default (InnerComponent, stateCallback) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = stateCallback(props);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    AppStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    AppStore.removeChangeListener(this.onChange)
  }

  onChange() {
    this.setState(stateCallback(this.props));
  }

  render() {
    return <InnerComponent {...this.state} {...this.props} />
  }
}
