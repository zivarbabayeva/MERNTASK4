
var btn=document.querySelector('#add');
var ul=document.getElementById('list');
btn.onclick=function(){
    if (document.querySelector('#input').value.length == 0) {
        alert("Please Enter a list")
    }
    else {
        var list='';
        list= document.querySelector('#list').innerHTML += `
          <ul id="list">
          <li>
          <span>${document.querySelector('#input').value}</span>
              
              <button class="delete">
                  <i class="far fa-trash-alt"></i>
              </button>
          </li>
          </ul>
      `;
      document.getElementById('list').innerHTML=list
      var list = document.querySelectorAll(".delete");
      for (var i = 0; i < list.length; i++) {
          list[i].onclick = function () {
              this.parentNode.remove();
          }
      }
}}
