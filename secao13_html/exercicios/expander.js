var expander = document.querySelectorAll('.expand');

for (var i = 0; i < expander.length; ++i) {
  expander[i].onclick = function() {
      console.log (expander[i])
    var ul = this.parentElement.querySelectorAll('ul')[0];
    
    if (ul.offsetHeight > 0) {
      ul.style.display = 'none';
    } else {
      ul.style.display = 'block';
    }
  }
}