import {
    UnauthenticatedError,
    UnauthorizedError,
    BadRequestError,
  } from '../errors/customErrors.js';
  import { verifyJWT } from '../Morify-dashboard/utils/tokenUtils.js';
  
  export const authenticateUser =   (req, res, next) => {
  
    const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError('authentication invalid');

  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === '66588c72e9f5f39c7d0a49c6';
    req.user = { userId, role, testUser };
    next();
  } catch (error) {
    throw new UnauthenticatedError('authentication invalid');
  }
  };
  
  export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        throw new UnauthorizedError('Unauthorized to access this route');
      }
      next();
    };
  };
  
  export const checkForTestUser = (req, res, next) => {
    if (req.user.testUser) throw new BadRequestError('Action invalid. Read Only!');
    next();
  };