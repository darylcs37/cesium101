	//----------------------------------------------------------------------------
	// Fly camera to a POINT + heading-pitch-roll
	// Lat/Lon: [1.26,103.91] height: -0.00 range: 30145.77 Heading: 5.73 Tilt: -0.7012376596671097
	// Flyover_Cameras(1.26, 103.91, 100, 5.73, -0.7012376596671097, 6.2831654377331585);
	function Flyover_Cameras(lon, lat, height, iHeading, iPitch, iRoll) {
			viewer.camera.flyTo({ 
				destination: Cesium.Cartesian3.fromDegrees(lon, lat, height),
				orientation : {
					heading : iHeading,
					pitch : iPitch,
					roll : iRoll
				},
				duration: 5
			});
	} // Flyover_Cameras
	//----------------------------------------------------------------------------
	// Get current camera look angle	
	// Height is INCORRENT!!!
	function getCameraLookingAt() {
		var camera = viewer.camera;
		var canvas = viewer.scene.canvas;

	
		var ray = camera.getPickRay(new Cesium.Cartesian2(
			Math.round(canvas.clientWidth / 2),
			Math.round(canvas.clientHeight / 2)
		));

		var position = camera.position; // viewer.scene.globe.pick(ray, viewer.scene);
		if (Cesium.defined(position)) {
			var cartographic = Cesium.Ellipsoid.WGS84.cartesianToCartographic(position);
			var height = cartographic.height;
			var range = Cesium.Cartesian3.distance(position, camera.position);
			var iHeading = camera.heading;
			var iTilt = camera.pitch;
			var iRoll = camera.roll;

			// Flyover_Cameras(lon, lat, height, iHeading, iPitch, iRoll)
			console.warn( Cesium.Math.toDegrees(cartographic.longitude).toFixed(6) + 
				', ' +Cesium.Math.toDegrees(cartographic.latitude).toFixed(6) + 
				', ' +  height.toFixed(6) +
//                ' range: ' + range.toFixed(2) +
				', ' + iHeading.toFixed(2) +
				', ' + iTilt +
				', ' + iRoll 
			);

		} 
		else {
	            console.log('Looking at space?');
		}
	}


	function Flyaround() {
var center = Cesium.Cartesian3.fromDegrees(103.844678, 1.266833);

var heading = 0.06;

var pitch = -0.7299808863604147;

var range =  500;

viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, range));

 

var deltaAngle = 0.584/180*Math.PI;// /180*Math.PI is deg to rad

viewer.clock.onTick.addEventListener(function(clock)

{

           // option 1

           viewer.scene.camera.rotate(Cesium.Cartesian3.UNIT_Z, deltaAngle);

           // option 2

           //heading-=0.01;

           //viewer.camera.lookAt(center, new Cesium.HeadingPitchRange(heading, pitch, range));

 

});


	}

