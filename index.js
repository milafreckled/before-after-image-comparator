$("#slider").on("input change", (e) =>{
  const sliderPos = e.target.value;
  $('.foreground-image').css('width', `${sliderPos}%`);
});

/*$("#urlsource1").on("input change", () =>{
  const inputValue = $(`{this}`z`).val();
  $('.foreground-image').css('background-image', 'url("'+inputValue+'")');
});*/
$("button").on("click", (e) =>{
  if ($("#urlsource1").val() !== null){
  const inputValue1 = $("#urlsource1").val();
  $('.foreground-image').css('background-image', 'url("'+inputValue1+'")');
}
  if ($("#urlsource2").val() !== null){
  const inputValue2 = $("#urlsource2").val();
  $('.background-image').css('background-image', 'url("'+inputValue2+'")');
}

});
$("#filesource1").on("input change", (e) =>{
    //var files = e.target.files
    var inputFile = $("#filesource1");
    var url = inputFile.val();
    console.log(url);
    console.log(e.target.files);
    var ext = url.substring(url.lastIndexOf('.')+1).toLowerCase();
    if ( $("#filesource1").files && $("#filesource1").files[0]){
    var source = URL.createObjectURL($("#filesource1").files[0]);
    console.log(source);
    $('.foreground-image').css('background-image', 'url("'+source+'")');
    $('.foreground-image').onload = imageIsLoaded;
    }
});
function imageIsLoaded(){
  alert(this);
}
