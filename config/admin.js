module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b76bdf7bbf2c12b88b732e4e469c25e'),
  },
});
