import CONSTANTS from '../../constants';
import _ from  'lodash';
import Banner from './dto/Banner';
import GridObject from './dto/GridObject';

export default class HomeService {
  constructor($http) {
    this.$http = $http;
  }

  getBannerData() {

   return this.getGenreData().then(genreData => {

      var genreObj = {};
      _.forEach(genreData.genres, (genre) => {
        genreObj[genre.id] = genre.name;
      });

      return this.$http.get(CONSTANTS.BANNER_URL)
      .then(function (success) {
        var bannerData = [];
        if(success.data) {
          if(!_.isEmpty(success.data.items)) {
            _.forEach(success.data.items, (movie, index) => {
              var genreNames = [];
              _.forEach(movie.genre_ids, genreId => {
                genreNames.push(genreObj[genreId]);
              });
              bannerData.push(new Banner(movie, genreNames));
            });
          }
        }
        return bannerData;
      }, function (failure) {
        throw (failure);
      });
    });

  }

  getGenreData() {
    return this.$http.get(CONSTANTS.GENRE_URL)
      .then(function (success) {
        return success.data;
      }, function (failure) {
        throw (failure);
      });
  }

  getPopular(page) {
    return this.getGridData(CONSTANTS.POPULAR_URL, page);
  }

  getGridData(baseUrl, page) {
    return this.getGenreData().then(genreData => {

      var genreObj = {};
      _.forEach(genreData.genres, (genre) => {
        genreObj[genre.id] = genre.name;
      });

      return this.$http.get(baseUrl + "&page=" + page)
      .then(function (success) {
        var data = [];
        if(success.data) {
          if(!_.isEmpty(success.data.results)) {
            _.forEach(success.data.results, (movie, index) => {
              var genreNames = [];
              _.forEach(movie.genre_ids, genreId => {
                genreNames.push(genreObj[genreId]);
              });
              data.push(new GridObject(movie, genreNames));
            });
          }
        }
        return data;
      }, function (failure) {
        throw (failure);
      });
    });
  }

  getTopRated(page) {
    return this.getGridData(CONSTANTS.TOP_RATED_URL, page);
  }

  getUpcomming(page) {
    return this.getGridData(CONSTANTS.UP_COMMING_URL, page);
  }

}

HomeService.$inject = ['$http'];
