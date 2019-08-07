(function(){(this||window).webpackJsonp.registerAbsMids({"esri/tasks/support/FeatureSet":"w1v0"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{w1v0:function(e,t,r){var o,n;o=[r.dj.c(e.i),t,r("qKT0"),r("9opi"),r("TMur"),r("jZlN"),r("ycL1"),r("0+sO"),r("Vx27"),r("Z4y+"),r("Lzvl"),r("KQcO")],void 0===(n=function(e,t,r,o,n,i,p,a,s,y,u,l){var f=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent"}),c=function(e){function t(t){var r=e.call(this,t)||this;return r.displayFieldName=null,r.exceededTransferLimit=!1,r.features=[],r.fields=null,r.geometryType=null,r.hasM=!1,r.hasZ=!1,r.queryGeometry=null,r.spatialReference=null,r}return o(t,e),t.prototype.readFeatures=function(e,t){for(var r=y.fromJSON(t.spatialReference),o=[],n=0;n<e.length;n++){var p=e[n],a=i.fromJSON(p),s=p.geometry&&p.geometry.spatialReference;a.geometry&&!s&&(a.geometry.spatialReference=r),o.push(a)}return o},t.prototype.writeGeometryType=function(e,t,r,o){if(e)f.write(e,t,r,o);else{var n=this.features;if(n)for(var i=0,p=n;i<p.length;i++){var a=p[i];if(a&&a.geometry)return void f.write(a.geometry.type,t,r,o)}}},t.prototype.writeSpatialReference=function(e,t,r,o){if(e)t.spatialReference=e.toJSON();else{var n=this.features;if(n)for(var i=0,p=n;i<p.length;i++){var a=p[i];a&&a.geometry&&a.geometry.spatialReference&&(t.spatialReference=a.geometry.spatialReference.toJSON())}}},t.prototype.toJSON=function(e){var t=this.write(null);if(t.features&&Array.isArray(e)&&e.length>0)for(var r=0;r<t.features.length;r++){var o=t.features[r];if(o.geometry){var n=e&&e[r];o.geometry=n&&n.toJSON()||o.geometry}}return t},t.prototype.quantize=function(e){for(var t=e.scale,r=t[0],o=t[1],n=e.translate,i=n[0],p=n[1],a=this.features,s=this._getQuantizationFunction(this.geometryType,function(e){return Math.round((e-i)/r)},function(e){return Math.round((p-e)/o)}),y=0,u=a.length;y<u;y++)s(a[y].geometry)||(a.splice(y,1),y--,u--);return this.transform=e,this},t.prototype.unquantize=function(){var e=this,t=e.geometryType,r=e.features,o=e.transform;if(!o)return this;for(var n=o.translate,i=n[0],p=n[1],a=o.scale,s=a[0],y=a[1],u=this._getHydrationFunction(t,function(e){return e*s+i},function(e){return p-e*y}),l=0,f=r;l<f.length;l++){var c=f[l].geometry;c&&u(c)}return this},t.prototype._quantizePoints=function(e,t,r){for(var o,n,i=[],p=0,a=e.length;p<a;p++){var s=e[p];if(p>0){var y=t(s[0]),u=r(s[1]);y===o&&u===n||(i.push([y-o,u-n]),o=y,n=u)}else o=t(s[0]),n=r(s[1]),i.push([o,n])}return i.length>0?i:null},t.prototype._getQuantizationFunction=function(e,t,r){var o=this;return"point"===e?function(e){return e.x=t(e.x),e.y=r(e.y),e}:"polyline"===e||"polygon"===e?function(e){for(var n=u.isPolygon(e)?e.rings:e.paths,i=[],p=0,a=n.length;p<a;p++){var s=n[p],y=o._quantizePoints(s,t,r);y&&i.push(y)}return i.length>0?(u.isPolygon(e)?e.rings=i:e.paths=i,e):null}:"multipoint"===e?function(e){var n;return(n=o._quantizePoints(e.points,t,r)).length>0?(e.points=n,e):null}:"extent"===e?function(e){return e}:void 0},t.prototype._getHydrationFunction=function(e,t,r){return"point"===e?function(e){e.x=t(e.x),e.y=r(e.y)}:"polyline"===e||"polygon"===e?function(e){for(var o,n,i=u.isPolygon(e)?e.rings:e.paths,p=0,a=i.length;p<a;p++)for(var s=i[p],y=0,l=s.length;y<l;y++){var f=s[y];y>0?(o+=f[0],n+=f[1]):(o=f[0],n=f[1]),f[0]=t(o),f[1]=r(n)}}:"extent"===e?function(e){e.xmin=t(e.xmin),e.ymin=r(e.ymin),e.xmax=t(e.xmax),e.ymax=r(e.ymax)}:"multipoint"===e?function(e){for(var o,n,i=e.points,p=0,a=i.length;p<a;p++){var s=i[p];p>0?(o+=s[0],n+=s[1]):(o=s[0],n=s[1]),s[0]=t(o),s[1]=r(n)}}:void 0},r([s.property({type:String,json:{write:!0}})],t.prototype,"displayFieldName",void 0),r([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"exceededTransferLimit",void 0),r([s.property({type:[i],json:{write:!0}})],t.prototype,"features",void 0),r([s.reader("features")],t.prototype,"readFeatures",null),r([s.property({type:[l],json:{write:!0}})],t.prototype,"fields",void 0),r([s.property({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:f.read}}})],t.prototype,"geometryType",void 0),r([s.writer("geometryType")],t.prototype,"writeGeometryType",null),r([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r([s.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r([s.property({types:n.geometryTypes,json:{read:u.fromJSON,write:!0}})],t.prototype,"queryGeometry",void 0),r([s.property({type:y,json:{write:!0}})],t.prototype,"spatialReference",void 0),r([s.writer("spatialReference")],t.prototype,"writeSpatialReference",null),r([s.property({json:{write:!0}})],t.prototype,"transform",void 0),r([s.subclass("esri.tasks.support.FeatureSet")],t)}(s.declared(p));return c.prototype.toJSON.isDefaultToJSON=!0,c||(c={}),c}.apply(null,o))||(e.exports=n)}}]);