import type { NextApiRequest, NextApiResponse } from 'next';

interface Activity {
    title: string;
    description: string;
    imgSrc: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Activity[]>
) {
  return res.status(200).json([
    
  ]) 
}