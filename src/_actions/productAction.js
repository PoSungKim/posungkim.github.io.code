// 로그인, 로그아웃 등 회원가입 관련 Action

export const UPLOAD_PREVIEW = 'product/UPLOAD_PREVIEW';
export const UPLOAD_PREVIEW_SUCCESS = 'product/UPLOAD_PREVIEW_SUCCESS';
export const UPLOAD_PREVIEW_ERROR = 'product/UPLOAD_PREVIEW_ERROR';

export const UPLOAD_ALL = 'product/UPLOAD_ALL';
export const UPLOAD_ALL_SUCCESS = 'product/UPLOAD_ALL_SUCCESS';
export const UPLOAD_ALL_ERROR = 'product/UPLOAD_ALL_ERROR';


// Action 생성
export const uploadPreview = () => (
    {type: UPLOAD_PREVIEW}
);

export const uploadAll = () => (
    {type: UPLOAD_ALL}
);