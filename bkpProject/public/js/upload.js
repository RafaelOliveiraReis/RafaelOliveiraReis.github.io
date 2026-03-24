const fab=document.getElementById('fab');
const input=document.getElementById('fileInput');
fab.onclick=()=>input.click();
input.onchange=()=>{
 const fd=new FormData();
 [...input.files].forEach(f=>fd.append('media[]',f));
 fd.append('event',new URLSearchParams(location.search).get('event'));
 fetch('../backend/upload.php',{method:'POST',body:fd}).then(()=>location.reload());
};