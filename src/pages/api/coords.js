export default function handler(req, res) {
    // Kezeld az API kérést és válaszolj
    res.status(200).json({ message: 'Hello, API!' });
}
