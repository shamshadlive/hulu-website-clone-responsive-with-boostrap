// data

var movie_cat_data = [
    { cat_name : "Past & Current Seasons", cat_img : "./images/movie-img-1.webp" ,main_catg:"TV Shows"},
    { cat_name : "New & Classic", cat_img : "./images/movie-img-2.webp" ,main_catg:"Movies"},
    { cat_name : "Groundbreaking", cat_img : "./images/movie-img-3.webp" ,main_catg:"Hulu Originals"},
    { cat_name : "Add-on", cat_img : "./images/movie-img-4.webp" ,main_catg:"Premiums"},
      ];


// load functuon load adata
window.onload = ()=>
{
movie_cat_data.map((each_catg)=>{
  loadContent(each_catg.cat_name,each_catg.cat_img,each_catg.main_catg)
  })
}

function loadContent(cat_name,cat_img,main_catg)
{
  document.getElementById("cat-items").innerHTML +=
  `<div class="col-xl-3 col-lg-3 col-6 cat-parent-div"  >
          <div class="cat-child-div"></div>
          <img class="cat-img"   src="${cat_img}" alt="${cat_name}" width="100%" height="100%" >

          <div  class="text-white cat-overlay-text" >
            <p>${cat_name}</p>
            <h3>${main_catg}</h3>
          </div>
        </div>`;  
}

//scroll to function 

function scrolltoId(id){
  var access = document.getElementById(id);
  access.scrollIntoView({behavior: 'smooth'}, true);
  }

//slider below

function ChangeContent(obj)
{
  var bg_change_element=document.getElementById('bg-change'); //get current clicked bg 
  var old_bg_name=bg_change_element.classList.item(0); //old baground name 

  bg_change_element.classList.remove(old_bg_name);
  bg_change_element.classList.add(obj.getAttribute('data-bgname'));


 var old_display_change_element = document.getElementById(old_bg_name);
     old_display_change_element.classList.remove('active');
 
  var display_change_element = document.getElementById(obj.getAttribute('data-bgname'));
      display_change_element.classList.add('active');
 
//transition of white bar
  var btn_group_start = document.getElementById('btn-bg-change-group').getBoundingClientRect().x; //fetch the parent div postion
  var element= document.getElementById(obj.getAttribute('id'));   //get the button 
  var element_start = element.getBoundingClientRect().left; //button start postion
  var element_width = element.getBoundingClientRect().width; //width of button

  var position = parseInt(element_start-btn_group_start)
  document.getElementById('white-bottom-bar').style.cssText +=`transform: translateX(${position}px);width:${element_width}px`; //changing the whitebar


}

