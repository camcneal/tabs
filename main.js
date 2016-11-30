console.log(document.querySelector('.tabs'));
var tabs = document.querySelectorAll('.tabs');
var tabText = document.querySelector('.text');
var text = ['blue', 'red', 'green']
// console.log(document.querySelector(''));
var one = (document.getElementById('.1'))
console.log(tabs);
tabs.forEach(function(tab,i,arr){
  tab.addEventListener('click', function(e){
    location.hash = e.target.id;
    tabText.innerText = text[i];
    console.log(text[i]);
    console.log('clicked tab', e.target.id);
  });
})
