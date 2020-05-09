


		//---------------------------------------------------------------------------
		// 0. - OpenStreetMaps
		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'Open\u00adStreet\u00adMap',
			iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/openStreetMap.png'),
			tooltip : 'OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.\nhttp://www.openstreetmap.org',
			creationFunction : function() {
//				return Cesium.createOpenStreetMapImageryProvider({
        return new Cesium.OpenStreetMapImageryProvider({
					url : 'https://a.tile.openstreetmap.org/'
				});
			}
		}));

		//---------------------------------------------------------------------------
		// 1. - ArcGIS (Satellite)
		var providerArcGISAerial = new Cesium.UrlTemplateImageryProvider({
// (local cache)	url : baseMapLocalPath + 'Mapbox/'
 			url : '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/'
		});

		providerArcGISAerial.requestImage = function(x, y, level) {
			// build the actual URL however you need, including the query string
			// http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}
// (local cache)	var url = this.url + level +'/'+ y +'/'+ level +'_y'+ y +'_x'+ x +'.png';
			var url = this.url + level +'/'+ y +'/'+ x;

			return Cesium.ImageryProvider.loadImage(this, url);
		}

		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'ArcGIS Aerial',
			iconUrl : Cesium.buildModuleUrl(imageURL +'esriWorldImagery.png'),
			tooltip : 'ArcGIS (Aerial)',
			creationFunction : function() {
				return providerArcGISAerial;
			}
		}));

