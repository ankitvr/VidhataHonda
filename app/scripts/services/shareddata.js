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
  'defaultPages':
  [
    {'title':'Exteriors'},
    {'title':'Features'},
    {'title':'Specifications'},
    {'title':'Engine & Performance'},
    {'title':'Safety'},
    {'title':'Accessories'},
    {'title':'Price Range'}
  ],
  'cars':[
      {
        'carName': 'Honda-Amaze',
        'image':'/images/Honda-Amaze.jpg',
        'landingPage':'#/Honda-Amaze',
      },
      {
        'carName': 'Honda-Brio',
        'image':'/images/Honda-Brio.jpg',
        'landingPage':'#/Honda-Brio',
      },
      {
        'carName': 'Honda-City',
        'image':'/images/Honda-City.jpg',
        'landingPage':'#/Honda-City',
      },
      {
        'carName': 'Honda-Crv',
        'image':'/images/Honda-Crv.jpg',
        'landingPage':'#/Honda-Crv',
      },
      {
        'carName': 'Honda-Jazz',
        'image':'/images/Honda-Jazz.jpg',
        'landingPage':'#/Honda-Jazz',
      },
      {
        'carName': 'Honda-Mobilio',
        'image':'/images/Honda-Mobilio.jpg',
        'landingPage':'#/Honda-Mobilio',
      }
    ]
};
    return {getCarDetails: function () {
                return carDetails;
            }
      };
  });
