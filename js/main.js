
//this part of the code has been provided the ngRoute to make the routing available in the app between various pages
var musicaApp = angular.module('musicaApp',['ngRoute']);
var em = ['aa@aa', 'bb@bb'];
//this part of the code contains the config part with the url that will direct to their specified page and their controller
musicaApp.config(function ($routeProvider) {
  $routeProvider
  //this part is for login
  .when('/',{
    templateUrl: 'pages/login.html',
    controller: 'loginController'
  })
  //this part is for main
  .when('/home',{
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
    //this part is for main1
  .when('/main1',{
    templateUrl: 'main1.html',
    controller: 'main1Controller'
  })
  //this part is for about
  .when('/about',{
    templateUrl: 'pages/about.html',
    controller: 'aboutController'
  })
    //this part is for drumkit
  .when('/drumkit', {
    templateUrl: 'drumkit.html',
    controller: 'drumController'
  })
    //this part is for piano
  .when('/piano', {
    templateUrl: 'piano.html',
    controller: 'pianoController'
  })
    //this part is for mood
  .when('/mood',{
  templateUrl: 'mood/mood.html',
  controller: 'moodController'
})
//this part is for mood
.when('/radio',{
templateUrl: 'mood/radio.html',
controller: 'radioController'
})
.when('/lyric',{
templateUrl: 'pages/lyric.html',
controller: 'lyricController'
})
.when('/lyric/:id', {
  templateUrl: 'pages/lyrics.html',
  controller: 'lyricsController'
})
  //this part is for signup
.when('/signup',{
templateUrl: 'pages/signup.html',
controller: 'signupController'
})
})

//this part of our code act as login controller
musicaApp.controller('loginController',function($scope,$location) {
  $scope.goToHome = function() {
    //console.log('Do Something')
    $location.url('home');
  }
})

/*musicaApp.controller('signupController',function($scope,$http,$location){
  $scope.insertData = function()
  {
    $http.post("script.php",{'name':$scope.name,'email':$scope.email}).success(function(data){alert(data);});
    
  }

    $location.url('main1');
})
};
*///this part of our code act as login controller
musicaApp.controller('signupController',function($scope,$location) {
  $scope.goTomain1 = function() {
    //console.log('Do Something')
    $location.url('main1');
  }
})
//this part of our code act as about controller
musicaApp.controller('aboutController',function($scope,$location) {
  $scope.goToAbout = function() {
    // console.log('Do Something')
    $location.url('about')
  }
})

jQuery.fn.liScroll = function(settings) {
  settings = jQuery.extend({
    travelocity: 0.03
    }, settings);
    return this.each(function(){
        var $strip = jQuery(this);
        $strip.addClass("newsticker")
        var stripHeight = 1;
        $strip.find("li").each(function(i){
          stripHeight += jQuery(this, i).outerHeight(true); 
        });
        var $mask = $strip.wrap("<div class='mask'></div>");
        var $tickercontainer = $strip.parent().wrap("<div class='tickercontainer'></div>");
        var containerHeight = $strip.parent().parent().height(); 
        $strip.height(stripHeight);
        var totalTravel = stripHeight;
        var defTiming = totalTravel/settings.travelocity; 
        function scrollnews(spazio, tempo){
        $strip.animate({top: '-='+ spazio}, tempo, "linear", function(){$strip.css("top", containerHeight); scrollnews(totalTravel, defTiming);});
        }
        scrollnews(totalTravel, defTiming);
        $strip.hover(function(){
        jQuery(this).stop();
        },
        function(){
        var offset = jQuery(this).offset();
        var residualSpace = offset.top + stripHeight;
        var residualTime = residualSpace/settings.travelocity;
        scrollnews(residualSpace, residualTime);
        });
    });
};

$(function(){
    $("ul#ticker01").liScroll();
});


musicaApp.controller('lyricController',function($scope) { //object variable-create a controller(1st arg-name of the controller,2nd arg-function we want controller to do)

  $scope.lyrics = [
{
  id: '1',
  name: 'India wale',
  album: 'Happy New Year',
  duration: '2:04',
  image: '/musica1/songs/songimg/happyh1.jpg',
  category: 'Happy (Hindi)'
},
{
    'name': 'Jag ghoomeya',
    'album': 'Sultan',
    'duration': '2:35',
   'image': '/musica1/songs/songimg/happyh2.jpg',
     id:'2',
     category: 'Happy (Hindi)'
    },
{

    'name': 'Radio',
    'album': 'Tubelight',
    'duration': '4:49',
    'image': '/musica1/songs/songimg/happyh3.jpg',
   'id':'3',
   category: 'Happy (Hindi)'
},

{
    'name': 'Rang De Basanti',
      'album': 'Rang De Basanti',
    'duration': '6:03',
    'image': '/musica1/songs/songimg/happyh4.jpg',
   'id':'4',
   category: 'Happy (Hindi)'
 },
 {
       'name': 'Kadar',
       'artist': ' Mankirt Aulakh',
       'album': 'Single',
       'duration': '3:08',
       'fileName': 'songs/happyp1.mp3',
       'image': '/musica1/songs/songimg/happyp1.jpg',
       'id':'5',
       category: 'Happy (Punjabi)'
   },
   {
       'name': 'Lamborghini',
       'artist': 'Diljit Dosanjh',
       'album': 'Single',
       'duration': '2:04',
       'fileName': 'songs/happyp2.mp3',
      'image': '/musica1/songs/songimg/happyp2.jpg',
      'id':'6',
      category: 'Happy (Punjabi)'
   },
{

       'name': 'Ring',
       'artist': ' Neha Kakkar',
       'album': 'Single',
       'duration': '2:43',
       'fileName': 'songs/happyp3.mp3',
       'image': '/musica1/songs/songimg/happyp3.jpg',
       'id':'7',
       category: 'Happy (Punjabi)'
   },

   {
       'name': 'Time table',
       'artist': 'Kulwinder Billa',
       'album': 'Time table',
       'duration': '4:42',
       'fileName': 'songs/happyp4.mp3',
       'image': '/musica1/songs/songimg/happyp4.jpg',
       'id':'8',
       category: 'Happy (Punjabi)'
   },
   {
          'name': 'Happy Together',
          'artist': 'The turtles',
          'album': 'Single',
          'duration': '1:18',
          'fileName': 'songs/happye1.mp3',
          'image': '/musica1/songs/songimg/happye1.jpg',
          'id':'9',
          category: 'Happy (English)'

      },
      {
          'name': 'Heroes',
          'artist': 'David Bowie',
          'album': 'Single',
          'duration': '5:52',
          'fileName': 'songs/rome1.mp3',
         'image': '/musica1/songs/songimg/rome1.jpg',
         'id':'10',
         category: 'Happy (English)'

      },
   {

          'name': 'If you wanna be happy',
          'artist': ' Jimmy Soul',
          'album': 'Single',
          'duration': '1:11',
          'fileName': 'songs/happye3.mp3',
          'image': '/musica1/songs/songimg/happye3.jpg',
          'id':'11',
          category: 'Happy (English)'

      },

      {
          'name': 'Say yes',
          'artist': 'Elliot Smith',
          'album': 'Single',
          'duration': '2:19',
          'fileName': 'songs/happye4.mp3',
          'image': '/musica1/songs/songimg/happye4.jpg',
          'id':'12',
          category: 'Happy (English)'
      },
      {

             'name': 'Chham Chham',
             'artist': ' Monali Thakur',
             'album': 'Baaghi',
             'duration': '4:44',
             'fileName': 'songs/song1.mp3',
             'image': '/musica1/songs/songimg/rainyh3.jpg',
             'id':'13',
             category: 'Rainy (Hindi)'
         },
       {
           'name': 'Sun Raha Hai Naa Tu ',
           'artist': 'Ankit Tiwari',
           'album': 'Aashiqui 2',
           'duration': '6:30',
           'fileName': 'songs/song3.mp3',
          'image': '/musica1/songs/songimg/sahh2.png',
          'id':'14',
          category: 'sad (Hindi)'

       },


       {
           'name': 'Tum hi ho',
           'artist': 'Arijit Singh',
           'album': 'Aashiqui 2',
           'duration': '4:24',
           'fileName': 'songs/song4.mp3',
           'image': '/musica1/songs/songimg/romantich4.jpg',
           'id':'15',
           category: 'Romantic (Hindi)'

       },
              {
             'name': 'Abhi to party',
             'artist': ' Aastha, Armaan Malik',
             'album': 'Khoobsurat',
             'duration': '2:59',
             'fileName': 'songs/partyh1.mp3',
             'image': '/musica1/songs/songimg/partyh1.jpg',
             'id':'16',
             category: 'Party (Hindi)'
         },
         {
             'name': 'Chittiyan kalaiyan',
             'artist': 'Kanika Kapoor',
             'album': 'Roy',
             'duration': '4:05',
             'fileName': 'songs/partyh2.mp3',
            'image': '/musica1/songs/songimg/partyh2.jpg',
            'id':'17',
            category: 'Party (Hindi)'
         },
      {

             'name': 'Kala chashma',
             'artist': '  Neha Kakkar, Amar Arshi',
             'album': 'Baar Baar dekho',
             'duration': '4:24',
             'fileName': 'songs/partyh3.mp3',
             'image': '/musica1/songs/songimg/partyh3.jpg',
             'id':'18',
             category: 'Party (Hindi)'

         },

         {
             'name': 'Nashe si chad gayi',
             'artist': 'Arijit Singh, Caralisa Monteiro',
             'album': 'Befikre',
             'duration': '3:58',
             'fileName': 'songs/partyh4.mp3',
             'image': '/musica1/songs/songimg/partyh4.jpg',
             'id':'19',
             category: 'Party (Hindi)'
         },
                  {
                'name': 'Dulhe ka sehra',
                'artist': 'Nusrat Fateh Ali Khan',
                'album': 'Dhadkan',
                'duration': '4:35',
                'fileName': 'songs/wedh1.mp3',
                'image': '/musica1/songs/songimg/wedh1.jpg',
                'id':'20',
                category: 'Wedding (Hindi)'
            },
            {
                  'name': 'Aajkal tere mere pyaar ke',
                  'artist': 'Mohammed Rafi',
                  'album': 'Brahmachari',
                  'duration': '5:11',
                  'fileName': 'songs/retroh1.mp3',
                  'image': '/musica1/songs/songimg/retroh2.jpg',
                  'id':'21',
                  category: 'Retro (Hindi)'
              },
              {
                     'name': 'Ganesh aarti',
                     'artist': 'Anuradha Paudwal ',
                     'album': 'Devichya Aartya',
                     'duration': '2:55',
                     'fileName': 'songs/relh1.mp3',
                     'image': '/musica1/songs/songimg/relh1.jpg',
                     'id':'22',
                     category: 'Religious (Hindi)'
                 }];
})
musicaApp.controller('lyricsController',function($scope,$routeParams) {
  $scope.lyricId = $routeParams.id;
  //here is the array of objects containing restaurant's information with the best dish of the restaurant and the image of the dish
  var lyrics = [{
    name: 'India wale',
    artist: ' Neeti Mohan, KK, Vishal Dadlani',
    album: 'Happy New Year',
    duration: '2:04',
    image: '/musica1/songs/songimg/happyh1.jpg',
    category: 'Happy',
    video: 'https://www.youtube.com/embed/X-DDknSzELI',
    lyrics: '/musica1/lyrics/1.png'
},
{
    'name': 'Jag ghoomeya',
    'artist': 'Rahat Fateh Ali Khan',
    'album': 'Sultan',
    'duration': '2:35',
   'image': '/musica1/songs/songimg/happyh2.jpg',
   category: 'Happy',
   video: 'https://www.youtube.com/embed/t10sQb0Zmjs',
   lyrics: '/musica1/lyrics/2.png'
},
{

    'name': 'Radio',
    'artist': ' Kamaal Khan, Amit Mishra',
    'album': 'Tubelight',
    'duration': '4:49',
    'image': '/musica1/songs/songimg/happyh3.jpg',
    category: 'Happy',
    video: 'https://www.youtube.com/embed/FIMz4M2Vuw4',
    lyrics: '/musica1/lyrics/3.png'
},

{
    'name': 'Rang De Basanti',
    'artist': 'A. R. Rahman',
    'album': 'Rang De Basanti',
    'duration': '6:03',
    'image': '/musica1/songs/songimg/happyh4.jpg',
    category: 'Happy',
    video: 'https://www.youtube.com/embed/c769V25pX08',
    lyrics: '/musica1/lyrics/4.png'
},
{
      'name': 'Kadar',
      'artist': ' Mankirt Aulakh',
      'album': 'Single',
      'duration': '3:08',
      'fileName': 'songs/happyp1.mp3',
      'image': '/musica1/songs/songimg/happyp1.jpg',
      'id':'5',
      category: 'Happy',
      video: 'https://www.youtube.com/embed/BgrJ4k5FtE',
      lyrics: '/musica1/lyrics/5.png'
  },
  {
      'name': 'Lamborghini',
      'artist': 'Diljit Dosanjh',
      'album': 'Single',
      'duration': '2:04',
      'fileName': 'songs/happyp2.mp3',
     'image': '/musica1/songs/songimg/happyp2.jpg',
     'id':'6',
     category: 'Happy',
     video: 'https://www.youtube.com/embed/fychacOx7F8',
     lyrics: '/musica1/lyrics/6.png'
  },
{

      'name': 'Ring',
      'artist': ' Neha Kakkar',
      'album': 'Single',
      'duration': '2:43',
      'fileName': 'songs/happyp3.mp3',
      'image': '/musica1/songs/songimg/happyp3.jpg',
      'id':'7',
      category: 'Happy',
      video: 'https://www.youtube.com/embed/FUhqGOb1-gc',
      lyrics: '/musica1/lyrics/7.png'
  },

  {
      'name': 'Time table',
      'artist': 'Kulwinder Billa',
      'album': 'Time table',
      'duration': '4:42',
      'fileName': 'songs/happyp4.mp3',
      'image': '/musica1/songs/songimg/happyp4.jpg',
      'id':'8',
      category: 'Happy',
      video: 'https://www.youtube.com/embed/6tpLUszWs9M',
      lyrics: '/musica1/lyrics/8.png'
  },
  {
         'name': 'Happy Together',
         'artist': 'The turtles',
         'album': 'Single',
         'duration': '1:18',
         'fileName': 'songs/happye1.mp3',
         'image': '/musica1/songs/songimg/happye1.jpg',
         'id':'9',
         category: 'Happy',
         video: 'https://www.youtube.com/embed/mRCe5L1imxg',
         lyrics: '/musica1/lyrics/9.png'

     },
     {
         'name': 'Heroes',
         'artist': 'David Bowie',
         'album': 'Single',
         'duration': '5:52',
         'fileName': 'songs/rome1.mp3',
        'image': '/musica1/songs/songimg/rome1.jpg',
        'id':'10',
        category: 'Happy',
        video: 'https://www.youtube.com/embed/a7SouU3ECpU',
        lyrics: '/musica1/lyrics/10.png'

     },
  {

         'name': 'If you wanna be happy',
         'artist': ' Jimmy Soul',
         'album': 'Single',
         'duration': '1:11',
         'fileName': 'songs/happye3.mp3',
         'image': '/musica1/songs/songimg/happye3.jpg',
         'id':'11',
         category: 'Happy',
         video: 'https://www.youtube.com/embed/Qh9ZZgDqzAg',
         lyrics: '/musica1/lyrics/11.png'

     },

     {
         'name': 'Say yes',
         'artist': 'Elliot Smith',
         'album': 'Single',
         'duration': '2:19',
         'fileName': 'songs/happye4.mp3',
         'image': '/musica1/songs/songimg/happye4.jpg',
         'id':'12',
         category: 'Happy',
         video: 'https://www.youtube.com/embed/2MZxf-lQD-o',
         lyrics: '/musica1/lyrics/12.png'
     },
     {

            'name': 'Chham Chham',
            'artist': ' Monali Thakur',
            'album': 'Baaghi',
            'duration': '4:44',
            'fileName': 'songs/song1.mp3',
            'image': '/musica1/songs/songimg/rainyh3.jpg',
            'id':'13',
            category: 'Rainy',
            video: 'https://www.youtube.com/embed/f6vY6tYvKGA',
            lyrics: '/musica1/lyrics/13.png'
        },
      {
          'name': 'Sun Raha Hai Naa Tu ',
          'artist': 'Ankit Tiwari',
          'album': 'Aashiqui 2',
          'duration': '6:30',
          'fileName': 'songs/song3.mp3',
         'image': '/musica1/songs/songimg/sahh2.png',
         'id':'14',
         category: 'sad',
         video: 'https://www.youtube.com/embed/z3UHfi9vpbc',
         lyrics: '/musica1/lyrics/14.png'

      },


      {
          'name': 'Tum hi ho',
          'artist': 'Arijit Singh',
          'album': 'Aashiqui 2',
          'duration': '4:24',
          'fileName': 'songs/song4.mp3',
          'image': '/musica1/songs/songimg/romantich4.jpg',
          'id':'15',
          category: 'Romantic',
          video: 'https://www.youtube.com/embed/Umqb9KENgmk',
          lyrics: '/musica1/lyrics/15.png'

      },
            {
            'name': 'Abhi to party',
            'artist': ' Aastha, Armaan Malik',
            'album': 'Khoobsurat',
            'duration': '2:59',
            'fileName': 'songs/partyh1.mp3',
            'image': '/musica1/songs/songimg/partyh1.jpg',
            'id':'16',
            category: 'Party (Hindi)',
            video: 'https://www.youtube.com/embed/8LZgzAZ2lpQ',
            lyrics: '/musica1/lyrics/16.png'
        },
        {
            'name': 'Chittiyan kalaiyan',
            'artist': 'Kanika Kapoor',
            'album': 'Roy',
            'duration': '4:05',
            'fileName': 'songs/partyh2.mp3',
           'image': '/musica1/songs/songimg/partyh2.jpg',
           'id':'17',
           category: 'Party (Hindi)',
           video: 'https://www.youtube.com/embed/zpsVpnvFfZQ',
           lyrics: '/musica1/lyrics/17.png'
        },
     {

            'name': 'Kala chashma',
            'artist': '  Neha Kakkar, Amar Arshi',
            'album': 'Baar Baar dekho',
            'duration': '4:24',
            'fileName': 'songs/partyh3.mp3',
            'image': '/musica1/songs/songimg/partyh3.jpg',
            'id':'18',
            category: 'Party (Hindi)',
            video: 'https://www.youtube.com/embed/k4yXQkG2s1E',
            lyrics: '/musica1/lyrics/18.png'

        },

        {
            'name': 'Nashe si chad gayi',
            'artist': 'Arijit Singh, Caralisa Monteiro',
            'album': 'Befikre',
            'duration': '3:58',
            'fileName': 'songs/partyh4.mp3',
            'image': '/musica1/songs/songimg/partyh4.jpg',
            'id':'19',
            category: 'Party (Hindi)',
            video: 'https://www.youtube.com/embed/Wd2B8OAotU8',
            lyrics: '/musica1/lyrics/19.png'
        },
                {
               'name': 'Dulhe ka sehra',
               'artist': 'Nusrat Fateh Ali Khan',
               'album': 'Dhadkan',
               'duration': '4:35',
               'fileName': 'songs/wedh1.mp3',
               'image': '/musica1/songs/songimg/wedh1.jpg',
               'id':'20',
               category: 'Wedding (Hindi)',
               video: 'https://www.youtube.com/embed/VPg3WCPixKU',
               lyrics: '/musica1/lyrics/20.png'
           },
           {
                 'name': 'Aajkal tere mere pyaar ke',
                 'artist': 'Mohammed Rafi',
                 'album': 'Brahmachari',
                 'duration': '5:11',
                 'fileName': 'songs/retroh1.mp3',
                 'image': '/musica1/songs/songimg/retroh2.jpg',
                 'id':'21',
                 category: 'Retro (Hindi)',
                 video: 'https://www.youtube.com/embed/KIvLi9JT8tE',
                 lyrics: '/musica1/lyrics/21.png'
             },
             {
                    'name': 'Ganesh aarti',
                    'artist': 'Anuradha Paudwal ',
                    'album': 'Devichya Aartya',
                    'duration': '2:55',
                    'fileName': 'songs/relh1.mp3',
                    'image': '/musica1/songs/songimg/relh1.jpg',
                    'id':'22',
                    category: 'Religious (Hindi)',
                    video: 'https://www.youtube.com/embed/ZYxdhMAF4F0',
                    lyrics: '/musica1/lyrics/22.png'
                }
]
]
  $scope.lyric = lyrics[$routeParams.id - 1];})
