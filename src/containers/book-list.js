import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

BookList.propTypes = {
  books: PropTypes.array,
  selectBook: PropTypes.func
};

function mapStatetoProps(state) {
  // Whatever is returned will show up as props inside of BookList

  return {
    books: state.books
  };
}

//Anything returned from this function will end up as props on BookList container.
function mapDispatchToProps(dispatch) {
  //Whenever select Book is called the result should be passed to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote booklist from a component to a container
//It needs to know about the new dispatch method, selectBook
export default connect(mapStatetoProps, mapDispatchToProps)(BookList);
