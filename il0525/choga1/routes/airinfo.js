const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const airInfoService = require('../service/airInfoService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      dust: req.body.dust,
      no2: req.body.no2,
      o3: req.body.o3,
      co: req.body.co,
      checkday: req.body.checkday,
    };
    logger.info(`(airInfo.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.dust) {
      const err = new Error('Not allowed null (dust)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await airInfoService.reg(params);
    logger.info(`(airInfo.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 리스트 조회
router.get('/', async (req, res) => {
  try {
    const params = {
      name: req.query.name,
    };
    logger.info(`(airInfo.list.params) ${JSON.stringify(params)}`);

    const result = await airInfoService.list(params);
    logger.info(`(airInfo.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 상세정보 조회
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(airInfo.info.params) ${JSON.stringify(params)}`);

    const result = await airInfoService.info(params);
    logger.info(`(airInfo.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 수정
router.put('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
      name: req.body.name,
      code: req.body.code,
      description: req.body.description,
    };
    logger.info(`(airInfo.update.params) ${JSON.stringify(params)}`);

    const result = await airInfoService.edit(params);
    logger.info(`(airInfo.update.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// 삭제
router.delete('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(airInfo.delete.params) ${JSON.stringify(params)}`);

    const result = await airInfoService.delete(params);
    logger.info(`(airInfo.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
