const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const airUtil = require('../lib/airUtill');
// const airService = require('../service/airServices');

// 등록
router.post('/', async (req, res) => {
  try {
    const params = {
      numOfRows: req.body.numOfRows,
      pageNo: req.body.pageNo,
      sidoName: req.body.sidoName,
      no2Grade: req.body.no2Grade,
      o3Grade: req.body.o3Grade,
      coGrade: req.body.coGrade,
    };
    logger.info(`(air.reg.params) ${JSON.stringify(params)}`);

    // 비즈니스 로직 호출
    const result = await airUtil.getData(params);
    logger.info(`(air.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

module.exports = router;
