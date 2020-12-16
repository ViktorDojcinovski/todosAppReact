import React from "react";

const withColor = (WrappedComponent, cb) => {
  return class extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        color: "red",
      };
    }

    render() {
      return <WrappedComponent auth={this.state.color} {...this.props} />;
    }
  };
};

export default withColor;
