sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"fi/fi/test"
], function (Controller,test) {
	"use strict";

	return Controller.extend("reuse3.reuse3.controller.View1", {
		onInit: function () {
			var data = test.customMethod();
		}
	});
});