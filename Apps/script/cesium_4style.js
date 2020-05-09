

		var billCameraTraffic = new Cesium.BillboardGraphics();
		billCameraTraffic.image = new Cesium.ConstantProperty('images/icon_camera.png');


		var billCameraFlood = new Cesium.BillboardGraphics();
		billCameraFlood.image = new Cesium.ConstantProperty('images/icon_floodcamera.png');

		

//----------------------------------------------------------------------------
// Land  - FireStation, Hospital, Police, School
		var billboardFireStation = new Cesium.BillboardGraphics();
		billboardFireStation.image = new Cesium.ConstantProperty('images/icon_fire.png');

		var billboardHospital = new Cesium.BillboardGraphics();
		billboardHospital.image = new Cesium.ConstantProperty('images/icon_hospital.png');

		var billboardPolice = new Cesium.BillboardGraphics();
		billboardPolice.image = new Cesium.ConstantProperty('images/icon_police.png');

		var billboardSchool = new Cesium.BillboardGraphics();
		billboardSchool.image = new Cesium.ConstantProperty('images/icon_school.png');
//		billboardSchool.rotation = Cesium.Math.toRadians(90);
// Cesium.HeightReference.CLAMP_TO_GROUND

//		var billboardAirTrack = new Cesium.BillboardGraphics();
//		billboardAirTrack.image = new Cesium.ConstantProperty('images/icon_aircraft32.png');

		var billLampPost = new Cesium.BillboardGraphics();
		billLampPost.image = new Cesium.ConstantProperty('images/icon_lamppost.png');

//----------------------------------------------------------------------------
// SG MSO - OneService.sg
		var billboardMSO_Animals = new Cesium.BillboardGraphics();
		billboardMSO_Animals.image = new Cesium.ConstantProperty('images/mso_casemap-icons-animals.png');

		var billboardMSO_Cleanliness = new Cesium.BillboardGraphics();
		billboardMSO_Cleanliness.image = new Cesium.ConstantProperty('images/mso_casemap-icons-cleanliness.png');

		var billboardMSO_Construction = new Cesium.BillboardGraphics();
		billboardMSO_Construction.image = new Cesium.ConstantProperty('images/mso_casemap-icons-construction.png');

		var billboardMSO_Drains = new Cesium.BillboardGraphics();
		billboardMSO_Drains.image = new Cesium.ConstantProperty('images/mso_casemap-icons-drains.png');

		var billboardMSO_Drinking = new Cesium.BillboardGraphics();
		billboardMSO_Drinking.image = new Cesium.ConstantProperty('images/mso_casemap-icons-drinking.png');

		var billboardMSO_Pests = new Cesium.BillboardGraphics();
		billboardMSO_Pests.image = new Cesium.ConstantProperty('images/mso_casemap-icons-pests.png');

		var billboardMSO_RoadsFootpaths = new Cesium.BillboardGraphics();
		billboardMSO_RoadsFootpaths.image = new Cesium.ConstantProperty('images/mso_casemap-icons-roads.png');

		var billboardMSO_Trees = new Cesium.BillboardGraphics();
		billboardMSO_Trees.image = new Cesium.ConstantProperty('images/mso_casemap-icons-trees.png');

//-----------------------------------------------------------------------------
// Weather
		var billboard = new Cesium.BillboardGraphics();
		billboard.image = new Cesium.ConstantProperty('images/icon_weather_biomedical.png');


		var billboardAvalanche = new Cesium.BillboardGraphics();
		billboardAvalanche.image = new Cesium.ConstantProperty('images/icon_weather_active_avalanche.png');

		var billboardBiomedial = new Cesium.BillboardGraphics();
		billboardBiomedial.image = new Cesium.ConstantProperty('images/icon_weather_active_biomedical.png');

		var billboardCyclone = new Cesium.BillboardGraphics();
		billboardCyclone.image = new Cesium.ConstantProperty('images/icon_weather_active_cyclone.png');

		var billboardDrought = new Cesium.BillboardGraphics();
		billboardDrought.image = new Cesium.ConstantProperty('images/icon_weather_active_drought.png');

		var billboardEarthquake = new Cesium.BillboardGraphics();
		billboardEarthquake.image = new Cesium.ConstantProperty('images/icon_weather_active_earthquake.png');

		var billboardExtremeTemp = new Cesium.BillboardGraphics();
		billboardExtremeTemp.image = new Cesium.ConstantProperty('images/icon_weather_active_extreme_temperature.png');

		var billboardFlood = new Cesium.BillboardGraphics();
		billboardFlood.image = new Cesium.ConstantProperty('images/icon_weather_active_flood.png');

		var billboardHighsurf = new Cesium.BillboardGraphics();
		billboardHighsurf.image = new Cesium.ConstantProperty('images/icon_weather_active_high_surf.png');

		var billboardHighwind = new Cesium.BillboardGraphics();
		billboardHighwind.image = new Cesium.ConstantProperty('images/icon_weather_active_highwind.png');

		var billboardLandslide = new Cesium.BillboardGraphics();
		billboardLandslide.image = new Cesium.ConstantProperty('images/icon_weather_active_landslide.png');

		var billboardStorm = new Cesium.BillboardGraphics();
		billboardStorm.image = new Cesium.ConstantProperty('images/icon_weather_active_storm.png');

		var billboardTornado = new Cesium.BillboardGraphics();
		billboardTornado.image = new Cesium.ConstantProperty('images/icon_weather_active_tornado.png');

		var billboardTsunami = new Cesium.BillboardGraphics();
		billboardTsunami.image = new Cesium.ConstantProperty('images/icon_weather_active_tsunami.png');

		var billboardVolcano = new Cesium.BillboardGraphics();
		billboardVolcano.image = new Cesium.ConstantProperty('images/icon_weather_active_volcano.png');

		var billboardWildFire = new Cesium.BillboardGraphics();
		billboardWildFire.image = new Cesium.ConstantProperty('images/icon_weather_active_wildfire.png');

		var billboardWinterStorm= new Cesium.BillboardGraphics();
		billboardWinterStorm.image = new Cesium.ConstantProperty('images/icon_weather_active_winterstorm.png');

