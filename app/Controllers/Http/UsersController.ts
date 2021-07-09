import Hash  from '@ioc:Adonis/Core/Hash'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  user = [
    {nama:"nama 1",alamat:"alamat 1"},
    {nama:"nama 2",alamat:"alamat 2"},
    {nama:"nama 3",alamat:"alamat 3"},
  ]
  public async index(ctx: HttpContextContract){


    return ctx.response.json(await User.all())
  }
  public async store(ctx:HttpContextContract){
    let user = new User()
    user.username = ctx.request.all().username
    user.password = ctx.request.all().password
    user.save()
    return user
  }
  public async
}
