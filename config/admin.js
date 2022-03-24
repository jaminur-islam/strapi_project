module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '255ca35b64c19fc7af51a6f9f4b34361'),
  },
});
