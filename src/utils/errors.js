const httpStatus = require("http-status");

class InternalServerError {
  constructor(message, code) {
    this.message =
      message ||
      "server encountered an unexpected error, please try again later";
    this.code = code ? code : httpStatus.INTERNAL_SERVER_ERROR;
  }
}

class BadRequestError extends Error {
  constructor(res, data) {
    super("Bad Request");
    this.name = "BadRequestError";
    this.message = "Bad Request";
    this.data = data;
    this.code = httpStatus.BAD_REQUEST;
    this.res = res;
  }
}

class ForbiddenError extends Error {
  constructor(res, data) {
    super("Forbidden");
    this.name = "ForbiddenError";
    this.message = "Forbidden";
    this.data = data;
    this.code = httpStatus.FORBIDDEN;
    this.res = res;
  }
}

class UnauthorizedError extends Error {
  constructor(res, data) {
    super("Unauthorized");
    this.name = "UnauthorizedError";
    this.message = "Unauthorized";
    this.data = data;
    this.code = httpStatus.UNAUTHORIZED;
    this.res = res;
  }
}

const handleError = (error, res) => {
    if(error instanceof)
}