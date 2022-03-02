$(function (){
    'use strict';

    //navbar scroll to top
    $(document).ready(function(){
        $(window).bind('scroll', function() {
        var navHeight = $( window ).height() - 151;
        console.log(navHeight);
              if ($(window).scrollTop() > navHeight) {
                  $('.navbar').addClass('fixed');
              }
              else {
                  $('.navbar').removeClass('fixed');
              }
         });
     });
    // Adjust header Slider Img Height
    var imgHeight   = $(window).height(),
        navHeight   = $('.navbar').innerHeight(),
        upperHeight = $('.upper-bar').innerHeight();
    $('.slider, .carousel-item').height(imgHeight - ( navHeight + upperHeight));

    // Featured Work Section
        // Active button
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        // Shuffle-imgs
        if ($(this).data('class') === 'all'){
            
            $('.shuffle-imgs .col-sm').show();
            // $('.shuffle-imgs .col-sm').css('opacity', 1);
            
        } else{
            
            $('.shuffle-imgs .col-sm').hide();
            // $('.shuffle-imgs .col-sm').css('opacity', 0.9);
            $($(this).data('class')).parent().show();
        }
    });

    // Scroll top
    var scrollbtn = $(".scroll-top");

    $(window).scroll(function(){

        if( $(this).scrollTop() >= 500){
            scrollbtn.show();
        }
        else{
            scrollbtn.hide();
        }
    });
    
    scrollbtn.click(function(){

        $("html,body").animate({ scrollTop: 0}, 600);

        
    });

    // Scrolling by id 
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
      });

});
/*
 ** Increase Numbers On Scrolling
 ** Video URL: https://youtu.be/PLsUdgLnzgQ
 */

// Increase Numbers On Scrolling

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No

window.onscroll = function () {
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}