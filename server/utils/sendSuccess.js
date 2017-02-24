
module.exports = function sendSuccess(response, body) {
  response.json({success: true, body});
}
