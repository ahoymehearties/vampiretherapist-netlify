// pages/api/auth.js

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { password } = req.body;
        if (password === 'ThisIsAMAZING') { // Replace with your actual password
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ success: false });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
