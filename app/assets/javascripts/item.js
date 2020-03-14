$(document).on('turbolinks:load', function(){
    $('#item_images').on('change', function(e){
        var files = e.target.files;
        var d = (new $.Deferred()).resolve();
        $.each(files,function(i,file){
            d = d.then(function(){return previewImage(file)});
        });
    })
    var previewImage = function (imageFile){
        var reader = new File
    }
})