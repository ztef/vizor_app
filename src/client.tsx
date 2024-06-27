import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'
import { createClient } from 'vizor_main'

export * from 'vizor_main'

const connection = socketio(io('http://localhost:3030'))

export const client = createClient(connection)