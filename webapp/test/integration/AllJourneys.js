sap.ui.define([
	"sap/ui/test/Opa5",
	"pip/fiori-app/test/integration/arrangements/Startup",
	"pip/fiori-app/test/integration/BasicJourney"
], function(Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		pollingInterval: 1
	});

});
