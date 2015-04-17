/*jshint maxlen:false*/

angular.module('busymind')
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
    prompt: '<p>Now focus on your breath.</p><p>As you breath, feel your chest expand and contract. Feel the air move in and out.</p><p><strong>Take four deep breaths, holding down "I\'m Breathing" as you breath in, and releasing it as you breath out.</strong></p>',
    buttons: [{
      type: 'calm breath',
      text: 'I\'m Breathing',
      action: 'countThenAdvance(4)'
    }]
  },
  {
    prompt: '<p>Turn outward. Open your mind to the sounds around you.</p><p>What\'s the texture of the noise. Is it loud or quiet?</p><p><strong>Hold down "I\'m Listening" for 15 seconds while you listen to your world.</strong></p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Listening',
      hold: 'waitThenAdvance()',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Look around you.</p><p>Find the colors and patterns hiding in plain sight.</p><p>Hold down "I\'m Seeing" as you look around.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Seeing',
      hold: 'waitThenAdvance()',
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
    prompt: '<p>Start by focusing on your breath.</p><p>As you breath, feel your chest expand and contract. Feel the air move in and out.</p><p><strong>Take five deep breaths, holding down "I\'m Breathing" as you breath in, and releasing it as you breath out.</strong></p>',
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
    prompt: '<p>Turn outward. Open your mind to the sounds around you.</p><p>What\'s the texture of the noise. Is it loud or quiet?</p><p><strong>Hold down "I\'m Listening" for 15 seconds while you listen to your world.</strong></p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Listening',
      hold: 'waitThenAdvance()',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Look around you.</p><p>Notice what colors and patterns are hiding in plain sight.</p><p>Hold down "I\'m Seeing" for 15 seconds while you look closer.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Seeing',
      hold: 'waitThenAdvance()',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Draw back inward.</p><p>Observe your internal dialogue.</p><p>Let your thoughts rise up.</p><p>Take 15 seconds to let your mind wander.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m wandering',
      hold: 'waitThenAdvance()',
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
    prompt: '<p>Your emotions are neither good nor bad, they simply are.</p><p>Think of how you would objectively describe the emotion to someone.</p><p>Hold "I\'m Explaining" for 15 seconds as you talk it out.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Explaining',
      hold: 'waitThenAdvance()',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Having observed your emotion non-judgementally, can you transform it?</p><p>Can you radically accept it?</p><p>Don\'t worry, you don\'t have to have find an answer right now. Just process.</p><p>Hold down "I\'m Thinking" for 15 seconds while you think.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Thinking',
      hold: 'waitThenAdvance()',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Focus on your breathing once more.</p><p>Draw in five deep breaths.</p><p>Hold down "I\'m Breathing" while breathing in, and release it as you breath out.</p>',
    buttons: [{
      type: 'calm breath',
      text: 'I\'m Breathing',
      action: 'countThenAdvance(5)'
    }]
  },
  {
    prompt: '<p>Rewind your day. What has brought you happiness?</p><p>Can you find that happiness again?</p><p>Hold "I\'m Finding Happiness" for 15 seconds while you consider it.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Finding Happiness',
      hold: 'waitThenAdvance()',
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
    prompt: '<p>Think about those fears and play them out.</p><p>Will they truly prevent you from obtaining your happiness and aspirations?</p><p>Hold "I\'m Accepting Fear" for 15 seconds and unfold your anxiety.</p>',
    buttons: [{
      type: 'calm',
      text: 'I\'m Accepting Fear',
      hold: 'waitThenAdvance()',
      release: 'cancelAdvance()'
    }]
  },
  {
    prompt: '<p>Almost done. Focus on your breathing one last time.</p><p>Hold "I am Complete", take one deep breath, let go and return to the world.</p>',
    buttons: [{
      type: 'calm breath',
      text: 'I am Complete',
      action: 'advanceSlide()'
    }]
  },
  {
    prompt: '<p>This is you, alive and well.</p><p>When ready, return to your day in your own time.</p>',
    buttons: [{
      type: 'calm',
      text: 'Conclude Session',
      action: 'restartSlides()'
    }]
  }
]);
