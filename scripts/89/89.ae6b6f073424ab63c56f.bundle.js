(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/lazyLayerLoader":"FayN","esri/layers/support/arcgisLayers":"KY+9"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{FayN:function(n,e,t){var r,i;r=[t.dj.c(n.i),e,t("2Kdy")],void 0===(i=function(n,e){Object.defineProperty(e,"__esModule",{value:!0}),e.layerLookupMap={BingMapsLayer:function(){return new Promise((function(n,e){t.e(87).then(function(){var e=[t("V7mb")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},BuildingSceneLayer:function(){return new Promise((function(n,e){t.e(42).then(function(){var e=[t("gRqF")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},CSVLayer:function(){return new Promise((function(n,e){Promise.all([t.e(5),t.e(80)]).then(function(){var e=[t("zwOT")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},ElevationLayer:function(){return new Promise((function(n,e){t.e(22).then(function(){var e=[t("GAgw")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},FeatureLayer:function(){return new Promise((function(n,e){t.e(5).then(function(){var e=[t("Zvuv")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},GroupLayer:function(){return new Promise((function(n,e){t.e(26).then(function(){var e=[t("lAGb")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},GeoRSSLayer:function(){return new Promise((function(n,e){t.e(94).then(function(){var e=[t("Hpgp")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},ImageryLayer:function(){return new Promise((function(n,e){Promise.all([t.e(7),t.e(10),t.e(11),t.e(44)]).then(function(){var e=[t("G5N4")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},ImageryTileLayer:function(){return new Promise((function(n,e){Promise.all([t.e(11),t.e(20),t.e(49)]).then(function(){var e=[t("EhmR")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},IntegratedMeshLayer:function(){return new Promise((function(n,e){Promise.all([t.e(17),t.e(62)]).then(function(){var e=[t("wehw")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},KMLLayer:function(){return new Promise((function(n,e){t.e(68).then(function(){var e=[t("hPxN")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},MapImageLayer:function(){return new Promise((function(n,e){t.e(19).then(function(){var e=[t("d+WR")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},MapNotesLayer:function(){return new Promise((function(n,e){Promise.all([t.e(5),t.e(95)]).then(function(){var e=[t("2OQv")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},OpenStreetMapLayer:function(){return new Promise((function(n,e){t.e(96).then(function(){var e=[t("793k")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},PointCloudLayer:function(){return new Promise((function(n,e){t.e(37).then(function(){var e=[t("wvIq")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},RouteLayer:function(){return new Promise((function(n,e){Promise.all([t.e(5),t.e(97)]).then(function(){var e=[t("BdvN")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},SceneLayer:function(){return new Promise((function(n,e){Promise.all([t.e(5),t.e(63)]).then(function(){var e=[t("yf9t")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},StreamLayer:function(){return new Promise((function(n,e){t.e(48).then(function(){var e=[t("QiYT")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},TileLayer:function(){return new Promise((function(n,e){Promise.resolve().then(function(){var e=[t("WiXY")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},UnknownLayer:function(){return new Promise((function(n,e){t.e(98).then(function(){var e=[t("N1SI")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},UnsupportedLayer:function(){return new Promise((function(n,e){t.e(99).then(function(){var e=[t("9ZiH")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},VectorTileLayer:function(){return new Promise((function(n,e){t.e(47).then(function(){var e=[t("UW67")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},WebTileLayer:function(){return new Promise((function(n,e){Promise.resolve().then(function(){var e=[t("a2fw")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},WMSLayer:function(){return new Promise((function(n,e){t.e(69).then(function(){var e=[t("dWJG")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))},WMTSLayer:function(){return new Promise((function(n,e){t.e(70).then(function(){var e=[t("AgRT")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))}}}.apply(null,r))||(n.exports=i)},"KY+9":function(n,e,t){var r,i;r=[t.dj.c(n.i),e,t("zOht"),t("zp6E"),t("ma1f"),t("8CIp"),t("FayN"),t("2Kdy")],void 0===(i=function(n,e,r,i,a,u,o){function c(n){return r.__awaiter(this,void 0,void 0,(function(){var e,t,i,o,c,f,y,d,p,b;return r.__generator(this,(function(v){switch(v.label){case 0:if(!(e=u.parse(n)))throw new a("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:n});switch(t=e.serverType,i=e.sublayer,c={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},t){case"MapServer":o=null!=i?"FeatureLayer":function(n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,h(n)];case 1:return[2,e.sent().tileInfo]}}))}))}(n).then((function(n){return n?"TileLayer":"MapImageLayer"}));break;case"ImageServer":o=h(n).then((function(n){var e=n.tileInfo&&n.tileInfo.format;return n.tileInfo?e&&"LERC"===e.toUpperCase()&&n.cacheType&&"elevation"===n.cacheType.toLowerCase()?"ElevationLayer":"ImageryTileLayer":"ImageryLayer"}));break;case"SceneServer":o=h(e.url.path).then((function(n){var e={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};if(n&&Array.isArray(n.layers)&&n.layers.length>0){var t=n.layers[0].layerType;if(null!=e[t])return e[t]}return"SceneLayer"}));break;default:o=c[t]}return f={FeatureLayer:!0,SceneLayer:!0},y={parsedUrl:e,Constructor:null,sublayerIds:null},[4,o];case 1:return d=v.sent(),f[d]&&null==i?[4,s(n)]:[3,3];case 2:1!==(p=v.sent()).length&&(y.sublayerIds=p),v.label=3;case 3:return b=y,[4,l(d)];case 4:return b.Constructor=v.sent(),[2,y]}}))}))}function s(n){return r.__awaiter(this,void 0,void 0,(function(){var e;return r.__generator(this,(function(t){switch(t.label){case 0:return[4,h(n)];case 1:return(e=t.sent())&&Array.isArray(e.layers)?[2,e.layers.map((function(n){return n.id})).reverse()]:[2,[]]}}))}))}function l(n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){return[2,(0,o.layerLookupMap[n])()]}))}))}function h(n){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(e){switch(e.label){case 0:return[4,i(n,{responseType:"json",query:{f:"json"}})];case 1:return[2,e.sent().data]}}))}))}Object.defineProperty(e,"__esModule",{value:!0}),e.fromUrl=function(n){return r.__awaiter(this,void 0,void 0,(function(){var e,i,a,u;return r.__generator(this,(function(o){switch(o.label){case 0:return[4,c(n.url)];case 1:return e=o.sent(),i=r.__assign(r.__assign({},n.properties),{url:n.url}),e.sublayerIds?[4,new Promise((function(n,e){t.e(26).then(function(){var e=[t("lAGb")];n.apply(null,e)}.bind(this)).catch(e.bind(this))}))]:[2,new e.Constructor(i)];case 2:return a=o.sent(),u=new a({title:e.parsedUrl.title}),function(n,e){return n.sublayerIds.map((function(t){return new n.Constructor(r.__assign(r.__assign({},e),{layerId:t,sublayerTitleMode:"service-name"}))}))}(e,i).forEach((function(n){return u.add(n)})),[2,u]}}))}))}}.apply(null,r))||(n.exports=i)}}]);