// The left and right arrow keys go to the previous and next page, as in Grav Open Publishing Space – hibbittsdesign.org
// Code generated/assisted by Anthropic Claude AI
(function () {
  function isTyping(element) {
    if (element.isContentEditable) {
      return true;
    }
    return element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT';
  }

  // in a wide table or code block, the arrow keys scroll it sideways instead
  function isInSidewaysScroller(element) {
    while (element instanceof Element && element !== document.body) {
      var overflowX = getComputedStyle(element).overflowX;
      var scrollsSideways = overflowX === 'auto' || overflowX === 'scroll';
      if (scrollsSideways && element.scrollWidth > element.clientWidth) {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  }

  document.addEventListener('keydown', function (event) {
    var isLeft = event.key === 'ArrowLeft';
    var isRight = event.key === 'ArrowRight';
    if (!isLeft && !isRight) {
      return;
    }
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return;
    }
    if (isTyping(event.target) || isInSidewaysScroller(event.target)) {
      return;
    }
    var zoomedImageIsOpen = document.querySelector('.medium-zoom--opened') !== null;
    if (zoomedImageIsOpen) {
      return;
    }

    var link;
    if (isLeft) {
      link = document.querySelector('.pagination-item--previous a');
    } else {
      link = document.querySelector('.pagination-item--next a');
    }
    if (link) {
      link.click();
    }
  });
})();
