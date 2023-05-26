const logger = require('../lib/logger');
const actDao = require('../dao/actDao');

const service = {
  // act 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await actDao.insert(params);
      logger.debug(`(actService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(actService.reg) ${err.toString()}`);
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
      result = await actDao.selectList(params);
      logger.debug(`(actService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(actService.list) ${err.toString()}`);
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
      result = await actDao.selectInfo(params);
      logger.debug(`(actService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(actService.info) ${err.toString()}`);
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
      result = await actDao.update(params);
      logger.debug(`(actService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(actService.edit) ${err.toString()}`);
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
      result = await actDao.delete(params);
      logger.debug(`(actService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(actService.delete) ${err.toString()}`);
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
