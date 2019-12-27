sap.ui.define(
	["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
	function(UIComponent, JSONModel) {
		"use strict";

		return UIComponent.extend("pip.fiori-app.Component", {
			metadata: {
				manifest: "json"
			},

			/**
			 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
			 * @public
			 * @override
			 */
			init: function() {
				var oProductsModel;
				// call the base component's init function
				UIComponent.prototype.init.apply(this, arguments);

				// enable routing
				this.getRouter().initialize();

				// set products demo model on this sample
				oProductsModel = new JSONModel(
					sap.ui.require.toUrl("pip/fiori-app/data") + "/products.json"
				);

				oProductsModel.setSizeLimit(1000);

				this.setModel(oProductsModel, "products");
			}
		});
	}
);
