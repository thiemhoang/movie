import _ from 'lodash';

import CONSTANTS  from '../../../constants';
export default class GridObject {
    constructor(movie, genreNames) {
        this.id = movie.id;
        this.posterPath = CONSTANTS.POSTER_PREFIX_PATH + movie.poster_path;
        this.genreNames = _.join(genreNames, ', ');
        this.voteAverage = movie.vote_average;
        this.title = movie.title;
        this.publishYear = movie.release_date.split('-')[0];
    }
}