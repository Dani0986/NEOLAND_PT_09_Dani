
const { isAuth, isAuthAdmin } = require("../../middleware/auth.middleware");
const { upload } = require("../../middleware/file.middleware");
const {
    registerLargo,
    registerWithRedirect,
    sendCode,
    resendCode,
    checkNewUser,
    login,
    autologin,
    forgotPassword,
    exampleAuth,
    changePassword,
} = require("../controllers/User.controllers");

const UserRoutes = require("express").Router();

UserRoutes.post("/registerLargo", upload.single("image"), registerLargo);
UserRoutes.post(
    "/registerRedirect",
    upload.single("image"),
    registerWithRedirect
); // redirect con sendcode

UserRoutes.post("/resend", resendCode);
UserRoutes.post("/check", checkNewUser);

UserRoutes.post("/login", login);
UserRoutes.post("/autologin", autologin);

UserRoutes.patch("/forgotPassword", forgotPassword); // Redirect sendPassword


//! Rutas Autenticadas

// middleware isAuth -> verifica el token
// isAuthAdmin -> verifica que tenemos token y somos rol = admin

UserRoutes.get("/pruebas", [isAuthAdmin], exampleAuth);

UserRoutes.patch("/changePassword", [isAuth], changePassword);

// -- controladores usados por redirect

UserRoutes.post("/register/senMAil/:id", sendCode);
UserRoutes.patch("/forgot/sendPassword/:id", sendPassword);

module.exports = UserRoutes;