
const asyncHandler = (requestHandler) => (req, res, next) => {
    Promise.resolve(requestHandler(req, res)).catch((error) => next(error.message))
}

export {asyncHandler}