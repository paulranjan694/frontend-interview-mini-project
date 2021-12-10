const tree = document.getElementById('tree');

tree.addEventListener('click', function(e){
    e.target.children[0].classList.toggle("hide");
});