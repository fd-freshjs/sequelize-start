const migrateList = [
  require("./20220624130130-create-user"),
  require("./20220627111205-add-password"),
  require("./20220627112812-create-order"),
  require("./20220627114346-create-products"),
  require("./20220627125220-create-category"),
  require("./20220627140257-create-bank-card"),
  require("./20220628114150-create-products-to-orders"),
  require("./20220628150200-add-checks-products-to-orders"),
  require("./20220628150200-add-checks-products-to-orders"),
  require('./20220628155107-add_products_to_users'),
];

module.exports = {
  async migrate(queryInterface, Sequelize) {
    const doneMigrations =
      (await queryInterface.select(null, "SequelizeMeta")) ?? [];
    console.log(doneMigrations, this);

    if (doneMigrations.length === migrateList.length) {
      console.log("No pending migrations found");
    }

    for (const migr of migrateList) {
      if (!doneMigrations.includes(migr.name)) {
        console.time(migr.name);
        console.log(`=== ${migr.name}: migrating`);

        await migr.up(queryInterface, Sequelize);
        await queryInterface.insert("SequelizeMeta", migr.name);

        console.log(`=== ${migr.name}: migrated`);
        console.timeEnd(migr.name);
      }
    }
  },

  async up() {},
  async down() {},
};
