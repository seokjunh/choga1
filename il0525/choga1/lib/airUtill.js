const superagent = require('superagent');
const dotenv = require('dotenv');
const logger = require('./logger');

dotenv.config();

const airDataConfig = {
  url: process.env.API_URL,
  key: process.env.API_KEY,
};

const airUtill = {
  async getData(params) {
    let response = null;
    let airData = null;
    let result = {};

    try {
      // if (params.lat && params.lng) {
      //   const xyConv = this.dfs_xy_conv('toXY', params.lat, params.lng);
      //   params.locateX = xyConv.x;
      //   params.locateY = xyConv.y;
      // }

      response = await superagent.get(airDataConfig.url).query({
        serviceKey: airDataConfig.key,
        numOfRows: params.numOfRows,
        pageNo: params.pageNo,
        returnType: 'json',
        sidoName: params.sidoName,
        // no2Grade: params.no2Grade,
        // o3Grade: params.o3Grade,
        // coGrade: params.coGrade,
      });
      airData = JSON.parse(response.text).response.body.items;

      //  airData.foreach(v=>{
      //   if (v.catagory === "SKY") {
      //     result.SKY.push(v)}
      //   else if (v.catagory === "UUU"){result.UUU.push(v)}
      //   else if (v.catagoty === "VVV"){result.VVV.push(v)}

      //  })
      console.log(airData);
      result = airData.map((v) => ({
        sidoName: v.sidoName,
        stationName: v.stationName,
        dataTime: v.dataTime,
        no2_grade: v.no2Grade,
        o3_grade: v.o3Grade,
        co_grade: v.coGrade,
      }));
      // airData.forEach((v) => {
      //   if (result[v.category] !== undefined) {
      //     result[v.category].push(v);
      //   } else {
      //     result[v.category] = v;
      //   }
      // });

      logger.debug(`(airUtill.getData)-${result}`);
    } catch (err) {
      logger.error(`(airUtill.getData)-${err.toString()}`);
    }

    return { result };
  },

  // dfs_xy_conv(code, v1, v2) {
  //   const RE = 6371.00877; // 지구 반경(km)
  //   const GRID = 5.0; // 격자 간격(km)
  //   const SLAT1 = 30.0; // 투영 위도1(degree)
  //   const SLAT2 = 60.0; // 투영 위도2(degree)
  //   const OLON = 126.0; // 기준점 경도(degree)
  //   const OLAT = 38.0; // 기준점 위도(degree)
  //   const XO = 43; // 기준점 X좌표(GRID)
  //   const YO = 136; // 기1준점 Y좌표(GRID)
  //   const DEGRAD = Math.PI / 180.0;
  //   const RADDEG = 180.0 / Math.PI;

  //   const re = RE / GRID;
  //   const slat1 = SLAT1 * DEGRAD;
  //   const slat2 = SLAT2 * DEGRAD;
  //   const olon = OLON * DEGRAD;
  //   const olat = OLAT * DEGRAD;

  //   let sn = Math.tan(Math.PI * 0.25 + slat2 * 0.5) / Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  //   sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  //   let sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  //   sf = sf ** sn * Math.cos(slat1) / sn;
  //   let ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  //   ro = re * sf / ro ** sn;
  //   const rs = {};
  //   if (code == 'toXY') {
  //     rs.lat = v1;
  //     rs.lng = v2;
  //     let ra = Math.tan(Math.PI * 0.25 + (v1) * DEGRAD * 0.5);
  //     ra = re * sf / ra ** sn;
  //     let theta = v2 * DEGRAD - olon;
  //     if (theta > Math.PI) theta -= 2.0 * Math.PI;
  //     if (theta < -Math.PI) theta += 2.0 * Math.PI;
  //     theta *= sn;
  //     rs.x = Math.floor(ra * Math.sin(theta) + XO + 0.5);
  //     rs.y = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  //   } else {
  //     rs.x = v1;
  //     rs.y = v2;
  //     const xn = v1 - XO;
  //     const yn = ro - v2 + YO;
  //     ra = Math.sqrt(xn * xn + yn * yn);
  //     if (sn < 0.0) -ra;
  //     let alat = (re * sf / ra) ** (1.0 / sn);
  //     alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

  //     if (Math.abs(xn) <= 0.0) {
  //       theta = 0.0;
  //     } else if (Math.abs(yn) <= 0.0) {
  //       theta = Math.PI * 0.5;
  //       if (xn < 0.0) -theta;
  //     } else theta = Math.atan2(xn, yn);
  //     const alon = theta / sn + olon;
  //     rs.lat = alat * RADDEG;
  //     rs.lng = alon * RADDEG;
  //   }
  //   return rs;
  // },
};

module.exports = airUtill;
