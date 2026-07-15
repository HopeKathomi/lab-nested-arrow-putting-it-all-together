const credentials = {
    "username": "user1",
    "password": "password123"
}

function createLoginTracker(userInfo){
  let attemptCount = 0;

  let countAttempts = (passwordAttempt) =>{
    attemptCount++;
    if(passwordAttempt === userInfo.password && attemptCount <= 3){
      return console.log("Login successful");
      attemptCount = 0;
      
    }else if (passwordAttempt !== userInfo.password && attemptCount <=3){
      return console.log("Login failed");
      console.log("at: ", attemptCount);
    } else{
      return console.log("Account locked due to too many failed login attempts");
    }
  }
  return countAttempts;
}

const countAttempts = createLoginTracker(credentials);

countAttempts("1");
countAttempts("password123");
countAttempts("1");
countAttempts("2");
countAttempts("2");

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};