console.log("Running promises.js...");

// Promises:

// Statuses:
// - Pending
// - Resolved
// - Rejected

// -------------------------------------
// Changing callbacks.js to use promises
// -------------------------------------

console.log("Running callbacks.js...");

console.log("Start");

const dbPassword = "pw1234";

const fetchUserProfile = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 2,
        profile: "@johndoe",
      });
    }, 3000);
  });
};

const logInUser = (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Fetching user ${username}`);

      if (password === dbPassword) {
        resolve({ account: username });
      } else {
        reject({ message: "Passwords did not match" });
      }
    }, 2000);
  });
};

const callbackSuccess = (userReceived) => {
  console.log("Received user ", userReceived);
};

logInUser("john@foo.com", "pw1234")
  .then((userDetails) => {
    console.log("Received user details", userDetails);
    return fetchUserProfile();
  })
  .then((profile) => {
    console.log("Received user profile", profile);
  })
  .catch((err) => console.error("Failed:", err.message));

console.log("End");
