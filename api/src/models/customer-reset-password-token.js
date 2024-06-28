module.exports = function (sequelize, DataTypes) {
  const CustomerResetPasswordToken = sequelize.define('CustomerResetPasswordToken',//Define que va a haber un modelo 
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
      reference: {
        type: DataTypes.STRING,
        allowNull: false
      },
      totalBasePrice : {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      saleDate : {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      saleTime : {
        type: DataTypes.TIME,
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
      tableName: 'customer_reset_password_tokens',
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

  CustomerResetPasswordToken.associate = function (models) {
   
  }

  return CustomerResetPasswordToken
}