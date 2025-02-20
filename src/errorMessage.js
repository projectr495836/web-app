export default function errorMessage(e) {
  switch (e.code) {
    case "auth/invalid-email":
    case "auth/argument-error":
    case "auth/user-not-found":
      return "User not found, sign up instead?";
    case "auth/email-already-in-use":
      return "An user with email already exists. Please log in instead. ";
    default:
      return "An unknown error occurred.";
  }
}
