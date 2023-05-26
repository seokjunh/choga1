const logger = require('../lib/logger');
const locateDao = require('../dao/locateDao');

const service = {
  // locate 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await locateDao.insert(params);
      logger.debug(`(locateService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(locateService.reg) ${err.toString()}`);
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
      result = await locateDao.selectList(params);
      logger.debug(`(locateService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(locateService.list) ${err.toString()}`);
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
      result = await locateDao.selectInfo(params);
      logger.debug(`(locateService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(locateService.info) ${err.toString()}`);
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
      result = await locateDao.update(params);
      logger.debug(`(locateService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(locateService.edit) ${err.toString()}`);
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
      result = await locateDao.delete(params);
      logger.debug(`(locateService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(locateService.delete) ${err.toString()}`);
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
