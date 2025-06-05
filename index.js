 $('#fullpage').fullpage({
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
        navigation:true,
        navigationPosition:'right',
        menu:'menu',
        anchors:['1','2','3','4']
    });

    $('.d1').colorbox({rel:'gal'})
  $('.d1pop').colorbox({iframe:true, innerWidth:800, innerHeight:600});

  $('.win').on('click', ()=>{
    window.open('./popup.html', 'popup', 'width=600m height=400');
  })