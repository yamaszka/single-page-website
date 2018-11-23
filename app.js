// close the open menu when clicked
// close the open menu with close button
// open open menu with efects

//MODEL//
var projects = [
{
  photo: "img/thumb.png",
  title: "Macankumbang",
  description: "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
{
  photo: "img/thumb.png",
  title: "Macankumbang2",
  description: "2This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
{
  photo: "img/thumb.png",
  title: "Macankumbang3",
  description: "3This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
{
  photo: "img/thumb.png",
  title: "Macankumbang4",
  description: "4This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
{
  photo: "img/thumb.png",
  title: "Macankumbang5",
  description: "5This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
{
  photo: "img/thumb.png",
  title: "Macankumbang6",
  description: "6This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
{
  photo: "img/thumb.png",
  title: "Macankumbang7",
  description: "7This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
{
  photo: "img/thumb.png",
  title: "Macankumbang8",
  description: "8This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
{
  photo: "img/thumb.png",
  title: "Macankumbang9",
  description: "9This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat"
},
];

//MODEL//

//LARRY//
function get_projects() {
  return projects;
}
//LARRY//

//VIEW//
function render_projects() {
  var array = get_projects();

    for (var i=0; i<6; i++) {
      var div_desc = document.createElement("div");
        div_desc.classList.add("project_desc");
      var img =  document.createElement("img");
        img.classList.add("project_foto");
        img.setAttribute("src", array[i].photo);
      var h4 =  document.createElement("h3");
      var p =  document.createElement("p");
      var eye_img =  document.createElement("img");
        eye_img.setAttribute("src","img/eye.png");
        h4.textContent = array[i].title;
        p.textContent = array[i].description;
        div_desc.append(img);
        div_desc.append(h4);
        div_desc.append(p);
        div_desc.append(eye_img);
        $('.project_content').append(div_desc);
    }
}
render_projects();
console.log(projects[5].title);

$('#menu').click(function() {
  console.log('basia');
    $('#open_menu').css("display", "block");
});

$('#open_menu').click(function() {
  $('#open_menu').toggle();
});

// $('.project_desc').click(function() {
//   $('.project_desc').addClass("project_foto");
//
// });



//VIEW//
