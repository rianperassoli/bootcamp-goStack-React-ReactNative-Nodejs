import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'rian@email.com',
    password: '123456',
    techs: ['Nodejs', 'ReactJS', { title: 'Javascript', experience: 100 }]
  });

  return response.json(user)
}
