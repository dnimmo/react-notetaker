// Axios allows us to handle http requests
var axios = require('axios');

// This function hits the Github API to return a specific user's repos, where that user is passed in to the function
function getRepos(username){
  return axios.get('https://api.github.com/users/'+username+'/repos');
};

// This function hits the Github API to return all of the info on a specific user, where that user is passed in to the function
function getUserInfo(username){
  return axios.get('https://api.github.com/users/'+username);
};

var helpers = {
  getGithubInfo: function(username){
    // axios.all allows multiple promises to be run at the same time, and only fires the .then() when all of those promises have been fulfilled. The argument passed in to the .then() is an array containing all of the promises. This array assigns index based on the order in which the promise was *called*, not *returned*. Which is handy because otherwise you'd have no reliable way of knowing which position anything was in!
    return axios.all([getRepos(username), getUserInfo(username)])
      .then(function(arr){
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
    });
  }
};

module.exports = helpers;