import { Router } from "express"
import multer from "multer"
import CreateUserService from "../services/CreateUserService"
import ensureAutheticated from "../middlewares/ensureAuthenticated"
import uploadConfig from "../config/upload"

const usersRouter = Router()
const upload = multer(uploadConfig)

usersRouter.post("/", async (request, response) => {
  try {
    const { name, email, password } = request.body

    const createUser = new CreateUserService()

    const user = await createUser.execute({ name, email, password })

    delete user.password

    return response.json(user)
  } catch (err) {
    return response.status(400).json({ error: err.message })
  }
})

usersRouter.patch(
  "/avatar",
  ensureAutheticated,
  upload.single("avatar"),
  async (request, response) => {
    try {
      return response.json({ ok: true })
    } catch (err) {
      return response.status(400).json({ error: err.message })
    }
  }
)

export default usersRouter
