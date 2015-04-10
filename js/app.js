angular.module('busymind', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.value('slides', [
  {
    prompt: '<h1 class="app-name">Busymind</h1><p>Mindfulness for your busy life</p>',
    buttons: [{
      action: 'advanceSlide()',
      text: 'Start 1-minute Session',
      type: 'positive'
    }, {
      action: 'advanceSlide(6)',
      text: 'Start 5-minute Session',
      type: 'calm'
    }]
  },

  // 1-minute session
  {
    prompt: '<p>Slow down. Search your body for tension.</p><p>This could be at your shoulders, your back, or your mouth.</p><p>Release the tension let your body sink in to relaxation.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Relaxing',
      action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>Now focus on your breath.</p><p>As you breath, feel your chest expand and contract. Feel the air move in and out.</p><p><strong>Take four deep breaths, holding the button as you breath in, and releasing it as you breath out.</strong></p>',
    buttons: [{
      type: 'calm breath',
      text: 'I\'m Breathing',
      action: 'countThenAdvance(4)'
    }]
  },
  {
    prompt: '<p>Turn outward. Open your mind to the sounds around you.</p><p>What\'s the texture of the noise. Is it loud or quiet?</p><p><strong>Hold the button for 15 seconds while you listen to your world.</strong></p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Listening',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Look around you.</p><p>Find the colors and patterns hiding in plain sight.</p><p>Hold down the button as you look around.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Seeing',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>When ready, return to your day in your own time.</p>',
    buttons: [{
      type: 'calm',
      text: 'Conclude Session',
      action: 'restartSlides()'
    }]
  },

  // 4-minute session
  {
    prompt: '<p>Start by focusing on your breath.</p><p>As you breath, feel your chest expand and contract. Feel the air move in and out.</p><p><strong>Take five deep breaths, holding the button as you breath in, and releasing it as you breath out.</strong></p>',
    buttons: [{
      type: 'calm breath',
      text: 'I\'m Breathing',
      action: 'countThenAdvance(5)'
    }]
  },
  {
    prompt: '<p>Now sense your heart beating in your chest.</p><p>Feel its steady rhythm.</p><p>Anticipate each beat, trying to slow the cadence of your heart.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Slowing Down',
      action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>Search your body for tension.</p><p>This could be at your shoulders, back, or even pursed lips.</p><p>Be aware of this tension.</p><p>Choose a tense spot. Tighten it, then relax fully to relieve the stress.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m relaxing',
      action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>Find where on your body feels most relaxed right now.</p><p>Focus on that area, relaxing as deeply as you can.</p><p>Sink in to the full weight of your relaxation, letting gravity pull down.<p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m letting go',
      action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>Turn outward. Open your mind to the sounds around you.</p><p>What\'s the texture of the noise. Is it loud or quiet?</p><p><strong>Hold the button for 15 seconds while you listen to your world.</strong></p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Listening',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Look around you.</p><p>Notice what colors and patterns are hiding in plain sight.</p><p>Hold the button for another 15 seconds while you look closer.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Seeing',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Draw back inward.</p><p>Observe your internal dialogue.</p><p>Let your thoughts rise up.</p><p>Take 15 seconds to let your mind wander.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m wandering',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Return to this moment. Did you notice any fear or anxiety in your thoughts?</p>',
    buttons: [{
      type: 'calm',
      text: 'Yes',
      action: 'advanceSlide()'
    }, {
      type: 'positive',
      text: 'No',
      action: 'advanceSlide(3)'
    }]
  },
  {
    prompt: '<p>Your emotions are neither good nor bad, they simply are.</p><p>Think of how you would objectively describe the emotion to someone.</p><p>Hold for 15 seconds as you talk it out.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Explaining',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Having observed your emotion non-judgementally, can you transform it?</p><p>Can you radically accept it?</p><p>Don\'t worry, you don\'t have to have find an answer right now. Just process.</p><p>Hold the button for 15 seconds while you think.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Thinking',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Focus on your breathing once more.</p><p>Draw in five deep breaths.</p><p>Hold the button while breathing in, and release it as you breath out.</p>',
    buttons: [{
      type: 'calm breath',
      text: 'I\'m Breathing',
      action: 'countThenAdvance(5)'
    }]
  },
  {
    prompt: '<p>Rewind your day. What has brought you happiness?</p><p>Can you find that happiness again?</p><p>Hold the button for 15 seconds while you consider it.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Finding Happiness',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Happiness can also bring fear.</p><p>As humans, we accept both the strength and the weakness as eqaul parts.</p><p>Did your happiness stir any fear or anxiety?</p>',
    buttons: [{
      type: 'calm',
      text: 'Yes',
      action: 'advanceSlide()'
    }, {
      type: 'positive',
      text: 'No',
      action: 'advanceSlide(2)'
    }]
  },
  {
    prompt: '<p>Think about those fears and play them out.</p><p>Will they truly prevent you from obtaining your happiness and aspirations?</p><p>Hold the button for 15 seconds and unfold your anxiety.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Accepting Fear',
      hold: 'waitThenAdvance(15)',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Almost done. Focus on your breathing one last time.</p><p>Press the button down, take one deep breath, let go and return to the world.</p>',
    buttons: [{
      type: 'calm breath',
      text: 'I am Complete',
      action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>This is you, alive and well.</p><p>When ready, return to your day in your own time.</p>',
    buttons: [{
      type: 'calm breath',
      text: 'Conclude Session',
      action: 'restartSlides()'
    }]
  }
])

.controller('busymindCtrl', function($rootScope, $scope, $interval, $cordovaVibration, $ionicPlatform, slides, $timeout) {
  var waiter;
  $scope.activeSlide = 0;
  $scope.slides = slides;

  $scope.advanceSlide = function (distance) {
    if (isNaN(distance)) {
      $scope.activeSlide++;
    } else {
      $scope.activeSlide += distance;
    }
  };

  $scope.restartSlides = function () {
    $scope.activeSlide = 0;
    $scope.count = 0;
    $scope.countTotal = 0;
    $scope.waiting = false;
    seconds.set(0);
    seconds.setText('');
  };

  $scope.count = 0;
  $scope.countTotal = 0;

  var line = new ProgressBar.Line('#count-bar', {
    color: '#3767A8',
    trailColor: '#9DCAE5',
    duration: 700,
    easing: 'easeOut'
  });

  $scope.countThenAdvance = function (total) {
    $scope.countTotal = total;
    $scope.count++;

    var percent = $scope.count / $scope.countTotal;
    line.animate(percent);

    if ($scope.count === total) {
      $scope.advanceSlide();
      $timeout(function () {
      $scope.countTotal = 0;
      $scope.count = 0;
      line.set(0);
      }, 250);
    }
  };

  $scope.waiting = false;
  var seconds = new ProgressBar.Circle('#wait-clock', {
      color: '#3767A8',
      trailColor: '#9DCAE5',
      strokeWidth: 2
  });

  $scope.waitThenAdvance = function (duration, distance) {
    $scope.waiting = true;

    // $scope.count = 0;
    // FOR DEBUGGING PURPOSES
    // duration = 1;
    $scope.total = duration;

    waiter = $interval(function () {
      $scope.count += 1;

      seconds.animate($scope.count / duration, {
        duration: 200
      }, function() {
        seconds.setText($scope.count);
      });

      if ($scope.count > duration) {
        $scope.waiting = false;

        $scope.total = 0;
        $scope.count = 0;
        seconds.set(0);
        seconds.setText('');

        try {
          $cordovaVibration.vibrate(100);
        } catch (e) {
          // if vibration fails, no biggie
        }

        $interval.cancel(waiter);
        $scope.advanceSlide(distance);
      }
    }, 1000);
  };

  $scope.cancelAdvance = function () {
    $scope.waiting = false;
    $interval.cancel(waiter);
  };

  $ionicPlatform.ready(function() {
    $scope.$apply(function () {
      $scope.canRate = (typeof AppRate !== 'undefined');
    });
  });

  $scope.rateApp = function () {
    AppRate.preferences.storeAppURL.android = 'market://details?id=com.ionicframework.bescape550966';
    AppRate.promptForRating(true);
  };
});
