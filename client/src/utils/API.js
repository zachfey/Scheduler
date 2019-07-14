import axios from "axios";

export default {
  // Gets all books
  getAll: function() {
    return axios.get("/api/rows");
  },
  // Gets the schedule based on week and year
  getWeek: function(week, year) {
    return axios.get("/api/rows/" + year + '/' + week);
  },

  updateWeek: function(weekSched){
    // console.log('inside API updateWeek')
    // console.table(weekSched)
    return axios.put("/api/rows/update", weekSched)
  }
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};
