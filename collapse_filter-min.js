define(["jquery","fab/list-plugin"],function(n,m){return new Class({Extends:m,initialize:function(a){var b=this;a.iconContract="<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-dash' fill='currentColor'><path fill-rule='evenodd' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z'/></svg>";a.iconExpand="<svg width='1em' height='1em' viewBox='0 0 16 16' class='bi bi-chevron-compact-down' fill='currentColor'><path fill-rule='evenodd' d='M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z'/></svg>";
this.parent(a);if(6==a.sideFilters){var g=document.querySelectorAll("tr[data-filter-row^="+a.table+"]"),f=document.querySelector(".clearFilters"),l=this;g.forEach(function(d){var c=d.children[0];b.createIcon(c);c=d.nextElementSibling;c=c.children[0];c.style.display=0==a["default"]?"none":"block";d.addEventListener("click",function(){var k=this.querySelector(".icon"),h=this.nextElementSibling;h=h.children[0];l.addActionClick(k,h,h.style.display)})});if(1==a.collapseAll){btnClearFilter=document.querySelector("#clear-filter-button");
null!=btnClearFilter&&(f.style.width="85%",btnClearFilter.style.padding="5px 30px",btnClearFilter.style.width="");f=f.parentNode;this.createIcon(f);var e=f.querySelector(".icon");null!=btnClearFilter&&(e.style.width="40px",e.style.textAlign="right");f.addEventListener("click",function(){var d=null;"contrair"==e.title?(d="block",e.title="expandir",e.innerHTML=a.iconExpand):(d="none",e.title="contrair",e.innerHTML=a.iconContract);g.forEach(function(c){var k=c.querySelector(".icon");l.addActionClick(k,
c.nextElementSibling.children[0],d)})})}}},createIcon:function(a){var b=document.createElement("span");b.innerHTML=0==this.options["default"]?this.options.iconExpand:this.options.iconContract;b.setAttribute("class","icon");b.setAttribute("title",0==this.options["default"]?"expandir":"contrair");b.setAttribute("style","align-self:center");a.appendChild(b);a.style.display="flex";a.style.justifyContent="space-between"},addActionClick:function(a,b,g){"block"===g?(a.title="expandir",a.innerHTML=this.options.iconExpand,
b.style.display="none"):(a.title="contrair",a.innerHTML=this.options.iconContract,b.style.display="block")}})});