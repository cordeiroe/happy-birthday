(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;

  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      $('page1').setAttribute('class', 'visible');
      $('page2').setAttribute('class', 'hidden');
      $('page3').setAttribute('class', 'visible');
      $('page4').setAttribute('class', 'hidden');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      $('page1').setAttribute('class', 'hidden');
      $('page2').setAttribute('class', 'visible');
      $('page3').setAttribute('class', 'hidden');
      $('page4').setAttribute('class', 'visible');
      timer = null;
    }, 1000);
  });

}());