'use strict'
exports.getAllPartnerList = function (ds,Long,Lat,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_PartnerList_All]\n" +
    "\t\t@Long = "+Long+",\n" +
    "\t\t@Lat ="+Lat;

  ds.connector.query(sql, function (err, data) {
    if (err) {
      console.log("Error:", err);
    }
    cb(null, data);
    console.log("data:", data);
  });
}

exports.remoteMethod = function (Restapi) {
  Restapi.remoteMethod(
    'getAllPartnerList',
    {
      accepts: [
        {arg: 'Long', type: 'number'},
        {arg: 'Lat', type: 'number'}
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partners/All', verb: 'post'}
    }
  );
}
