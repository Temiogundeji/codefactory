const isLocal = false;
const version = "v1";
const root = isLocal
  ? "http://localhost:8888"
  : "https://codefactory-backrnd.herokuapp.com";

export const userEndpoints = {
  login: `${root}/api/${version}/user/auth/login`,
  signup: `${root}/api/${version}/user/auth/signup`,
};

export const courseEndpoints = {
  courses: `${root}/api/${version}/courses`,
};

const coursesEndpoints = {};
