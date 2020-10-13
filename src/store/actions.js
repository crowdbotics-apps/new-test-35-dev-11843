import * as types from "./constants"
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_ghhh_list = () => ({ type: types.API_V1_GHHH_LIST })
export const api_v1_ghhh_listSucceeded = (response, starter) => ({
  type: types.API_V1_GHHH_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghhh_listFailed = (error, starter) => ({
  type: types.API_V1_GHHH_LIST_FAILED,
  error,
  starter
})
export const api_v1_ghhh_create = data => ({
  type: types.API_V1_GHHH_CREATE,
  data
})
export const api_v1_ghhh_createSucceeded = (response, starter) => ({
  type: types.API_V1_GHHH_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghhh_createFailed = (error, starter) => ({
  type: types.API_V1_GHHH_CREATE_FAILED,
  error,
  starter
})
export const api_v1_ghhh_read = () => ({ type: types.API_V1_GHHH_READ })
export const api_v1_ghhh_readSucceeded = (response, starter) => ({
  type: types.API_V1_GHHH_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghhh_readFailed = (error, starter) => ({
  type: types.API_V1_GHHH_READ_FAILED,
  error,
  starter
})
export const api_v1_ghhh_update = data => ({
  type: types.API_V1_GHHH_UPDATE,
  data
})
export const api_v1_ghhh_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GHHH_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghhh_updateFailed = (error, starter) => ({
  type: types.API_V1_GHHH_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_ghhh_partial_update = data => ({
  type: types.API_V1_GHHH_PARTIAL_UPDATE,
  data
})
export const api_v1_ghhh_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_GHHH_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghhh_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_GHHH_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_ghhh_delete = () => ({ type: types.API_V1_GHHH_DELETE })
export const api_v1_ghhh_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_GHHH_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_ghhh_deleteFailed = (error, starter) => ({
  type: types.API_V1_GHHH_DELETE_FAILED,
  error,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (error, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (error, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
  starter
})
export const api_v1_vbg1_list = () => ({ type: types.API_V1_VBG1_LIST })
export const api_v1_vbg1_listSucceeded = (response, starter) => ({
  type: types.API_V1_VBG1_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_vbg1_listFailed = (error, starter) => ({
  type: types.API_V1_VBG1_LIST_FAILED,
  error,
  starter
})
export const api_v1_vbg1_create = data => ({
  type: types.API_V1_VBG1_CREATE,
  data
})
export const api_v1_vbg1_createSucceeded = (response, starter) => ({
  type: types.API_V1_VBG1_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vbg1_createFailed = (error, starter) => ({
  type: types.API_V1_VBG1_CREATE_FAILED,
  error,
  starter
})
export const api_v1_vbg1_read = () => ({ type: types.API_V1_VBG1_READ })
export const api_v1_vbg1_readSucceeded = (response, starter) => ({
  type: types.API_V1_VBG1_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_vbg1_readFailed = (error, starter) => ({
  type: types.API_V1_VBG1_READ_FAILED,
  error,
  starter
})
export const api_v1_vbg1_update = data => ({
  type: types.API_V1_VBG1_UPDATE,
  data
})
export const api_v1_vbg1_updateSucceeded = (response, starter) => ({
  type: types.API_V1_VBG1_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vbg1_updateFailed = (error, starter) => ({
  type: types.API_V1_VBG1_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_vbg1_partial_update = data => ({
  type: types.API_V1_VBG1_PARTIAL_UPDATE,
  data
})
export const api_v1_vbg1_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_VBG1_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vbg1_partial_updateFailed = (error, starter) => ({
  type: types.API_V1_VBG1_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
export const api_v1_vbg1_delete = () => ({ type: types.API_V1_VBG1_DELETE })
export const api_v1_vbg1_deleteSucceeded = (response, starter) => ({
  type: types.API_V1_VBG1_DELETE_SUCCEEDED,
  response,
  starter
})
export const api_v1_vbg1_deleteFailed = (error, starter) => ({
  type: types.API_V1_VBG1_DELETE_FAILED,
  error,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (error, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (error, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (error, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  error,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (error, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
  starter
})
