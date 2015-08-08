// Axios allows us to handle http requests
// ES6 import statement replaces the old 'require'
import axios from 'axios';

// This function hits the Github API to return a specific user's repos, where that user is passed in to the function
function getRepos(username){
  // ES6 allows for string literals, so rather than 'one-string' + myVariable + 'the-rest-of-the-string', we can do this as seen below with `string{$variable}string` (note the backticks as parentheses)
  return axios.get(`https://api.github.com/users/${username}/repos`);
};

// This function hits the Github API to return all of the info on a specific user, where that user is passed in to the function
function getUserInfo(username){
  // See note above on ES6 string literals
  return axios.get(`https://api.github.com/users/${username}`);
};

var helpers = {
  // ES6 shorthand - previously would have been ' getGithubInfo = function(){ } '
  getGithubInfo(username){
    // axios.all allows multiple promises to be run at the same time, and only fires the .then() when all of those promises have been fulfilled. The argument passed in to the .then() is an array containing all of the promises. This array assigns index based on the order in which the promise was *called*, not *returned*. Which is handy because otherwise you'd have no reliable way of knowing which position anything was in!
    // Note the ES6 use of "=>" - this allows the .then() to keep the same 'this' context; not that I'm using 'this' here but it saved me a tiny bit of typing before I typed this comment to explain it
    return axios.all([getRepos(username), getUserInfo(username)])
      .then((arr) => {
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
    });
  }
};

// ES6 export (as ES6 comes with its own module system). This replaces 'module.exports = helpers'
export default helpers;