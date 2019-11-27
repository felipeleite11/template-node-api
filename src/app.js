import express from 'express'
import cors from 'cors'
import io from 'socket.io'
import http from 'http'
import routes from './routes'
import './database'

class App {
    constructor() {
        this.app = express()
        this.server = http.Server(this.app)
        this.connectedUsers = {}

        this.socket()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use('/files', express.static('static'))
        this.app.use('/files', express.static('uploads'))

        this.app.use((req, res, next) => {
            req.io = this.io
            req.connectedUsers = this.connectedUsers

            return next()
        })
    }

    routes() {
        this.app.use(routes)
    }

    socket() {
        this.io = io(this.server)

        this.io.on('connection', (socket) => {
            const { user_id } = socket.handshake.query
            this.connectedUsers[user_id] = socket.id

            socket.on('disconnect', () => {
                delete this.connectedUsers[user_id]
            })
        })
    }
}

export default new App().app
