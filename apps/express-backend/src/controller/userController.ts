import express from 'express';
import prisma from '@mediumblogs/db';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JWT_SECRET } from '../config/secret';
const signUp = async (req: express.Request, res: express.Response) => {
  const { name, email, password } = req.body;

  try {
    const existinguser = await prisma.prisma.user.findUnique({
      where: {
        email
      }
    })
    if (existinguser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword)

    const newuser = await prisma.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword

      }
    })

    const data = {
      user: {
        id: newuser.id,
        password: newuser.password
      }
    }

    const token = jwt.sign(data, JWT_SECRET as string);

    return res.status(201).json({
      message: "user Created Successfully",
      newuser,
      token
    })

  } catch (error) {
    console.error('Error checking existing user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

const signin = async (req: express.Request, res: express.Response) => {

  const { email, password } = req.body;

  try {
    const existinguser = await prisma.prisma.user.findUnique({
      where: {
        email
      }
    })

    
    if (!existinguser || !(await bcrypt.compare(password, existinguser.password))) {
      return res.status(400).json({
        message: "Invalid Credentials"
      })
    }

    const data = {
      user: {
        id: existinguser.id,
        password: existinguser.password
      }
    }

    const token = jwt.sign(data, JWT_SECRET as string);


    return res.status(200).json({
      message: "Login Successful",
      existinguser,
      token
    })
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

export { signUp, signin };