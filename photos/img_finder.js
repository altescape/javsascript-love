<script src="https://code.jquery.com/jquery-2.1.3.min.js"></script>
<script>
/* Finds all imgs in a container, removes anything not an img, adds them to an array
   then surrounds them with a tags.
*/

var IMG_FINDER = (function () {
  var container;
  
  var set_container = function (container) {
    container = this.container;
  };
  
  
  
  return {
    set_container: set_container;
  }
}());

$(window).load(function() {
  IMG_FINDER.set_container("container");
});
</script>

<div class="container">
  <img src="http://gravatar.com/avatar/48f04652e808ce45aa48f4da34798459/?s=50&d=http://avatars.fyre.co/a/anon/50.jpg">
  <img src="https://lh3.googleusercontent.com/-ysevC6Cv5-0/AAAAAAAAAAI/AAAAAAAAADo/jBZK4objO58/photo.jpg?sz=50">
  <img src="https://lh3.googleusercontent.com/--5G6UL4YRlo/AAAAAAAAAAI/AAAAAAAAAB0/i8IvTWA1mkM/photo.jpg?sz=50">
  <div>
    <img src="https://lh3.googleusercontent.com/--5G6UL4YRlo/AAAAAAAAAAI/AAAAAAAAAB0/i8IvTWA1mkM/photo.jpg?sz=50">
  </div>
  <a href="#">
    <img src="https://lh3.googleusercontent.com/--5G6UL4YRlo/AAAAAAAAAAI/AAAAAAAAAB0/i8IvTWA1mkM/photo.jpg?sz=50">
  </a>
  <img src="http://gravatar.com/avatar/48f04652e808ce45aa48f4da34798459/?s=50&d=http://avatars.fyre.co/a/anon/50.jpg">
  <img src="https://lh3.googleusercontent.com/-ysevC6Cv5-0/AAAAAAAAAAI/AAAAAAAAADo/jBZK4objO58/photo.jpg?sz=50">
  <img src="https://lh3.googleusercontent.com/--5G6UL4YRlo/AAAAAAAAAAI/AAAAAAAAAB0/i8IvTWA1mkM/photo.jpg?sz=50">
  <img src="http://gravatar.com/avatar/48f04652e808ce45aa48f4da34798459/?s=50&d=http://avatars.fyre.co/a/anon/50.jpg">
  <img src="https://lh3.googleusercontent.com/-ysevC6Cv5-0/AAAAAAAAAAI/AAAAAAAAADo/jBZK4objO58/photo.jpg?sz=50">
  <img src="https://lh3.googleusercontent.com/--5G6UL4YRlo/AAAAAAAAAAI/AAAAAAAAAB0/i8IvTWA1mkM/photo.jpg?sz=50">
</div>
