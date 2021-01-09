const uuid = require("uuid");

/**
 * Return the user model
 */
module.exports.getUserModel = (name, userId) => {
  return {
    id: userId ? userId : uuid.v1(),
    name,
  };
};
