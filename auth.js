const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    passport.use(new GoogleStrategy({
            clientID: "543142864309-m93jii6tcmhh3tbmh02dkjlnia7phdlo.apps.googleusercontent.com",
            clientSecret: "jgu6IgRxr-KgP0ryNlvpl2lo",
            callbackURL: "/auth/google/callback"
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};