window.addEventListener('load', function () {
  const shareBtn = document.getElementById("share-btn")
  var closed = true;

  shareBtn.addEventListener('click', function () {
    if (window.innerWidth > 900) {
      var shareContainer = document.getElementById("desktop-share")
      if (closed) {
        shareContainer.classList.remove("hide-element");
        shareContainer.classList.add("show-element");
        closed = !closed
      }
      else {
        shareContainer.classList.remove("show-element");
        shareContainer.classList.add("hide-element");
        closed = !closed
      }
    }

    if (window.innerWidth < 900) {
      var shareContainer = document.getElementById("mobile-share")
      var unshareBtn = document.getElementById("share-btn-mob")

      if (closed) {
        shareContainer.classList.remove("hide-element");
        shareContainer.classList.add("show-element");
        closed = !closed
      }

      if (unshareBtn && !closed) {
        unshareBtn.addEventListener('click', function() {
          shareContainer.classList.remove("show-element");
          shareContainer.classList.add("hide-element");
        })
        closed = !closed
      }
    }
  })
})