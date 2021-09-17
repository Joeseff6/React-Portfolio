import React from "react";
import Collapse from "react-bootstrap/Collapse";

class CollapseComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false };
  }

  delayCollapse = () => {
    setTimeout(() => {
      this.setState({ open: true });
    }, this.props.collapseTimer);
  };

  render() {
    return (
      <Collapse appear={true} in={this.state.open} onEnter={this.delayCollapse()}>
        <div>{this.props.children}</div>
      </Collapse>
    );
  }
}

CollapseComponent.defaultProps = {
  collapseTimer: 1000,
};

export default CollapseComponent;
