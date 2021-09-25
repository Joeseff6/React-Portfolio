import React from "react";
import Pagination from "react-bootstrap/Pagination";

class TilePagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: null, items: [] };
  }

  componentDidMount = () => {
    let paginationArr = []
    for (let i = 1; i <= this.props.numberOfPages; i++) {
      paginationArr.push(
        <Pagination.Item key={i} active={i === this.state.active}>
          {i}
        </Pagination.Item>
      );
    }

    this.setState({ items: paginationArr })
  };

  render() {
    return (
      <Pagination>
        {this.state.items}
      </Pagination>
    )
  }
}

export default TilePagination;
