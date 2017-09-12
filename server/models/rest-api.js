'use strict';
var app = require('../../server/server');
var getPartnerList  = require('../api/getPartnerNearMe');
var getAllPartnerList = require('../api/getPartnerListAll');
var getPartnerListFeature = require('../api/getPartnerListFeature');
var getMasterCategory  = require('../api/getAllMasterCategory');
var getMemberShipDetails = require('../api/getMemberShipDetails');
module.exports = function(Restapi) {
  var ds = app.dataSources.sqlserver;

  /*get Partners Near me */
  //start
  Restapi.getPartnerNearMe = function (Long,Lat,Radius,cb) {
    getPartnerList.getPartnerNearMe(ds,Long,Lat,Radius,cb);
  };
  getPartnerList.remoteMethod(Restapi);
  //end

  /* get list of all Partners */
  //start
  Restapi.getAllPartnerList = function (Long,Lat,cb) {
    getAllPartnerList.getAllPartnerList(ds,Long,Lat,cb);
  };
  getAllPartnerList.remoteMethod(Restapi);
  //end

  /* get partner list feature */
  //start
  Restapi.getPartnerListFeature = function (Long,Lat,Radius,MasterCatID,cb) {
    getPartnerListFeature.getPartnerListFeature(ds,Long,Lat,Radius,MasterCatID,cb);
  };
  getPartnerListFeature.remoteMethod(Restapi);
  //end

  /* get master category */
  //start
  Restapi.getAllMasterCategory = function (cb) {
    getMasterCategory.getAllMasterCategory(ds,cb);
  };
  getMasterCategory.remoteMethod(Restapi);
  //end

/* get member ship details */
//start
Restapi.getMemberShipDetails = function (membership,cb) {
 getMemberShipDetails.getMemberShipDetails(ds,membership,cb);
};
getMemberShipDetails.remoteMethod(Restapi);
//end

};
