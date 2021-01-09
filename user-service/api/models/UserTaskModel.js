const uuid = require("uuid");

/**
 * Return the task model
 */
module.exports.getUserTaskModel = (description, state, userId, id) => {
  return {
    id: id ? id : uuid.v1(),
    description,
    state,
    userId,
  };
};
