module.exports = {
    secret: process.env.AUTH_SECRET || "zA23RtfLoPP", 
    expires: process.env.AUTH_EXPIRES || "1h",
    rounds: process.env.AUTH_ROUNDS || 12
}