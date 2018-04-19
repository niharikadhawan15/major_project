<style>
.logins-form
{
   width: 45%;
   margin-top: 100px;
   background-color: white;
   padding: 30px;
   padding-top: 0;
   border: 1px solid black;
   margin-right: 450px;
}
h3{
  text-align:center;
  font-size: 70px;
  font-family: Matura MT Script Capitals;
}

</style>
<div class="signup" ng-controller="signupController">
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

          <!-- /.navbar-collapse -->
      </div>
       <!-- /.container-fluid -->
  </nav>
  <div class="input-wrapper">
        <h3> Signup</h3>
          <div class="container" id="log">
              <div class="col-6 logins-form">
                <h2> Sign-up</h2>
                <form name="signForm" action="registration.php" method="post">
                  <div class="form-group">
                          <label for="user-name">Name</label>
                          <!-- this contains an input label for email in the login form -->
                          <input type="name" class="form-control" id="user-name" placeholder="Name" name="name" pattern="[A-Za-z]*" ng-model="user.name" required="">
                          <!-- the email provided by the user should be valid such that it must contains @ symbol -->
                          <div ng-show="signForm.name.$error.required">Required!</div>
                          <div ng-show="signForm.name.$error.pattern">This doesn't look like a valid name</div>

                      </div>
<div class="form-group">
        <label for="user-email">Email address</label>
        <!-- this contains an input label for email in the login form -->
        <input type="email" class="form-control" id="user-email" placeholder="Email" name="email" ng-model="user.email" required="">
        <!-- the email provided by the user should be valid such that it must contains @ symbol -->
        <div ng-show="signForm.email.$error.required">Required!</div>
        <!-- if the email provided by the user is not valid then an error message is displayed -->
        <div ng-show="signForm.email.$error.email">This doesn't look like a valid email</div>
    </div>
    <div class="form-group">
        <!-- here the user inputs the password -->
        <label for="user-contact">Contact Number</label>
        <input type="contact" class="form-control" id="contact" placeholder="contact" name="contact" pattern="[6-9][0-9]{9}" required="" ng-model="user.contact" ng-minlength="10" ng-maxlength="10">
        <!-- this condition check that the password provided by the user should contain atleast 6 characters -->
        <div ng-show="signForm.contact.$error.required">
            Please enter your contact number
        </div>
        <div ng-show="signForm.contact.$error.pattern">This doesn't look like a valid contact no.</div>
    </div>
    <!--  this is the submit button which remains disabled which necessary conditions are not met -->
    <button type="submit" class="btn btn-default" ng-disabled="signForm.$invalid" >sign up</button>
</form></div></div></div>
