import { Controller, Get } from 'routing-controllers'
import { UserService } from '../services/user.service'

@Controller('/user')
export default class UserController {
    userService
    constructor() {
        this.userService = new UserService()
    }

    @Get('/queryList')
    queryList() {
        return this.userService.queryList()
    }
}