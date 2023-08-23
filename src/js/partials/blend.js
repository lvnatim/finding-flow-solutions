import $ from 'jquery';

$('.btn').each(function(index, element){
    $(element).attr('data-index', index);
});

$('.border-blend').each(function(index, element){
    $(element).attr('data-index', index);
});