import React from "react";
import Back from "../../components/Back/Back";
import ComicBookInfo from "../../components/ComicBookInfo/ComicBookInfo";
import ComicBooks from "../../components/ComicBooks/ComicBooks";
import { withRouter } from "react-router-dom";
import { BACK_TEXT, RANDOM_BOOKS_TITLE } from '../../constants/constants';
import AppHeader from "../../components/shared/Header/Header";

const BookPage = (props) => {

  const onBack = () => {
    props.history.push("/");
  }

  return (
    <>
      <AppHeader />
      <Back text={BACK_TEXT} clickHandler={onBack}/>
      <ComicBookInfo />
      <ComicBooks randomBooksTitle={RANDOM_BOOKS_TITLE}/>
    </>
  );
};

export default withRouter(BookPage);
