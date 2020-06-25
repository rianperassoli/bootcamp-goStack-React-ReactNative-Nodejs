
import { getRepository } from "typeorm"
import { compare } from 'bcryptjs'

import User from "../models/User"


interface RequestDTO {
  email: string
  password: string
}

class AuthenticateUserService {
  public async execute({ email, password }: RequestDTO): Promise<void> {
    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ where: { email } })

    if (!user) {
      throw new Error('Incorrect email/password combination')
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new Error('Incorrect email/password combination')
    }

    console.log('autenticado')

  }
}

export default AuthenticateUserService
