		//----------------------------------------------------------------------------
		// SG - Camera - Traffic
		var dsCamTraffic = new Cesium.GeoJsonDataSource();
		dsCamTraffic.load('data/geojson/land/SG_TrafficCamera.geojson').then(function(dataSource) {
			//Get the array of entities
			var entities = dataSource.entities.values;
        
			var colorHash = {};
			for (var i = 0; i < entities.length; i++) {
				//For each entity, create a random color based on the state name.
		            //Some states have multiple entities, so we store the color in a
		            //hash so that we use the same color for the entire state.
		            var entity = entities[i];
 				entity.point = undefined;

				var sName = entity.properties.name;
//				var sImage = entity.properties.images[0];
				var sImage = entity.properties.images; // this is incorrect

				entity.billboard = billCameraTraffic;

				entity.description = '<table width="200" height="280">'+
								'<tr><td colspan="2"><img src="'+ cctvTrafficLocalPath + sImage +'" width="300"/></td></tr>'+
								'<tr><td>Name</td><td>'+ sName  +'</td></tr></table>';

			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});

		//----------------------------------------------------------------------------
		// SG - Camera - Flood
		var dsCamFlood = new Cesium.GeoJsonDataSource();
		dsCamFlood.load('data/geojson/land/SG_FloodCamera.geojson').then(function(dataSource) {
			//Get the array of entities
			var entities = dataSource.entities.values;
        
			var colorHash = {};
			for (var i = 0; i < entities.length; i++) {
				//For each entity, create a random color based on the state name.
		            //Some states have multiple entities, so we store the color in a
		            //hash so that we use the same color for the entire state.
		            var entity = entities[i];
 				entity.point = undefined;

				var sID = entity.properties.cameraID;
				var sName = entity.properties.name;
//				var sImage = entity.properties.images[0];
				var sImage = entity.properties.images; // this is incorrect

				entity.billboard = billCameraFlood;

				entity.description = '<table width="200" height="280">'+
								'<tr><td colspan="2"><img src="'+ cctvFloodLocalPath + sImage +'" width="300"/></td></tr>'+
								'<tr><td>Name</td><td>'+ sName  +'</td></tr>'+
								'</table>';

			}
		}).otherwise(function(error){
			//Display any errrors encountered while loading.
			window.alert(error);
		});