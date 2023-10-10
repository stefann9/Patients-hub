// validateName rules:
// 1. Must contain only letters
// 2. Must contain at least one character
// 3. Can contain spaces, hyphens, apostrophes, and periods
// e.g. Andrei, Andrei Neagoie, Andrei Neagoie
// but not Andrei123, Andrei Neagoie123, Andrei123 Neagoie

const validateName = (name) => {
  const regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  return regex.test(name);
};

// validateEmail rules:
// 1. Must contain @
// 2. Must contain .
// 3. Must contain at least one character before @
// 4. Must contain at least one character before .
// 5. Must contain at least one character after .

const validateEmail = (email) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
};

// validatePassword rules:
// 1. At least one lowercase letter
// 2. At least one uppercase letter
// 3. At least one digit
// 4. At least one special character
// 5. At least 8 characters long

const validatePassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  return regex.test(password);
};

// validateConfirmPassword rules:
// 1. Must match password

const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

// validateRole rules:
// 1. Must not be empty

const validateRole = (role) => {
  return role !== "";
};

// validateSpeciality rules:
// 1. Must not be empty

const validateSpeciality = (speciality) => {
  return speciality !== "";
};

// validateLoginUser rules:
// 1. Must be a valid email
// 2. Must be a valid password

const validateLoginUser = (user) => {
  const { email, password } = user;

  if (!validateEmail(email))
    return { variant: "warning", message: "Invalid email!" };
  if (!validatePassword(password))
    return { variant: "warning", message: "Invalid password!" };

  return { variant: "success", message: "Login succesful!" };
};

// validateSignupUser rules:
// 1. Must be a valid first name
// 2. Must be a valid last name

const validateSignupUser = (user) => {
  const {
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    role,
    speciality,
  } = user;

  if (!validateName(firstName))
    return { variant: "warning", message: "Invalid first name!" };
  if (!validateName(lastName))
    return { variant: "warning", message: "Invalid last name!" };
  if (!validateEmail(email))
    return { variant: "warning", message: "Invalid email!" };
  if (!validatePassword(password))
    return { variant: "warning", message: "Invalid password!" };
  if (!validateConfirmPassword(password, confirmPassword))
    return { variant: "warning", message: "Invalid confirm-password!" };
  if (!validateRole(role))
    return { variant: "warning", message: "Invalid function!" };
  if (!validateSpeciality(speciality))
    return { variant: "warning", message: "Invalid speciality!" };

  return { variant: "success", message: "User registered!" };
};

const validateEmailUser = ({ email }) => {
  if (!validateEmail(email))
    return { variant: "warning", message: "Invalid email!" };

  return { variant: "success", message: "Email sent!" };
};

const validatePasswordUser = (user) => {
  const { newPassword, confirmPassword } = user;

  if (!validatePassword(newPassword))
    return { variant: "warning", message: "Invalid password!" };
  if (!validateConfirmPassword(newPassword, confirmPassword))
    return { variant: "warning", message: "Invalid confirm-password!" };

  return { variant: "success", message: "Password changed!" };
};

export {
  validateSignupUser,
  validateLoginUser,
  validateEmailUser,
  validatePasswordUser,
};
