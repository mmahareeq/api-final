module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c08e2c6e3623758aac140995d38d48e4'),
  },
});
