// 로그인, 로그아웃 등 회원가입 관련 Action

export const LOGIN = 'user/LOGIN';
export const LOGOUT = 'user/LOGOUT';

export const REGISTER = 'user/REGISTER';
export const REGISTER_SUCCESS = 'user/REGISTER_SUCCESS';
export const REGISTER_ERROR = 'user/REGISTER_ERROR';

export const FINDUSER = 'user/FINDUSER';
export const FINDUSER_SUCCESS = 'user/FINDUSER_SUCCESS';
export const FINDUSER_ERROR = 'user/FINDUSER_ERROR';

export const USERS = 'user/USERS';
export const USERS_SUCCESS = 'user/USERS_SUCCESS';
export const USERS_ERROR = 'user/USERS_ERROR';


export const GO_TO_HOME = "user/GO_TO_HOME"



// Action 생성
export const getUsers = () => (
    {type: USERS}
);
export const loginUser = () => (
    {type: LOGIN}
);
export const logOutUser = () => (
    {type: LOGOUT}
);
export const registerUser = () => (
    {type: REGISTER}
);
export const goToHome = () => (
    {type: GO_TO_HOME}
);
export const findUser = () => (
    {type: FINDUSER}
);