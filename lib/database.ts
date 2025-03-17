import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

export class PrismaService {
  private static instance: PrismaClient = global.prisma ?? new PrismaClient();

  private constructor() {}

  static get prisma(): PrismaClient {
    if (!global.prisma) {
      global.prisma = PrismaService.instance;
    }
    return PrismaService.instance;
  }

  static async getUser() {
    return this.prisma.user.findFirst({
      include: {
        projects: true,
        stacks: true,
      },
    });
  }
}

export const prismaService = PrismaService;
