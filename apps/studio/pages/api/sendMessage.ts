import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const body = req.body;
        const response = await axios.post("https://hb03r9i2tg.execute-api.ap-southeast-2.amazonaws.com/sendImage", body);
        res.status(200).json(response.data);
    } catch (e) {
        res.status(500).json(e);
    }
}
