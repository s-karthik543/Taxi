import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';

let socket = io("http://192.168.0.102:3000", { jsonp: false })
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

import reducers from '../reducers'

const middlewares = [thunk, socketIoMiddleware]
if (__DEV__) {
    middlewares.push(logger)
}

const store = createStore(reducers, applyMiddleware(...middlewares))

export default store