import React from "react";
import Pagination from "react-bootstrap/Pagination";

class TilePagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = { activeNumber: null, items: [] };
  }

  updatePagination() {
    let paginationArr = []
    for (let i = 1; i <= this.props.numberOfPages; i++) {
      paginationArr.push(
        <Pagination.Item key={i} active={i === this.state.activeNumber} data-number={i} onClick={(e) => this.setState({ activeNumber: parseInt(e.target.dataset.number)})}>
          {i}
        </Pagination.Item>
      );
    }
    this.setState({ items: paginationArr })
  }

  componentDidMount = () => {
    this.updatePagination();
  };

  componentDidUpdate( previousProps, previousState) {
    if (previousState.activeNumber !== this.state.activeNumber) {
      this.updatePagination();
    }
  }

  render() {
    return (
      <Pagination>
        {this.state.items}
      </Pagination>
    )
  }
}

export default TilePagination;
