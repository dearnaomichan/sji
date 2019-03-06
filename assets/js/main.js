
// ✨ HOVER AND IMG APPEARS - HOME

function previewImg(num) {
	var out = $('#prevImg-' + num)
	return out
}

function projectLink(num) {
	var out = $(".project-link-"+ num +" a h2" )
	return out
}

function hoverShowImage(num){
  projectLink(num).mousemove(function(e){
    previewImg(num, this).css({
      'display': 'inherit',
      'z-index': '1000',
      left: e.pageX,
      top: e.pageY
    });
  }).mouseleave( function(){
    previewImg(num, this).css('display', 'none')
  });
}

hoverShowImage(1)
hoverShowImage(2)
hoverShowImage(3)
hoverShowImage(4)
hoverShowImage(5)
hoverShowImage(6)
hoverShowImage(7)
hoverShowImage(8)
hoverShowImage(9)
hoverShowImage(10)
hoverShowImage(11)


  $(".project-braindump").mousemove(function(e){
    $("#prevImg", this).css({
      'display': 'inherit',
      'z-index': '1000',
      left: e.pageX,
      top: e.pageY
    });
  }).mouseleave( function(){
    $("#prevImg", this).css('display', 'none')
  });


// ⭐️ IMAGE SLIDER

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;

  function move(newIndex) {
    var animateLeft, slideLeft;

    advance();

    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }

    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    //
    // if (newIndex > currentIndex) {
    //   slideLeft = '100%';
    //   animateLeft = '-100%';
    // } else {
    //   slideLeft = '-100%';
    //   animateLeft = '100%';
    // }

    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }

  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }

  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });

  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });

  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');

    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });

  advance();
});
