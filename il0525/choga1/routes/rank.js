const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const rankService = require('../service/rankService');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      rank: req.body.rank,
    };
    logger.info(`(rank.reg.params) ${JSON.stringify(params)}`);

    // 입력값 null 체크
    if (!params.rank) {
      const err = new Error('Not allowed null (rank)');
      logger.error(err.toString());

      res.status(500).json({ err: err.toString() });
    }

    // 비즈니스 로직 호출
    const result = await rankService.reg(params);
    logger.info(`(rank.reg.result) ${JSON.stringify(result)}`);

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
      rank: req.query.rank,
    };
    logger.info(`(rank.list.params) ${JSON.stringify(params)}`);

    const result = await rankService.list(params);
    logger.info(`(rank.list.result) ${JSON.stringify(result)}`);

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
    logger.info(`(rank.info.params) ${JSON.stringify(params)}`);

    const result = await rankService.info(params);
    logger.info(`(rank.info.result) ${JSON.stringify(result)}`);

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
    logger.info(`(rank.update.params) ${JSON.stringify(params)}`);

    const result = await rankService.edit(params);
    logger.info(`(rank.update.result) ${JSON.stringify(result)}`);

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
    logger.info(`(rank.delete.params) ${JSON.stringify(params)}`);

    const result = await rankService.delete(params);
    logger.info(`(rank.delete.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
