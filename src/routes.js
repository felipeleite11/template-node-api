import { Router } from 'express'
import multer from 'multer'

import authMiddleware from './app/middlewares/auth'
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', UserController.store)

routes.use(authMiddleware)

// Rotas autenticadas
routes.get('/users', UserController.show)

export default routes
