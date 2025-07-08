var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Pharmacie_sidislimane_1 = new ol.format.GeoJSON();
var features_Pharmacie_sidislimane_1 = format_Pharmacie_sidislimane_1.readFeatures(json_Pharmacie_sidislimane_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pharmacie_sidislimane_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pharmacie_sidislimane_1.addFeatures(features_Pharmacie_sidislimane_1);
var lyr_Pharmacie_sidislimane_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pharmacie_sidislimane_1, 
                style: style_Pharmacie_sidislimane_1,
                popuplayertitle: 'Pharmacie_.sidislimane',
                interactive: true,
                title: '<img src="styles/legend/Pharmacie_sidislimane_1.png" /> Pharmacie_.sidislimane'
            });
var format_Limites_sidislimane_2 = new ol.format.GeoJSON();
var features_Limites_sidislimane_2 = format_Limites_sidislimane_2.readFeatures(json_Limites_sidislimane_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limites_sidislimane_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limites_sidislimane_2.addFeatures(features_Limites_sidislimane_2);
var lyr_Limites_sidislimane_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limites_sidislimane_2, 
                style: style_Limites_sidislimane_2,
                popuplayertitle: 'Limites_sidislimane',
                interactive: true,
                title: '<img src="styles/legend/Limites_sidislimane_2.png" /> Limites_sidislimane'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Pharmacie_sidislimane_1.setVisible(true);lyr_Limites_sidislimane_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Pharmacie_sidislimane_1,lyr_Limites_sidislimane_2];
lyr_Pharmacie_sidislimane_1.set('fieldAliases', {'Name': 'Name', 'Telephone': 'Telephone', });
lyr_Limites_sidislimane_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'POP': 'POP', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Pharmacie_sidislimane_1.set('fieldImages', {'Name': 'TextEdit', 'Telephone': 'TextEdit', });
lyr_Limites_sidislimane_2.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NAME': 'TextEdit', 'POP': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pharmacie_sidislimane_1.set('fieldLabels', {'Name': 'header label - visible with data', 'Telephone': 'header label - visible with data', });
lyr_Limites_sidislimane_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'header label - visible with data', 'POP': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Limites_sidislimane_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});