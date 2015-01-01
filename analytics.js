DomReady.ready(function() {
  document.getElementById('get-code-top').onclick = function(e) {
    if (_gaq) {
      _gaq.push(['_trackEvent', 'Mybema Homepage', 'get code', 'Top code CTA']);
    }
    return true;
  }
});

DomReady.ready(function() {
  document.getElementById('try-mybema-top').onclick = function(e) {
    if (_gaq) {
      _gaq.push(['_trackEvent', 'Mybema Homepage', 'try community', 'Top community CTA']);
    }
    return true;
  }
});

DomReady.ready(function() {
  document.getElementById('get-code-bottom').onclick = function(e) {
    if (_gaq) {
      _gaq.push(['_trackEvent', 'Mybema Homepage', 'get code', 'Bottom code CTA']);
    }
    return true;
  }
});

DomReady.ready(function() {
  document.getElementById('try-mybema-bottom').onclick = function(e) {
    if (_gaq) {
      _gaq.push(['_trackEvent', 'Mybema Homepage', 'try community', 'Bottom community CTA']);
    }
    return true;
  }
});