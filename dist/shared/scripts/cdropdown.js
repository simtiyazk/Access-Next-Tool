'use strict';

$(document).ready(function () {
	window.addEventListener('click', function (e) {
		var select = document.querySelector('.custom-select');
		if (!select.contains(e.target)) {
			select.classList.remove('open');
		}
	});

	//$('.custom-select').classList.remove('open');

	var wrapperElements = document.querySelectorAll('.custom-select-wrapper');
	for (var i = 0; i < wrapperElements.length; i++) {
		wrapperElements[i].addEventListener('click', function (e) {
			// check if any other dropdown is already opened
			var select = document.querySelector('.custom-select.open');
			if (select) {
				select.classList.remove('open');
			}

			if ($(".wrap-ctas").hasClass("no-action")) {
				document.querySelector('.custom-select').classList.remove('open');
			} else {
				var selectedItem = e.target.parentNode.parentNode.querySelector('.custom-select');
				if (selectedItem) {
					selectedItem.classList.toggle('open');
				}
			}
		});
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = document.querySelectorAll('.custom-option')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var option = _step.value;

			$('.custom-options').on('click', '.custom-option', function () {
				if (!this.classList.contains('selected')) {
					var selected = this.parentNode.querySelector('.custom-option.selected');
					if (selected) {
						selected.classList.remove('selected');
					}
					this.classList.add('selected');
					this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
				}
			});
		}

		// Dynamic logo change on product dropdown selection and present button dynamic URL change
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	$(".productDD").on("click", function () {
		var selectedProd = $(".productDD > span.selected").text().toUpperCase();
		if (selectedProd.match('CUVITRU/HYQVIA')) {
			$('.item-logo>img').attr('src', '../shared/images/takeda_logo.png');
			$('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_70_00.zip)');
		} else if (selectedProd.match('HYQVIA')) {
			$('.item-logo>img').attr('src', '../shared/images/hyqvia_logo.png');
			$('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_50_00.zip)');
		} else if (selectedProd.match('GAMMAGARD')) {
			$('.item-logo>img').attr('src', '../shared/images/gammagard_logo.png');
			$('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_60_00.zip)');
		} else if (selectedProd.match('CUVITRU')) {
			$('.item-logo>img').attr('src', '../shared/images/cuvitru_logo.png');
			$('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_40_00.zip)');
		}
	});
	$("#pdfReadyLink").on("click", function () {
		$("#viewPdfPopup").hide();
	});
});
//# sourceMappingURL=cdropdown.js.map
