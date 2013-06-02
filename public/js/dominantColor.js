function dominate(){
    var imageLoader = document.getElementById('imageLoader');
        imageLoader.addEventListener('change', handleImage, false);
    var canvas = document.getElementById('imageCanvas');
    var ctx = canvas.getContext('2d');
    var maxWidth = 500;
    var maxHeight = 500
        

    function handleImage(e){
        var reader = new FileReader();
        $("#loading").show();
        reader.onload = function(event){
            var img = new Image();
            
            img.onload = function(){
                
                var rgb;
                var dominate;
                var pallet;
                canvas.width = 500;
                canvas.height = img.height * ( 500/ img.width)
                ctx.drawImage(img,0,0, 500, img.height * ( 500/ img.width));
                
                setTimeout(function(){
                dominate = getDominantColor(img)
                pallet = createPalette(img, 20);
                $("#loading").hide();
                rgb = "rgb("+ dominate[0]+"," +  dominate[1]+"," +  dominate[2]+")";
                document.body.style.background = rgb;
                $(".pallet").children().remove();
                    $("<div>").appendTo(".pallet").css("background", rgb);
                $.each(pallet, function(idx, el){
                    $("<div>").appendTo(".pallet").css("background", "rgb("+ el[0]+"," + el[1]+"," +  el[2]+")");
                })
                },0)
                
            }
            img.src = event.target.result;
        }
        reader.readAsDataURL(e.target.files[0]);     
    }
    $(".pallet").off("click", "div").on("click", "div",function(){
        document.body.style.background = this.style.background;
    })
}
