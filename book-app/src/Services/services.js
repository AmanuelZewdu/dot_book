import axios from "axios";
const API_URL = "http://localhost:8080/api/books";

const getBooks = () => {
  return axios
    .get(API_URL)
    .then((response) => {
      if (response) {
        return response.data;
      }
    })
    .catch((err) => {
      console.log("can't fetch Books ");
    });
};

const addBook = (title, publisher, ISBN, quantity, shelfno) => {
  return axios
    .post(API_URL, {
      title,
      publisher,
      ISBN,
      quantity,
      shelfno,
    })
    .then((response) => {
      console.log("Book saved", response.data.msg);
      return response.data.msg;
    })
    .catch((err) => {
      console.log("can't save a Book");
    });
};
const service = {
  getBooks,
  addBook,
};

export default service;
