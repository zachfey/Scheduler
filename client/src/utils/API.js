import axios from "axios";

export default {
  // Gets all books
  getAll: function() {
    return axios.get("/api/rows")
      .catch(err => console.log(err))
  },
  // Gets the schedule based on week and year
  getWeek: function(week, year) {
    return axios.get("/api/rows/" + year + '/' + week)
      .catch(err => console.log(err))
  },

  updateWeek: function(weekSched, cb){
    // console.log('inside API updateWeek')
    // console.table(weekSched)
    return axios.put("/api/rows/update", weekSched)
      .then(res => {
        cb(res);
      })
      .catch(err => console.log(err))
  },

  createWeek: function(week, year, cb){
    return axios.put('/api/rows/create', {week: week, year: year})
      .then(res => {
        cb(res);
      })
      .catch( err => console.log(err))
  },

  fixWeek: function(week, year, cb){
    console.log('week', week)
    console.log('year', year)
    return axios.put("/api/rows/fix", {week: week, year: year})
    .then(res => {
      cb(res);
    })
    .catch(err => console.log(err))
  },

  login: function(user){
    const response = {
      token: '1a2b3c4d',
      data: {
        email: user.email,
        firstName: 'test',
        lastName: 'test'
      }
    };
    return new Promise (resolve => setTimeout(resolve(response), 1000));
  },

  logout: function(){
    return new Promise (resolve => setTimeout(resolve, 1000))
  }
};
