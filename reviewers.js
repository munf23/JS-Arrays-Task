const reviewers = require("./reviewers.json");
console.log("🚀 ~ file: reviewers.js:2 ~ reviewers:", reviewers);

/**************************************************************
 * getReviewerName(reviewer)
 * - receives a reviewer object
 * - returns the name of the reviewer
 ****************************************************************/
function getReviewerName(reviewer) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(getReviewerName(reviewers[0]));

/**************************************************************
 * numberOfReviews(reviewer)
 * - receives a reviewer object
 * - returns the number of books reviews that reviewer has done
 ****************************************************************/
function numberOfReviews(reviewer) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(numberOfReviews(reviewers[0]));

/**************************************************************
 * reviewerHasReview(reviewTitle, reviewer):
 * - receives a review title (string)
 * - receives a reviewer object
 * - returns true if the reviewer object has a review that matches the given review title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function reviewerHasReview(reviewTitle, reviewer) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(reviewerHasReview("Becoming", reviewers[0]));

/**************************************************************
 * getReviewerByName(reviewerName, reviewers):
 * - receives a reviewer name (string)
 * - receives an array of reviewer objects
 * - returns the reviewer object with the same name as the reviewerName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getReviewerByName(reviewerName, reviewers) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(getReviewerByName("Michelle Obama", reviewers));

/**************************************************************
 * getReviewerByReviewTitle(reviewTitle, reviewers):
 * - receives a review title (string)
 * - receives an array of reviewer objects
 * - returns the reviewer object that has done a review with the review title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getReviewerByReviewTitle(reviewTitle, reviewers) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(getReviewerByReviewTitle("The Overstory", reviewers));

/**************************************************************
 * searchReviewers(query, reviewers):
 * - receives a query (string)
 * - receives an array of reviewer objects
 * - returns an array of the reviewer objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchReviewers(query, reviewers) {
  //TODO: ADD YOUR CODE HERE
}
// console.log(searchReviewers("o", reviewers));
