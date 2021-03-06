import * as types from "./constants"

const initialState = { nEWTESTAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_GHHH_LIST:
    case types.API_V1_GHHH_LIST_SUCCEEDED:
    case types.API_V1_GHHH_LIST_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_GHHH_CREATE:
    case types.API_V1_GHHH_CREATE_SUCCEEDED:
    case types.API_V1_GHHH_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_GHHH_READ:
    case types.API_V1_GHHH_READ_SUCCEEDED:
    case types.API_V1_GHHH_READ_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_GHHH_UPDATE:
    case types.API_V1_GHHH_UPDATE_SUCCEEDED:
    case types.API_V1_GHHH_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_GHHH_PARTIAL_UPDATE:
    case types.API_V1_GHHH_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_GHHH_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_GHHH_DELETE:
    case types.API_V1_GHHH_DELETE_SUCCEEDED:
    case types.API_V1_GHHH_DELETE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_VBG1_LIST:
    case types.API_V1_VBG1_LIST_SUCCEEDED:
    case types.API_V1_VBG1_LIST_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_VBG1_CREATE:
    case types.API_V1_VBG1_CREATE_SUCCEEDED:
    case types.API_V1_VBG1_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_VBG1_READ:
    case types.API_V1_VBG1_READ_SUCCEEDED:
    case types.API_V1_VBG1_READ_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_VBG1_UPDATE:
    case types.API_V1_VBG1_UPDATE_SUCCEEDED:
    case types.API_V1_VBG1_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_VBG1_PARTIAL_UPDATE:
    case types.API_V1_VBG1_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_VBG1_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.API_V1_VBG1_DELETE:
    case types.API_V1_VBG1_DELETE_SUCCEEDED:
    case types.API_V1_VBG1_DELETE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        nEWTESTAPI: [...state.nEWTESTAPI, action.response]
      })
    default:
      return state
  }
}
