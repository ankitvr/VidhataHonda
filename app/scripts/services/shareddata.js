'use strict';

/**
 * @ngdoc service
 * @name vidhataHondaApp.SharedData
 * @description
 * # SharedData
 * Service in the vidhataHondaApp.
 */

angular.module('vidhataHondaApp')
  .service('SharedData', function () {
    var carDetails =
  {
  "defaultPages":
  [
    {"title":"Exteriors"},
    {"title":"Features"},
    {"title":"Specifications"},
    {"title":"Engine & Performance"},
    {"title":"Safety"},
    {"title":"Accessories"},
    {"title":"Price Range"}
  ],
  "cars":[
      {
        "carName": "Honda-Amaze",
        "image":"/images/homepage/slider/Honda-Amaze.jpg",
        "landingPage":"#/Honda-Amaze",
      },
      {
        "carName": "Honda-Brio",
        "image":"/images/homepage/slider/Honda-Brio.jpg",
        "landingPage":"#/Honda-Brio",
      },
      {
        "carName": "Honda-City",
        "image":"/images/homepage/slider/Honda-City.jpg",
        "landingPage":"#/Honda-City",
      },
      {
        "carName": "Honda-Crv",
        "image":"/images/homepage/slider/Honda-Crv.jpg",
        "landingPage":"#/Honda-Crv",
      },
      {
        "carName": "Honda-Jazz",
        "image":"/images/homepage/slider/Honda-Jazz.jpg",
        "landingPage":"#/Honda-Jazz",
      },
      {
        "carName": "Honda-Mobilio",
        "image":"/images/homepage/slider/Honda-Mobilio.jpg",
        "landingPage":"#/Honda-Mobilio",
      }
    ]
}
    return {getCarDetails: function () {
                return carDetails;
            }
      };
  });
