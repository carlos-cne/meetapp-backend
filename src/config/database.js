module.exports = {
  dialect: 'postgres',
  host: process.env.DOCKER || 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  port: 5433,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
