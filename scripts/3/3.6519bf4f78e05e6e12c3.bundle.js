(function(){(this||window).webpackJsonp.registerAbsMids({"esri/core/libs/quickselect/quickselect":"FT4I","esri/geometry/support/GeographicTransformationStep":"MbkH","esri/geometry/support/GeographicTransformation":"OkCb","esri/layers/graphics/data/projectionSupport":"Q2Em","esri/core/libs/rbush/rbush":"jEml","esri/geometry/pe":"w7fK","esri/geometry/projection":"wIC5"})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{FT4I:function(e,t,n){var r;void 0===(r=function(){"use strict";function e(n,r,i,o,_){for(;o>i;){if(o-i>600){var a=o-i+1,s=r-i+1,p=Math.log(a),u=.5*Math.exp(2*p/3),c=.5*Math.sqrt(p*u*(a-u)/a)*(s-a/2<0?-1:1);e(n,r,Math.max(i,Math.floor(r-s*u/a+c)),Math.min(o,Math.floor(r+(a-s)*u/a+c)),_)}var f=n[r],h=i,l=o;for(t(n,i,r),_(n[o],f)>0&&t(n,i,o);h<l;){for(t(n,h,l),h++,l--;_(n[h],f)<0;)h++;for(;_(n[l],f)>0;)l--}0===_(n[i],f)?t(n,i,l):t(n,++l,o),l<=r&&(i=l+1),r<=l&&(o=l-1)}}function t(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function n(e,t){return e<t?-1:e>t?1:0}return function(t,r,i,o,_){e(t,r,i||0,o||t.length-1,_||n)}}.apply(null,[]))||(e.exports=r)},MbkH:function(e,t,n){var r,i;r=[n.dj.c(e.i),t],void 0===(i=function(e,t){var n=0;return function(){function e(e){void 0===e&&(e=null),this.uid=n++,e?(this._wkt=void 0!==e.wkt?e.wkt:null,this._wkid=void 0!==e.wkid?e.wkid:-1,this._isInverse=void 0!==e.isInverse&&!0===e.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}return e.fromGE=function(t){var n=new e;return n._wkt=t.wkt,n._wkid=t.wkid,n._isInverse=t.isInverse,n},Object.defineProperty(e.prototype,"wkt",{get:function(){return this._wkt},set:function(e){this._wkt=e,this.uid=n++},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"wkid",{get:function(){return this._wkid},set:function(e){this._wkid=e,this.uid=n++},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isInverse",{get:function(){return this._isInverse},set:function(e){this._isInverse=e,this.uid=n++},enumerable:!0,configurable:!0}),e.prototype.getInverse=function(){var t=new e;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t},e}()}.apply(null,r))||(e.exports=i)},OkCb:function(e,t,n){var r,i;r=[n.dj.c(e.i),t,n("MbkH")],void 0===(i=function(e,t,n){return function(){function e(e){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,e&&e.steps)for(var t=0,r=e.steps;t<r.length;t++){var i=r[t];i instanceof n?this.steps.push(i):this.steps.push(new n({wkid:i.wkid,wkt:i.wkt,isInverse:i.isInverse}))}}return e.cacheKey=function(e,t){return[void 0!==e.wkid&&null!==e.wkid?e.wkid.toString():"-1",void 0!==e.wkt&&null!==e.wkt?e.wkt.toString():"",void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():""].join(",")},e.fromGE=function(t){for(var r=new e,i="",o=0,_=t.steps;o<_.length;o++){var a=_[o],s=n.fromGE(a);r.steps.push(s),i+=s.uid.toString()+","}return r._cached_projection={},r._gtlistentry=null,r._chain=i,r},e.prototype.getInverse=function(){var t=new e;t.steps=[];for(var n=this.steps.length-1;n>=0;n--){var r=this.steps[n];t.steps.push(r.getInverse())}return t},e.prototype.getGTListEntry=function(){for(var e="",t=0,n=this.steps;t<n.length;t++)e+=n[t].uid.toString()+",";return e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e),this._gtlistentry},e.prototype.assignCachedGe=function(t,n,r){this._cached_projection[e.cacheKey(t,n)]=r},e.prototype.getCachedGeTransformation=function(t,n){for(var r="",i=0,o=this.steps;i<o.length;i++)r+=o[i].uid.toString()+",";r!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=r);var _=this._cached_projection[e.cacheKey(t,n)];return void 0===_?null:_},e}()}.apply(null,r))||(e.exports=i)},Q2Em:function(e,t,n){var r,i;r=[n.dj.c(e.i),t,n("ma1f"),n("qMld"),n("wIC5"),n("nrlZ"),n("vtMp")],void 0===(i=function(e,t,n,r,i,o,_){function a(e,t){var n,r,i;if(!t)return null;if("x"in t){var o={x:0,y:0};return n=e(t.x,t.y,f),o.x=n[0],o.y=n[1],null!=t.z&&(o.z=t.z),null!=t.m&&(o.m=t.m),o}if("xmin"in t){o={xmin:0,ymin:0,xmax:0,ymax:0};return r=e(t.xmin,t.ymin,f),o.xmin=r[0],o.ymin=r[1],i=e(t.xmax,t.ymax,f),o.xmax=i[0],o.ymax=i[1],t.hasZ&&(o.zmin=t.zmin,o.zmax=t.zmax,o.hasZ=!0),t.hasM&&(o.mmin=t.mmin,o.mmax=t.mmax,o.hasM=!0),o}return"rings"in t?{rings:s(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:s(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:p(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:void 0}function s(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var o=i[r];n.push(p(o,t))}return n}function p(e,t){for(var n=[],r=0,i=e;r<i.length;r++){var o=i[r],_=t(o[0],o[1],[0,0]);n.push(_),o.length>2&&_.push(o[2]),o.length>3&&_.push(o[3])}return n}function u(e,t){return!(!o.isValid(e)||!o.isValid(t)||o.equals(e,t)||_.canProject(e,t))}Object.defineProperty(t,"__esModule",{value:!0});var c="feature-store:unsupported-query",f=[0,0];t.checkProjectionSupport=function(e,t){if(!t)return r.resolve();if(Array.isArray(e)){for(var o=0,_=e;o<_.length;o++){var a=_[o];if(u(a.geometry&&a.geometry.spatialReference,t))return i.isSupported()?i.load():r.reject(new n(c,"projection not supported",{inSpatialReference:e,outSpatialReference:t}))}return r.resolve()}return u(e,t)?i.isSupported()?i.load():r.reject(new n(c,"projection not supported",{inSpatialReference:e,outSpatialReference:t})):r.resolve()};var h=a.bind(null,_.lngLatToXY),l=a.bind(null,_.xyToLngLat);t.project=function(e,t,n){return n||(n=t,t=e.spatialReference),o.isValid(t)&&o.isValid(n)&&!o.equals(t,n)?_.canProject(t,n)?o.isWebMercator(n)?h(e):l(e):i.projectMany([e],t,n,null,!0)[0]:e};var P=new(function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,t,n){var i=this;e&&e.length&&t&&n&&!o.equals(t,n)||r.resolve(e);var _={geometries:e,inSpatialReference:t,outSpatialReference:n,resolve:null};return this._jobs.push(_),r.create(function(e){_.resolve=e,null===i._timer&&(i._timer=setTimeout(i._process,10))},function(){var e=i._jobs.indexOf(_);e>-1&&i._jobs.splice(e,1)})},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var t=e.geometries,n=e.inSpatialReference,r=e.outSpatialReference;(0,e.resolve)(_.canProject(n,r)?o.isWebMercator(r)?t.map(h):t.map(l):i.projectMany(t,n,r,null,!0)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}());t.projectMany=function(e,t,n){return P.push(e,t,n)}}.apply(null,r))||(e.exports=i)},jEml:function(e,t,n){var r,i;r=[n("FT4I")],void 0===(i=function(e){"use strict";function t(e,n){if(!(this instanceof t))return new t(e,n);this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),n&&("function"==typeof n?this.toBBox=n:this._initFormat(n)),this.clear()}function n(e,t,n){if(!n)return t.indexOf(e);for(var r=0;r<t.length;r++)if(n(e,t[r]))return r;return-1}function r(e,t){i(e,0,e.children.length,t,e)}function i(e,t,n,r,i){i||(i=l(null)),i.minX=1/0,i.minY=1/0,i.maxX=-1/0,i.maxY=-1/0;for(var _,a=t;a<n;a++)_=e.children[a],o(i,e.leaf?r(_):_);return i}function o(e,t){return e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY),e}function _(e,t){return e.minX-t.minX}function a(e,t){return e.minY-t.minY}function s(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function u(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function c(e,t){var n=Math.max(e.minX,t.minX),r=Math.max(e.minY,t.minY),i=Math.min(e.maxX,t.maxX),o=Math.min(e.maxY,t.maxY);return Math.max(0,i-n)*Math.max(0,o-r)}function f(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function h(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function l(e){return{children:e,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function P(t,n,r,i,o){for(var _,a=[n,r];a.length;)(r=a.pop())-(n=a.pop())<=i||(_=n+Math.ceil((r-n)/i/2)*i,e(t,_,n,r,o),a.push(n,_,_,r))}return t.prototype={all:function(){return this._all(this.data,[])},search:function(e){var t=this.data,n=[],r=this.toBBox;if(!h(e,t))return n;for(var i,o,_,a,s=[];t;){for(i=0,o=t.children.length;i<o;i++)_=t.children[i],h(e,a=t.leaf?r(_):_)&&(t.leaf?n.push(_):f(e,a)?this._all(_,n):s.push(_));t=s.pop()}return n},collides:function(e){var t=this.data,n=this.toBBox;if(!h(e,t))return!1;for(var r,i,o,_,a=[];t;){for(r=0,i=t.children.length;r<i;r++)if(o=t.children[r],h(e,_=t.leaf?n(o):o)){if(t.leaf||f(e,_))return!0;a.push(o)}t=a.pop()}return!1},load:function(e){if(!e||!e.length)return this;if(e.length<this._minEntries){for(var t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}var r=this._build(e.slice(),0,e.length-1,0);if(this.data.children.length)if(this.data.height===r.height)this._splitRoot(this.data,r);else{if(this.data.height<r.height){var i=this.data;this.data=r,r=i}this._insert(r,this.data.height-r.height-1,!0)}else this.data=r;return this},insert:function(e){return e&&this._insert(e,this.data.height-1),this},clear:function(){return this.data=l([]),this},remove:function(e,t){if(!e)return this;for(var r,i,o,_,a=this.data,s=this.toBBox(e),p=[],u=[];a||p.length;){if(a||(a=p.pop(),i=p[p.length-1],r=u.pop(),_=!0),a.leaf&&-1!==(o=n(e,a.children,t)))return a.children.splice(o,1),p.push(a),this._condense(p),this;_||a.leaf||!f(a,s)?i?(r++,a=i.children[r],_=!1):a=null:(p.push(a),u.push(r),r=0,i=a,a=a.children[0])}return this},toBBox:function(e){return e},compareMinX:_,compareMinY:a,toJSON:function(){return this.data},fromJSON:function(e){return this.data=e,this},_all:function(e,t){for(var n=[];e;)e.leaf?t.push.apply(t,e.children):n.push.apply(n,e.children),e=n.pop();return t},_build:function(e,t,n,i){var o,_=n-t+1,a=this._maxEntries;if(_<=a)return r(o=l(e.slice(t,n+1)),this.toBBox),o;i||(i=Math.ceil(Math.log(_)/Math.log(a)),a=Math.ceil(_/Math.pow(a,i-1))),(o=l([])).leaf=!1,o.height=i;var s,p,u,c,f=Math.ceil(_/a),h=f*Math.ceil(Math.sqrt(a));for(P(e,t,n,h,this.compareMinX),s=t;s<=n;s+=h)for(P(e,s,u=Math.min(s+h-1,n),f,this.compareMinY),p=s;p<=u;p+=f)c=Math.min(p+f-1,u),o.children.push(this._build(e,p,c,i-1));return r(o,this.toBBox),o},_chooseSubtree:function(e,t,n,r){for(var i,o,_,a,p,c,f,h;r.push(t),!t.leaf&&r.length-1!==n;){for(f=h=1/0,i=0,o=t.children.length;i<o;i++)p=s(_=t.children[i]),(c=u(e,_)-p)<h?(h=c,f=p<f?p:f,a=_):c===h&&p<f&&(f=p,a=_);t=a||t.children[0]}return t},_insert:function(e,t,n){var r=this.toBBox,i=n?e:r(e),_=[],a=this._chooseSubtree(i,this.data,t,_);for(a.children.push(e),o(a,i);t>=0&&_[t].children.length>this._maxEntries;)this._split(_,t),t--;this._adjustParentBBoxes(i,_,t)},_split:function(e,t){var n=e[t],i=n.children.length,o=this._minEntries;this._chooseSplitAxis(n,o,i);var _=this._chooseSplitIndex(n,o,i),a=l(n.children.splice(_,n.children.length-_));a.height=n.height,a.leaf=n.leaf,r(n,this.toBBox),r(a,this.toBBox),t?e[t-1].children.push(a):this._splitRoot(n,a)},_splitRoot:function(e,t){this.data=l([e,t]),this.data.height=e.height+1,this.data.leaf=!1,r(this.data,this.toBBox)},_chooseSplitIndex:function(e,t,n){var r,o,_,a,p,u,f,h;for(u=f=1/0,r=t;r<=n-t;r++)a=c(o=i(e,0,r,this.toBBox),_=i(e,r,n,this.toBBox)),p=s(o)+s(_),a<u?(u=a,h=r,f=p<f?p:f):a===u&&p<f&&(f=p,h=r);return h},_chooseSplitAxis:function(e,t,n){var r=e.leaf?this.compareMinX:_,i=e.leaf?this.compareMinY:a;this._allDistMargin(e,t,n,r)<this._allDistMargin(e,t,n,i)&&e.children.sort(r)},_allDistMargin:function(e,t,n,r){e.children.sort(r);var _,a,s=this.toBBox,u=i(e,0,t,s),c=i(e,n-t,n,s),f=p(u)+p(c);for(_=t;_<n-t;_++)a=e.children[_],o(u,e.leaf?s(a):a),f+=p(u);for(_=n-t-1;_>=t;_--)a=e.children[_],o(c,e.leaf?s(a):a),f+=p(c);return f},_adjustParentBBoxes:function(e,t,n){for(var r=n;r>=0;r--)o(t[r],e)},_condense:function(e){for(var t,n=e.length-1;n>=0;n--)0===e[n].children.length?n>0?(t=e[n-1].children).splice(t.indexOf(e[n]),1):this.clear():r(e[n],this.toBBox)},_initFormat:function(e){var t=["return a"," - b",";"];this.compareMinX=new Function("a","b",t.join(e[0])),this.compareMinY=new Function("a","b",t.join(e[1])),this.toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}},t}.apply(null,r))||(e.exports=i)},w7fK:function(e,t,n){var r,i;r=[n.dj.c(e.i),t,n("xhoE"),n("H1tY"),n("qMld")],void 0===(i=function(e,t,r,i,o){function _(e){function n(e,t,n){e[t]=n(e[t])}t._pe=e,f.init(),h.init(),l.init(),P.init(),g.init(),t.PeGCSExtent=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r(n,e),n.prototype.destroy=function(){t._pe.destroy(this)},n}(t._pe.PeGCSExtent);for(var i=0,o=[t._pe.PeDatum,t._pe.PeGeogcs,t._pe.PeGeogtran,t._pe.PeObject,t._pe.PeParameter,t._pe.PePrimem,t._pe.PeProjcs,t._pe.PeSpheroid,t._pe.PeUnit];i<o.length;i++){n(o[i].prototype,"getName",function(e){return function(){return e.call(this,new Array(f.PE_NAME_MAX))}})}for(var _=0,a=[t._pe.PeGeogtran,t._pe.PeProjcs];_<a.length;_++){n(a[_].prototype,"getParameters",function(e){return function(){for(var n=new Array(f.PE_PARM_MAX),r=e.call(this),i=0;i<n.length;i++){var o=t._pe.getValue(r,"*");n[i]=o?t._pe.wrapPointer(o,t._pe.PeParameter):null,r+=Int32Array.BYTES_PER_ELEMENT}return n}})}n(t._pe.PeHorizon.prototype,"getCoord",function(e){return function(){var t=this.getSize();if(!t)return null;var n=[];return u(n,t,e.call(this)),n}}),n(t._pe.PeGTlistExtendedEntry.prototype,"getEntries",function(e){var n=t._pe._pe_getPeGTlistExtendedGTsSize();return function(){var r=null,i=e.call(this);if(!t._pe.compare(i,t._pe.NULL)){r=[i];var o=this.getSteps();if(o>1)for(var _=t._pe.getPointer(i),a=1;a<o;a++)r.push(t._pe.wrapPointer(_+n*a,t._pe.PeGTlistExtendedGTs))}return r}});var s=t._pe._pe_getPeHorizonSize(),p=function(e){return function(){var n=this._cache;if(n||(n=new Map,this._cache=n),n.has(e))return n.get(e);var r=null,i=e.call(this);if(!t._pe.compare(i,t._pe.NULL)){r=[i];var o=i.getNump();if(o>1)for(var _=t._pe.getPointer(i),a=1;a<o;a++)r.push(t._pe.wrapPointer(_+s*a,t._pe.PeHorizon))}return n.set(e,r),r}};n(t._pe.PeProjcs.prototype,"horizonGcsGenerate",p),n(t._pe.PeProjcs.prototype,"horizonPcsGenerate",p),t._pe.PeObject.prototype.toString=function(e){void 0===e&&(e=f.PE_STR_OPTS_NONE),t._pe.ensureCache.prepare();var n=t._pe.getPointer(this),r=t._pe.ensureInt8(new Array(f.PE_BUFFER_MAX));return t._pe.Pointer_stringify(t._pe._pe_object_to_string_ext(n,e,r))}}function a(e){if(e){var n=t._pe.getClass(e);if(n){var r=t._pe.getCache(n);if(r){var i=t._pe.getPointer(e);i&&delete r[i]}}}}function s(e,n){for(var r=[],i=new Array(n),o=0;o<e;o++)r.push(t._pe.ensureInt8(i));return r}function p(e){var t;return Array.isArray(e[0])?(t=[],e.forEach(function(e){t.push(e[0],e[1])})):t=e,t}function u(e,n,r,i){if(void 0===i&&(i=!1),i)for(var o=0;o<2*n;o++)e[o]=t._pe.getValue(r+o*Float64Array.BYTES_PER_ELEMENT,"double");else{var _=0===e.length;for(o=0;o<n;o++)_&&(e[o]=new Array(2)),e[o][0]=t._pe.getValue(r,"double"),e[o][1]=t._pe.getValue(r+Float64Array.BYTES_PER_ELEMENT,"double"),r+=2*Float64Array.BYTES_PER_ELEMENT}}var c,f,h,l,P,g;Object.defineProperty(t,"__esModule",{value:!0}),t._pe=null,t.isLoaded=function(){return!!t._pe},t.isSupported=function(){return!!i("esri-wasm")},t.load=function(){return c||(c=o.create(function(t,r){Promise.resolve().then(function(){var i=[n("2yfh")];(function(n){n({locateFile:function(t){return e.toUrl("./support/"+t)},onAbort:function(e){r(new Error(e))}}).then(function(e){_(e),t()})}).apply(null,i)}).catch(n.oe)}))},function(e){function n(e,n,r){t._pe.ensureCache.prepare();var i=p(r),o=r===i,_=t._pe.ensureFloat64(i),a=t._pe._pe_geog_to_proj(t._pe.getPointer(e),n,_);return a&&u(r,n,_,o),a}function r(e,t,n){return i(e,t,n,0)}function i(e,n,r,i){t._pe.ensureCache.prepare();var o=p(r),_=r===o,a=t._pe.ensureFloat64(o),s=t._pe._pe_proj_to_geog_center(t._pe.getPointer(e),n,a,i);return s&&u(r,n,a,_),s}e.geogToProj=n,e.projGeog=function(e,t,i,o){switch(o){case f.PE_TRANSFORM_P_TO_G:return r(e,t,i);case f.PE_TRANSFORM_G_TO_P:return n(e,t,i)}return 0},e.projToGeog=r,e.projToGeogCenter=i}(t.PeCSTransformations||(t.PeCSTransformations={})),function(e){e.init=function(){e.PE_BUFFER_MAX=t._pe.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=t._pe.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=t._pe.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=t._pe.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=t._pe.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=t._pe.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=t._pe.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=t._pe.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=t._pe.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=t._pe.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=t._pe.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=t._pe.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=t._pe.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=t._pe.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=t._pe.PeDefs.prototype.PE_TYPE_UNIT,e.PE_STR_OPTS_NONE=t._pe.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=t._pe.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=t._pe.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=t._pe.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=t._pe.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=t._pe.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=t._pe.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=t._pe.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=t._pe.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=t._pe.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=t._pe.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=t._pe.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=t._pe.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=t._pe.PeDefs.prototype.PE_HORIZON_DELTA}}(f=t.PeDefs||(t.PeDefs={})),function(e){function n(e,n){var o=null,_=i[e];if(_||(_={},i[e]=_),_.hasOwnProperty(String(n)))o=_[n];else{var a=t._pe.PeFactory.prototype.factoryByType(e,n);t._pe.compare(a,t._pe.NULL)||(o=a,_[n]=o)}return r(o)}function r(e){if(e){var n=e.getType();switch(n){case f.PE_TYPE_GEOGCS:e=t._pe.castObject(e,t._pe.PeGeogcs);break;case f.PE_TYPE_PROJCS:e=t._pe.castObject(e,t._pe.PeProjcs);break;case f.PE_TYPE_GEOGTRAN:e=t._pe.castObject(e,t._pe.PeGeogtran);break;default:n&f.PE_TYPE_UNIT&&(e=t._pe.castObject(e,t._pe.PeUnit))}}return e}var i={},o={};e.initialize=function(){t._pe.PeFactory.prototype.initialize(null)},e.coordsys=function(e){return n(f.PE_TYPE_COORDSYS,e)},e.factoryByType=n,e.fromString=function(e,n){var i=null,_=o[e];if(_||(_={},o[e]=_),_.hasOwnProperty(n))i=_[n];else{var a=t._pe.PeFactory.prototype.fromString(e,n);t._pe.compare(a,t._pe.NULL)||(i=a,_[n]=i)}return r(i)},e.geogcs=function(e){return n(f.PE_TYPE_GEOGCS,e)},e.geogtran=function(e){return n(f.PE_TYPE_GEOGTRAN,e)},e.getCode=function(e){return t._pe.PeFactory.prototype.getCode(e)},e.projcs=function(e){return n(f.PE_TYPE_PROJCS,e)},e.unit=function(e){return n(f.PE_TYPE_UNIT,e)}}(t.PeFactory||(t.PeFactory={})),t.PeGCSExtent=null,function(e){var n;e.init=function(){e.PE_GTLIST_OPTS_COMMON=t._pe.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,n=t._pe._pe_getPeGTlistExtendedEntrySize()},e.getGTlist=function(e,r,i,o,_,a){var s=null,p=new t._pe.PeInteger(a);try{var u=t._pe.PeGTlistExtended.prototype.getGTlist(e,r,i,o,_,p);if((a=p.val)&&(s=[u],a>1))for(var c=t._pe.getPointer(u),f=1;f<a;f++)s.push(t._pe.wrapPointer(c+n*f,t._pe.PeGTlistExtendedEntry))}finally{t._pe.destroy(p)}return s}}(h=t.PeGTlistExtended||(t.PeGTlistExtended={})),(t.PeGTlistExtendedEntry||(t.PeGTlistExtendedEntry={})).destroy=function(e){if(e&&e.length){for(var n=0,r=e;n<r.length;n++){var i=r[n];a(i),i.getEntries().forEach(function(e){a(e);var t=e.getGeogtran();a(t),t.getParameters().forEach(a),[t.getGeogcs1(),t.getGeogcs2()].forEach(function(e){a(e);var t=e.getDatum();a(t),a(t.getSpheroid()),a(e.getPrimem()),a(e.getUnit())})})}t._pe.PeGTlistExtendedEntry.prototype.Delete(e[0])}},(t.PeGTTransformations||(t.PeGTTransformations={})).geogToGeog=function(e,n,r,i,o){t._pe.ensureCache.prepare();var _=p(r),a=r===_,s=t._pe.ensureFloat64(_),c=0;i&&(c=t._pe.ensureFloat64(i));var f=t._pe._pe_geog_to_geog(t._pe.getPointer(e),n,s,c,o);return f&&u(r,n,s,a),f},function(e){function n(e,n,r,i,o,_){var a,u;switch(t._pe.ensureCache.prepare(),e){case"dd":a=t._pe._pe_geog_to_dd,u=f.PE_DD_MAX;break;case"ddm":a=t._pe._pe_geog_to_ddm,u=f.PE_DDM_MAX;break;case"dms":a=t._pe._pe_geog_to_dms,u=f.PE_DMS_MAX}var c=0;n&&(c=t._pe.getPointer(n));var h=p(i),l=t._pe.ensureFloat64(h),P=s(r,u),g=a(c,r,l,o,t._pe.ensureInt32(P));if(g)for(var d=0;d<r;d++)_[d]=t._pe.Pointer_stringify(P[d]);return g}function r(e,n,r,i,o){var _;switch(t._pe.ensureCache.prepare(),e){case"dd":_=t._pe._pe_dd_to_geog;break;case"ddm":_=t._pe._pe_ddm_to_geog;break;case"dms":_=t._pe._pe_dms_to_geog}var a=0;n&&(a=t._pe.getPointer(n));var s=i.map(function(e){return t._pe.ensureString(e)}),p=t._pe.ensureInt32(s),c=t._pe.ensureFloat64(new Array(2*r)),f=_(a,r,p,c);return f&&u(o,r,c),f}e.geog_to_dms=function(e,t,r,i,o){return n("dms",e,t,r,i,o)},e.dms_to_geog=function(e,t,n,i){return r("dms",e,t,n,i)},e.geog_to_ddm=function(e,t,r,i,o){return n("ddm",e,t,r,i,o)},e.ddm_to_geog=function(e,t,n,i){return r("ddm",e,t,n,i)},e.geog_to_dd=function(e,t,r,i,o){return n("dd",e,t,r,i,o)},e.dd_to_geog=function(e,t,n,i){return r("dd",e,t,n,i)}}(t.PeNotationDms||(t.PeNotationDms={})),function(e){e.init=function(){e.PE_MGRS_STYLE_NEW=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=t._pe.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=t._pe.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES},e.geog_to_mgrs_extended=function(e,n,r,i,o,_,a){t._pe.ensureCache.prepare();var u=0;e&&(u=t._pe.getPointer(e));var c=p(r),h=t._pe.ensureFloat64(c),l=s(n,f.PE_MGRS_MAX),P=t._pe.ensureInt32(l),g=t._pe._pe_geog_to_mgrs_extended(u,n,h,i,o,_,P);if(g)for(var d=0;d<n;d++)a[d]=t._pe.Pointer_stringify(l[d]);return g},e.mgrs_to_geog_extended=function(e,n,r,i,o){t._pe.ensureCache.prepare();var _=0;e&&(_=t._pe.getPointer(e));var a=r.map(function(e){return t._pe.ensureString(e)}),s=t._pe.ensureInt32(a),p=t._pe.ensureFloat64(new Array(2*n)),c=t._pe._pe_mgrs_to_geog_extended(_,n,s,i,p);return c&&u(o,n,p),c}}(l=t.PeNotationMgrs||(t.PeNotationMgrs={})),function(e){e.geog_to_usng=function(e,n,r,i,o,_,a){t._pe.ensureCache.prepare();var u=0;e&&(u=t._pe.getPointer(e));var c=p(r),h=t._pe.ensureFloat64(c),l=s(n,f.PE_MGRS_MAX),P=t._pe.ensureInt32(l),g=t._pe._pe_geog_to_usng(u,n,h,i,o,_,P);if(g)for(var d=0;d<n;d++)a[d]=t._pe.Pointer_stringify(l[d]);return g},e.usng_to_geog=function(e,n,r,i){t._pe.ensureCache.prepare();var o=0;e&&(o=t._pe.getPointer(e));var _=r.map(function(e){return t._pe.ensureString(e)}),a=t._pe.ensureInt32(_),s=t._pe.ensureFloat64(new Array(2*n)),p=t._pe._pe_usng_to_geog(o,n,a,s);return p&&u(i,n,s),p}}(t.PeNotationUsng||(t.PeNotationUsng={})),function(e){e.init=function(){e.PE_UTM_OPTS_NONE=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NS},e.geog_to_utm=function(e,n,r,i,o){t._pe.ensureCache.prepare();var _=0;e&&(_=t._pe.getPointer(e));var a=p(r),u=t._pe.ensureFloat64(a),c=s(n,f.PE_UTM_MAX),h=t._pe.ensureInt32(c),l=t._pe._pe_geog_to_utm(_,n,u,i,h);if(l)for(var P=0;P<n;P++)o[P]=t._pe.Pointer_stringify(c[P]);return l},e.utm_to_geog=function(e,n,r,i,o){t._pe.ensureCache.prepare();var _=0;e&&(_=t._pe.getPointer(e));var a=r.map(function(e){return t._pe.ensureString(e)}),s=t._pe.ensureInt32(a),p=t._pe.ensureFloat64(new Array(2*n)),c=t._pe._pe_utm_to_geog(_,n,s,i,p);return c&&u(o,n,p),c}}(P=t.PeNotationUtm||(t.PeNotationUtm={})),function(e){var n=new Map;e.init=function(){e.PE_PCSINFO_OPTION_NONE=t._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=t._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=t._pe.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=t._pe.PePCSInfo.prototype.PE_POLE_POINT},e.generate=function(r,i){var o,_;return void 0===i&&(i=e.PE_PCSINFO_OPTION_DOMAIN),n.has(r)&&(_=n.get(r))[i]&&(o=_[i]),o||(o=t._pe.PePCSInfo.prototype.generate(r,i),_||(_=[],n.set(r,_)),_[i]=o),o}}(g=t.PePCSInfo||(t.PePCSInfo={})),(t.PeVersion||(t.PeVersion={})).version_string=function(){return t._pe.PeVersion.prototype.version_string()},t._init=_}.apply(null,r))||(e.exports=i)},wIC5:function(e,t,n){var r,i;r=[n.dj.c(e.i),t,n("qMld"),n("w7fK"),n("Z4y+"),n("OkCb")],void 0===(i=function(e,t,r,i,o,_){function a(e,t,n,r,i){if(void 0===r&&(r=null),void 0===i&&(i=!1),null===r){var a=_.cacheKey(t,n);void 0!==c[a]?r=c[a]:(null===(r=s(t,n,null))&&(r=new _),c[a]=r)}return p._project(e,t,n instanceof o||!1===i?n:new o(n),r,i)}function s(e,t,n){void 0===n&&(n=null);var r=p._getTransformation(e,t,n);return null!==r?_.fromGE(r):null}Object.defineProperty(t,"__esModule",{value:!0});var p=null;t.isLoaded=function(){return!!p&&i.isLoaded()},t.isSupported=function(){return i.isSupported()};var u=null;t.load=function(){return u||(u=r.create(function(e,t){var r=i.load();n.e(15).then(function(){var o=[n("21p4")];(function(n){p=n,r.then(function(){p._enableProjection(i),e()},function(e){t(e)})}).apply(null,o)}).catch(n.oe)}))},t.project=function(e,t,n){return void 0===n&&(n=null),e instanceof Array?0===e.length?[]:a(e,e[0].spatialReference,t,n):a([e],e.spatialReference,t,n)[0]};var c={};t.projectMany=a,t.getTransformation=s,t.getTransformations=function(e,t,n){void 0===n&&(n=null);var r=p._getTransformationBySuitability(e,t,n);if(null!==r){for(var i=[],o=0,a=r;o<a.length;o++){var s=a[o];i.push(_.fromGE(s))}return i}return[]}}.apply(null,r))||(e.exports=i)}}]);