/* 
Scroll Spy
1. 선행 Dimension
offset(), position()
*/

/*************** 글로벌 설정 *****************/


/*************** 사용자 함수 *****************/


/*************** 이벤트 등록 *****************/
$(window).scroll(onScroll)


/*************** 이벤트 콜백 *****************/
/*     for(var i=0; i<$('.page').length; i++){
        pageOffset[i] = $('.page').eq(i).offset().top  //각 페이지의 top값을 가져옴 현재 내가 몇페이지 인지 찾아내야함
    } */
function onScroll() {
	var windowHeight = $(this).innerHeight()
    var scrollTop = $(this).scrollTop() //문서가 올라간 값
    var pageOffset = []
    var page 
    $('.page').each(function(i){
        pageOffset[i] = $(this).offset().top
    })
    for(var i=1; i<pageOffset.length; i++){
        if(scrollTop < pageOffset[i]) break;
    }

    page = i
    console.log(page)

}
/* 
    if(scrollTop < pageOffset[1]){
        console.log('page1')
    }
    else if(scrollTop < pageOffset[2]){
        console.log('page2')
    }
    else if(scrollTop < pageOffset[3]){
        console.log('page3')
    }
    else {
        console.log('page4')
    }

    if(scrollTop >= pageOffset[3]){
        console.log('page4')
    }
    else if(scrollTop >= pageOffset[2]){
        console.log('page3')
    }
    else if(scrollTop >= pageOffset[1]){
        console.log('page2')
    }
    else {
        console.log('page1')
    } */



    

