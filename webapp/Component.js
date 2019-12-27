sap.ui.define(
	["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/f/library"],
	function(UIComponent, JSONModel, fioriLibrary) {
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
				var oProductsModel, oModel, oRouter;
				// call the base component's init function
				UIComponent.prototype.init.apply(this, arguments);

				// enable routing
				this.getRouter().initialize();

				oModel = new JSONModel();
				this.setModel(oModel);

				// set products demo model on this sample
				oProductsModel = new JSONModel(
					sap.ui.require.toUrl("pip/fiori-app/data") + "/products.json"
				);

				oProductsModel.setSizeLimit(1000);

				this.setModel(oProductsModel, "products");

				oRouter = this.getRouter();
				oRouter.attachBeforeRouteMatched(this._onBeforeRouteMatched, this);
				oRouter.initialize();
			},

			_onBeforeRouteMatched: function(oEvent) {
				var oModel = this.getModel(),
					sLayout = oEvent.getParameters().arguments.layout;

				// If there is no layout parameter, set a default layout (normally OneColumn)
				if (!sLayout) {
					sLayout = fioriLibrary.LayoutType.OneColumn;
				}

				oModel.setProperty("/layout", sLayout);
			}
		});
	}
);
