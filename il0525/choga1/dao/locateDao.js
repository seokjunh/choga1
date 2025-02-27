const { Op } = require('sequelize');
const { Locate, AirInfo } = require('../models/index');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      Locate.create(params).then((inserted) => {
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 리스트 조회
  selectList(params) {
    // where 검색 조건
    const setQuery = {};
    if (params.id) {
      setQuery.where = {
        ...setQuery.where,
        name: { [Op.like]: `%${params.name}%` }, // like검색
      };
    }

    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];

    return new Promise((resolve, reject) => {
      Locate.findAndCountAll({
        ...setQuery,
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      Locate.findByPk(
        params.locateX,
        params.locateY,
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // // 수정
  // update(params) {
  //   return new Promise((resolve, reject) => {
  //     Locate.update(
  //       params,
  //       {
  //         where: { name: params.name },
  //       },
  //     ).then(([updated]) => {
  //       resolve({ updatedCount: updated });
  //     }).catch((err) => {
  //       reject(err);
  //     });
  //   });
  // },
  // // 삭제
  // delete(params) {
  //   return new Promise((resolve, reject) => {
  //     Locate.destroy({
  //       where: { name: params.name },
  //     }).then((deleted) => {
  //       resolve({ deletedCount: deleted });
  //     }).catch((err) => {
  //       reject(err);
  //     });
  //   });
  // },
};

module.exports = dao;
