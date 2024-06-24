import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

interface TicketTier {
    id: number;
    ticketTier: string;
}

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        const ticketTier = await prisma.ticketTier.findMany();
        return res.status(200).json([
            ...ticketTier
        ])
    }

    catch (e:any) {
        return res.status(500).json({
            message: e.message
        })
    }
}