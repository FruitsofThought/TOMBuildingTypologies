"use strict";
define(
  ['require', 'scene'],
  function(require, Scene) {

    class SceneTOMBuildingTypologies extends Scene {
      constructor() {
          console.log("Going to Super Scene TOMBuildingTypologies");
          var config = {
            "id": "TOMBuildingTypologies",
            "groupid": "Urban",
            "languages": ['en-US', 'nl-NL'],
          };
          super(config);
        }
        // You must copy this, else we do not know where we are
      get path() {
        return require.toUrl("./").split('?')[0];
      }
      get legend() {
        //  var startdates = getStartDateArray();
        //var years = Object.keys(startdates);
        var legend = [];
        legend['items'] = [];
        return legend;
      };
    };
    return new SceneTOMBuildingTypologies();

  });
