window.onload = () => {
  // Counter of videos on page
  let checkedVideosCounter = 0

  //When scroll is finished
  let setLinks = debounce(function (e) {
    // Get all videos
    let videoWrappers = document.querySelectorAll('.video-js video')
    // If new videos loaded
    if (videoWrappers.length > checkedVideosCounter) {
      // update new videos
      for (let i = checkedVideosCounter; i < videoWrappers.length; i++) {

        let a = `
        <a target="_blank" href="${videoWrappers[i].src}" download="download"
            style="position:absolute;z-index:99999;top:5px;left:10px">
            Download
            </a>
        `
        document.querySelector(`#${videoWrappers[i].id}`).insertAdjacentHTML("beforeBegin", a)
      }
      // Set counter equal to last length
      checkedVideosCounter = videoWrappers.length
    }

    return checkedVideosCounter

  }, 50);// Startin from scroll finished time mlsc
  // Add scroll listener
  window.addEventListener('scroll', setLinks)

  // Helper function for wait scroll finished
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this, args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
}