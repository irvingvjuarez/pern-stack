async function handleError (callback) {
  try {
    return await callback();
  } catch (err) {
    return {
      error: err.message
    }
  }
}

module.exports = handleError;