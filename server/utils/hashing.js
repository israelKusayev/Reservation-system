const bcrypt = require('bcryptjs');

// Create salt & hash
const hashPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const validatePassword = async (password, hashedPassword) => {
  const hashed = await hashPassword(password);
  return hashed === hashedPassword;
};

module.exports = {
  hashPassword,
  validatePassword
};
