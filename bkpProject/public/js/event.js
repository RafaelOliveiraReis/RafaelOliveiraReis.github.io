const params=new URLSearchParams(location.search);
const eventId=params.get('event');
fetch('../backend/list-media.php?event='+eventId)
.then(r=>r.json())
.then(data=>{
 const g=document.getElementById('gallery');
 data.forEach(f=>{
  const d=document.createElement('div');
  d.className='media';
  d.innerHTML=f.type==='video'?`<video src="../${f.path}" muted autoplay loop></video>`:`<img src="../${f.path}">`;
  g.appendChild(d);
 });
});