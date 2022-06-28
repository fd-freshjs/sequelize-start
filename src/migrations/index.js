
module.exports = {
  migrateList: [],
  async migrate (queryInterface, Sequelize) {
    const doneMigrations = await queryInterface.select('SequelizeMeta') ?? [];
    console.log(doneMigrations);

    for (const migr of this.migrateList) {
      if (!doneMigrations.includes(migr.name)) {
        await migr.up(queryInterface, Sequelize);
        await queryInterface.insert('SequelizeMeta', migr.name);
      }
    }
  },

  async up() {},
  async down() {},
}
