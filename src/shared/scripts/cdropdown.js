$(document).ready(function() {
	window.addEventListener('click', function(e) {
		const select = document.querySelector('.custom-select');
		if (!select.contains(e.target)) {
			select.classList.remove('open');
		}
	});

	//$('.custom-select').classList.remove('open');

	const wrapperElements = document.querySelectorAll('.custom-select-wrapper');
	for (let i = 0; i < wrapperElements.length; i++) {
		wrapperElements[i].addEventListener('click', function(e) {
			// check if any other dropdown is already opened
			const select = document.querySelector('.custom-select.open');
			if (select) {
				select.classList.remove('open');
			}

			if ($(".wrap-ctas").hasClass("no-action")) {
				document.querySelector('.custom-select').classList.remove('open');
				
			} else {
				const selectedItem = e.target.parentNode.parentNode.querySelector(
					'.custom-select'
				);
				if (selectedItem) {
					selectedItem.classList.toggle('open');
				}
			}
		});
	}

	for (const option of document.querySelectorAll('.custom-option')) {
		$( '.custom-options' ).on( 'click', '.custom-option', function () {
			if (!this.classList.contains('selected')) {
				const selected = this.parentNode.querySelector('.custom-option.selected');
				if (selected) {
					selected.classList.remove('selected');
				}
				this.classList.add('selected');
				this.closest('.custom-select').querySelector(
					'.custom-select__trigger span'
				).textContent = this.textContent;
			}
		});
	}

	// Dynamic logo change on product dropdown selection and present button dynamic URL change
	$(".productDD").on("click", function() {
		let selectedProd = $(".productDD > span.selected").text().toUpperCase();
		if (selectedProd.match('CUVITRU/HYQVIA')) {
			$('.item-logo>img').attr('src', '../shared/images/takeda_logo.png');
			$('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_70_00.zip)');
		} else if (selectedProd.match('HYQVIA')) {
			$('.item-logo>img').attr('src', '../shared/images/hyqvia_logo.png');
			$('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_50_00.zip)');
		} else if (selectedProd.match('GAMMAGARD')) {
			$('.item-logo>img').attr('src', '../shared/images/gammagard_logo.png');
			$('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_60_00.zip)');
		} else if(selectedProd.match('CUVITRU')){
			$('.item-logo>img').attr('src', '../shared/images/cuvitru_logo.png');
			$('.presentBtn').attr('href', 'veeva:gotoSlide(access_next_tool_40_00.zip)');
		}
	});
	$("#pdfReadyLink").on("click", function() {
		$("#viewPdfPopup").hide();
	});
});
