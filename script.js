document.querySelectorAll('a[href^="#"]').forEach(anchor=>
    {
       anchor.addEventListener('click',function(e){
           e.preventDefault();
           const targetld=targetldthis.getAttributes('href').substring(1);
           const targetElemend=document.grtElementByld(targetld);
           if(targetElement){
               window.scrollTo({
                  top:
                  targetElement.offsetTop,
                  behaviour:'smooth'
                });
            }
       });   
    });