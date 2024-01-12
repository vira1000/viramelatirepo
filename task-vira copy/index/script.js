$(document).ready(function() {
  function setCountry (country) {
    var $option = $(country.element);
  
	  if (!country.id) {
        return country.text;
    }
    var $country = $('<div><span class="country">' + country.text + ',' + '</span></div>' + '<div><span class="capital">' + country.element.value + ' ' + $option.data('description') +'</span></div>');

    


    return $country;   
	};


  $( '#multiple-select-clear-field' ).select2( {
    width: $( this ).data( 'width' ) ? $( this ).data( 'width' ) : $( this ).hasClass( 'w-100' ) ? '100%' : 'style',
    placeholder: $( this ).data( 'placeholder' ),
    closeOnSelect: false,
    allowClear: true,
    templateResult: setCountry,
		templateSelection: setCountry,
    maximumSelectionLength: 5,
  });
});