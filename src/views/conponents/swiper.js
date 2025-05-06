export default function swiper(container) {
  
  let initialX;
  let currentX;
  let movedX;

  const icon = document.createElement('i');
  icon.classList.add('far', 'fa-bookmark', 'bookmark');
  icon.style.position = "absolute";
  icon.style.top = "40%";
  icon.style.right = "8%";
  icon.style.color = "white";

  icon.addEventListener('click', function () {
    // Toggle between regular and solid style
    if (icon.classList.contains('far')) {
      icon.classList.remove('far');
      icon.classList.add('fas'); // 'fas' = solid/bookmarked
    } else {
      icon.classList.remove('fas');
      // icon.classList.add('far'); // back to unbookmarked
    }
  });

  container.addEventListener('pointerdown', startTouch);
  container.addEventListener('pointermove', moveTouch);
  container.addEventListener('pointerup', endTouch);

  function startTouch(event) {
    initialX = event.clientX;
    event.target.closest(".article__card").classList.remove("animate");    
  }

  function moveTouch(event) {
    currentX = event.clientX;
    movedX = currentX - initialX;
    event.target.closest(".article__content").style.backgroundColor = 'green';
    
    if (movedX < 0) {
      event.target.closest(".article__card").style.left = movedX + "px";
    }
    if ( movedX < -100) {
      event.target.closest(".article__content").append(icon);      
    }
  }

  function endTouch(event) {
    initialX = undefined;
    if (movedX < -130) {      
      event.target.closest(".article__content").removeChild(icon);
      event.target.closest(".article__card").classList.add("animate");
      event.target.closest(".article__card").style.left = "0px";
    }
  }
}