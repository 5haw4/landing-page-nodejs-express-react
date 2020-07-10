const browser = require('browser-detect');
const fetch = require("node-fetch")
const { generateIpGeoApiUrl } = require("../utils/consts")

let actions = {}

//getting browser locale
actions.getBrowserLocale = (req) => {
    return (req.headers["accept-language"] && req.headers["accept-language"].split(",")[0]) || 
        req.headers["accept-language"] || ""
}

//getting browser version and name
actions.getBrowserInfo = (req) => {
    const broswerInfo = browser(req.headers['user-agent'])
    return {
        name: broswerInfo.name,
        version: broswerInfo.version,
    }
}

/*
    - getting user's IP address and looking up its location on IP-geo API
    - when running the server on localhost getting by default Israel's flag and 
        other static data in order to not reach the API's limit during development
*/
actions.getUserIpInfo = async (req) => {
    const IP = (req.header && req.header('x-forwarded-for')) || 
        (req.connection && req.connection.remoteAddress);
    if(IP.includes("127.0.0.1")) {
        return { IP, location: "localhost", 
            flag: "https://ipgeolocation.io/static/flags/il_64.png", isExposed: true }
    }
    const results = await (await fetch(generateIpGeoApiUrl(IP))).json();
    const location = `${results.city || ""}${results.city && results.country_name ? ", " : ""}${results.country_name || ""}`
    const flag = results.country_flag || "";
    return { IP, location, flag, isExposed: true, }
}

//checking if the user is browsing on a mobile device
actions.isMobile = (req) => {
    return req.device.type == "phone" || req.device.type == "tablet";
}

module.exports = actions