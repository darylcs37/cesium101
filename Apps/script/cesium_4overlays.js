	var layers = viewer.imageryLayers;

	var esriPopulationDensity = new Cesium.ArcGisMapServerImageryProvider({
		url : 'https://agsc.pdc.org/arcgis/rest/services/global/pdc_basemap/MapServer/'
	});
	var lyrPopulationDensity = layers.addImageryProvider(esriPopulationDensity);
	lyrPopulationDensity.alpha = 0.0;
