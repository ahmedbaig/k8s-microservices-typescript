"use strict";
import { PrismaClient } from '@prisma/client'; 
import { Redis } from '../../cache/redis.service';

// const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_ACCOUNT_TOKEN);

const selectUser = {
    id: true,
    email: true,
    role: true,
    profile: {
        select: {
            phoneNo: true,
            firstName: true,
            lastName: true,
            city: true,
            country: true,
            birthday: true,
            birthYearVisibility: true,
            about: true,
            profileImage: true,
            locationRange: true,
            locationVisibility: true,
        }
    },
    createdAt: true,
    updatedAt: true,
};

const select = { // ONLY USED FOR ADMIN
    id: true,
    email: true,
    blocked: true,
    role: true,
    gcm: true,
    images: true,
    profile: true,
    createdAt: true,
    updatedAt: true,
};
export class UserService  {
    private prisma;
    constructor() {
        this.prisma = new PrismaClient();
    }
}
