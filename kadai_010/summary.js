$(function() {
  // id属性がchange-colorの要素がクリックされたら
  $('#change-color').on('click', function() {
    // 文字の色が変わる
    $('#target').css('color', 'red');
  });

  // id属性がchange-textの要素がクリックされたら
  $('#change-text').on('click', function() {
    // 文字が切り替わる
    $('#target').text('Hello!');
  });

  // id属性がfade-outの要素がクリックされたら
  $('#fade-out').on('click', function() {
    // 文字が消える
    $('#target').fadeOut();
  });

  // id属性がfade-inの要素がクリックされたら
  $('#fade-in').on('click', function() {
    // 文字が現れる
    $('#target').fadeIn();
  });
});