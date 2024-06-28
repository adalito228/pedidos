module.exports = function (sequelize, DataTypes) {
  const CustomerActivationToken = sequelize.define('CustomerActivationToken',//Define que va a haber un modelo 
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      customerId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      token: {
        type: DataTypes.STRING,
        allowNull: false
      },
      expirationDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      used: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE
      },
      updatedAt: {
        type: DataTypes.DATE
      }
    }, {
      sequelize,
      tableName: 'customer_activation_tokens',
      timestamps: true,
      paranoid: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    }
  )

  CustomerActivationToken.associate = function (models) {
   
  }

  return CustomerActivationToken
}