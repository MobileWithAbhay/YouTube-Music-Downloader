var YouTube = document.querySelector('.YouTube');
var idList = document.querySelector('.idList');
var hidden = document.querySelector('.hidden');
function Get(){
     if(YouTube.value.indexOf("https://youtu.be/") != -1){
       var YTurl = YouTube.value.replace("https://youtu.be/","");
       document.querySelector('.idList').value = YTurl;
       Music();
     }
     else if(YouTube.value.indexOf("https://www.youtube.com/watch?v=") != -1){
        var YTurl = YouTube.value.replace("https://www.youtube.com/watch?v=","");
        document.querySelector('.idList').value = YTurl;
        Music();
      }
     else if(YouTube.value.indexOf("https://youtube.com/shorts/") != -1){
       var YTurl = YouTube.value.replace("https://youtube.com/shorts/","");
       var YTurl2 = YTurl.replace("?feature=share","");
       document.querySelector('.idList').value = YTurl2;
       Music();
     }
     else{
       alert('Enter Your YouTube Url...');
     }
}
function Music() {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '2b929025ddmshd3302ab633a818cp1ab4cdjsne14ca95e2a8d',
          'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
      };
      var urlLink = 'https://youtube-mp36.p.rapidapi.com/dl?id='+idList.value;
      fetch(urlLink, options).then((response)=>{
           return response.json();
       }).then((data)=>{
         console.log(data);
         hidden.classList.add('active');
         document.querySelector('.form-control').value = data.link;
        }).catch(err => console.error(err));
}

var url = document.querySelector('.form-control');
function download(){
      const anchor = document.createElement("a");
      anchor.href =  url.value;
      anchor.download = 'MWC.mp3';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
 }
