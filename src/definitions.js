// Type definitions

/**
 * An authedUser
 * @typedef {{
 * isSignedIn: bool,
 * token: string,
 * uniqueID: string
 * }} authedUser
 */

/**
 * A redux action
 * @typedef {{type: string}} action
 */

/**
 * Definition for action creator
 * @typedef {() => action} actionCreator
 */

/**
 * An object ID
 * @typedef {string} id
 */

/**
 * A route
 * @typedef {{
 * path: string,
 * component: object,
 * exact: boolean,
 * private?: boolean
 * }} route
 */

/**
 * Definition for state
 * @typedef {{authedUser: id}} state
 */

/**
 * Redux store
 * @typedef {object} store
 * @property {() => action} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {function} subscribe - Adds functions to execute on state change
 */
