console.log("Running async-await.js...");

// Async/Await

// -------------------------------------
// Changing promises.js to use async/await
// -------------------------------------

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

const retrieveUserDetails = async () => {
  const password = "pw1234";
  try {
    const loggedInUser = await logInUser("johndoe", password);
    console.log("Received user", loggedInUser);
    const profileForUser = await fetchUserProfile();
    console.log("Received profile", profileForUser);
  } catch (err) {
    console.error(err.message);
  }
};

retrieveUserDetails();

console.log("End");
