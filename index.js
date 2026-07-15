const credentials = {
    "username": "user1",
    "password": "password123"
}

function createLoginTracker(userInfo){
  let attemptCount = 0;

  let countAttempts = (passwordAttempt) =>{
    passwordAttempt.forEach(pswd => {
      attemptCount++;
       if(pswd === userInfo.password && attemptCount <= 3){
        console.log("Login successful");
        return;
      }else if (pswd!== userInfo.password && attemptCount <=3){
         console.log("Login failed");
      } else{
        console.log("Account locked due to too many failed login attempts");
      }
    });
   
  }
  countAttempts(["123","1245", "password123", "abc"])
}

createLoginTracker(credentials)

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};