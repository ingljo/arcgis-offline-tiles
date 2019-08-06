(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/mixins/SceneService":"JNpq","esri/layers/IntegratedMeshLayer":"wehw"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{JNpq:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("9opi"),r("qKT0"),r("zp6E"),r("ma1f"),r("qsST"),r("EUqE"),r("qMld"),r("jfWY"),r("Vx27"),r("N7S/"),r("MFVu"),r("Z4y+"),r("0RER"),r("2fnV"),r("FEX1"),r("QJ8R"),r("8CIp"),r("EtsK")],void 0===(n=function(e,t,r,o,n,i,a,p,s,l,y,u,d,c,h,f,v,m,g,S){var x=a.getLogger("esri.layers.mixins.SceneService");return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.blendMode=null,t.spatialReference=null,t.fullExtent=null,t.heightModelInfo=null,t.version={major:Number.NaN,minor:Number.NaN,versionString:""},t.copyright=null,t.sublayerTitleMode="item-title",t.title=null,t.layerId=null,t}return r(t,e),t.prototype.readSpatialReference=function(e,t){return this._readSpatialReference(t)},t.prototype._readSpatialReference=function(e){if(null!=e.spatialReference)return c.fromJSON(e.spatialReference);var t=e.store,r=t.indexCRS||t.geographicCRS,o=r&&parseInt(r.substring(r.lastIndexOf("/")+1,r.length),10);return null!=o?new c(o):null},t.prototype.readFullExtent=function(e,t){var r=t.store,o=this._readSpatialReference(t);return null==o||null==r||null==r.extent||!Array.isArray(r.extent)||r.extent.some(function(e){return e<-1e38})?null:new u({xmin:r.extent[0],ymin:r.extent[1],xmax:r.extent[2],ymax:r.extent[3],spatialReference:o})},t.prototype.readVersion=function(e,t){var r=t.store,o=null!=r.version?r.version.toString():"",n={major:Number.NaN,minor:Number.NaN,versionString:o},i=o.split(".");return i.length>=2&&(n.major=parseInt(i[0],10),n.minor=parseInt(i[1],10)),n},t.prototype.readTitlePortalItem=function(e,t){return"item-title"!==this.sublayerTitleMode?void 0:e},t.prototype.readTitleService=function(e,t){var r=this.portalItem&&this.portalItem.title;if("item-title"===this.sublayerTitleMode)return g.titleFromUrlAndName(this.url,t.name);var o=t.name||g.parse(this.url).title;return"item-title-and-service-name"===this.sublayerTitleMode&&r&&(o=r+" - "+o),g.cleanTitle(o)},t.prototype.readLayerId=function(e,t){return t.id},Object.defineProperty(t.prototype,"url",{set:function(e){var t=g.sanitizeUrlWithLayerId(this,e,x);this._set("url",t.url),null!=t.layerId&&this._set("layerId",t.layerId)},enumerable:!0,configurable:!0}),t.prototype.writeUrl=function(e,t,r,o){g.writeUrlWithLayerId(this,e,"layers",t,o)},Object.defineProperty(t.prototype,"parsedUrl",{get:function(){var e=this._get("url");if(!e)return null;var t=l.urlToObject(e);return null!=this.layerId&&g.match.test(t.path)&&(t.path=t.path+"/layers/"+this.layerId),t},enumerable:!0,configurable:!0}),t.prototype.readRootNode=function(e,t){return t.store.rootNode},t.prototype._verifyRootNodeAndUpdateExtent=function(){var e=this;return this._fetchRootNode().then(function(t){return e._updateExtentFromRootNode(t)})},t.prototype._updateExtentFromRootNode=function(e){if(null!=this.fullExtent&&!this.fullExtent.hasZ&&null!=e&&Array.isArray(e.mbs)&&4===e.mbs.length){var t=e.mbs[2],r=e.mbs[3];this.fullExtent.zmin=t-r,this.fullExtent.zmax=t+r}},t.prototype._fetchRootNode=function(){if(!this.rootNode)return s.resolve();var e=l.join(this.parsedUrl.path,this.rootNode);return n(e,{query:{f:"json"},responseType:"json"}).then(function(e){return e.data}).catch(function(t){throw new i("sceneservice:root-node-missing","Root node missing.",{error:t,url:e})})},t.prototype._fetchService=function(){var e=this;return(null==this.layerId&&/SceneServer\/*$/i.test(this.url)?this._fetchFirstLayerId().then(function(t){null!=t&&(e.layerId=t)}):s.resolve()).then(function(){return e._fetchServiceLayer()})},t.prototype._fetchFirstLayerId=function(){return n(this.url,{query:{f:"json"},responseType:"json"}).then(function(e){if(e.data&&Array.isArray(e.data.layers)&&e.data.layers.length>0)return e.data.layers[0].id})},t.prototype._fetchServiceLayer=function(){var e=this;return n(this.parsedUrl.path,{query:{f:"json"},responseType:"json"}).then(function(t){t.ssl&&(e.url=e.url.replace(/^http:/i,"https:"));var r=t.data;e.read(r,{origin:"service",url:e.parsedUrl}),e._validateLayer(r)})},t.prototype._validateLayer=function(e){},o([y.shared({id:{json:{origins:{service:{read:!1},"portal-item":{read:!1}}}}})],t.prototype,"properties",void 0),o([y.property({type:c})],t.prototype,"spatialReference",void 0),o([y.reader("spatialReference",["spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readSpatialReference",null),o([y.property({type:u})],t.prototype,"fullExtent",void 0),o([y.reader("fullExtent",["store.extent","spatialReference","store.indexCRS","store.geographicCRS"])],t.prototype,"readFullExtent",null),o([y.property({readOnly:!0,type:d})],t.prototype,"heightModelInfo",void 0),o([y.property({readOnly:!0})],t.prototype,"version",void 0),o([y.reader("version",["store.version"])],t.prototype,"readVersion",null),o([y.property({type:String,json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),o([y.property({type:String,json:{read:!1}})],t.prototype,"sublayerTitleMode",void 0),o([y.property({type:String})],t.prototype,"title",void 0),o([y.reader("portal-item","title")],t.prototype,"readTitlePortalItem",null),o([y.reader("service","title",["name"])],t.prototype,"readTitleService",null),o([y.property({type:Number})],t.prototype,"layerId",void 0),o([y.reader("service","layerId",["id"])],t.prototype,"readLayerId",null),o([y.property(S.url)],t.prototype,"url",null),o([y.writer("url")],t.prototype,"writeUrl",null),o([y.property({dependsOn:["layerId"]})],t.prototype,"parsedUrl",null),o([y.property()],t.prototype,"store",void 0),o([y.property({type:String})],t.prototype,"rootNode",void 0),o([y.reader("rootNode",["store.rootNode"])],t.prototype,"readRootNode",null),o([y.subclass("esri.layers.mixins.SceneService")],t)}(y.declared(h,f,p,v,m))}.apply(null,o))||(e.exports=n)},wehw:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("2Atf"),r("9opi"),r("qKT0"),r("ma1f"),r("qMld"),r("Vx27"),r("0RER"),r("JNpq"),r("EtsK")],void 0===(n=function(e,t,o,n,i,a,p,s,l,y,u){return function(e){function t(t,r){var o=e.call(this)||this;return o.geometryType="mesh",o.operationalLayerType="IntegratedMeshLayer",o.type="integrated-mesh",o.profile="mesh-pyramids",o.elevationInfo=null,o.path=null,o}return n(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?o({url:e},t):e},t.prototype.load=function(){var e=this,t=this.loadFromPortal({supportedTypes:["Scene Service"]}).then(function(){return e._fetchService()},function(){return e._fetchService()}).then(function(){return e._verifyRootNodeAndUpdateExtent()});return this.addResolvingPromise(t),this.when()},t.prototype.importLayerViewModule=function(e){switch(e.type){case"2d":return p.reject(new a("integrated-mesh-layer:view-not-supported","IntegratedMeshLayer is only supported in 3D"));case"3d":return p.create(function(e){return Promise.all([r.e(0),r.e(1),r.e(5),r.e(7),r.e(47)]).then(function(){var t=[r("swcb")];e.apply(null,t)}.bind(this)).catch(r.oe)})}},t.prototype._validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new a("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new a("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new a("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},i([s.shared("esri.layers.IntegratedMeshLayer")],t.prototype,"declaredClass",void 0),i([s.property({type:String,readOnly:!0})],t.prototype,"geometryType",void 0),i([s.property({type:["show","hide"]})],t.prototype,"listMode",void 0),i([s.property({type:["IntegratedMeshLayer"]})],t.prototype,"operationalLayerType",void 0),i([s.property({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),i([s.property(u.elevationInfo)],t.prototype,"elevationInfo",void 0),i([s.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),i([s.subclass()],t)}(s.declared(l,y))}.apply(null,o))||(e.exports=n)}}]);