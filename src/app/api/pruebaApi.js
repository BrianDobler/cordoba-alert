import { dbConnect } from '../lib/dbConnect';

const handler = async (req, res) => {
    console.log('Received request:', req.method);
    try {
        await dbConnect(); 

        if (req.method === 'POST') {
            res.status(200).json({ message: 'Datos insertados exitosamente' });
        } else {
            res.setHeader('Allow', ['POST']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error('Error en API route:', error);
        res.status(500).json({ message: 'Error connecting to the database' });
    }
};

export default handler;
