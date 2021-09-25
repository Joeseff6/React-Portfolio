import React from "react";
import Pagination from "react-bootstrap/Pagination";

class TilePagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageNumber: 1, items: [] };
  }

  onPageChange = async (e) => {
    await this.setState({ pageNumber: parseInt(e.target.dataset.number)});
    this.props.handleClick(this.state.pageNumber);
  }

  updatePagination() {
    let paginationArr = []
    for (let i = 1; i <= this.props.numberOfPages; i++) {
      paginationArr.push(
        <Pagination.Item key={i} active={i === this.state.pageNumber} data-number={i} onClick={(this.onPageChange)}>
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
    if (previousState.pageNumber !== this.state.pageNumber) {
      this.updatePagination();
    }
  }

  render() {
    return (
      <Pagination className="justify-content-center mb-4">
        {this.state.items}
      </Pagination>
    )
  }
}

export default TilePagination;
