import React from "react";
import Pagination from "react-bootstrap/Pagination";

class TilePagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  onPageChange = async (e) => {
    this.props.handleClick(parseInt(e.target.dataset.number));
  }

  updatePagination() {
    let paginationArr = []
    for (let i = 1; i <= this.props.numberOfPages; i++) {
      paginationArr.push(
        <Pagination.Item key={i} active={i === this.props.currentPage} data-number={i} onClick={(this.onPageChange)}>
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
    if (previousProps.currentPage !== this.props.currentPage) {
      this.updatePagination()
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
