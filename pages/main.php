<style>
.opt1{
  background-image: url("opt.jpg");
  background-repeat: no-repeat;
background-size:cover;
border:0px;
}
.opt2{
  background-image: url("opt1.jpg");
  background-repeat: no-repeat;
background-size:cover;
border:0px;
}
.opt3{
  background-image: url("opt2.jpg");
  background-repeat: no-repeat;
background-size:cover;
border:0px;
}
.opt4{
  background-image: url("opt3.png");
  background-repeat: no-repeat;
background-size:cover;
border:0px;
}
.opt5{
  background-image: url("opt4.png");
  background-repeat: no-repeat;
background-size:cover;
border:0px;
}
.holder {
  background-color:#ccc;
  width:360px;
  height:250px;
  overflow:hidden;
  padding:10px;
  font-family:Helvetica;
}
.holder .mask {
  position: relative;
  left: 0px;
  top: 10px;
  width:300px;
  height:240px;
  overflow: hidden;
}
.holder ul {
  list-style:none;
  margin:0;
  padding:0;
  position: relative;
}
.holder ul li {
  padding:10px 0px;
}
.holder ul li a {
  color:darkred;
  text-decoration:none;
}

</style>
<link rel="stylesheet" type="text/css" href="mood/font-awesome.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<div class="main  " ng-controller="mainController">
    <nav class="navbar navbar-default navbar-fixed">
        <div class="container-fluid col-sm-12">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                     <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Musica</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                   <li><a href="#!/home">Home</a></li>
                   <li><a href="#!/about">About</a></li>
                   <li><a href="#!/">Logout</a></li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
         <!-- /.container-fluid -->
    </nav>

    <div class="hero">
    <!-- this is like the tagline of the app musica-->

    </div><br>
    <div class="ui container">
      <div class="row">
              <div class="hidden-xs hidden-sm col-md-4" >
                <div id="menu">

    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#top" aria-controls="home" role="tab" data-toggle="tab"><span >Music Headlines</span></a></li>
            </ul>
