import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { User } from "../database/schemas/userSchema";

export default passport.use(
	"google",
	new GoogleStrategy(
		{
			clientID: process.env.OAUTH_CLIENT_ID_GOOGLE,
			clientSecret: process.env.OAUTH_CLIENT_SECRET_GOOGLE,
			callbackURL: "/auth/google/redirect",
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				let user = await User.findOne({ googleId: profile.id });

				if (!user) {
					user = new User({
						googleId: profile.id,
						email: profile.emails[0].value,
						name: profile.displayName,
						avatar: profile.picture,
					});

					await user.save();
				}

				done(null, profile);
			} catch (err) {
				done(err, null);
			}
		},
	),
);

passport.serializeUser((user, done) => {
	done(null, user.id);
	done(null, user);
});

passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		done(err, user);
	});
	done(null, null);
});
