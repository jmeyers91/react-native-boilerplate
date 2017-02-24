
function getErrorMessage(error) {
  return error && (error.message || error.toString());
}

module.exports = function sendFail(response, error) {
  response.json({success: false, error: getErrorMessage(error)});
};
