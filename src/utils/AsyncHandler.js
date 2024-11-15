// const AyncHandler = (reqHandler) => {
//   (req, res, next) => {
//     Promise.resolve(reqHandler(req, res, next)).catch((error) => next(error));
//   };
// };

// export { AyncHandler };

const AyncHandler = (reqHandler) => async () => {
  try {
    await reqHandler(req, res, next);
  } catch (error) {
    res.status(error || 500).json({
      success: false,
      message: error.message,
    });
  }
};

export {AyncHandler}