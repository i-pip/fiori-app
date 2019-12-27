sap.ui.define(
	["sap/ui/model/json/JSONModel", "sap/ui/core/mvc/Controller"],
	function(JSONModel, Controller) {
		"use strict";

		return Controller.extend("pip.fiori-app.controller.DetailDetail", {
			onInit: function() {
				var oOwnerComponent = this.getOwnerComponent();

				this.oRouter = oOwnerComponent.getRouter();
				this.oModel = oOwnerComponent.getModel();

				this.oRouter
					.getRoute("detailDetail")
					.attachPatternMatched(this._onPatternMatched, this);
			},

			_onPatternMatched: function(oEvent) {
				this._supplier =
					oEvent.getParameter("arguments").supplier || this._supplier || "0";

				console.log("Supplier is ", this._supplier);

				this._product =
					oEvent.getParameter("arguments").product || this._product || "0";

				this.getView().bindElement({
					path: "/ProductCollectionStats/Filters/1/values/" + this._supplier,
					model: "products"
				});
			},

			onExit: function() {
				this.oRouter
					.getRoute("detailDetail")
					.detachPatternMatched(this._onPatternMatched, this);
			}
		});
	}
);
