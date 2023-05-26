const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const actService = require('../service/actService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      act: req.body.act,
      comments: req.body.act,
    };
    logger.info(`(act.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.act) {
      const err = new Error('Not allowed null (act)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await actService.reg(params);
    logger.info(`(act.reg.result) ${JSON.stringify(result)}`);

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
      act: req.query.act,
    };
    logger.info(`(act.list.params) ${JSON.stringify(params)}`);

    const result = await actService.list(params);
    logger.info(`(act.list.result) ${JSON.stringify(result)}`);

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
    logger.info(`(act.info.params) ${JSON.stringify(params)}`);

    const result = await actService.info(params);
    logger.info(`(act.info.result) ${JSON.stringify(result)}`);

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
    logger.info(`(act.update.params) ${JSON.stringify(params)}`);

    const result = await actService.edit(params);
    logger.info(`(act.update.result) ${JSON.stringify(result)}`);

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
    logger.info(`(act.delete.params) ${JSON.stringify(params)}`);

    const result = await actService.delete(params);
    logger.info(`(act.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
