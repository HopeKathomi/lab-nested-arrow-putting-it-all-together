const credentials = {
    "username": "user1",
    "password": "password123"
}

function createLoginTracker(userInfo){
  let attemptCount = 0;

  let countAttempts = (passwordAttempt) =>{
    if(attemptCount >=3){
      return "Account locked due to too many failed login attempts";
    }

    attemptCount++;

    if(passwordAttempt === userInfo.password && attemptCount <= 3){
      attemptCount = 0;
      console.log("Login successful");      
    }else if (passwordAttempt !== userInfo.password && attemptCount <=3){
      // console.log("atmpt no: ", attemptCount);
      console.log("Login failed");      
    } 
  }
  return countAttempts;
}

const countAttempts = createLoginTracker(credentials);

console.log(countAttempts("2"));
console.log(countAttempts("2"));
console.log(countAttempts("2"));
console.log(countAttempts("2"));

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};