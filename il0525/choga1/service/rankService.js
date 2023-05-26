const logger = require('../lib/logger');
const rankDao = require('../dao/rankDao');

const service = {
  // rank 입력
  async reg(params) {
    let inserted = null;

    try {
      inserted = await rankDao.insert(params);
      logger.debug(`(rankService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(rankService.reg) ${err.toString()}`);
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
      result = await rankDao.selectList(params);
      logger.debug(`(rankService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(rankService.list) ${err.toString()}`);
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
      result = await rankDao.selectInfo(params);
      logger.debug(`(rankService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(rankService.info) ${err.toString()}`);
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
      result = await rankDao.update(params);
      logger.debug(`(rankService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(rankService.edit) ${err.toString()}`);
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
      result = await rankDao.delete(params);
      logger.debug(`(rankService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(rankService.delete) ${err.toString()}`);
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
