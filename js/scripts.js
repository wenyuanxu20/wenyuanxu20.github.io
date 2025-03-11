/*!
    Description: This file contains all the scripts associated with the single-page
    portfolio website.
*/

(function($) {
  // Show current year
  $('#current-year').text(new Date().getFullYear())

  // Remove no-js class
  $('html').removeClass('no-js')

  // Direct jump to section when nav is clicked
  $('header a').click(function (e) {
    // Treat as normal link if no-scroll class
    if ($(this).hasClass('no-scroll')) return

    e.preventDefault()
    var heading = $(this).attr('href')
    if (heading.charAt(0) === '#') {
      var targetElement = document.querySelector(heading)
      if (targetElement) {
        targetElement.scrollIntoView()
      }
    }

    // Hide the menu once clicked if mobile
    if ($('header').hasClass('active')) {
      $('header, body').removeClass('active')
    }
  })

  // Direct jump to top
  $('#to-top').click(function () {
    window.scrollTo(0, 0)
  })

  // Direct jump to first element
  $('#lead-down span').click(function () {
    var targetElement = document.querySelector('#lead').nextElementSibling
    if (targetElement) {
      targetElement.scrollIntoView()
    }
  })

  // Create timeline
  $('#experience-timeline').each(function () {
    $this = $(this) // Store reference to this
    $userContent = $this.children('div') // user content

    // Create each timeline block
    $userContent.each(function () {
      $(this)
        .addClass('vtimeline-content')
        .wrap(
          '<div class="vtimeline-point"><div class="vtimeline-block"></div></div>'
        )
    })

    // Add icons to each block
    $this.find('.vtimeline-point').each(function () {
      $(this).prepend(
        '<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>'
      )
    })

    // Add dates to the timeline if exists
    $this.find('.vtimeline-content').each(function () {
      var date = $(this).data('date')
      if (date) {
        // Prepend if exists
        $(this)
          .parent()
          .prepend('<span class="vtimeline-date">' + date + '</span>')
      }
    })
  })

  // Open mobile menu
  $('#mobile-menu-open').click(function () {
    $('header, body').addClass('active')
  })

  // Close mobile menu
  $('#mobile-menu-close').click(function () {
    $('header, body').removeClass('active')
  })

  // Load additional projects
  $('#view-more-projects').click(function (e) {
    e.preventDefault()
    $(this).fadeOut(300, function () {
      $('#more-projects').fadeIn(300)
    })
  })

  // projecct image viewer
  $('.project-image .image').click(function () {
    $('#full-image').attr('src', $(this).attr('alt'))
    $('#image-viewer').show()
  })

  $('#image-viewer .close').click(function () {
    $('#image-viewer').hide()
  })

  // projecct video viewer
  $('.project-video .image').click(function () {
    console.log('click')
    $('#full-video').attr('src', $(this).attr('alt'))
    $('#video-viewer').show()
  })

  $('#video-viewer .close').click(function () {
    $('#video-viewer').hide()
  })

  // projecct glb viewer
  $('.project-glb .image').click(function () {
    console.log('click')
    $('#full-glb').attr('src', $(this).attr('alt'))
    $('#glb-viewer').show()
  })

  $('#glb-viewer .close').click(function () {
    $('#glb-viewer').hide()
  })
  
})(jQuery);
