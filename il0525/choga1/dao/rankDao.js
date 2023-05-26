const { Op } = require('sequelize');
const { Rank, Airinfo, Act } = require('../models/index');
;

const dao = {
  insert(params) {
    return new Promise((resolve, reject) => {
      Rank.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  selectList(params) {
    // where 검색 조건
    const setQuery = {};

    if (params.id) {
      setQuery.where = {
        ...setQuery.where,
        id: params.id, // '=' 검색


      };
    }
    if (params.name) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.name}%` }, // like검색
      };
    }
    setQuery.order = [['id', 'DESC']];
    return new Promise((resolve, reject) => {
      // Rank.findAll
      Rank.findAndCountAll({
        ...setQuery,
        // attributes: ['id', 'name', 'code'],
        include: [
          {
            model: Rank,
            as: 'Rank',
            attributes: Airinfo.includeAttributes,
            // static includeAttributes = ['dust', 'no2', 'o3', 'co','checkday']
          },
        ]
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      // Rank.findAll
      Rank.findByPk(
        params.id,{
        include: [
          {
            model: Post,
            as: 'Posts',
            attributes: Post.includeAttributes,

          },
        ]
      }
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  update(params) {
    return new Promise((resolve, reject) => {
      // Rank.findAll
      Rank.update(
        params,
        {
          where: { id: params.id },
        },
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  delete(params) {
    return new Promise((resolve, reject) => {
      // Rank.findAll
      Rank.destroy(
        {
          where: { id: params.id },
        },
      ).then(([deleted]) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;