export default function handler(req, res) {
    // Kezeld az API kérést és válaszolj
    res.status(200).json({ "budapest": { "lat": "47.4986567", "lng": "19.0532484" } });
}
