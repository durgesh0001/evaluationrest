'use strict'
exports.getMemberShipDetails = function (ds,membership,cb) {
  var sql = "DECLARE\t@return_value int\n" +
    "\n" +
    "EXEC\t@return_value = [dbo].[REST_sp_GetMemberDetails]\n" +
    "\t\t@membership = "+membership;

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
    'getMemberShipDetails',
    {
      accepts: [
        {arg: 'membership', type: 'number'},
      ],
      returns: {arg: 'result', type: 'object'},
      http: {path: '/Member', verb: 'post'}
    }
  );
}
