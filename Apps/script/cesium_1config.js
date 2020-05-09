		var accessToken = 'pk.eyJ1IjoicXRyYW5kZXYiLCJhIjoiSDF2cGNjZyJ9.D1ybOKe77AQDPHkxCCEpJQ';
		accessToken = 'pk.eyJ1IjoibGF1cmVuYW5jb25hIiwiYSI6Im5EaldBcVUifQ.MTeXi8ZLmYhMBxnZ0nBG3A';
		accessToken = 'pk.eyJ1IjoiendhZGlhIiwiYSI6InlYbnFfUFEifQ.G5od28q6cCQhxrQGKSg1kg';

		var imageryViewModels = [];
//		var imageURL = 'http://localhost:8080/cesium/Apps/sg_cesium/images/imageProvider/';
    var imageURL = '../../Apps/cesium101/images/imageProvider/';

		var baseMap_OSM                = 0;
		var baseMap_Bing               = 1;
		var baseMap_MapBox             = 2; // local cache
		var baseMap_MapBoxBlue         = 3;
		var baseMap_OneMapSG           = 4; // local cache
		var baseMap_oneMapSG_Color     = 5;
		var baseMap_oneMapSG_Satellite = 6;

		var baseMap_SeaChart           = 7; // local cache
		var baseMap_StamenToner        = 8; // local cache

		var baseMapLocalPath     = '../../../data/';
		var baseMap_default      = baseMap_OSM;

		var cctvTrafficLocalPath = 'data/images_traffic/';
		var cctvFloodLocalPath   = 'data/images_flood/';
