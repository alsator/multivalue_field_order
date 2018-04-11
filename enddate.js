(function ($) {
	Drupal.behaviors.MODULENAME_form = {
		attach: function (context, settings) {

			$('#edit-field-settings-enddate-get').change(function () {
				if (!$(this).is(':checked')) {
					$('#edit-field-order option').each(function (i, op) {
						var val = $(op).val();
						if (val.substring(val.length - 7) === 'enddate') {
							$(op).attr("disabled", "disabled");
						}
					})
				}
				else {
					$('#edit-field-order option').each(function (i, op) {
						var val = $(op).val();
						if (val.substring(val.length - 7) === 'enddate') {
							$(op).removeAttr("disabled");
						}
					})
				}
			})

		}
	};
})(jQuery);