//----------------------------------------------------------------------------
// Land  - Traffic News
		var billboardOther = new Cesium.BillboardGraphics();
		billboardOther.image = new Cesium.ConstantProperty('images/traffic/Traffic_OtherIncident.png');

		var billboardAccident = new Cesium.BillboardGraphics();
		billboardAccident.image = new Cesium.ConstantProperty('images/traffic/Traffic_Accident.png');

		var billboardFaultyLights = new Cesium.BillboardGraphics();
		billboardFaultyLights.image = new Cesium.ConstantProperty('images/traffic/Traffic_FaultyLights.png');

		var billboardHeavyTraffic = new Cesium.BillboardGraphics();
		billboardHeavyTraffic.image = new Cesium.ConstantProperty('images/traffic/Traffic_HeavyTraffic.png');

		var billboardMajorRoadWorks = new Cesium.BillboardGraphics();
		billboardMajorRoadWorks.image = new Cesium.ConstantProperty('images/traffic/Traffic_MajorRoadWorks.png');

		var billboardVehicleBreakdown = new Cesium.BillboardGraphics();
		billboardVehicleBreakdown.image = new Cesium.ConstantProperty('images/traffic/Traffic_VehicleBreakdown.png');

//----------------------------------------------------------------------------
// Land  - Flood Sensor
		var billboardFloodBlack = new Cesium.BillboardGraphics();
		billboardFloodBlack.image = new Cesium.ConstantProperty('images/flood/icon_floodsensor_black.png');

		var billboardFloodGreen = new Cesium.BillboardGraphics();
		billboardFloodGreen.image = new Cesium.ConstantProperty('images/flood/icon_floodsensor_green.png');

		var billboardFloodRed = new Cesium.BillboardGraphics();
		billboardFloodRed.image = new Cesium.ConstantProperty('images/flood/icon_floodsensor_red.png');

		var billboardFloodYellow = new Cesium.BillboardGraphics();
		billboardFloodYellow.image = new Cesium.ConstantProperty('images/flood/icon_floodsensor_yellow.png');


//----------------------------------------------------------------------------
// Sea - Sea Port

		var billSeaPort = new Cesium.BillboardGraphics();
		billSeaPort.image = new Cesium.ConstantProperty('images/icon_seaport.png');


//----------------------------------------------------------------------------
// Air Tracks / Plans
var stripe = new Cesium.StripeMaterialProperty({
	orientation : Cesium.StripeOrientation.HORIZONTAL,
	evenColor   : Cesium.Color.GREEN.withAlpha(0.9),
	oddColor    : Cesium.Color.WHITE.withAlpha(0.0),
	offset      : 0.0,
	repeat      : 80,
	orientation : Cesium.StripeOrientation.VERTICAL,
});

var gridY1 = new Cesium.GridMaterialProperty({
	color         : Cesium.Color.fromCssColorString('#9f59df'),
	cellAlpha     : 0.1,
	lineCount     : new Cesium.Cartesian2(250, 1),
	lineThickness : new Cesium.Cartesian2(2.0, 2.0)
});

var gridY2 = new Cesium.GridMaterialProperty({
	color         : Cesium.Color.fromCssColorString('#9544df'),
	cellAlpha     : 0.1,
	lineCount     : new Cesium.Cartesian2(250, 1),
	lineThickness : new Cesium.Cartesian2(2.0, 2.0)
});

var gridY3 = new Cesium.GridMaterialProperty({
	color         : Cesium.Color.BLUEVIOLET,
	cellAlpha     : 0.1,
	lineCount     : new Cesium.Cartesian2(250, 1),
	lineThickness : new Cesium.Cartesian2(2.0, 2.0)
});



//----------------------------------------------------------------------------