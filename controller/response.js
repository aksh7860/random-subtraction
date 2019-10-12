'use strict';

class Response {
	static response(status,result,success,message) {
		let responseObj = {
			status: status,
			result: result,
			success: success,
			message: message
		}
		return responseObj;
	}
}

module.exports = Response;