<!-- Tab panes --><div class="panel panel-default">
     <!-- created a news ticker for our website using tab components and added glyphicons-->
     <!-- each news has a heading and a relevant link to the article -->
     <div class="holder">
   <ul id="ticker01">
 							<li> <a  href="http://www.mtv.com/news/3041878/sia-christmas-album-cover-tracklist/" ><div><div class="first"><img src="https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:251929?height=729&width=1296&format=jpg&quality=.7" width="50"  class="img-circle"/>SIA GIVES MADDIE ZIEGLER A CHRISTMASY MAKEOVER</div><div class="third"><span><span class="fourth"> mtv.com</span></span></div></a></li>
 							<li>  <a  href="http://trl.mtv.com/news/3041830/fresh-out-october-16-2017/" ><div><div class="first "><img src="https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:251905?height=729&width=1296&format=jpg&quality=.7" width="50" class="img-circle"/>FRESH OUT</div><div class="third"><span><span class="fourth"> mtv.com</span></span></div></div></a></li>
 							<li> <a  href="http://aofe.alwayson.io/3041772/ed-sheeran-bike-accident-tour-cancel-potentially/" ><div><div class="first "><img src="https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:251849?height=729&width=1296&format=jpg&quality=.7" width="50" class="img-circle"/> POP ED SHEERAN'S TOUR MAY BE IN JEOPARDY</div><div class="third"><span><span class="fourth"> mtv.com</span></span></div></a></li>
 							<li> <a  href="http://www.mtv.com/news/3041655/pink-eminem-revenge/" ><div><div class="first"><img src="https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:251774?height=729&width=1296&format=jpg&quality=.7" width="50" class="img-circle"/>P!NK AND EMINEM REUNITE  </div><div class="third"><span><span class="fourth"> mtv.com</span></span></div></div></a></li>
 							<li> <a  href="http://www.mtv.com/news/3041692/logic-1-800-bilingual-remix-juanes/" ><div><div class="first"><img src="https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:251790?height=729&width=1296&format=jpg&quality=.7" width="50" class="img-circle"/>LOGIC’S ‘1-800-273-8255’ GETS A BEAUTIFUL BILINGUAL REMIX WITH JUANES</div><div class="third"><span><span class="fourth"> mtv.com</span></span></div></a></li>
 							<li> <a  href="http://www.mtv.com/news/3041577/somos-live-benefit-concert-disaster-relief/" ><div><div class="first"><img src="https://imagesmtv-a.akamaihd.net/uri/mgid:ao:image:mtv.com:251765?height=729&width=1296&format=jpg&quality=.7" width="50" class="img-circle"/>SELENA GOMEZ, DEMI LOVATO, DJ KHALED, AND MORE JOIN FORCES</div><div class="third"><span><span class="fourth"> mtv.com</span></span></div></a></li>
 				</ul>
 </div></div></div></div>

            <div class=" col-md-7 side">
              <div id="sidebar">
                <div  style="height:100%; margin-top:10px;"><a href="#!/mood">
              	         <div class="panel panel-default opt1" style=" height:30%; width:100%; background-color:#333333;">
                            <div class="panel-body"><i  aria-hidden="true" style="color:white;font-size:100px;margin-top:50px;margin-left:80%;"></i>
              			 <div style="margin-left:85%;color:white;"> Songs</div>
              			  </div></a>
                           </div>
                           <div class="panel panel-default opt2" style=" height:30%; width:100%; background-color:#333333">
                            <div class="panel-body">
              			  <i  aria-hidden="true" style="color:white;font-size:100px;margin-top:50px;margin-left:80%;"></i>
              			  <div style="margin-left:85%;color:white;">Virtual Piano</div><a href="#!/piano.html"> <button>piano</button></a>
                      <a href="#!/edm.html"><button>edm</button></a>
                      <a href="#!/organ.html"><button>organ</button></a>
                      <a href="#!/acoustic.html"><button>Acoustic</button></a>
              			  </div>
                           </div>
                           <div class="panel panel-default opt3" style=" height:30%; width:100%; background-color:#333333;"><a href="#!/drumkit">
                            <div class="panel-body"><i  aria-hidden="true"  style="color:white;font-size:100px;margin-top:50px;margin-left:80%;"></i>
              			  </div>
              			  <div style="margin-left:85%;color:white;margin-top:-14px;">Drum-kit</div>
                           </div></a></div>
                           <div class="panel panel-default opt5" style=" height:30%; width:100%; background-color:#333333;"><a href="#!/radio">
                            <div class="panel-body"><i  aria-hidden="true"  style="color: Black;font-size:100px;margin-top:50px;margin-left:80%;"></i>
              			  </div>
              			  <div style="margin-left:85%;color:white;margin-top:-14px;">Radio</div>
                           </div></a></div>

                          <div class="panel panel-default opt4" style=" height:30%; width:100%; background-color:#333333;"><a href="#!/lyric">
                           <div class="panel-body"><i  aria-hidden="true"  style="color:white;font-size:100px;margin-top:50px;margin-left:80%;"></i>
                     </div>
                     <div style="margin-left:85%;color:white;margin-top:-14px;">Lyrics</div>
                          </div></a></div>
                           </div>
                         </div>
              </div>
            </div>
    </div></div></div>

<!-- here is the code for the footer part of the app -->
<div class="row" id="main-footer" >
    <div class="container-fluid">
    <!-- it is the first row of the footer -->
        <div class="row">
            <div class="middle-outer">
                <div class="col-md-4">
                    <ul class="nav flex-column bottom-line">
                        <li class="nav-item">
                            <a class="nav-link footer-headers" href="#!/about">About Us</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4">
                    <ul class="nav flex-column bottom-line">
                        <li class="nav-item">
                            <a class="nav-link footer-headers" href="#!/home">Home</a>
                        </li>
                    </ul>
                </div>
        </div>

</div>
        <!-- this is the second row of the footer part of the app -->
        <div class="row" id="second-footer">
            <div class="middle-outer"><div class="footer-separator">
            </div>
            <div class="col-md-8 col-xs-12">
                <ul class="nav flex-column">
                    <li class="nav-item">
                         <a class="nav-link" href="songs/happy.html">Happy</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="songs/sad.html">Sad</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="songs/romantic.html">Romantic</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="songs/rainy.html">Rainy</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="songs/mix.html">Mix</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="songs/wedding.html">Wedding</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="songs/retro.html">Retro</a>
                    </li>
                    <li class="nav-item">
                         <a class="nav-link" href="songs/religiousy.html">Religious</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="songs/party.html">Party</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>


</div>
