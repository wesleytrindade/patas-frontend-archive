import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../config/prisma';


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method === "POST") {
        const request = req.body;

        try {
            const badge = await prisma.badge.create({
                data: {
                    ticketEmail: request.ticketEmail,
                    ticketName: request.ticketName,
                    ticketTierId: Number.parseInt(request.ticketTierId),
                    fursonaName: request.fursonaName,
                    fursonaImageSrc: request.fursonaImageSrc,
                    shirtSize: request.shirtSize,
                    isMinor:request.isMinor,
                }
            })

            await prisma.ticketEmail.update({
                where:{
                    transactionId: request.idTransaction
                },
                data:{
                    badgeFilled:true
                }
            });

            return res.status(201).json({
                badge
            })
        }

        catch(e:any){
            return res.status(500).json({
                message:e.message
            })
        }
    }

    return res.status(405);
}
