var Slider = function(id, _web, _tab, _mobile, spacing){
    var containerWidth = 0;
    var sliderItemWidth = 0;
    var totalCount = 0;
    var spacing = spacing || 10;
    var display = _web;
    var left = 0;
    var interval;
  
    var DOM = {
      container: function(id){
        var dom = document.querySelector('#'+id);
        dom.className = 's-container';
        dom.style.position = 'relative';
        dom.style.overflow = 'hidden';
        return dom;
      },
      slider: function(container){
        totalCount = container.children.length;
  
        var dom = document.createElement('div');
        dom.className = 'slider'
        dom.style.position = 'relative';
        dom.style.overflow = 'hidden';
        dom.style.height = '100%';
        dom.style.left = 0;
        dom.style.transition = 'left .5s';
        return dom;
      }
    }
  
    // DOM 만들기
    var container = DOM.container(id);
    var slider = DOM.slider(container);
    var temp = container.innerHTML;
    container.innerHTML = '';
    slider.innerHTML = temp;
    container.appendChild(slider);
    var items = document.querySelector('#'+ id + ' .slider').children;
    for(var i=0; i<items.length; i++){
      items[i].style.float = 'left';
      items[i].style.height = '100%';
      items[i].style.width = (sliderItemWidth-spacing)+ 'px';
      items[i].style['margin-right'] = spacing+'px'; // 간격
    }
  
    // 화면 사이즈 수정시 발생하는 이벤트
    function resize(){
      left = 0;
      document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
  
      var innerWidth = window.innerWidth;
      if(innerWidth >= 1000){
        setDisplayCount(_web);
      }else if(innerWidth < 1000 && innerWidth >= 768) {
        setDisplayCount(_tab);
      }else if (innerWidth < 768) {
        setDisplayCount(_mobile);
      }
      
      if(display === 1){
        spacing = 0;
        var items = document.querySelector('#'+ id + ' .slider').children;
        for(var i=0; i<items.length; i++){
          items[i].style.width = sliderItemWidth + 'px';
          items[i].style['margin-right'] = 0 + 'px'; // 간격
        }
      }
    }
  
    // 디스플레이 갯수 설정 함수
    function setDisplayCount(count) {
      display = count;
  
      containerWidth = container.offsetWidth + spacing;
      sliderItemWidth = containerWidth / display;
  
      document.querySelector('#'+ id + ' .slider').style.width = totalCount * sliderItemWidth + spacing * totalCount + 'px';
      var items = document.querySelector('#'+ id + ' .slider').children;
      for(var i=0; i<items.length; i++){
        items[i].style.width = (sliderItemWidth-spacing)+ 'px';
      }
    }
  
    // 반응형 디스플레이 갯수 조절
    var isResponsive = _tab != undefined && _mobile != undefined;
    if(isResponsive){
      window.onresize = resize;
    }
    resize();
  
  
    return {
      setDisplayCount: setDisplayCount,
      move: function(index){
        left = (-1) * sliderItemWidth * index;
        document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
      },
      prev: function(){
        left += sliderItemWidth;
        var limit = 0;
        if(left > limit){
          left = limit;
        }
        document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
      },
      next: function(){
        left -= sliderItemWidth;
        var limit = (-1) * sliderItemWidth * (totalCount - display);
        if(left < limit){
          left = limit;
        }
        document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
      },
      auto: function(){
        clearInterval(interval);
        interval = setInterval(function(){
          left -= sliderItemWidth;
          var limit = (-1) * sliderItemWidth * (totalCount - display);
          if(left < limit){
            left = 0;
          }
          document.querySelector('#'+ id + ' .slider').style.left = left + 'px';
        }, 2000)
      },
      stop: function(){
        clearInterval(interval);
      }
    }
  }
  
  var slider = new Slider('slider', 4, 3, 1, 20);
  slider.auto();

  // const {calc, css, physics, pointer, transform, tween, value} = window.popmotion;
      // // const {applyOffset, clamp, pipe} = transform;

      // function getTotalItemsWidth(items) {
      //   const {left} = items[0].getBoundingClientRect();
      //   const {right} = items[items.length - 1].getBoundingClientRect();
      //   return right - left;
      // }

      // function angleIsVertical(angle) {
      //   const isUp = angle <= -90 + 45 && angle >= -90 - 45;
      //   const isDown = angle <= 90 + 45 && angle >= 90 - 45;

      //   return isUp || isDown;
      // }

      // function carousel(container) {
      //   // Select DOM
      //   const slider = container.querySelector('.slider');
      //   const items = slider.querySelectorAll('.item');
      //   const nextButton = container.querySelector('.next');
      //   const prevButton = container.querySelector('.prev');
      //   const progressBar = container.querySelector('.progress-bar');

      //   // Calculate slider measurements
      //   const sliderVisibleWidth = slider.offsetWidth;
      //   const totalItemsWidth = getTotalItemsWidth(items);

      //   // Set min/max scroll offsets
      //   const maxXOffset = 0;
      //   const minXOffset = -(totalItemsWidth - sliderVisibleWidth);
      //   const clampXOffset = clamp(minXOffset, maxXOffset);

      //   // Create renderers
      //   const sliderRenderer = css(slider);
      //   const progressBarRenderer = css(progressBar);

      //   function updateProgressBar(x) {
      //     const progress = calc.getProgressFromValue(maxXOffset, minXOffset, x);
      //     progressBarRenderer.set('scaleX', progress);
      //   }

      //   const sliderX = value(0, x => {
      //     updateProgressBar(x);
      //     sliderRenderer.set('x', x);
      //   });

      //   let action;
      //   let touchOrigin = {x: 0, y: 0};

      //   // Touch event handling
      //   function stopTouchScroll() {
      //     document.removeEventListener('touchend', stopTouchScroll);
      //     if (action) action.stop();
      //     action = physics({
      //       from: sliderX.get(),
      //       velocity: sliderX.getVelocity(),
      //       friction: 0.2,
      //     })
      //       .output(pipe(clampXOffset, v => sliderX.set(v)))
      //       .start();
      //   }

      //   function determineDragDirection(e) {
      //     const touch = e.changedTouches[0];
      //     const touchLocation = {
      //       x: touch.pageX,
      //       y: touch.pageY,
      //     };
      //     const distance = calc.distance(touchOrigin, touchLocation);

      //     if (!distance) return;
      //     document.removeEventListener('touchmove', determineDragDirection);

      //     const angle = calc.angle(touchOrigin, touchLocation);
      //     if (angleIsVertical(angle)) return;

      //     if (action) action.stop();
      //     action = pointer(e).start();

      //     action.output(
      //       pipe(
      //         ({x}) => x,
      //         applyOffset(action.x.get(), sliderX.get()),
      //         clampXOffset,
      //         v => sliderX.set(v)
      //       )
      //     );
      //   }

      //   function startTouchScroll(e) {
      //     document.addEventListener('touchend', stopTouchScroll);
      //     if (action) action.stop();
      //     const touch = e.touches[0];
      //     touchOrigin = {
      //       x: touch.pageX,
      //       y: touch.pageY,
      //     };
      //     document.addEventListener('touchmove', determineDragDirection);
      //   }

      //   function onWheel(e) {
      //     const angle = calc.angle({
      //       x: e.deltaX,
      //       y: e.deltaY,
      //     });

      //     if (angleIsVertical(angle)) return;

      //     e.stopPropagation();
      //     e.preventDefault();

      //     const newX = clampXOffset(
      //       sliderX.get() + -e.deltaX // (e.deltaX * factor) can speed or slow scroll
      //     );
      //     sliderX.set(newX);
      //   }

      //   function findClosestItemOffset(targetX, delta) {
      //     const {right, width} = items[0].getBoundingClientRect();
      //     const spacing = items[1].getBoundingClientRect().left - right;
      //     const totalItems = Math.abs(targetX) / (width + spacing);
      //     const totalCompleteItems = delta === 1 ? Math.floor(totalItems) : Math.ceil(totalItems);

      //     return 0 - totalCompleteItems * (width + spacing);
      //   }

      //   function goto(delta) {
      //     const currentX = sliderX.get();
      //     let targetX = currentX + -sliderVisibleWidth * delta;
      //     const clampedX = clampXOffset(targetX);

      //     targetX = targetX === clampedX ? findClosestItemOffset(targetX, delta) : clampedX;

      //     if (action) action.stop();
      //     action = tween({
      //       from: currentX,
      //       to: targetX,
      //       onUpdate: sliderX,
      //     }).start();
      //   }

      //   const gotoNext = () => goto(1);
      //   const gotoPrev = () => goto(-1);

      //   container.addEventListener('touchstart', startTouchScroll);
      //   container.addEventListener('wheel', onWheel);
      //   nextButton.addEventListener('click', gotoNext);
      //   prevButton.addEventListener('click', gotoPrev);
      // }

      // carousel(document.querySelector('.todaydeal_inner'));