/*
		//---------------------------------------------------------------------------
		// 1. - Bing Maps
		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'Bing Maps Aerial',
			iconUrl : Cesium.buildModuleUrl('Widgets/Images/ImageryProviders/bingAerial.png'),
			tooltip : 'Bing Maps aerial imagery \nhttp://www.bing.com/maps',
			creationFunction : function() {
			return new Cesium.BingMapsImageryProvider({
				url : '//dev.virtualearth.net',
				mapStyle : Cesium.BingMapsStyle.AERIAL
				});
			}
		}));
*/


		//---------------------------------------------------------------------------
		// 2. Mapbox Street // https://a.tiles.mapbox.com/v4/mapbox.streets/5/22/16.webp?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA
		var providerMapbox = new Cesium.UrlTemplateImageryProvider({
// (local cache)	url : baseMapLocalPath + 'Mapbox/'
 			url : '//a.tiles.mapbox.com/v4/mapbox.streets/'
		});

		providerMapbox.requestImage = function(x, y, level) {
			// build the actual URL however you need, including the query string
			// wwwroot/data/transas/1/0/1_y0_x1.png
// (local cache)	var url = this.url + level +'/'+ y +'/'+ level +'_y'+ y +'_x'+ x +'.png';
			var url = this.url + level +'/'+ x +'/'+ y +'.png?access_token=pk.eyJ1IjoiendhZGlhIiwiYSI6InlYbnFfUFEifQ.G5od28q6cCQhxrQGKSg1kg';

			return Cesium.ImageryProvider.loadImage(this, url);
		}

		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'MapBox',
			iconUrl : Cesium.buildModuleUrl(imageURL +'mapbox.png'),
			tooltip : 'MapBox',
			creationFunction : function() {
				return providerMapbox;
			}
		}));
		//---------------------------------------------------------------------------
		// 3. Mapbox Blue - https://b.tiles.mapbox.com/v4/zwadia.k5hj7olb/12/1206/1543.png?access_token=pk.eyJ1IjoiendhZGlhIiwiYSI6InlYbnFfUFEifQ.G5od28q6cCQhxrQGKSg1kg
		var providerMapboxBlue = new Cesium.UrlTemplateImageryProvider({
 			url : '//b.tiles.mapbox.com/v4/zwadia.k5hj7olb/'

		});

		providerMapboxBlue.requestImage = function(x, y, level) {
			// build the actual URL however you need, including the query string
			var url = this.url + level +'/'+ x +'/'+ y +'.png?access_token=pk.eyJ1IjoiendhZGlhIiwiYSI6InlYbnFfUFEifQ.G5od28q6cCQhxrQGKSg1kg';

			return Cesium.ImageryProvider.loadImage(this, url);
		}

		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'MapBox Blue',
			iconUrl : Cesium.buildModuleUrl(imageURL +'mapbox_blue.png'),
			tooltip : 'MapBox Blue (online)',
			creationFunction : function() {
				return providerMapboxBlue;
			}
		}));


		//---------------------------------------------------------------------------
		// 4. OneMap.sg
		var providerOneMapSG = new Cesium.UrlTemplateImageryProvider({
// (local cache)				url : baseMapLocalPath + 'OneMap.sg/'
    // https://maps-b.onemap.sg/v3/Grey/16/51673/32532.png
			url : '//maps-c.onemap.sg/v3/Default_HD/'
		});

		providerOneMapSG.requestImage = function(x, y, level) {
// (local cache)				var url = this.url + level +'/'+ y +'/'+ level +'_y'+ y +'_x'+ x +'.png';

var url = this.url + level +'/'+ x +'/'+ y +'.png';
			return Cesium.ImageryProvider.loadImage(this, url);
		}

		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'OneMap.sg',
			iconUrl : Cesium.buildModuleUrl(imageURL +'onemapsg.png'),
			tooltip : 'OneMap.sg',
			creationFunction : function() {
				return providerOneMapSG;
			}
		}));

		//---------------------------------------------------------------------------
		// 5. OneMap.sg - Color
		var providerOneMapSGColor = new Cesium.UrlTemplateImageryProvider({
// (local cache)							url : baseMapLocalPath + 'OneMap.sg_color/'
			url : '//maps-c.onemap.sg/v3/Grey/'
		});

		providerOneMapSGColor.requestImage = function(x, y, level) {
// (local cache)							var url = this.url + level +'/'+ y +'/'+ level +'_y'+ y +'_x'+ x +'.png';
      var url = this.url + level +'/'+ x +'/'+ y +'.png';
			return Cesium.ImageryProvider.loadImage(this, url);
		}

		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'OneMap.sg (Color)',
			iconUrl : Cesium.buildModuleUrl(imageURL +'onemapsgColor.png'),
			tooltip : 'OneMap.sg (Color)',
			creationFunction : function() {
				return providerOneMapSGColor;
			}
		}));

		//---------------------------------------------------------------------------
		// 6. OneMap.sg - Satellite
		var providerOneMapSGSatellite = new Cesium.UrlTemplateImageryProvider({
// (local cache)							url : baseMapLocalPath + 'OneMap.sg_satellite/'
			url : '//maps-b.onemap.sg/v3/Satellite/'
		});

		providerOneMapSGSatellite.requestImage = function(x, y, level) {
// (local cache)							var url = this.url + level +'/'+ y +'/'+ level +'_y'+ y +'_x'+ x +'.png';
			var url = this.url + level +'/'+ x +'/'+ y +'.png';
			return Cesium.ImageryProvider.loadImage(this, url);
		}

		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'OneMap.sg (Satellite)',
			iconUrl : Cesium.buildModuleUrl(imageURL +'onemapsgSatellite.png'),
			tooltip : 'OneMap.sg (Satellite)',
			creationFunction : function() {
				return providerOneMapSGSatellite;
			}
		}));

		//---------------------------------------------------------------------------
		// 7. Sea Chart http://t1.openseamap.org/seamark/14/12919/8133.png
		var providerSeaChart = new Cesium.UrlTemplateImageryProvider({
 			url : 'http://t1.openseamap.org/seamark/'
		});

		providerSeaChart.requestImage = function(x, y, level) {
			var url = this.url + level +'/'+ x +'/'+ y +'.png';

			return Cesium.ImageryProvider.loadImage(this, url);
		}

		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'Sea Chart',
			iconUrl : Cesium.buildModuleUrl(imageURL +'transas.png'),
			tooltip : 'Sea Chart (online)',
			creationFunction : function() {
				return providerSeaChart;
			}
		}));

		//---------------------------------------------------------------------------
		// 11. Stamen Toner - http://b.tile.stamen.com/toner/12/661/1580.png
		var providerStamenToner = new Cesium.UrlTemplateImageryProvider({
 			url : '//b.tile.stamen.com/toner/'

		});

		providerStamenToner.requestImage = function(x, y, level) {
			var url = this.url + level +'/'+ x +'/'+ y +'.png';

			return Cesium.ImageryProvider.loadImage(this, url);
		}

		imageryViewModels.push(new Cesium.ProviderViewModel({
			name : 'Stamen Toner',
			iconUrl : Cesium.buildModuleUrl(imageURL +'stamenToner.png'),
			tooltip : 'Stamen Toner (online)',
			creationFunction : function() {
				return providerStamenToner;
			}
		}));
