<<<<<<< HEAD
var deployPath = "";
=======
var deployPath = ""; //"/me-edding";
>>>>>>> c91f5e93964bf3e47c127d57f41cf23bb6e872c8
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
