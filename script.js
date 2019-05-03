
window.onload=function() {
/*  var onClickPaintingOne = document.getElementById('s16'); */
  var src0 = document.getElementById('s16').getAttribute('src');
  window.localStorage.setItem('CurrentSrc', src0);
/*  onClickPaintingOne.addEventListener('click', CollectTheme); */
/*  onClickPaintingOne.addEventListener('click', CollectId); */
}

/*function CollectTheme() {
  console.log("function working");
  let CurrentTheme = document.getElementsByClassName('still-lifepainting');
  window.localStorage.setItem('CurrentTheme', CurrentTheme);
} */
/*function CollectId() {
  console.log("function working");
  let CurrentId = document.getElementById('s16');
  window.localStorage.setItem('CurrentId', CurrentId);
}*/
/* TODO: Make it so that the src of the 17th image in paintings.html is the same as the src of the id of the clicked image on the home page.
You can do this by localstorage hopefully, try asking discord */
