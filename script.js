function navigo (){
    const header = document.querySelector('header'); 
    const headerheight = header.clientHeight;
  document.addEventListener('scroll', onScroll, { passive: true });
   function onScroll () {
       const scrollposition = pageYOffset;
     const nav = document.querySelector('header')
     if (headerheight<=scrollposition){
       nav.classList.add('fix')
     }
     else {
       nav.classList.remove('fix');
     }
   } 
  }
  navigo()

function onHoverKakao()
{
    $("#kakao").attr('src', 'logo-kakao-whitegray.svg');
}

function offHoverKakao()
{
    $("#kakao").attr('src', 'logo-kakao-white.svg');
}

function onHoverErButton()
{
    $("#er-button").attr('class', "er-button");
}

function offHoverErButton()
{
    $("#er-button").attr('class', "");
}

function onHoverErButtonMain()
{
    $("#play-button").attr('class', "er-button");
}

function offHoverErButtonMain()
{
    $("#play-button").attr('class', "");
}