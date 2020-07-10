const AppError = require("../utils/appError")
const AppResponse = require("../utils/appResponse")
const catchAsync = require("../utils/catchAsync")

const { COOKIE_IDS, COOKIE_SETTINGS } = require("../utils/consts")
const { getUserIpInfo, getBrowserInfo, getBrowserLocale, isMobile } = require("../helpers/mainHelper")
const prices = require("../configs/prices")
const vouchers = require("../configs/vouchers")

let actions = {}

//getting the main data 
actions.getMainData = catchAsync(async (req, res) => {
    //getting the needed info from the query params
    let { source, campaign, voucher } = req.query
    if(req.signedCookies) {
        /*
            For "source" and "campaign":
                if there's a cookie > using the cookie 
                otherwise > using the provided value
                if no value was provided > using default value
            For "voucher":
                if there's a value in teh query > using this provided value
                else if no value was provided > using the cookie
                else if there's no cookie > using defaul value
        */
        source = req.signedCookies[COOKIE_IDS.SOURCE] || source || "website"
        campaign = req.signedCookies[COOKIE_IDS.CAMPAIGN] || campaign || "test"
        voucher = voucher || req.signedCookies[COOKIE_IDS.VOUCHER] || ""
    }
    
    //for "source" and "campaign" > only if there isn't cookie already set setting it
    if(!req.signedCookies || !req.signedCookies[COOKIE_IDS.SOURCE]) {
        res.cookie(COOKIE_IDS.SOURCE, source, COOKIE_SETTINGS);
    }
    if(!req.signedCookies || !req.signedCookies[COOKIE_IDS.CAMPAIGN]) {
        res.cookie(COOKIE_IDS.CAMPAIGN, campaign, COOKIE_SETTINGS);
    }
    res.cookie(COOKIE_IDS.VOUCHER, voucher, COOKIE_SETTINGS);

    //getting the needed info about the user (like IP address, location, browser info, etc..)
    const user = {
        isMobile: isMobile(req),
        locale: getBrowserLocale(req),
        ipData: await getUserIpInfo(req),
        browser: getBrowserInfo(req)
    }
    let pricing = prices;
    //if the provided voucher is a valid one > updating the prices and adding the voucher info
    if(voucher && vouchers[voucher]) {
        const percentageDiscount = vouchers[voucher]
        pricing = pricing.map(item => ({
            ...item,
            percentageDiscount,
            crossedPrice: item.mainPrice,
            mainPrice: (item.mainPrice - (item.mainPrice * (percentageDiscount / 100))).toFixed(2),
            billed: {
                ...item.billed,
                crossedPrice: item.billed.price,
                price: (item.billed.price - (item.billed.price * (percentageDiscount / 100))).toFixed(2),
            }
        }))
    }
    return new AppResponse(res, {user, pricing} )
})

module.exports = actions