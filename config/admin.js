module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '484ed79e1bea6e94043d6e5872239824'),
  },
});
