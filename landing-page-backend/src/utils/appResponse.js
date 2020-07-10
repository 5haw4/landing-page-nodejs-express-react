//custom response class for a single base structure for all responses coming out of the API
class AppResponse {
    constructor(res, data = undefined, statusCode = 200, status = "success") {
        let message;
        if(data) message = data.message;
        
        if(message) delete data.message;
        
        if(!data || Object.keys(data).length <= 0) {
            data = undefined;
        }

        res.status(statusCode).json({
            error: false,
            status: status,
            message,
            data
        });
    }
}

module.exports = AppResponse;