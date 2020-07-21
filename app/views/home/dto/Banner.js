import { timers } from "jquery";

import CONSTANTS  from '../../../constants';
export default class Banner {
    constructor(movie, genreNames) {
        this.id = movie.id;
        this.backdropPath = CONSTANTS.POSTER_PREFIX_PATH + movie.backdrop_path;
        this.genreNames = genreNames;
        this.duration = 1000;
        this.voteAverage = movie.vote_average;
        this.title = movie.title;
        this.voteCount = movie.vote_count
    }
}