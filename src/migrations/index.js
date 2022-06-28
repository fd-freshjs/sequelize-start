const { Sequelize } = require("../models");

const migrateList = [
  require("./20220624130130-create-user"),
  require("./20220627111205-add-password"),
  require("./20220627112812-create-order"),
  require("./20220627114346-create-products"),
  require("./20220627125220-create-category"),
  require("./20220627140257-create-bank-card"),
  require("./20220628114150-create-products-to-orders"),
  require("./20220628150200-add-checks-products-to-orders"),
  require("./20220628155107-add_products_to_users"),
  require('./20220628162500-insert-categories'),
  require('./20220628162600-insert-products'),
  require("./20220628171500-add-bankcard-constraints"),
];

module.exports = {
  async migrate(sequelize) {
    const queryInterface = sequelize.getQueryInterface();
    const Sequelize = sequelize.Sequelize;

    const doneMigrations =
    (await queryInterface.select(null, "SequelizeMeta")) ?? [];
    console.log("Checking migrations...");

    const mNames = migrateList.map(m => m.name);
    const dmNames = doneMigrations.map(m => m.name).filter(n => n !== 'index.js');

    if (dmNames.every(name => mNames.find(m => m === name))) {
      console.log("No pending migrations found");
    }

    for (const migr of migrateList) {
      if (migr.name && !dmNames.find((name) => name === migr.name)) {
        console.time(migr.name);
        console.log(`=== ${migr.name}: migrating`);
        const transaction = await sequelize.transaction();
        try {
          await migr.up(queryInterface, Sequelize);
          await queryInterface.insert(null, "SequelizeMeta", {
            name: migr.name,
          });

          await transaction.commit();
        } catch (error) {
          await transaction.rollback();
          throw error;
        }

        console.log(`=== ${migr.name}: migrated`);
        console.timeEnd(migr.name);
      }
    }
  },

  async up() {},
  async down() {},
};
