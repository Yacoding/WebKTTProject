$(document).ready(function(){
	$(function(){
		initModel();
		bindEvent();
	});
	
	function initModel(){
	    $.showPage(0);
	}
	
	function bindEvent(){
		
	}
	
});

function  initArgs(){
	var url = $.serviceAddress()+'dailyblog/dailyarticles';
	return {url:url,
		      params:{},
		      callBack:function(data){initAuthorArticleList(data);}		
		    };
}

function  initAuthorArticleList(data){
	$('#authShowModel').empty();
	for(var i = 0 ; i<data.length;i++){
		  $('#authShowModel').append('<tr><td><img src="../imagelib/celeBlogImage/'+data[i].imageUrl+'"  class="img-rounded imageShowModal"/></td>'
		      +'<td><a href="'+data[i].linkUrl+'" class="btn btn-link" target="view_window">'+data[i].title+'</a></td>'
          	  +'<td> '+data[i].pubDate+'</td> '
          	  +'</tr>');
	}
}

