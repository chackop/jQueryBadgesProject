$(function() {

  // your code will go here
  $.ajax({
      url: 'https://www.codeschool.com/users/1877870.json',
      dataType: 'jsonp',
      success: function(response) {
        // handle response
        // console.log('response -', response.courses.completed);
        addCourses(response.courses.completed)
      }
    });

    function addCourses(courses) {
      var $badges = $('#badges');
        courses.forEach(function(course) {

          var $course= $('<div />', {
            'class': 'course'
          }).appendTo($badges);

          $('<h3 />', {
            title: course.title
          }).appendTo($course);

          $('<img />', {
            src: course.badge
          }).appendTo($course);

          $('<a />', {
            'class': 'btn btn-primary',
            target: '_blank',
            href: course.url,
            text: 'See course'
          }).appendTo($course);
        });
      }


});
