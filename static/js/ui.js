$(function(){
	
	/* ==============================
	 * common
	 * ============================== */
	

	//datepicker
	if($('.datepicker').size() > 0){
		$( '.datepicker' ).datepicker({
			closeText: '닫기',
			prevText: '이전 달',
			nextText: '다음 달',
			currentText: '오늘',			
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
            monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNames: ['일','월','화','수','목','금','토'],
            dayNamesShort: ['일','월','화','수','목','금','토'],
            dayNamesMin: ['일','월','화','수','목','금','토'],
			dateFormat: 'yy.mm.dd',
			showMonthAfterYear: true,
			changeMonth: true,
      		changeYear: true,
      		yearSuffix: '년',
			showOn: 'button',
			buttonText: '기간조회'
		});
	}

	
	/* ==============================
	 * gnb 
	 * ============================== */
	Gnb();

	/* ==============================
	 * main 
	 * ============================== */


	/* ==============================
	 * content 
	 * ============================== */

	// editor
	if ( $('#editor').length > 0)
	{
		Editor();
	}

	//gnbList
	GnbList();

	// password api
	$('.pwinp').dPassword();

	// Semantic UI Drop box
	$('.ui.selection.dropdown').dropdown();

	// autocomplete
	$(".autoSch.ty1").easyAutocomplete(Comp_options);
	$(".autoSch.ty2").easyAutocomplete(city_options);
	$(".autoSch.ty3").easyAutocomplete(state_options);
	

	//Input Reset
	InputReset();

});




// functions
// GNB
function Gnb() {
	cnt = 0;
	$('.allBtn').on('click', function(){
		cnt++;
		if (cnt == 1)
		{
			$(this).addClass('on');
			$('nav').stop(true).animate({
				width:0
			});
		} else if (cnt != 0)
		{
			$(this).removeClass('on');
			$('nav').stop(true).animate({
				width:'250px'
			});
			cnt = 0;
		}
	});
}

//GnbList
function GnbList() {
	var GnbListTit = $('.gnbList').find('.gnbTit');
	$(GnbListTit).each(function(z){
		$(this).on('click', function(){
			console.log(z);
			if ( $(this).next().css('display') == 'none')
			{
				$(this).addClass('on').next().slideDown(500);
			} else {
				$(this).removeClass('on').next().slideUp(500);
			}
		});
	});
}

// editor
function Editor() {
	var snowQuill = new Quill('#editor', {
		placeholder: '기본 placerholder',
		modules: {
			toolbar: [
			[{ header: [] }],
			['bold', 'italic', 'underline', 'link'],
			[{ color: [] }, { background: [] }],
			[{ list: 'ordered' }, { list: 'bullet' }],
			['clean']
			]
		},
		theme: 'snow'
	});
}

// input reset
function InputReset() {
	// input reset
	$('.inpReset').click(function(){
		$(this).closest('.inputBox').find('.inp').val('');
		$(this).hide();
	});

	// input reset button display
	var InpObj = $('input:text, input:password');
	$(InpObj).on('keyup', function(e) {
		if($(this).val().length >= 1) {
			console.log('zzz');
			$(this).closest('.inputBox').find('button').css('display','block');
		}
		if ( $(this).val().length == 0 )
		{
			$(this).next('button').css('display','none');
		}
	});
}



// function








// 자동완성 예시 변수
var Comp_options = {
	url: "../static/json/sample_company.json",
	getValue: function(element) {
		return element.name;
	},
	template: {
		type: "description",
		fields: {
			description: "code"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onChooseEvent: function() {
			var selectedItemValue = $(".autoSch.ty1.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty1.name").getSelectedItemData().code;
			$(".autoSch.ty1.name").val(selectedItemValue);
			$(".autoSch.ty1.code").val(selectedItemValue2);
		},
		match: {
			enabled: true
		}
	}
};

var city_options = {
	url: "../static/json/sample_city.json",
	getValue: function(element) {
		return element.name;
	},
	template: {
		type: "description",
		fields: {
			description: "code"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onChooseEvent: function() {
			var selectedItemValue = $(".autoSch.ty2.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty2.name").getSelectedItemData().code;
			$(".autoSch.ty2.name").val(selectedItemValue);
			$(".autoSch.ty2.code").val(selectedItemValue2);
		},
		match: {
			enabled: true
		}
	}
};

var state_options = {
	url: "../static/json/sample_state.json",
	getValue: function(element) {
		return element.name;
	},
	template: {
		type: "description",
		fields: {
			description: "code"
		}
	},
	list: {
		maxNumberOfElements: 10,
		sort: {
			enabled: true
		},
		onChooseEvent: function() {
			var selectedItemValue = $(".autoSch.ty3.name").getSelectedItemData().name;
			var selectedItemValue2 = $(".autoSch.ty3.name").getSelectedItemData().code;
			$(".autoSch.ty3.name").val(selectedItemValue);
			$(".autoSch.ty3.code").val(selectedItemValue2);
		},
		match: {
			enabled: true
		}
	}
};
