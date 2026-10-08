(()=>{
 const frame=document.getElementById('stage'),dialog=document.getElementById('displaySettings'),select=document.getElementById('resolution');
 const options=new Set([...select.options].map(o=>o.value)),key='peace-marriage-resolution-v1';
 let chosen=innerWidth<innerHeight?'390x844':'1280x720';
 try{const saved=localStorage.getItem(key);if(options.has(saved))chosen=saved;}catch{}
 function fit(){const [w,h]=chosen.split('x').map(Number),scale=Math.min(innerWidth/w,innerHeight/h);frame.style.width=w+'px';frame.style.height=h+'px';frame.style.transform=`translate(-50%,-50%) scale(${scale})`;frame.style.transformOrigin='center';frame.dataset.resolution=chosen;}
 function open(){select.value=chosen;document.getElementById('displayStatus').textContent='현재: '+chosen.replace('x',' × ');if(!dialog.open)dialog.showModal();}
 addEventListener('resize',fit);addEventListener('message',event=>{if(event.source===frame.contentWindow&&event.data?.type==='marriage-settings')open();});
 document.getElementById('cancel').onclick=()=>dialog.close();
 document.getElementById('apply').onclick=()=>{chosen=select.value;try{localStorage.setItem(key,chosen);}catch{}fit();dialog.close();};
 fit();
})();
