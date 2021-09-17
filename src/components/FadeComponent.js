import React from "react";
import Fade from "react-bootstrap/Fade";

class FadeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { fadeIn: false };
  }

  delayFadeIn = () => {
    setTimeout(() => {
      this.setState({ fadeIn: true });
    }, this.props.fadeTimer);
  };

  render() {
    return (
      <Fade appear={true} in={this.state.fadeIn} onEnter={this.delayFadeIn()}>
        <div>{this.props.children}</div>
      </Fade>
    );
  }
}

FadeComponent.defaultProps = {
  fadeTimer: 500,
};

export default FadeComponent;
