import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import SearchSvg from "../../static/SearchIcon.svg";
import { SEARCH_PLACEHOLDER } from "../../constants/constants";
import { isValidGroupCategory } from "../../global/utilities";
import * as actions from "../../store/actions/index";

const SearchWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  padding: 30px;
`;

const SearchInput = styled.input`
  height: 50px;
  width: 100%;
  background-color: #333333;
  border: 3px solid #777777;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 5px;
  padding-left: 45px;
  color: #cccccc;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;

  ::placeholder {
    color: #5a5a5a;
  }

  :focus {
    border: 3px solid #777777;
    border-radius: 8px;
  }
`;

const SearchIcon = styled.span`
  width: 30px;
  height: 30px;
  background-image: url(${SearchSvg});
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 40px;
  left: 40px;
`;

const SearchBar = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const searchInputRef = useRef();
  const { queryParam } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      queryParam &&
      isValidGroupCategory(queryParam) &&
      !searchInputRef.current.value
    ) {
      const sanitizedGroupCategory =
        queryParam.charAt(0).toUpperCase() +
        queryParam.toLowerCase().substring(1);
      dispatch(actions.changeCategory(sanitizedGroupCategory));
    }

    const timer = setTimeout(() => {
      if (enteredFilter === searchInputRef.current.value) {
        if (enteredFilter.length > 0) {
          dispatch(actions.setSearchTerm(enteredFilter));
          dispatch(actions.search(enteredFilter));
        } else {
          dispatch(actions.initCommicBooks());
        }
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, queryParam, dispatch]);

  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput
        ref={searchInputRef}
        type="text"
        value={enteredFilter}
        onChange={(event) => setEnteredFilter(event.target.value)}
        placeholder={SEARCH_PLACEHOLDER}
      />
    </SearchWrapper>
  );
});

export default SearchBar;
