
var ele ;
$.fn.extend({
    rotate: function () {
        ele = this ;
        setInterval('singleTransform()',5);
    }
});
var degree = 0;
function singleTransform() {
    degree = degree + 50 * Math.PI / 180;
    ele.css("transform","rotateY("+degree+"deg)");
}