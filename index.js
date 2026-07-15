const credentials = {
    "username": "user1",
    "password": "password123"
}

function createLoginTracker(userInfo){
  let attemptCount = 0;

  let countAttempts = (passwordAttempt) =>{
    attemptCount++;
    if(passwordAttempt === userInfo.password && attemptCount <= 3){
      attemptCount = 0;
      console.log("Login successful");
      return;
      
    }else if (passwordAttempt !== userInfo.password && attemptCount <=3){
      console.log("atmpt no: ", attemptCount);
      console.log("Login failed");
      
    } else{
      console.log("Account locked due to too many failed login attempts");
    }
  }
  return countAttempts;
}

const countAttempts = createLoginTracker(credentials);

countAttempts("1");
countAttempts("password123");
countAttempts("1");


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};