'use strict'
exports.getPartnerNearMe = function (ds,Long,Lat,Radius,cb) {

  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_PartnerList_NearMe]\n" +
    "\t\t@Long = "+Long+",\n" +
    "\t\t@Lat = "+Lat+",\n" +
    "\t\t@Radius = "+Radius+"\n" +
    "\n" +
    "SELECT\t'Return Value' = @return_value";

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
    'getPartnerNearMe',
    {
      accepts: [
        {arg: 'Long', type: 'number'},
        {arg: 'Lat', type: 'number'},
        {arg: 'Radius', type: 'number'},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Partners/NearMe', verb: 'post'}
    }
  );

}
