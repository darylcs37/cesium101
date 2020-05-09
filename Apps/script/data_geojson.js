		//---------------------------------------------------------------------------
		// GeoJSON - Air Runway - LINE
/*
		var dsRunway = Cesium.GeoJsonDataSource.load('../../data/geojson/air/runway_l.geojson', {
			stroke       : Cesium.Color.HOTPINK,
			fill         : Cesium.Color.PINK,
			strokeWidth  : 5,
			markerSymbol : '?'
		});

		viewer.dataSources.add(dsRunway );
*/
//		viewer.zoomTo(dsRunway );
		//----------------------------------------------------------------------------
		// runway
		var dsRunway = new Cesium.GeoJsonDataSource();
		dsRunway.load('data/geojson/air/runway_l.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			var colorHash = {};
			for (var i = 0; i < entities.length; i++) {
				//For each entity, create a random color based on the state name.
		            //Some states have multiple entities, so we store the color in a
		            //hash so that we use the same color for the entire state.
		            var entity = entities[i];
      			var name = entity.name;

				//Set the polygon material to our random color.
				entity.polygon.material = Cesium.Color.HOTPINK;
				//Remove the outlines.
				//entity.polygon.outline = false;

				entity.polygon.extrudedHeight = 50.0;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// Drone
		var dsDrone = new Cesium.GeoJsonDataSource();
		dsDrone.load('data/geojson/air/drone_A.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			var colorHash = {};
			for (var i = 0; i < entities.length; i++) {
				//For each entity, create a random color based on the state name.
		            //Some states have multiple entities, so we store the color in a
		            //hash so that we use the same color for the entire state.
		            var entity = entities[i];
      			var name = entity.name;

				//Remove the outlines.
				entity.polygon.outline = false;

				// Color
				entity.polygon.material = Cesium.Color.RED.withAlpha(0.2);

				//Extrude the polygon based on the state's population.  Each entity
				//stores the properties for the GeoJSON feature it was created from
				//Since the population is a huge number, we divide by 50.
				// entity.polygon.extrudedHeight = entity.properties.Population / 50.0;
				entity.polygon.extrudedHeight = 200.0;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// Land  - Fire-Station
		var dsFireStation = new Cesium.GeoJsonDataSource();
		dsFireStation.load('data/geojson/land/firestation_P.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity = entities[i];
				entity.point = undefined;
				entity.billboard = billboardFireStation;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// Land  - Hospital
		var dsHospital = new Cesium.GeoJsonDataSource();
		dsHospital.load('data/geojson/land/hospital_P.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity = entities[i];
				entity.point = undefined;
				entity.billboard = billboardHospital;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// Land  - Police
		var dsPolice = new Cesium.GeoJsonDataSource();
		dsPolice.load('data/geojson/land/police_P.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity = entities[i];
				entity.point = undefined;
				entity.billboard = billboardPolice;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// Land  - SG LTA Lamp post
		var dsSGLampPost = new Cesium.GeoJsonDataSource();
		dsSGLampPost.load('data/geojson/land/sg_lta_lamppost_P.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity = entities[i];
				entity.point = undefined;
				entity.billboard = billLampPost;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// Sea - World Port Index
		var dsSeaPort = new Cesium.GeoJsonDataSource();
		dsSeaPort.load('data/geojson/sea/worldportindex_P.geojson').then(function(dataSource) {
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity = entities[i];
				entity.point = undefined;
				entity.billboard = billSeaPort;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// Land  - School
		var dsSchool = new Cesium.GeoJsonDataSource();
		dsSchool.load('data/geojson/land/school_P.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity = entities[i];
				entity.point = undefined;

// "geometry": { "type": "Point", "coordinates": [ 98.672018, 3.589172 ]
//double longitudeRadians = Trig.DegreesToRadians(-75.59777);
//double latitudeRadians = Trig.DegreesToRadians(40.03883);
//double altitudeMeters = 113.9952;
//Cartographic cartographic = new Cartographic(longitudeRadians, latitudeRadians, altitudeMeters);



				entity.billboard = billboardSchool;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});


		//----------------------------------------------------------------------------
		// Singapore - MSO - OneService.sg

		var dsOneServiceSG = new Cesium.GeoJsonDataSource();
		dsOneServiceSG.load('data/geojson/land/sg_OneService_case_All.geojson').then(function(dataSource) {
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity = entities[i];
				entity.point = undefined;


				var sType = entity.properties.Category;


				if (sType=='Animals') {
					entity.billboard = billboardMSO_Animals;
				}
				else if (sType=='Cleanliness') {
					entity.billboard = billboardMSO_Cleanliness;
				}
				else if (sType=='Construction Sites') {
					entity.billboard = billboardMSO_Construction;
				}
				else if (sType=='Drains and Sewers') {
					entity.billboard = billboardMSO_Drains;
				}
				else if (sType=='Drinking Water') {
					entity.billboard = billboardMSO_Drinking;
				}
				else if (sType=='Pests') {
					entity.billboard = billboardMSO_Pests;
				}
				else if (sType=='Roads and Footpaths') {
					entity.billboard = billboardMSO_RoadsFootpaths;
				}
				else if (sType=='Road Incidents') {
					entity.billboard = billboardMSO_RoadsFootpaths;
				}
				else if (sType=='Trees and Greenery') {
					entity.billboard = billboardMSO_Trees;
				}
				else {
					entity.billboard = billboard;
				}

				entity.name = 'SG - MSO OneService.sg';
				entity.description = '<table width="100%" height="200" class="roundedCorners">'+
							   '<tr><td>ID</td><td>'+ entity.properties.ID +'</td></tr>'+
							   '<tr><td>Name</td><td>'+ entity.properties.name +'</td></tr>'+
							   '<tr><td>Location</td><td>'+ entity.properties.StreetNo +' '+ entity.properties.StreetName +' '+ entity.properties.PostalCode +'</td></tr>'+
							   '<tr><td>CreateDateTime</td><td>'+ entity.properties.CreateDateTime +'</td></tr>'+
							   '</table>';

			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});


		//----------------------------------------------------------------------------
		// Weather - PDC
		// alerts_pdc.geojson
		var dsWeatherPDC = new Cesium.GeoJsonDataSource();
		dsWeatherPDC.load('data/geojson/weather/pdc_integrated_active_hazards_many.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity = entities[i];
				entity.point = undefined;


				var sType = entity.properties.type;



				if (sType=='AVALANCHE') {
					entity.billboard = billboardAvalanche;
				}
				else if (sType=='BIOMEDICAL') {
					entity.billboard = billboardBiomedial;
				}
				else if (sType=='CYCLONE') {
					entity.billboard = billboardCyclone;
				}
				else if (sType=='DROUGHT') {
					entity.billboard = billboardDrought;
				}
				else if (sType=='EARTHQUAKE') {
					entity.billboard = billboardEarthquake;
				}
				else if (sType=='EXTREMETEMPERATURE') {
					entity.billboard = billboardExtremeTemp;
				}
				else if (sType=='FLOOD') {
					entity.billboard = billboardFlood;
				}
				else if (sType=='HIGHSURF') {
					entity.billboard = billboardHighsurf;
				}
				else if (sType=='HIGHWIND') {
					entity.billboard = billboardHighwind;
				}
				else if (sType=='LANDSLIDE') {
					entity.billboard = billboardLandslide;
				}
				else if (sType=='STORM') {
					entity.billboard = billboardStorm;
				}
				else if (sType=='TORNADO') {
					entity.billboard = billboardTornado;
				}
				else if (sType=='TSUNAMI') {
					entity.billboard = billboardTsunami;
				}
				else if (sType=='VOLCANO') {
					entity.billboard = billboardVolcano;
				}
				else if (sType=='WILDFIRE') {
					entity.billboard = billboardWildFire;
				}
				else if (sType=='WINTERSTORM') {
					entity.billboard = billboardWinterStorm;
				}
				else {
					entity.billboard = billboard;
				}

// represent as a SHAPE
//				entity.billboard = undefined;
//				entity.point = new Cesium.PointGraphics({
//					color: Cesium.Color.fromRandom(),
//					pixelSize: 100
//		 		});

			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// SG - buildings
		var dsSGOutram = new Cesium.GeoJsonDataSource();
		dsSGOutram.load('data/geojson/land/sg_CBD_A.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			var colorHash = {};
			for (var i = 0; i < entities.length; i++) {
				//For each entity, create a random color based on the state name.
		            //Some states have multiple entities, so we store the color in a
		            //hash so that we use the same color for the entire state.
		            var entity = entities[i];
      			var name = entity.name;

				var sType = entity.properties.DATA_SOURCE;
				if (sType=='BCA') {
					entity.polygon.material = Cesium.Color.DARKSEAGREEN.withAlpha(0.8);
				}
				else if (sType=='HDB') {
					entity.polygon.material = Cesium.Color.PINK.withAlpha(0.3);
				}
				else if (sType=='LIC') {
					entity.polygon.material = Cesium.Color.YELLOW.withAlpha(0.8);
				}
				else if (sType=='LTA') {
					entity.polygon.material = Cesium.Color.DIMGRAY.withAlpha(0.8);
				}
				else if (sType=='SLA') {
					entity.polygon.material = Cesium.Color.BLUEVIOLET.withAlpha(0.8);
				}
				else {
					entity.polygon.material = Cesium.Color.BLUE.withAlpha(0.8);
					console.warn('['+ sType  +']');
				}

				//Remove the outlines.
				entity.polygon.outlineColor = Cesium.Color.DIMGRAY.withAlpha(0.3);
				entity.polygon.outline = true;

				entity.polygon.extrudedHeight = 30.0;
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});

		//----------------------------------------------------------------------------
		// SG - Traffic News
		var dsTrafficNews = new Cesium.GeoJsonDataSource();
		dsTrafficNews.load('data/geojson/land/QI_Traffic News.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			var colorHash = {};
			for (var i = 0; i < entities.length; i++) {
				//For each entity, create a random color based on the state name.
		            //Some states have multiple entities, so we store the color in a
		            //hash so that we use the same color for the entire state.
		            var entity = entities[i];
 				entity.point = undefined;

				var sType = entity.properties.type;


				if (sType=='#traffic_vehiclebreakdown') {
					entity.billboard = billboardVehicleBreakdown;
				}
				else if (sType=='#traffic_heavytraffic') {
					entity.billboard = billboardHeavyTraffic;
				}
				else if (sType=='#traffic_roadwork') {
					entity.billboard = billboardMajorRoadWorks;
				}
				else if (sType=='#traffic_faultylights') {
					entity.billboard = billboardFaultyLights;
				}
				else if (sType=='#traffic_accident') {
					entity.billboard = billboardAccident;
				}
				else {
					entity.billboard = billboardOther;
				}
			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
		//----------------------------------------------------------------------------
		// SG - Flood Sensors
		var dsFloodSensor = new Cesium.GeoJsonDataSource();
		dsFloodSensor.load('data/geojson/land/sg_flood_sensor.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			var colorHash = {};
			for (var i = 0; i < entities.length; i++) {
				//For each entity, create a random color based on the state name.
		            //Some states have multiple entities, so we store the color in a
		            //hash so that we use the same color for the entire state.
		            var entity = entities[i];
 				entity.point = undefined;

				var sType = entity.properties.statusCode;

				if (sType=='fs_green') {
					entity.billboard = billboardFloodGreen;
				}
				else if (sType=='fs_black') {
					entity.billboard = billboardFloodBlack;
				}
				else if (sType=='fs_red') {
					entity.billboard = billboardFloodRed;
				}
				else {
					entity.billboard = billboardFloodYellow;
				}

				entity.name = 'SG - PUB - Flood Sensors';
				entity.description = '<table width="100%" height="200" class="roundedCorners">'+
							   '<tr><td>ID</td><td>'+ entity.properties.code +'</td></tr>'+
							   '<tr><td>Name</td><td>'+ entity.properties.name +'</td></tr>'+
							   '<tr><td>Description</td><td>'+ entity.properties.desc +'</td></tr>'+
							   '<tr><td>Status</td><td>'+ entity.properties.statusDesc +'</td></tr>'+
							   '<tr><td>Water Level</td><td>'+ entity.properties.waterLevel +'</td></tr>'+
							   '<tr><td>CreateDateTime</td><td>'+ entity.properties.createDateTime +'</td></tr>'+
							   '</table>';

			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});





		//----------------------------------------------------------------------------
		// Air Tracks
		var ellipsoid = viewer.scene.globe.ellipsoid;

		var dsAirTracks = new Cesium.GeoJsonDataSource();
		dsAirTracks.load('data/geojson/air/airtracks_sg.geojson').then(function(dataSource) {
//			viewer.dataSources.add(dataSource);
			//Get the array of entities
			var entities = dataSource.entities.values;

			for (var i = 0; i < entities.length; i++) {
				var entity       = entities[i];
				entity.point     = undefined;

				var dHeading = 360.0 - entity.properties.HEADING;
				var billboardAirTrack = new Cesium.BillboardGraphics();
				billboardAirTrack.image = new Cesium.ConstantProperty('images/icon_aircraft32.png');
				billboardAirTrack.rotation = Cesium.Math.toRadians(dHeading);

				var dHeight = entity.properties.HEIGHTINMETRES;
//				billboardAirTrack.position = entity.positions;
//				var cartesianPositions = entity.positions;

//var aPos = entity.position;
// console.log(_value._value.x );

				var cartesian = entity.position.getValue(Cesium.JulianDate.now());
				var cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(cartesian);
				var latitude = cartographic.latitude;
				var longitude= cartographic.longitude;

//console.warn( Cesium.Math.toDegrees(cartographic.longitude) + ', ' +Cesium.Math.toDegrees(cartographic.latitude) );
// console.warn(cartographic.longitude +','+ cartographic.latitude +','+ dHeight+10);

//				entity.position = Cesium.Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, dHeight+10);


            var color = Cesium.Color.HOTPINK;
            var surfacePosition = Cesium.Cartesian3.fromDegrees(longitude, latitude, 0);
            var heightPosition = Cesium.Cartesian3.fromDegrees(longitude, latitude, 1200);

            var polyline = new Cesium.PolylineGraphics();
            polyline.material = new Cesium.ColorMaterialProperty(color);
            polyline.width = new Cesium.ConstantProperty(2);
            polyline.followSurface = new Cesium.ConstantProperty(false);
            polyline.positions = new Cesium.ConstantProperty([surfacePosition, heightPosition]);

entity.polyline = polyline;

/*
    entities.add({
        name : 'Line 1',
        description : 'desc 1',

        polyline : {
            positions: [
                Cesium.Cartesian3.fromDegrees(-86.0, 55.0, 0),
                Cesium.Cartesian3.fromDegrees(-86.0, 55.0, 1000)
            ],
            width : new Cesium.ConstantProperty(2),
            material : Cesium.Color.fromRandom({alpha : 1.0}),
            followSurface : new Cesium.ConstantProperty(false)
        }
    });
*/


				// console.warn(dHeading );

//entity.name = 'An Entity';
//entity.description = 'Hello World';
//var coord = entity.geometry.coordinates;
//console.warn(coord);
//				var cartographicPositions = Cesium.Ellipsoid.WGS84.cartesianArrayToCartographicArray(cartesianPositions);
//				var cartographicPositions = viewer.scene.globe.ellipsoid.cartesianArrayToCartographicArray(cartesianPositions._value);
//				var longitude = cartesianPositions[i].longitude;
//				var latitude = cartographicPositions[0].latitude;
//				var height = cartographicPositions[0].height;
//				console.log(longitude +','+latitude);


				entity.billboard = billboardAirTrack;



			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});
