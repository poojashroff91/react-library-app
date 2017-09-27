export function selectBook(book) {
  //this is an action creator, it needs to return an action,
  //an object with type property and sometimes it also contains payload.
  // console.log('A book has been selected: ', book.title);

  return {
    type: "BOOK_SELECTED",
    payload: book
  };
}
