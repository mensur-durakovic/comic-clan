import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";
import ComicBook from "./ComicBook/ComicBook";

const ComicBooksWrapper = styled.div`
  padding-bottom: 60px;
  border-bottom: 2px solid #535353;
  display: flex;
  flex-wrap: wrap;
`;

const ComicBooksRow = React.memo((props) => {
  const { groupedBooks } = props;
  return (
    <ComicBooksWrapper>
      {groupedBooks.map(b => (
        <ComicBook
          key={b.name}
          bookName={b.name}
          imageUrl={b.image}
          owner={b.owner}
        />
      ))}
    </ComicBooksWrapper>
  );
});

ComicBooksRow.propTypes = {
  groupedBooks: PropTypes.array.isRequired
};

export default ComicBooksRow;
