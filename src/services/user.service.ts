import db from '../../data-source'
import { User } from '../entity/user.entity'

const userRepository = db.getRepository(User)

export class UserService {
    async queryList() {
        return await userRepository.find()
    }
}