Global.initMasonry=()=>{var e=document.querySelector(".loading-placeholder"),n=document.querySelector("#masonry-container");if(e&&n){e.style.display="block",n.style.display="none";for(var t=document.querySelectorAll("#masonry-container .masonry-item img"),o=0,l=0;l<t.length;l++){var r=t[l];r.complete?o++:r.addEventListener("load",function(){++o===t.length&&a()})}o===t.length&&a()}function a(){e.style.display="none",n.style.display="block",new MiniMasonry({container:n,gutterX:10,gutterY:5,surroundingGutter:!1}).layout()}};