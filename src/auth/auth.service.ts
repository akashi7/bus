import { db } from '../utils/db';
import { AuthDto } from './dto';
import { hash } from 'argon2';
import { User } from '@prisma/client';
import { ERoles } from '../enums';

export default class AuthService {
  static async createAdmin(data: AuthDto): Promise<User> {
    const admin = await db.admin.create({
      data: {
        fullNames: data.fullNames,
        email: data.email,
      },
    });
    const password = await hash(data.password);
    const user = await db.user.create({
      data: {
        userId: admin.id,
        password,
        email: admin.email,
        Role: ERoles.ADMIN,
      },
    });
    return user;
  }
}
