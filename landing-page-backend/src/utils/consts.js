
//generating API URL
exports.generateIpGeoApiUrl = (IP) => {
    return `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.IP_GEO_API_KEY}&ip=${IP}`
}

//cookies
exports.COOKIE_IDS = {
    VOUCHER: "VOUCHER",
    SOURCE: "SOURCE",
    CAMPAIGN: "CAMPAIGN",
}
const COOKIE_LIFETIME = 30; //30 days
exports.COOKIE_SETTINGS = {
    signed: true, httpOnly: true,
    maxAge: COOKIE_LIFETIME * 1000 * 60 * 60 * 24,
}