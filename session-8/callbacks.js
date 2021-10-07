console.log("Running callbacks.js...");

console.log("Start");

const dbPassword = "pw1234";

const fetchUserProfile = (callback) => {
  setTimeout(() => {
    callback({
      id: 2,
      profile: "@johndoe",
    });
  }, 3000);
};

// When this takes 2s, it comes after 'End'
const logInUser = (username, password, callback, failureCallback) => {
  setTimeout(() => {
    console.log(`Fetching user ${username}`);

    if (password === dbPassword) {
      callback({ account: username });
    } else {
      failureCallback({ message: "Passwords did not match" });
    }
  }, 2000);
};

const callbackSuccess = (userReceived) => {
  console.log("Received user ", userReceived);
};

const loggedInUser = logInUser(
  "john@foo.com",
  "pw1234",
  (userReceived) => {
    console.log("Received user ", userReceived);
    fetchUserProfile((profile) => {
      console.log("Profile received ", profile);
    });
  },
  (errors) => {
    console.error(errors.message);
  }
);

console.log("End");

// CALLBACK HELL
//
//
