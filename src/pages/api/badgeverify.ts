import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';


const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const { transactionId } = req.query;

    try {
        const verifyBadge = await prisma.ticketEmail.findUnique({
            where: {
                transactionId: `${transactionId}`
            }
        });

        const ticketTierId = await prisma.ticketTier.findFirst({
            where: {
                ticketTier: verifyBadge?.ticketTier
            }
        });
        return res.status(200).json({
            name: verifyBadge?.name,
            email: verifyBadge?.email,
            ticketTierId: ticketTierId?.id,
            badgeFilled: verifyBadge?.badgeFilled,
            haveShirt: ticketTierId?.haveShirt,
            transactionId:verifyBadge?.transactionId
        });
    }

    catch (e: any) {
        return res.status(500).json({
            message: e.message
        })
    }
}