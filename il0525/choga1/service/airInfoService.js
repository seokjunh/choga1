const logger = require('../lib/logger');
const airInfoDao = require('../dao/airInfoDao');

const service = {
  // airInfo 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await airInfoDao.insert(params);
      logger.debug(`(airInfoService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(airInfoService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },
  // selectList
  async list(params) {
    let result = null;

    try {
      result = await airInfoDao.selectList(params);
      logger.debug(`(airInfoService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(airInfoService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await airInfoDao.selectInfo(params);
      logger.debug(`(airInfoService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(airInfoService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // update
  async edit(params) {
    let result = null;

    try {
      result = await airInfoDao.update(params);
      logger.debug(`(airInfoService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(airInfoService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
  // delelte
  async delete(params) {
    let result = null;

    try {
      result = await airInfoDao.delete(params);
      logger.debug(`(airInfoService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(airInfoService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },
};

module.exports = service;
