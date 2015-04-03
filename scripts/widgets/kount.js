require(['modules/jquery-mozu', 'hyprlive',"modules/backbone-mozu",  "modules/api"],
    function ($, Hypr, Backbone, Api) {
  
    $(document).ready(function () {
       var res=Api.get('entity',{listName: 'mozu-kount-settings@a0842dd', id: Api.context.site });
       res.then(function(r) { 
             var data = r.data;
             var merchantId=data.merchantId;
             var tenantUrl=data.tenantURL;
             
             var $validationFrame = $('#validationFrame');
             var $validationImg = $('#validationImg');
             
             var pageId = $validationFrame.data('model-id');
             var tenantId = $validationFrame.data('tenant');
             
             var url = tenantUrl + "/logo.html?" + $.param({
            	 s: pageId,
            	 m: merchantId,
            	 t: tenantId
             });
             
             $validationImg.attr("src", url);
             $validationFrame.attr("src", url);
       });
    });
});


