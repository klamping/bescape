// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('bescape', ['ionic', 'ngCordova'])

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
    prompt: '<h2>Bescape</h2><p>Mindfulness for your busy life</p>',
    buttons: [{
      action: 'advanceSlide()',
      text: 'Start your Session',
      type: 'calm'
    }]
  },
  // {
  //   prompt: '<p>If possible, silence your phone</p>',
  //   buttons: [{
  //     action: 'advanceSlide()',
  //     text: 'Okay',
  //     type: 'balanced'
  //   }]
  // },
  // {
  //   prompt: '<p>Are you in a calm environment?</p>',
  //   buttons: [{
  //       type: 'calm',
  //       text: 'Yes',
  //       action: 'advanceSlide(2)'
  //   }, {
  //       type: 'royal',
  //       text: 'No',
  //       action: 'advanceSlide()'
  //   }]
  // },
  // {
  //   prompt: '<p>That\'s okay. Life is hectic sometimes. It\'s why this app exists.</p><p>If possible, try going for a walk to avoid interruptions, or escape to a solitary room.</p>',
  //   buttons: [{
  //       type: 'royal',
  //       text: 'Okay',
  //       action: 'advanceSlide()'
  //   }]
  // },
  {
    prompt: '<p>Take a moment and feel your heart beat in your chest.</p><p>Is it racing or is it calm?</p>',
    buttons: [{
        type: 'assertive',
        text: 'It\'s Racing',
        action: 'advanceSlide()'
    }, {
        type: 'calm',
        text: 'It\'s Calm',
        action: 'advanceSlide(2)'
    }]
  },
  {
    prompt: '<p>Take a few extra moments to slow down.</p><p>Take a deep breath and settle in, letting your racing heart calm.</p>',
    buttons: [{
        type: 'positive',
        text: 'I\'m slowing down.',
        action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>Now focus on your breathing.</p><p>Draw in six deep breaths. Feel yourself breathing in and out.</p><p><strong>Hold the button as you breath in, and release it as you breath out.</strong></p>',
    buttons: [{
        type: 'calm breath',
        text: 'I\'m Breathing.',
        action: 'countThenAdvance(6)'
    }]
  },
  {
    prompt: '<p>Notice the places in your body where there is tension or pain.</p><p>This could be at your shoulders, core, back, or even your pursed lips.</p><p>Tighten completely, then let go of your tension with your awareness of it.</p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m feeling relaxed.',
        action: 'advanceSlide(2)'
    }, {
        type: 'assertive',
        text: 'I\'m still tense.',
        action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>That\'s okay. Life can be stressful. We don\'t always have time to relax.</p><p>Notice the places in your body where you do feel relaxed.</p><p>See if you can enhance your relaxation in those place.</p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m relaxing.',
        action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>Listen to the sounds around you. Are they loud, soft, or in-between?</p><p><strong>Hold the button for 15 seconds while you listen to your world.</strong></p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m Listening',
        hold: 'waitThenAdvance(15)',
        release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Look around you. Notice any interesting colors or patterns?</p><p>Hold the button for another 15 seconds while you experience the sights.</p><!-- <p>It will vibrate when complete.</p> -->',
    buttons: [{
        type: 'calm',
        text: 'I\'m Seeing',
        hold: 'waitThenAdvance(15)',
        release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Time for your thoughts.</p><p>As you listen, focus on being non-judgemental.</p><p>Each thought is neither good nor bad, it just is.</p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m non-judgemental.',
        action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>Take a moment on each thought and accept it.</p><p>After a moment, let it go and allow another to rise up.</p><p>Hold the button for each thought, releasing when your done. Do this five times.</p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m Processing.',
        action: 'countThenAdvance(5)'
    }]
  },
  {
    prompt: '<p>Did you have any fear or anxiety with these thoughts?</p>',
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
    prompt: '<p>What is your greatest fear about your thoughts?</p><p>Can you transform that fear?</p><p>Don\'t worry, you don\'t have to have find an answer right now. Just process.</p><p>Hold the button for 15 seconds while you think.</p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m Transforming',
        hold: 'waitThenAdvance(15)',
        release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Focus on your breathing once more.</p><p>Draw in six deep breaths.</p><p>Hold the button while breathing in, and release it as you breath out.</p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m Breathing.',
        action: 'countThenAdvance(6)'
    }]
  },
  {
    prompt: '<p>Think to yourself, what is your happiness today?</p><p>Once you find it, consider how you can maintain it.</p><p>Hold the button for 15 seconds while you think.</p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m Finding Happiness.',
        hold: 'waitThenAdvance(15)',
        release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Happiness can also bring fear.</p><p>As humans, we accept both the strength and the weakness as eqaul parts.</p><p>Did you have any fear or anxiety with these thoughts?</p>',
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
    prompt: '<p>Think about your fear. Will your fear prevent you from maintaining your happiness and aspirations?</p><p>Hold the button for 15 seconds and think.</p>',
    buttons: [{
        type: 'calm',
        text: 'I\'m Accepting Fear.',
        hold: 'waitThenAdvance(15)',
        release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Focus on your breathing one last time.</p><p>Take one big, deep breath and return to the world.</p><p>This is you, alive and breathing.</p>',
    buttons: [{
        type: 'balanced',
        text: 'I am Complete.',
        action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>If you can, take a few moments to write down any insights you\'ve had.</p><p>When ready, return to your day in your own time.</p>'
  }
])

.controller('bescapeCtrl', function($scope, $interval, $cordovaVibration, $ionicPlatform, slides, $timeout) {
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

    duration = 2;



    // $scope.count = 0;
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

        // $ionicPlatform.ready(function() {
        //   if ($cordovaVibration) {
        //     $cordovaVibration.vibrate(100);
        //   }
        // });

        $interval.cancel(waiter);
        $scope.advanceSlide(distance);
      }
    }, 1000);
  };

  $scope.cancelAdvance = function () {
    // seconds.set(0);
    // seconds.setText('');
    $scope.waiting = false;
    // $scope.count = 0;
    // $scope.total = 0;
    $interval.cancel(waiter);
  };
});
