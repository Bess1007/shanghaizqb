$('body').on('click','.openSon_btn',function () {
    $(this).next('.labelSonbox').toggle(200);/*点击向下箭头收缩展开*/
});


$(document).bind("click",function(e){/*点击空白处收回标签下拉框*/
    var target  = $(e.target);    //e.target获取触发事件的元素
    if(target.closest(".labelSonbox,.openSon_btn,.notOpt").length ==0){
        $('.labelSonbox').hide(200);
    };
    e.stopPropagation();
})
/*当标签不可选时，点击标签如果有下拉框则展开下拉框*/
$('body').on('click','.label_txt.notOpt',function () {
    $(this).siblings('.labelSonbox').toggle(200);

})