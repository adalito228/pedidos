module.exports = function (sequelize, DataTypes) {
  const SentEmail = sequelize.define('SentEmail',//Define que va a haber un modelo 
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userType: {
        type: DataTypes.STRING,
        allowNull: false
      },
      emailTemplate: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sendAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      readedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      uuid: {
        type: DataTypes.STRING,
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
      tableName: 'sent_emails',
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

  SentEmail.associate = function (models) {
   
  }

  return SentEmail
}