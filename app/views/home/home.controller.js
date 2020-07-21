import _ from 'lodash';
export default class HomeController {

    constructor(service, $window) {
        this.name = "aaa";
        this.service = service;
        this.currentPage = 1;
        this.activeTab = 1;
        this.gridData = [];
        var this_ = this;
        this.loading = false;
        angular.element($window).bind("scroll", function() {
            var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
            var body = document.body, html = document.documentElement;
            var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
            var windowBottom = windowHeight + window.pageYOffset;
            if (windowBottom >= docHeight) {
                this_.nextPage();
                
            }
        });
    }

    $onInit() {
        this.service.getGenreData().then(data => {
            this.genres = data.genres;
        });

        this.service.getBannerData().then(data => {
            this.bannerData = data;
        });

        this.service.getPopular(this.currentPage).then(data => {
            this.gridData =  this.gridData.concat(data);
        });
    }

    nextPage() {
        this.loading = true;
        this.getData(this.activeTab, this.currentPage + 1).then(data => {
            this.gridData =  this.gridData.concat(data);
            if(data && !_.isEmpty(data)) {
                this.currentPage ++;
            }
            this.loading = false;
        }).catch(e => {
            this.loading = false;
        });
    }

    changeTab(tabName) {
        this.currentPage = 1;
        switch(tabName) {
            case 'popular':
                this.activeTab = 1;
                this.getData(this.activeTab, this.currentPage).then(data => {
                    this.gridData =  data;
                });
                break;
            case 'top-rated':
                this.activeTab = 2;
                this.getData(this.activeTab, this.currentPage).then(data => {
                    this.gridData =  data;
                });
                break;
            case 'upcomming':
                this.activeTab = 3;
                this.getData(this.activeTab, this.currentPage).then(data => {
                    this.gridData =  data;
                });
                break;
            default:
                break;
        }
    }

    getData(activeTab, page) {
        switch(activeTab) {
            case 1:
                return this.service.getPopular(page);
            case 2:
                return this.service.getTopRated(page);
            case 3:
                return this.service.getUpcomming(page);
            default:
                break;
        }
    }

}

HomeController.$inject = ['homeService', '$window'];