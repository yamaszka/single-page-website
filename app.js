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

var opinions = [
  {
    number: 1,
    name: "John Doe",
    photo: "img/img-customer.png",
    opinion: "This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
  },
  {
    number: 2,
    name: "John Doe2",
    photo: "img/img-customer.png",
    opinion: "2This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
  },
  {
    number: 3,
    name: "John Doe3",
    photo: "img/img-customer.png",
    opinion: "3This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
  },
  {
    number: 4,
    name: "John Doe4",
    photo: "img/img-customer.png",
    opinion: "4This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris."
  },
];

//MODEL//

//LARRY//
function get_projects() {
  return projects;
}

function get_opinions() {
  return opinions;
}
//LARRY//

//VIEW//
function htmlForProjects(i) {
  var array = get_projects();
  var div_desc = document.createElement("div");
    div_desc.classList.add("project_desc");
  var img =  document.createElement("img");
    img.classList.add("project_foto");
    // console.log(img);
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

function render_projects() {
    for (var i=0; i<6; i++) {
      htmlForProjects(i)
    }
}

function render_all_projects() {
  var array = get_projects();
    for (var i=6; i<array.length; i++) {
      htmlForProjects(i)
    }
}

render_projects();

$('#menu').click(function() {
    $('#open_menu').css("display", "block");
});

$('#open_menu').click(function() {
  $('#open_menu').toggle();
});

$('.efect').click(function() {
  render_all_projects();
  // $('.browse').innerHTML = "";
  var x = $('.browse').html("");
  // console.log(x);
});


function render_opinions() {
  var a = 1;
  var array = get_opinions();
  setInterval(function(){
          if (a==4){
            a=0;
          }
      $('.person_img').attr("src",array[a].photo);
      $('.opinion_text').html(array[a].opinion+"</br></br><span class='sign'><b>"+array[a].name+"</b></span>");
      //clear elipses
      $('.ring').each(function() {
        $(this).attr("src", "img/Ellipse1.png");
      });
      //add dark elipse
      $('.'+array[a].number).attr("src", "img/Ellipse3.png");
      a++;
  }, 4000);
}

render_opinions();

//VIEW//
