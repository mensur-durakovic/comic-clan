import React from "react";
import {
  useLocation
} from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import GroupCategories from "../../components/GroupCategories/GroupCategories";
import ComicBooks from "../../components/ComicBooks/ComicBooks";
import AppHeader from "../../components/shared/Header/Header";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MainPage = () => {

  const query = useQuery();
  
  return (
    <>
      <AppHeader />
      <SearchBar queryParam={query.get('group')}/>
      <GroupCategories />
      <ComicBooks />
    </>
  );
};


export default MainPage;
