/* Anchor the light to the TV in the contained 1024 x 1536 background. */
(()=>{
 const root=document.querySelector('.game');
 function align(){
  const box=root.getBoundingClientRect(),scale=Math.min(box.width/1024,box.height/1536);
  root.style.setProperty('--tv-x',((box.width-1024*scale)/2+529*scale)+'px');
  root.style.setProperty('--tv-y',((box.height-1536*scale)/2+461*scale)+'px');
 }
 new ResizeObserver(align).observe(root);align();
})();
