exports.userQueries = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  }
}

exports.adminQueries = {
  user: (root, args, ctx) => {
    return ctx.models.Admin.getAuthAdmin(ctx);
  }
}

exports.userMutations = {
  signUp: async (root, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser._id;
  },
  signIn: (root, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);
  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  }
}

exports.adminMutations = {
  signUpAdmin: async (root, { input }, ctx) => {
    const registeredAdmin = await ctx.models.Admin.signUpAdmin(input);
    return registeredAdmin._id;
  },
  signInAdmin: (root, { input }, ctx) => {
    return ctx.models.Admin.signInAdmin(input, ctx);
  },
  signOutAdmin: (root, args, ctx) => {
    return ctx.models.Admin.signOutAdmin(ctx);
  }
}
