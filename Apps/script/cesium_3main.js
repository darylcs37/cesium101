
		//---------------------------------------------------------------------------
		var viewer = new Cesium.Viewer('cesiumContainer', {
			imageryProvider      : false,
			timeline             : false,
			navigationHelpButton : false,
			scene3DOnly          : true,
			fullscreenButton     : false,
			baseLayerPicker      : false,
			homeButton           : false,
			infoBox              : true,
			sceneModePicker      : false,
			selectionIndicator   : false,
			animation            : false,
			geocoder             : false,
			sceneMode            : Cesium.SceneMode.SCENE3D
		});

		// Compass
		// viewer.extend(Cesium.viewerCesiumNavigationMixin, {});


		var layers = viewer.imageryLayers;

		// Finally, create the baseLayerPicker widget using our view models.
		var baseLayerPicker = new Cesium.BaseLayerPicker('baseLayerPickerContainer', {
			globe : viewer.scene.globe,
			imageryProviderViewModels        : imageryViewModels,
			selectedImageryProviderViewModel : imageryViewModels[baseMap_default],
		});

		//----------------------------------------------------------------------------
		// Camera - Set position with a top-down view
		viewer.camera.setView({
			destination : Cesium.Cartesian3.fromDegrees(103.8198, 1.3521, 100000.0)
		});
