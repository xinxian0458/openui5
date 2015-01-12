/*!
 * ${copyright}
 */

sap.ui.define(['sap/ui/model/odata/type/DateTimeBase'],
	function(DateTimeBase) {
	"use strict";

	/**
	 * Adjusts the constraints for DateTimeBase.
	 *
	 * @param {sap.ui.model.odata.type.DateTimeOffset} oType
	 *   the type
	 * @param {object} [oConstraints]
	 *   constraints, see {@link #constructor}
	 * @returns {object}
	 *   the constraints adjusted for DateTimeBase
	 */
	function adjustConstraints(oType, oConstraints) {
		return {
			nullable: oConstraints && oConstraints.nullable
		};
	}

	/**
	 * Constructor for a primitive type <code>Edm.DateTimeOffset</code>.
	 *
	 * @class This class represents the OData primitive type <a
	 * href="http://www.odata.org/documentation/odata-version-2-0/overview#AbstractTypeSystem">
	 * <code>Edm.DateTimeOffset</code></a>.
	 *
	 * @extends sap.ui.model.odata.type.DateTimeBase
	 *
	 * @author SAP SE
	 * @version ${version}
	 *
	 * @alias sap.ui.model.odata.type.DateTimeOffset
	 * @param {object} [oFormatOptions]
	 *   format options; this type does not support any format options
	 * @param {object} [oConstraints]
	 *   constraints
	 * @param {boolean|string} [oConstraints.nullable=true]
	 *   if <code>true</code>, the value <code>null</code> will be accepted
	 * @public
	 * @since 1.27.0
	 */
	var DateTimeOffset = DateTimeBase.extend("sap.ui.model.odata.type.DateTimeOffset",
			/** @lends sap.ui.model.odata.type.DateTimeOffset.prototype */
			{
				constructor : function (oFormatOptions, oConstraints) {
					DateTimeBase.call(this, oFormatOptions, adjustConstraints(this, oConstraints));
				}
			}
		);

	/**
	 * Returns the type's name.
	 *
	 * @returns {string}
	 *   the type's name
	 * @public
	 */
	DateTimeOffset.prototype.getName = function () {
		return "sap.ui.model.odata.type.DateTimeOffset";
	};

	return DateTimeOffset;
});
