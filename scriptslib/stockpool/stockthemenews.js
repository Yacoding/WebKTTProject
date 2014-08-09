$(document).ready(function() {
	
	$(function() {
		initModal();
		bindEvent();
	});
    
    
	function initModal() {
	    //初始化主体新闻信息
		initThemeNews();
        //初始化公司信息
	    initCompanyNews();
	}

    function bindEvent(){
    	$('#companyBtnDown').bind('click',companyNewsDownEvent);
    	$('#companyBtnUp').bind('click',companyNewsUpEvent);
    	$('#themeBtnDown').bind('click',themeNewsDownEvent);
    	$('#themeBtnUp').bind('click',themeNewsUpEvent);
    } 

    function  companyNewsDownEvent(){
    	currentCount = 0 ;
    	if((Number($('#companyNewsCount').val())+13)>Number($('#companyNewsTotalCount').val())){
    		currentCount = Number($('#companyNewsCount').val());
    	}else{
    		currentCount = Number($('#companyNewsCount').val())+13;
    	}
    	$('#companyNewsCount').val(currentCount);
    	initCompanyNews();
    }
    
    function  companyNewsUpEvent(){
    	currentData = 0;
    	if((Number($('#companyNewsCount').val())-13)>0){
    		currentData = Number($('#companyNewsCount').val())-13;
    	}
    	$('#companyNewsCount').val(currentData);
    	initCompanyNews();
    }
    
    function themeNewsDownEvent(){
    	currentCount = 0 ;
    	if((Number($('#themeNewsCount').val())+13)>Number($('#themeNewsTotalCount').val())){
    		currentCount = Number($('#themeNewsCount').val());
    	}else{
    		currentCount = Number($('#themeNewsCount').val())+13;
    	}
    	$('#themeNewsCount').val(currentCount);
    	initThemeNews();
    }
    
    function  themeNewsUpEvent(){
    	currentData = 0;
    	if((Number($('#themeNewsCount').val())-13)>0){
    		currentData = Number($('#themeNewsCount').val())-13;
    	}
    	$('#themeNewsCount').val(currentData);
    	initThemeNews();
    }
    
	//初始化相应的数据集.
	function initThemeNews(){
	   startNum = Number($('#themeNewsCount').val())+0;
	   $.commonService('../../stockThemeController/queryCurrentThemeNews', 'POST',
            {start:startNum,limit:13}, function(map) {
               $('#themeNewsTotalCount').val(map.count);	
		       initThemeTableInfor(map.data);
	        }); 
	}
	//初始化题材信息模块.
	function initThemeTableInfor(data){
	    $('#showStockThemeModalList').empty();
	    $.each(data,function(i,obj){
	       $('#showStockThemeModalList').append('<tr>'
	          +'<td class="text-primary"><span class="glyphicon glyphicon-hand-right"> </span>    '
	          +' <a href="'+obj.linkUrl+'" target="view_window">'+obj.title+'</a></td>'
	          +'<td>'+obj.pubDate+'</td>'
	          +'</tr>');
	    });
	}
	//初始化相应的上市公司信息.
	function  initCompanyNews(){
		startNum = Number($('#companyNewsCount').val())+0;
	    $.commonService('../../stockThemeController/queryCompanyNews', 'POST',
            {start:startNum,limit:13}, function(map) {
               $('#companyNewsTotalCount').val(map.count);	
		       initCompanyThemeNews(map.data);
	        }); 
	   
	}
	//初始化相应的公司板块信息.
   function  initCompanyThemeNews(data){
      $('#companyNewsModalList').empty();
      $.each(data,function(i,obj){
          $('#companyNewsModalList').append('<tr>'
	          +'<td class="text-danger"><span class="glyphicon glyphicon-hand-right"> </span>   '
	          +' <a href="'+obj.linkUrl+'" target="view_window">'+obj.title+'</a></td>'
	          +'<td>'+obj.pubDate+'</td>'
	          +'</tr>');
      });
}
	
	
});



