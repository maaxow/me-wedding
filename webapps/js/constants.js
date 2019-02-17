var deployPath = ""; //"/me-edding";
var restPath = deployPath + "/rest";
angular.module('app').constant('CONSTANTS', {
	weddingDate: '06-29-2019'
})
.constant('REST', 
	{
		mailing_all : restPath + '/mailing',
		subscribe: restPath + '/mailing/subscribe',
		transaction: restPath + '/transaction',
		transactionAmount: restPath + '/transaction/total',
		reponse: restPath + '/reponse',
		message: restPath + '/message'
	}
);
