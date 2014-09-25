//packer version
'use strict';var gl,DEG2RAD=0.0174532925,RAD2DEG=57.295779578552306,EPSILON=1E-6,global=window;function isPowerOfTwo(a){return 0==Math.log(a)/Math.log(2)%1}global.getTime="undefined"!=typeof performance?performance.now.bind(performance):Date.now.bind(Date);function isFunction(a){return!!(a&&a.constructor&&a.call&&a.apply)}function isArray(a){return a&&a.constructor===Array}function isNumber(a){return null!=a&&a.constructor===Number}function regexMap(a,b,c){for(var d;null!=(d=a.exec(b));)c(d)}
function createCanvas(a,b){var c=document.createElement("canvas");c.width=a;c.height=b;return c}function cloneCanvas(a){var b=document.createElement("canvas");b.width=a.width;b.height=a.height;b.getContext("2d").drawImage(a,0,0);return b}String.prototype.replaceAll=function(a){var b=this,c;for(c in a)b=b.split(c).join(a[c]);return b};Object.defineProperty(Array.prototype,"subarray",{value:Array.prototype.slice,enumerable:!1});
function wipeObject(a){for(var b in a)a.hasOwnProperty(b)&&delete a[b]}function extendClass(a,b){for(var c in b)a.hasOwnProperty(c)||(a[c]=b[c]);if(b.prototype)for(c in b.prototype)b.prototype.hasOwnProperty(c)&&!a.prototype.hasOwnProperty(c)&&(b.prototype.__lookupGetter__(c)?a.prototype.__defineGetter__(c,b.prototype.__lookupGetter__(c)):a.prototype[c]=b.prototype[c],b.prototype.__lookupSetter__(c)&&a.prototype.__defineSetter__(c,b.prototype.__lookupSetter__(c)))}
function HttpRequest(a,b,c,d,e){if(b){var f=null,f=[],g;for(g in b)f.push(g+"="+b[g]);f=f.join("&");a=a+"?"+f}var k=new XMLHttpRequest;k.open("GET",a,!e);k.onload=function(){200!=this.status?(LEvent.trigger(k,"fail",this.status),d&&d(this.status)):(LEvent.trigger(k,"done",this.response),c&&c(this.response))};k.onerror=function(a){LEvent.trigger(k,"fail",a)};k.send();return k}
Object.defineProperty(XMLHttpRequest.prototype,"done",{enumerable:!1,value:function(a){LEvent.bind(this,"done",function(b,c){a(c)});return this}});Object.defineProperty(XMLHttpRequest.prototype,"fail",{enumerable:!1,value:function(a){LEvent.bind(this,"fail",function(b,c){a(c)});return this}});
function loadFileAtlas(a,b,c){function d(a,b){function c(){var a=p.join("\n");e[m]=a;p.length=0;m=q.substr(1)}var d=a.split("\n"),e={},p=[],m="",n;for(n in d){var q=d[n].trim();q.length&&("\\"==q[0]?m?c():m=q.substr(1):p.push(q))}m&&c();return e}var e=null;HttpRequest(a,null,function(a){a=d(a);b&&b(a);e&&e(a)},alert,c);return{done:function(a){e=a}}}
var DDS=function(){function a(a){return a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)}function b(a,b,c,d){var e=new Uint16Array(4),f=new Uint16Array(c*d),g=0,h=0,l=0,k=h=g=0,m=0,p=0,n=0,q=c/4;d/=4;for(var r=0;r<d;r++)for(var s=0;s<q;s++)l=b+4*(r*q+s),e[0]=a[l],e[1]=a[l+1],g=e[0]&31,h=e[0]&2016,k=e[0]&63488,m=e[1]&31,p=e[1]&2016,n=e[1]&63488,e[2]=5*g+3*m>>3|5*h+3*p>>3&2016|5*k+3*n>>3&63488,e[3]=5*m+3*g>>3|5*p+3*h>>3&2016|5*n+3*k>>3&63488,g=a[l+2],h=4*r*c+4*s,f[h]=
e[g&3],f[h+1]=e[g>>2&3],f[h+2]=e[g>>4&3],f[h+3]=e[g>>6&3],h+=c,f[h]=e[g>>8&3],f[h+1]=e[g>>10&3],f[h+2]=e[g>>12&3],f[h+3]=e[g>>14],g=a[l+3],h+=c,f[h]=e[g&3],f[h+1]=e[g>>2&3],f[h+2]=e[g>>4&3],f[h+3]=e[g>>6&3],h+=c,f[h]=e[g>>8&3],f[h+1]=e[g>>10&3],f[h+2]=e[g>>12&3],f[h+3]=e[g>>14];return f}function c(a,c,d,e){var z=new Int32Array(d,0,n),w,u,A,y,v,B,J,E,I;if(z[q]!=f)return console.error("Invalid magic number in DDS header"),0;if(!z[F]&h)return console.error("Unsupported format, must contain a FourCC code"),
0;w=z[H];switch(w){case l:u=8;A=c?c.COMPRESSED_RGB_S3TC_DXT1_EXT:null;break;case p:u=16;A=c?c.COMPRESSED_RGBA_S3TC_DXT3_EXT:null;break;case m:u=16;A=c?c.COMPRESSED_RGBA_S3TC_DXT5_EXT:null;break;default:u=4,A=a.RGBA}J=1;z[r]&g&&!1!==e&&(J=Math.max(1,z[s]));y=z[C];v=z[x];B=z[t]+4;if(z[D+1]&k)for(I=0;6>I;++I)for(y=z[C],v=z[x],E=0;E<J;++E){if(w)e=Math.max(4,y)/4*Math.max(4,v)/4*u,c=new Uint8Array(d,B,e),a.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+I,E,A,y,v,0,c);else{e=y*v*u;c=new Uint8Array(d,
B,e);for(var G=0,K=c.length,P=0;G<K;G+=4)P=c[G],c[G]=c[G+2],c[G+2]=P;a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+I,E,A,y,v,0,a.RGBA,a.UNSIGNED_BYTE,c)}B+=e;y*=0.5;v*=0.5}else if(c)for(E=0;E<J;++E)e=Math.max(4,y)/4*Math.max(4,v)/4*u,c=new Uint8Array(d,B,e),a.compressedTexImage2D(a.TEXTURE_2D,E,A,y,v,0,c),B+=e,y*=0.5,v*=0.5;else if(w==l)Math.max(4,y),Math.max(4,v),c=new Uint16Array(d),d=b(c,B/2,y,v),a.texImage2D(a.TEXTURE_2D,0,a.RGB,y,v,0,a.RGB,a.UNSIGNED_SHORT_5_6_5,d),e&&a.generateMipmap(a.TEXTURE_2D);
else return console.error("No manual decoder for",String.fromCharCode(w&255,w>>8&255,w>>16&255,w>>24&255),"and no native support"),0;return J}function d(a,c){var d=new Int32Array(a,0,n),e,z,w,u,A,y,v,B,J,E,I;if(d[q]!=f)return console.error("Invalid magic number in DDS header"),0;if(!d[F]&h)return console.error("Unsupported format, must contain a FourCC code"),0;e=d[H];switch(e){case l:z=8;w="COMPRESSED_RGB_S3TC_DXT1_EXT";break;case p:z=16;w="COMPRESSED_RGBA_S3TC_DXT3_EXT";break;case m:z=16;w="COMPRESSED_RGBA_S3TC_DXT5_EXT";
break;default:z=4,w="RGBA"}J=1;d[r]&g&&!1!==loadMipmaps&&(J=Math.max(1,d[s]));u=d[C];A=d[x];v=d[t]+4;var G=[];if(d[D+1]&k)for(I=0;6>I;++I)for(u=d[C],A=d[x],E=0;E<J;++E){if(e)y=Math.max(4,u)/4*Math.max(4,A)/4*z,new Uint8Array(a,v,y),G.push({tex:"TEXTURE_CUBE_MAP",face:I,mipmap:E,internalFormat:w,width:u,height:A,offset:0,dataOffset:v,dataLength:y});else{y=u*A*z;B=new Uint8Array(a,v,y);for(var K=0,P=B.length,Q=0;K<P;K+=4)Q=B[K],B[K]=B[K+2],B[K+2]=Q;G.push({tex:"TEXTURE_CUBE_MAP",face:I,mipmap:E,internalFormat:w,
width:u,height:A,offset:0,type:"UNSIGNED_BYTE",dataOffset:v,dataLength:y})}v+=y;u*=0.5;A*=0.5}else if(c)if(e==l)Math.max(4,u),Math.max(4,A),B=new Uint16Array(a),d=b(B,v/2,u,A),G.push({tex:"TEXTURE_2D",mipmap:0,internalFormat:"RGB",width:u,height:A,offset:0,format:"RGB",type:"UNSIGNED_SHORT_5_6_5",data:d});else return console.error("No manual decoder for",String.fromCharCode(e&255,e>>8&255,e>>16&255,e>>24&255),"and no native support"),0;else for(E=0;E<J;++E)y=Math.max(4,u)/4*Math.max(4,A)/4*z,new Uint8Array(a,
v,y),G.push({tex:"TEXTURE_2D",mipmap:E,internalFormat:w,width:u,height:A,offset:0,type:"UNSIGNED_BYTE",dataOffset:v,dataLength:y}),v+=y,u*=0.5,A*=0.5;return G}function e(a,b,d,e,f,g){var h=new XMLHttpRequest;h.open("GET",d,!0);h.responseType="arraybuffer";h.onload=function(){if(200==this.status){var d=new Int32Array(this.response,0,n),h=d[D+1]&k?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D;a.bindTexture(h,e);var l=c(a,b,this.response,f);a.texParameteri(h,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(h,a.TEXTURE_MIN_FILTER,
1<l?a.LINEAR_MIPMAP_LINEAR:a.LINEAR);a.bindTexture(h,null);e.texture_type=h;e.width=d[C];e.height=d[x]}g&&g(e)};h.send(null);return e}var f=542327876,g=131072,k=512,h=4,l=a("DXT1"),p=a("DXT3"),m=a("DXT5"),n=31,q=0,t=1,r=2,x=3,C=4,s=7,F=20,H=21,D=27;return{dxtToRgb565:b,uploadDDSLevels:c,loadDDSTextureEx:e,loadDDSTexture:function(a,b,c,d){var f=a.createTexture();b=a.getExtension("WEBGL_compressed_texture_s3tc");e(a,b,c,f,!0,d);return f},loadDDSTextureFromMemoryEx:function(a,b,d,e,f){var g=new Int32Array(d,
0,n),h=!!(g[D+1]&k),l=h?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D;a.bindTexture(l,e);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1);b=c(a,b,d,f);a.texParameteri(l,a.TEXTURE_MAG_FILTER,a.LINEAR);a.texParameteri(l,a.TEXTURE_MIN_FILTER,1<b?a.LINEAR_MIPMAP_LINEAR:a.LINEAR);h&&(a.texParameteri(l,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(l,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE));a.bindTexture(l,null);e.texture_type=l;e.width=g[C];e.height=g[x];return e},getDDSTextureFromMemoryEx:function(a){var b=new Int32Array(a,0,
n),c=b[D+1]&k?"TEXTURE_CUBE_MAP":"TEXTURE_2D",e=d(a);return{type:c,buffers:e,data:a,width:b[C],height:b[x]}}}}();if("undefined"==typeof glMatrix)throw"You must include glMatrix on your project";Math.clamp=function(a,b,c){return b>a?b:c<a?c:a};var V3=vec3.create,M4=vec3.create;vec3.zero=function(a){a[0]=a[1]=a[2]=0;return a};vec3.minValue=function(a){return a[0]<a[1]&&a[0]<a[2]?a[0]:a[1]<a[2]?a[1]:a[2]};vec3.maxValue=function(a){return a[0]>a[1]&&a[0]>a[2]?a[0]:a[1]>a[2]?a[1]:a[2]};
vec3.minValue=function(a){return a[0]<a[1]&&a[0]<a[2]?a[0]:a[1]<a[2]?a[1]:a[2]};vec3.addValue=function(a,b,c){a[0]=b[0]+c;a[1]=b[1]+c;a[2]=b[2]+c};vec3.subValue=function(a,b,c){a[0]=b[0]-c;a[1]=b[1]-c;a[2]=b[2]-c};vec3.toArray=function(a){return[a[0],a[1],a[2]]};vec3.rotateX=function(a,b,c){var d=b[1],e=b[2],f=Math.cos(c);c=Math.sin(c);a[0]=b[0];a[1]=d*f-e*c;a[2]=d*c+e*f;return a};vec3.rotateY=function(a,b,c){var d=b[0],e=b[2],f=Math.cos(c);c=Math.sin(c);a[0]=d*f-e*c;a[1]=b[1];a[2]=d*c+e*f;return a};
vec3.rotateZ=function(a,b,c){var d=b[0],e=b[1],f=Math.cos(c);c=Math.sin(c);a[0]=d*f-e*c;a[1]=d*c+e*f;a[2]=b[2];return a};vec2.perpdot=function(a,b){return a[1]*b[0]+-a[0]*b[1]};vec2.computeSignedAngle=function(a,b){return Math.atan2(vec2.perpdot(a,b),vec2.dot(a,b))};vec2.random=function(a){a[0]=Math.random();a[1]=Math.random();return a};vec3.angle=function(a,b){return Math.acos(vec3.dot(a,b))};vec3.random=function(a){a[0]=Math.random();a[1]=Math.random();a[2]=Math.random();return a};
vec4.random=function(a){a[0]=Math.random();a[1]=Math.random();a[2]=Math.random();a[3]=Math.random();return a};vec3.polarToCartesian=function(a,b){var c=b[0],d=b[1],e=b[2];a[0]=c*Math.cos(d)*Math.sin(e);a[1]=c*Math.sin(d);a[2]=c*Math.cos(d)*Math.cos(e);return a};mat4.toArray=function(a){return[a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7],a[8],a[9],a[10],a[11],a[12],a[13],a[14],a[15]]};
mat4.setUpAndOrthonormalize=function(a,b,c){b!=a&&mat4.copy(a,b);b=a.subarray(0,3);vec3.normalize(a.subarray(4,7),c);a=a.subarray(8,11);vec3.cross(b,c,a);vec3.normalize(b,b);vec3.cross(a,b,c);vec3.normalize(a,a)};mat4.multiplyVec3=function(a,b,c){var d=c[0],e=c[1];c=c[2];a[0]=b[0]*d+b[4]*e+b[8]*c+b[12];a[1]=b[1]*d+b[5]*e+b[9]*c+b[13];a[2]=b[2]*d+b[6]*e+b[10]*c+b[14];return a};mat4.projectVec3=function(a,b,c){mat4.multiplyVec3(a,b,c);a[0]/=a[2];a[1]/=a[2];return a};
mat4.rotateVec3=function(a,b,c){var d=c[0],e=c[1];c=c[2];a[0]=b[0]*d+b[4]*e+b[8]*c;a[1]=b[1]*d+b[5]*e+b[9]*c;a[2]=b[2]*d+b[6]*e+b[10]*c;return a};mat4.fromTranslationFrontTop=function(a,b,c,d){vec3.cross(a.subarray(0,3),c,d);a.set(d,4);a.set(c,8);a.set(b,12);return a};mat4.translationMatrix=function(a){var b=mat4.create();b[12]=a[0];b[13]=a[1];b[14]=a[2];return b};mat4.setTranslation=function(a,b){a[12]=b[0];a[13]=b[1];a[14]=b[2];return a};
mat4.getTranslation=function(a,b){a[0]=b[12];a[1]=b[13];a[2]=b[14];return a};mat4.toRotationMat4=function(a,b){mat4.copy(a,b);a[12]=a[13]=a[14]=0;return a};mat4.swapRows=function(a,b,c,d){if(a!=b)return mat4.copy(a,b),a[4*c]=b[4*d],a[4*c+1]=b[4*d+1],a[4*c+2]=b[4*d+2],a[4*c+3]=b[4*d+3],a[4*d]=b[4*c],a[4*d+1]=b[4*c+1],a[4*d+2]=b[4*c+2],a[4*d+3]=b[4*c+3],a;b=new Float32Array(matrix.subarray(4*c,5*c));matrix.set(matrix.subarray(4*d,5*d),4*c);matrix.set(b,4*d);return a};
mat4.scaleAndAdd=function(a,b,c,d){a[0]=b[0]+c[0]*d;a[1]=b[1]+c[1]*d;a[2]=b[2]+c[2]*d;a[3]=b[3]+c[3]*d;a[4]=b[4]+c[4]*d;a[5]=b[5]+c[5]*d;a[6]=b[6]+c[6]*d;a[7]=b[7]+c[7]*d;a[8]=b[8]+c[8]*d;a[9]=b[9]+c[9]*d;a[10]=b[10]+c[10]*d;a[11]=b[11]+c[11]*d;a[12]=b[12]+c[12]*d;a[13]=b[13]+c[13]*d;a[14]=b[14]+c[14]*d;a[15]=b[15]+c[15]*d;return a};
vec3.project=function(a,b,c,d){b=vec3.clone(b);mat4.multiplyVec3(b,c,b);mat4.multiplyVec3(b,d,b);return vec3.set(a,viewport[0]+viewport[2]*(0.5*point[0]+0.5),viewport[1]+viewport[3]*(0.5*point[1]+0.5),0.5*point[2]+0.5)};var unprojectMat=mat4.create(),unprojectVec=vec4.create();
vec3.unproject=function(a,b,c,d,e){var f=unprojectMat,g=unprojectVec;g[0]=2*(b[0]-e[0])/e[2]-1;g[1]=2*(b[1]-e[1])/e[3]-1;g[2]=2*b[2]-1;g[3]=1;mat4.multiply(f,d,c);if(!mat4.invert(f,f))return null;vec4.transformMat4(g,g,f);if(0===g[3])return null;a[0]=g[0]/g[3];a[1]=g[1]/g[3];a[2]=g[2]/g[3];return a};
quat.toEuler=function(a,b){var c=Math.atan2(2*b[1]*b[3]-2*b[0]*b[2],1-2*b[1]*b[1]-2*b[2]*b[2]),d=Math.asin(2*b[0]*b[1]+2*b[2]*b[3]),e=Math.atan2(2*b[0]*b[3]-2*b[1]*b[2],1-2*b[0]*b[0]-2*b[2]*b[2]);a||(a=vec3.create());vec3.set(a,c,d,e);return a};
quat.fromEuler=function(a,b){var c=b[0],d=b[1],e=b[2],f=Math.cos(c),g=Math.cos(d),k=Math.cos(e),c=Math.sin(c),d=Math.sin(d),e=Math.sin(e),h=0.5*Math.sqrt(1+f*g+f*k-c*d*e+g*k);return quat.set(a,(g*e+f*e+c*d*k)/(4*h),(c*g+c*k+f*d*e)/(4*h),(-c*e+f*d*k+d)/(4*h),h)};
quat.fromMat4=function(a,b){var c=b[0]+b[5]+b[10];if(0<c){var d=Math.sqrt(c+1);a[3]=0.5*d;d=0.5/d;a[0]=(b[9]-b[6])*d;a[1]=(b[2]-b[8])*d;a[2]=(b[4]-b[1])*d}else{c=0;b[5]>b[0]&&(c=1);b[10]>b[4*c+c]&&(c=2);var e=(c+1)%3,f=(e+1)%3,d=Math.sqrt(b[4*c+c]-b[4*e+e]-b[4*f+f]+1);a[c]=0.5*d;d=0.5/d;a[3]=(b[4*f+e]-b[4*e+f])*d;a[e]=(b[4*e+c]+b[4*c+e])*d;a[f]=(b[4*f+c]+b[4*c+f])*d}quat.normalize(a,a)};function Indexer(){this.unique=[];this.indices=[];this.map={}}
Indexer.prototype={add:function(a){var b=JSON.stringify(a);b in this.map||(this.map[b]=this.unique.length,this.unique.push(a));return this.map[b]}};function Buffer(a,b,c,d){this.buffer=null;this.target=a;this.data=b;this.spacing=c||3;this.data&&this.compile(d)}Buffer.prototype.forEach=function(a){for(var b=this.data,c=0,d=this.spacing,e=b.length;c<e;c+=d)a(b.subarray(c,c+d));return this};
Buffer.prototype.compile=function(a){var b=this.spacing||3;if(!this.data)throw"No data supplied";var c=this.data;if(!c.buffer)throw"Buffers must be typed arrays";this.buffer=this.buffer||gl.createBuffer();this.buffer.length=c.length;this.buffer.spacing=b;switch(c.constructor){case Int8Array:this.buffer.gl_type=gl.BYTE;break;case Uint8ClampedArray:case Uint8Array:this.buffer.gl_type=gl.UNSIGNED_BYTE;break;case Int16Array:this.buffer.gl_type=gl.SHORT;break;case Uint16Array:this.buffer.gl_type=gl.UNSIGNED_SHORT;
break;case Int32Array:this.buffer.gl_type=gl.INT;break;case Uint32Array:this.buffer.gl_type=gl.UNSIGNED_INT;break;case Float32Array:this.buffer.gl_type=gl.FLOAT;break;default:throw"unsupported buffer type";}gl.bindBuffer(this.target,this.buffer);gl.bufferData(this.target,c,a||this.stream_type||gl.STATIC_DRAW)};function Mesh(a,b,c){this.vertexBuffers={};this.indexBuffers={};(a||b)&&this.addBuffers(a,b);if(c)for(var d in c)this[d]=c[d]}
Mesh.common_buffers={vertices:{spacing:3,attribute:"a_vertex"},vertices2D:{spacing:2,attribute:"a_vertex2D"},normals:{spacing:3,attribute:"a_normal"},coords:{spacing:2,attribute:"a_coord"},coords1:{spacing:2,attribute:"a_coord1"},coords2:{spacing:2,attribute:"a_coord2"},colors:{spacing:4,attribute:"a_color"},tangents:{spacing:3,attribute:"a_tangent"},bone_indices:{spacing:4,attribute:"a_bone_indices",type:Uint8Array},weights:{spacing:4,attribute:"a_weights"},extra:{spacing:1,attribute:"a_extra"},
extra2:{spacing:2,attribute:"a_extra2"},extra3:{spacing:3,attribute:"a_extra3"},extra4:{spacing:4,attribute:"a_extra4"}};
Mesh.prototype.addBuffers=function(a,b,c){var d=0;this.vertexBuffers.vertices&&(d=this.vertexBuffers.vertices.data.length/3);for(var e in a){var f=a[e];if(f){if("number"!=typeof f[0]){for(var g=[],k=0,h=1E4;k<f.length;k+=h)g=Array.prototype.concat.apply(g,f.slice(k,k+h));f=g}g=Mesh.common_buffers[e];f.constructor===Array&&(k=Float32Array,g&&g.type&&(k=g.type),f=new k(f));"vertices"==e&&(d=f.length/3);k=f.length/d;g&&g.spacing&&(k=g.spacing);h="a_"+e;g&&g.attribute&&(h=g.attribute);this.addVertexBuffer(e,
h,k,f,c)}}if(b)for(e in b)if(f=b[e]){if("number"!=typeof f[0])for(f=[],e=0,h=1E4;e<this.data.length;e+=h)f=Array.prototype.concat.apply(f,this.data.slice(e,e+h));f.constructor===Array&&(k=Uint16Array,65536<d&&(k=Uint32Array),f=new k(f));this.addIndexBuffer(e,f)}};
Mesh.prototype.addVertexBuffer=function(a,b,c,d,e){var f=Mesh.common_buffers[a];!b&&f&&(b=f.attribute);if(!b)throw"Buffer added to mesh without attribute name";!c&&f&&(c=f&&f.spacing?f.spacing:3);if(!d){d=this.getNumVertices();if(!d)throw"Cannot create an empty buffer in a mesh without vertices (vertices are needed to now the size)";d=new Float32Array(d*c)}if(!d.buffer)throw"Buffer data MUST be typed array";c=this.vertexBuffers[a]=new Buffer(gl.ARRAY_BUFFER,d,c,e);c.name=a;c.attribute=b;return c};
Mesh.prototype.removeVertexBuffer=function(a){this.vertexBuffers[a]&&delete this.vertexBuffers[a]};Mesh.prototype.getVertexBuffer=function(a){return this.vertexBuffers[a]};Mesh.prototype.addIndexBuffer=function(a,b,c){return this.indexBuffers[a]=new Buffer(gl.ELEMENT_ARRAY_BUFFER,b,c)};Mesh.prototype.getBuffer=function(a){return this.vertexBuffers[a]};Mesh.prototype.getIndexBuffer=function(a){return this.indexBuffers[a]};
Mesh.prototype.compile=function(a){for(var b in this.vertexBuffers){var c=this.vertexBuffers[b];c.compile(a)}for(var d in this.indexBuffers)c=this.indexBuffers[d],c.compile()};Mesh.prototype.generateMetadata=function(){var a={},b=this.vertexBuffers.vertices.data,c=this.indexBuffers.triangles.data;a.vertices=b.length/3;a.faces=c?c.length/3:b.length/9;a.indexed=!!this.metadata.faces;this.metadata=a};
Mesh.prototype.computeWireframe=function(){var a=this.indexBuffers.triangles,b=this.vertexBuffers.vertices.data.length/3;if(a){for(var c=a.data,d=new Indexer,a=0;a<c.length;a+=3)for(var e=c.subarray(a,a+3),f=0;f<e.length;f++){var g=e[f],k=e[(f+1)%e.length];d.add([Math.min(g,k),Math.max(g,k)])}c=d.unique;d=65536<b?new Uint32Array(2*c.length):new Uint16Array(2*c.length);a=0;for(b=c.length;a<b;++a)d.set(c[a],2*a)}else for(a=b/3,d=65536<b?new Uint32Array(6*a):new Uint16Array(6*a),a=0;a<b;a+=3)d[2*a]=
a,d[2*a+1]=a+1,d[2*a+2]=a+1,d[2*a+3]=a+2,d[2*a+4]=a+2,d[2*a+5]=a;this.addIndexBuffer("wireframe",d);return this};
Mesh.prototype.computeNormals=function(){var a=this.vertexBuffers.vertices.data,b=new Float32Array(a.length),c=null;this.indexBuffers.triangles&&(c=this.indexBuffers.triangles.data);for(var d=vec3.create(),e=vec3.create(),f,g,k,h,l,p,m=c?c.length:a.length,n=0;n<m;n+=3)c?(f=c[n],g=c[n+1],k=c[n+2],h=a.subarray(3*f,3*f+3),l=a.subarray(3*g,3*g+3),p=a.subarray(3*k,3*k+3),f=b.subarray(3*f,3*f+3),g=b.subarray(3*g,3*g+3),k=b.subarray(3*k,3*k+3)):(h=a.subarray(3*n,3*n+3),l=a.subarray(3*n+3,3*n+6),p=a.subarray(3*
n+6,3*n+9),f=b.subarray(3*n,3*n+3),g=b.subarray(3*n+3,3*n+6),k=b.subarray(3*n+6,3*n+9)),vec3.sub(d,l,h),vec3.sub(e,p,h),vec3.cross(d,d,e),vec3.normalize(d,d),vec3.add(f,f,d),vec3.add(g,g,d),vec3.add(k,k,d);if(c)for(n=0,m=b.length;n<m;n+=3)a=b.subarray(n,n+3),vec3.normalize(a,a);this.addVertexBuffer("normals",Mesh.common_buffers.normals.attribute,3,b)};
Mesh.prototype.computeTangents=function(){var a=this.vertexBuffers.vertices.data,b=this.vertexBuffers.normals.data,c=this.vertexBuffers.coords.data,d=this.indexBuffers.triangles.data;if(a&&b&&c){var e=a.length/3,f=new Float32Array(4*e),g=new Float32Array(6*e),e=g.subarray(3*e),k,h,l=vec3.create(),p=vec3.create(),m=vec3.create(),n=vec3.create();k=0;for(h=d.length;k<h;k+=3){var q=d[k],t=d[k+1],r=d[k+2],x=a.subarray(3*q,3*q+3),C=a.subarray(3*t,3*t+3),s=a.subarray(3*r,3*r+3),F=c.subarray(2*q,2*q+2),H=
c.subarray(2*t,2*t+2),D=c.subarray(2*r,2*r+2),M=C[0]-x[0],N=s[0]-x[0],L=C[1]-x[1],O=s[1]-x[1],C=C[2]-x[2],x=s[2]-x[2],s=H[0]-F[0],z=D[0]-F[0],H=H[1]-F[1],F=D[1]-F[1],D=s*F-z*H,D=1E-9>Math.abs(D)?0:1/D;vec3.copy(l,[(F*M-H*N)*D,(F*L-H*O)*D,(F*C-H*x)*D]);vec3.copy(p,[(s*N-z*M)*D,(s*O-z*L)*D,(s*x-z*C)*D]);vec3.add(g.subarray(3*q,3*q+3),g.subarray(3*q,3*q+3),l);vec3.add(g.subarray(3*t,3*t+3),g.subarray(3*t,3*t+3),l);vec3.add(g.subarray(3*r,3*r+3),g.subarray(3*r,3*r+3),l);vec3.add(e.subarray(3*q,3*q+3),
e.subarray(3*q,3*q+3),p);vec3.add(e.subarray(3*t,3*t+3),e.subarray(3*t,3*t+3),p);vec3.add(e.subarray(3*r,3*r+3),e.subarray(3*r,3*r+3),p)}k=0;for(h=a.length;k<h;k+=3)a=b.subarray(k,k+3),c=g.subarray(k,k+3),vec3.subtract(m,c,vec3.scale(m,a,vec3.dot(a,c))),vec3.normalize(m,m),a=0>vec3.dot(vec3.cross(n,a,c),e.subarray(k,k+3))?-1:1,f.set([m[0],m[1],m[2],a],k/3*4);this.addVertexBuffer("tangents",Mesh.common_buffers.tangents.attribute,4,f)}};
Mesh.prototype.getNumVertices=function(){var a=this.vertexBuffers.vertices;return a?a.data.length/a.spacing:0};Mesh.computeBounding=function(a,b){if(a){for(var c=vec3.clone(a.subarray(0,3)),d=vec3.clone(a.subarray(0,3)),e,f=3;f<a.length;f+=3)e=a.subarray(f,f+3),vec3.min(c,e,c),vec3.max(d,e,d);c=vec3.add(vec3.create(),c,d);vec3.scale(c,c,0.5);d=vec3.subtract(vec3.create(),d,c);return BBox.setCenterHalfsize(b||BBox.create(),c,d)}};
Mesh.prototype.updateBounding=function(){var a=this.vertexBuffers.vertices.data;a&&(this.bounding=Mesh.computeBounding(a,this.bounding))};Mesh.prototype.setBounding=function(a,b){this.bounding=BBox.setCenterHalfsize(this.bounding||BBox.create(),a,b)};Mesh.prototype.freeData=function(){for(var a in this.vertexBuffers)this.vertexBuffers[a].data=null,delete this[this.vertexBuffers[a].name];for(var b in this.indexBuffers)this.indexBuffers[b].data=null,delete this[this.indexBuffers[b].name]};
Mesh.prototype.configure=function(a,b){var c={},d={};b=b||{};for(var e in a)a[e]&&("indices"==e||"lines"==e||"wireframe"==e||"triangles"==e?d[e]=a[e]:Mesh.common_buffers[e]?c[e]=a[e]:b[e]=a[e]);this.addBuffers(c,d);for(d in b)this[d]=b[d]};Mesh.load=function(a,b,c){b=b||{};c=c||new GL.Mesh;c.configure(a,b);return c};
Mesh.plane=function(a){a=a||{};a.triangles=[];var b=a.detailX||a.detail||1,c=a.detailY||a.detail||1,d=a.width||a.size||1,e=a.height||a.size||1,f=a.xz,d=0.5*d,e=0.5*e;a=[];var g=[],k=[],h=[],l=vec3.fromValues(0,0,1);f&&l.set([0,1,0]);for(var p=0;p<=c;p++)for(var m=p/c,n=0;n<=b;n++){var q=n/b;f?g.push((2*q-1)*d,0,(2*m-1)*d):g.push((2*q-1)*d,(2*m-1)*e,0);k&&k.push(q,m);h&&h.push(l[0],l[1],l[2]);n<b&&p<c&&(q=n+p*(b+1),f?(a.push(q+1,q,q+b+1),a.push(q+1,q+b+1,q+b+2)):(a.push(q,q+1,q+b+1),a.push(q+b+1,q+
1,q+b+2)))}b=BBox.fromCenterHalfsize([0,0,0],f?[d,0,e]:[d,e,0]);return GL.Mesh.load({vertices:g,normals:h,coords:k,triangles:a},{bounding:b})};Mesh.plane2D=function(a){var b=new Float32Array([-1,1,1,-1,1,1,-1,1,-1,-1,1,-1]),c=new Float32Array([0,1,1,0,1,1,0,1,0,0,1,0]);if(a&&a.size){a=0.5*a.size;for(var d=0;d<b.length;++d)b[d]*=a}return new GL.Mesh({vertices2D:b,coords:c})};Mesh.point=function(a){return new GL.Mesh({vertices:[0,0,0]})};
Mesh.cube=function(a){a=a||{};var b=a.size||1,b=0.5*b,c={};c.vertices=new Float32Array([-1,1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,1,1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,1]);for(var d=0,e=c.vertices.length;d<e;++d)c.vertices[d]*=b;c.normals=new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,
0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0]);c.coords=new Float32Array([0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0]);a.bounding=BBox.fromCenterHalfsize([0,0,0],[b,b,b]);return Mesh.load(c,a)};
Mesh.box=function(a){a=a||{};var b=a.sizex||1,c=a.sizey||1,d=a.sizez||1,b=0.5*b,c=0.5*c,d=0.5*d,e={};e.vertices=new Float32Array([-1,1,-1,-1,-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,1,-1,1,-1,1,1,-1,-1,-1,1,1,1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,-1,1,-1,1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,1,-1,1,1,1,1,1,-1,-1,1,-1,-1,1,1,1,1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,-1,1,-1,1,-1,-1,1]);for(var f=0,g=e.vertices.length;f<g;f+=3)e.vertices[f]*=b,e.vertices[f+1]*=c,e.vertices[f+2]*=d;e.normals=
new Float32Array([-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0]);e.coords=new Float32Array([0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0]);a.bounding=BBox.fromCenterHalfsize([0,0,0],[b,c,d]);return Mesh.load(e,a)};
Mesh.circle=function(a){a=a||{};var b=a.size||a.radius||1,c=Math.ceil(a.slices||24),d=a.xz||!1,e=a.empty||!1;3>c&&(c=3);var f=2*Math.PI/c,g=vec3.create(),k=vec3.create(),h=vec3.fromValues(0,0,1),l=vec2.fromValues(0.5,0.5),p=vec2.create();d&&h.set([0,1,0]);var m=d?2:1,n=new Float32Array(3*(c+1)),q=new Float32Array(3*(c+1)),t=new Float32Array(2*(c+1)),r=null;n.set(g,0);q.set(h,0);t.set(l,0);for(g=l=r=0;g<c;++g)r=Math.sin(f*g),l=Math.cos(f*g),k[0]=r*b,k[m]=l*b,p[0]=0.5*r+0.5,p[1]=0.5*l+0.5,n.set(k,3*
g+3),q.set(h,3*g+3),t.set(p,2*g+2);if(e)n=n.subarray(3),q=n.subarray(3),t=n.subarray(2),r=null;else{r=new Uint16Array(3*c);e=2;f=1;d&&(e=1,f=2);for(g=0;g<c-1;++g)r[3*g]=0,r[3*g+1]=g+e,r[3*g+2]=g+f;r[3*g]=0;d?(r[3*g+1]=g+1,r[3*g+2]=1):(r[3*g+1]=1,r[3*g+2]=g+1)}a.bounding=BBox.fromCenterHalfsize([0,0,0],d?[b,0,b]:[b,b,0]);return Mesh.load({vertices:n,normals:q,coords:t,triangles:r},a)};
Mesh.cylinder=function(a){a=a||{};for(var b=a.radius||a.size||1,c=a.height||a.size||2,d=a.subdivisions||64,e=new Float32Array(18*d),f=new Float32Array(18*d),g=new Float32Array(12*d),k=2*Math.PI/d,h=null,l=0;l<d;++l){var p=l*k,h=[Math.sin(p),0,Math.cos(p)];e.set([h[0]*b,0.5*c,h[2]*b],18*l);f.set(h,18*l);g.set([l/d,1],12*l);h=[Math.sin(p),0,Math.cos(p)];e.set([h[0]*b,-0.5*c,h[2]*b],18*l+3);f.set(h,18*l+3);g.set([l/d,0],12*l+2);h=[Math.sin(p+k),0,Math.cos(p+k)];e.set([h[0]*b,-0.5*c,h[2]*b],18*l+6);f.set(h,
18*l+6);g.set([(l+1)/d,0],12*l+4);h=[Math.sin(p+k),0,Math.cos(p+k)];e.set([h[0]*b,0.5*c,h[2]*b],18*l+9);f.set(h,18*l+9);g.set([(l+1)/d,1],12*l+6);h=[Math.sin(p),0,Math.cos(p)];e.set([h[0]*b,0.5*c,h[2]*b],18*l+12);f.set(h,18*l+12);g.set([l/d,1],12*l+8);h=[Math.sin(p+k),0,Math.cos(p+k)];e.set([h[0]*b,-0.5*c,h[2]*b],18*l+15);f.set(h,18*l+15);g.set([(l+1)/d,0],12*l+10)}d={vertices:e,normals:f,coords:g};a.bounding=BBox.fromCenterHalfsize([0,0,0],[b,0.5*c,b]);return Mesh.load(d,a)};
Mesh.sphere=function(a){a=a||{};for(var b=a.radius||a.size||1,c=a.lat||16,d=a["long"]||16,e=new Float32Array((c+1)*(d+1)*3),f=new Float32Array((c+1)*(d+1)*3),g=new Float32Array((c+1)*(d+1)*2),k=new Uint16Array(c*d*6),h=0,l=0,p=0;p<=c;p++)for(var m=p*Math.PI/c,n=Math.sin(m),q=Math.cos(m),m=0;m<=d;m++){var t=2*m*Math.PI/d,r=Math.sin(t),t=Math.cos(t)*n,x=q,r=r*n,C=1-m/d,s=1-p/c;e.set([b*t,b*x,b*r],h);f.set([t,x,r],h);g.set([C,s],l);h+=3;l+=2}for(p=h=0;p<c;p++)for(m=0;m<d;m++)l=p*(d+1)+m,n=l+d+1,k.set([n,
l,l+1],h),k.set([n+1,n,l+1],h+3),h+=6;c={vertices:e,normals:f,coords:g,triangles:k};a.bounding=BBox.fromCenterHalfsize([0,0,0],[b,b,b],b);return Mesh.load(c,a)};Mesh.grid=function(a){a=a||{};var b=a.lines||10;0>b&&(b=1);var c=a.size||10;a=new Float32Array(12*b);for(var d=0.5*c,e=0,f=-d,c=c/(b-1),g=0;g<b;g++)a[e]=f,a[e+2]=-d,a[e+3]=f,a[e+5]=d,a[e+6]=d,a[e+8]=f,a[e+9]=-d,a[e+11]=f,f+=c,e+=12;return new GL.Mesh({vertices:a})};
Mesh.mergeMeshes=function(a){var b={},c={},d=a[0],e=[],f;for(f in d.vertexBuffers){for(var g=d.vertexBuffers[f],k=g.data.length,h=1;h<a.length;++h){if(!a[h].vertexBuffers[f])throw"cannot merge with different amount of buffers";k+=a[h].vertexBuffers[f].data.length}g=new Float32Array(k);for(h=k=0;h<a.length;++h)e[h]=k,g.set(a[h].vertexBuffers[f].data,k),k+=a[h].vertexBuffers[f].data.length;b[f]=g}for(f in d.indexBuffers){g=d.indexBuffers[f];k=g.data.length;for(h=1;h<a.length;++h){if(!a[h].indexBuffers[f])throw"cannot merge with different amount of buffers";
k+=a[h].indexBuffers[f].data.length}g=new g.constructor(k);for(h=k=0;h<a.length;++h){var l=a[h].indexBuffers[f].data;if(0==h)g.set(l,k);else for(var p=e[h],m=0,n=l.length;m<n;m++)g[m+k]=l[m]+p;k+=a[h].indexBuffers[f].data.length}c[f]=g}return new Mesh(b,c)};Mesh.parsers={};
Mesh.fromURL=function(a,b){var c=new GL.Mesh;HttpRequest(a,null,function(d){var e=a.substr(a.length-4).toLowerCase(),f=Mesh.parsers[e];if(f)f.call(null,d,{mesh:c});else throw"Mesh.fromURL: no parser found for format "+e;b&&b(c)});return c};Mesh.getScreenQuad=function(){if(gl._screen_quad)return gl._screen_quad;var a=new Float32Array(18),b=new Float32Array([0,0,1,1,0,1,0,0,1,0,1,1]);gl._screen_quad=new GL.Mesh({vertices:a,coords:b});return gl._screen_quad};
function Texture(a,b,c){c=c||{};a=parseInt(a);b=parseInt(b);this.handler=gl.createTexture();this.width=a;this.height=b;this.format=c.format||gl.RGBA;this.type=c.type||gl.UNSIGNED_BYTE;this.texture_type=c.texture_type||gl.TEXTURE_2D;this.magFilter=c.magFilter||c.filter||gl.LINEAR;this.minFilter=c.minFilter||c.filter||gl.LINEAR;this.wrapS=c.wrap||c.wrapS||gl.CLAMP_TO_EDGE;this.wrapT=c.wrap||c.wrapT||gl.CLAMP_TO_EDGE;Texture.MAX_TEXTURE_IMAGE_UNITS||(Texture.MAX_TEXTURE_IMAGE_UNITS=gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS));
this.has_mipmaps=!1;if(this.format==gl.DEPTH_COMPONENT&&!gl.depth_ext)throw"Depth Texture not supported";if(this.type==gl.FLOAT&&!gl.float_ext)throw"Float Texture not supported";if(this.type==gl.HALF_FLOAT_OES&&!gl.half_float_ext)throw"Half Float Texture not supported";if(!((this.minFilter==gl.NEAREST||this.minFilter==gl.LINEAR)&&this.wrapS==gl.CLAMP_TO_EDGE&&this.wrapT==gl.CLAMP_TO_EDGE||isPowerOfTwo(this.width)&&isPowerOfTwo(this.height)))throw"Cannot use texture-wrap or mipmaps in Non-Power-of-Two textures";
a&&b&&(gl.activeTexture(gl.TEXTURE0+Texture.MAX_TEXTURE_IMAGE_UNITS-1),gl.bindTexture(this.texture_type,this.handler),gl.texParameteri(this.texture_type,gl.TEXTURE_MAG_FILTER,this.magFilter),gl.texParameteri(this.texture_type,gl.TEXTURE_MIN_FILTER,this.minFilter),gl.texParameteri(this.texture_type,gl.TEXTURE_WRAP_S,this.wrapS),gl.texParameteri(this.texture_type,gl.TEXTURE_WRAP_T,this.wrapT),this.texture_type==gl.TEXTURE_2D?gl.texImage2D(gl.TEXTURE_2D,0,this.format,a,b,0,this.format,this.type,c.pixel_data||
null):this.texture_type==gl.TEXTURE_CUBE_MAP&&(gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X,0,this.format,this.width,this.height,0,this.format,this.type,null),gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y,0,this.format,this.width,this.height,0,this.format,this.type,null),gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z,0,this.format,this.width,this.height,0,this.format,this.type,null),gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X,0,this.format,this.width,this.height,0,this.format,this.type,null),gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
0,this.format,this.width,this.height,0,this.format,this.type,null),gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z,0,this.format,this.width,this.height,0,this.format,this.type,null)),gl.bindTexture(this.texture_type,null),gl.activeTexture(gl.TEXTURE0))}Texture.framebuffer=null;Texture.renderbuffer=null;
Texture.prototype.getProperties=function(){return{width:this.width,height:this.height,type:this.type,format:this.format,texture_type:this.texture_type,magFilter:this.magFilter,minFilter:this.minFilter,wrapS:this.wrapS,wrapT:this.wrapT}};Texture.isDepthSupported=function(){return null!=(gl.getExtension("WEBGL_depth_texture")||gl.getExtension("WEBKIT_WEBGL_depth_texture")||gl.getExtension("MOZ_WEBGL_depth_texture"))};
Texture.prototype.bind=function(a){void 0==a&&(a=0);gl.activeTexture(gl.TEXTURE0+a);gl.bindTexture(this.texture_type,this.handler);return a};Texture.prototype.unbind=function(a){void 0===a&&(a=0);gl.activeTexture(gl.TEXTURE0+a);gl.bindTexture(this.texture_type,null)};Texture.prototype.setParameter=function(a,b){gl.texParameteri(this.texture_type,a,b)};
Texture.setUploadOptions=function(a){a?(gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!!a.premultiply_alpha),gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!a.no_flip)):(gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,!0));gl.pixelStorei(gl.UNPACK_ALIGNMENT,1)};
Texture.prototype.uploadImage=function(a,b){this.bind();Texture.setUploadOptions(b);try{gl.texImage2D(gl.TEXTURE_2D,0,this.format,this.format,this.type,a),this.width=a.videoWidth||a.width,this.height=a.videoHeight||a.height}catch(c){if("file:"==location.protocol)throw'image not loaded for security reasons (serve this page over "http://" instead)';throw"image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)";}this.minFilter&&
this.minFilter!=gl.NEAREST&&this.minFilter!=gl.LINEAR&&(gl.generateMipmap(this.texture_type),this.has_mipmaps=!0);gl.bindTexture(this.texture_type,null)};Texture.prototype.uploadData=function(a,b){this.bind();Texture.setUploadOptions(b);gl.texImage2D(this.texture_type,0,this.format,this.width,this.height,0,this.format,this.type,a);this.minFilter&&this.minFilter!=gl.NEAREST&&this.minFilter!=gl.LINEAR&&(gl.generateMipmap(texture.texture_type),this.has_mipmaps=!0);gl.bindTexture(this.texture_type,null)};
Texture.prototype.drawTo=function(a,b){var c=gl.getViewport();Texture.framebuffer=Texture.framebuffer||gl.createFramebuffer();Texture.renderbuffer=Texture.renderbuffer||gl.createRenderbuffer();var d=Texture.renderbuffer;gl.bindFramebuffer(gl.FRAMEBUFFER,Texture.framebuffer);gl.bindRenderbuffer(gl.RENDERBUFFER,d);if(this.width!=d.width||this.height!=d.height)d.width=this.width,d.height=this.height,gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,this.width,this.height);gl.viewport(0,0,this.width,
this.height);if(this.texture_type==gl.TEXTURE_2D)gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.handler,0),gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,d),a(this,b);else if(this.texture_type==gl.TEXTURE_CUBE_MAP)for(var e=0;6>e;e++)gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_CUBE_MAP_POSITIVE_X+e,this.handler,0),gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,d),a(this,e,b);gl.bindFramebuffer(gl.FRAMEBUFFER,
null);gl.bindRenderbuffer(gl.RENDERBUFFER,null);gl.viewport(c[0],c[1],c[2],c[3]);return this};Texture.prototype.copyTo=function(a){var b=this;a.drawTo(function(){gl.disable(gl.BLEND);gl.disable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);b.toViewport()});a.minFilter&&a.minFilter!=gl.NEAREST&&a.minFilter!=gl.LINEAR&&(a.bind(),gl.generateMipmap(a.texture_type),a.has_mipmaps=!0);gl.bindTexture(a.texture_type,null);return this};
Texture.prototype.toViewport=function(a,b){a=a||Shader.getScreenShader();var c=Mesh.getScreenQuad();this.bind(0);a.uniforms({u_texture:0});b&&a.uniforms(b);a.draw(c,gl.TRIANGLES)};
Texture.prototype.renderQuad=function(){var a=mat3.create(),b=vec2.create(),c=vec2.create(),d=vec4.fromValues(1,1,1,1);return function(e,f,g,k,h,l){b[0]=e;b[1]=f;c[0]=g;c[1]=k;h=h||Shader.getQuadShader();e=Mesh.getScreenQuad();this.bind(0);h.uniforms({u_texture:0,u_position:b,u_color:d,u_size:c,u_viewport:gl.viewport_data.subarray(2,4),u_transform:a});l&&h.uniforms(l);h.draw(e,gl.TRIANGLES)}}();
Texture.prototype.toCanvas=function(a){var b=this.width,c=this.height;a=a||createCanvas(b,c);a.width!=b&&(a.width=b);a.height!=c&&(a.height=c);var d=new Uint8Array(b*c*4);this.drawTo(function(){gl.readPixels(0,0,b,c,gl.RGBA,gl.UNSIGNED_BYTE,d)});var e=a.getContext("2d"),f=e.getImageData(0,0,b,c);f.data.set(d);e.putImageData(f,0,0);return a};
Texture.prototype.applyBlur=function(a,b,c,d){var e=this,f=Shader.getBlurShader();d||(d=new GL.Texture(this.width,this.height,this.getProperties()));a/=this.width;b/=this.height;gl.disable(gl.DEPTH_TEST);gl.disable(gl.BLEND);d.drawTo(function(){e.toViewport(f,{u_intensity:c,u_offset:[0,b]})});this.drawTo(function(){d.toViewport(f,{u_intensity:c,u_offset:[a,0]})});return d};
Texture.drawToColorAndDepth=function(a,b,c){if(b.width!=a.width||b.height!=a.height)throw"Different size between color texture and depth texture";var d=gl.getViewport();Texture.framebuffer=Texture.framebuffer||gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,Texture.framebuffer);gl.viewport(0,0,a.width,a.height);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,a.handler,0);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,b.handler,0);c();gl.bindFramebuffer(gl.FRAMEBUFFER,
null);gl.viewport(d[0],d[1],d[2],d[3])};
Texture.fromURL=function(a,b,c){b=b||{};var d=b.texture||new GL.Texture(1,1,b);d.bind();Texture.setUploadOptions(b);var e=new Uint8Array(b.temp_color||[0,0,0,255]);gl.texImage2D(gl.TEXTURE_2D,0,d.format,d.width,d.height,0,d.format,d.type,e);gl.bindTexture(d.texture_type,null);d.ready=!1;if(-1!=a.toLowerCase().indexOf(".dds")){var e=gl.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),f=new GL.Texture(0,0,b);DDS.loadDDSTextureEx(gl,e,a,f.handler,!0,function(a){d.texture_type=a.texture_type;d.handler=
a;d.ready=!0})}else e=new Image,e.src=a,e.onload=function(){b.texture=d;GL.Texture.fromImage(this,b);d.ready=!0;c&&c(d)};return d};Texture.fromImage=function(a,b){b=b||{};var c=b.texture||new GL.Texture(a.width,a.height,b);c.bind();c.uploadImage(a,b);b.minFilter&&b.minFilter!=gl.NEAREST&&b.minFilter!=gl.LINEAR&&(c.bind(),gl.generateMipmap(c.texture_type),c.has_mipmaps=!0);gl.bindTexture(c.texture_type,null);return c};
Texture.fromVideo=function(a,b){b=b||{};var c=b.texture||new GL.Texture(a.videoWidth,a.videoHeight,b);c.bind();c.uploadImage(a,b);b.minFilter&&b.minFilter!=gl.NEAREST&&b.minFilter!=gl.LINEAR&&(c.bind(),gl.generateMipmap(c.texture_type),c.has_mipmaps=!0);gl.bindTexture(c.texture_type,null);return c};Texture.fromTexture=function(a,b){b=b||{};var c=new GL.Texture(a.width,a.height,b);a.copyTo(c);return c};
Texture.fromMemory=function(a,b,c,d){d=d||{};var e=d.texture||new GL.Texture(a,b,d);Texture.setUploadOptions(d);e.bind();try{gl.texImage2D(gl.TEXTURE_2D,0,e.format,a,b,0,e.format,e.type,c)}catch(f){if("file:"==location.protocol)throw'image not loaded for security reasons (serve this page over "http://" instead)';throw"image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)";}d.minFilter&&d.minFilter!=gl.NEAREST&&d.minFilter!=
gl.LINEAR&&(gl.generateMipmap(gl.TEXTURE_2D),e.has_mipmaps=!0);gl.bindTexture(e.texture_type,null);return e};Texture.fromShader=function(a,b,c,d){d=d||{};a=new GL.Texture(a,b,d);a.drawTo(function(){gl.disable(gl.BLEND);gl.disable(gl.DEPTH_TEST);gl.disable(gl.CULL_FACE);var a=Mesh.getScreenQuad();c.draw(a)});return a};
Texture.cubemapFromImages=function(a,b){b=b||{};if(6!=a.length)throw"missing images to create cubemap";var c=a[0].width,d=a[0].height;b.texture_type=gl.TEXTURE_CUBE_MAP;c=b.texture||new Texture(c,d,b);Texture.setUploadOptions(b);c.bind();try{for(d=0;6>d;d++)gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X+d,0,c.format,c.format,c.type,a[d])}catch(e){if("file:"==location.protocol)throw'image not loaded for security reasons (serve this page over "http://" instead)';throw"image not loaded for security reasons (image must originate from the same domain as this page or use Cross-Origin Resource Sharing)";
}b.minFilter&&b.minFilter!=gl.NEAREST&&b.minFilter!=gl.LINEAR&&(gl.generateMipmap(gl.TEXTURE_CUBE_MAP),c.has_mipmaps=!0);c.unbind();return c};Texture.cubemapFromImage=function(a,b){b=b||{};if(a.width!=a.height/6&&0!=a.height%6)console.log("Texture not valid, size doesnt match a cubemap");else{for(var c=a.height/6,d=[],e=0;6>e;e++){var f=createCanvas(a.width,c);f.getContext("2d").drawImage(a,0,c*e,a.width,c,0,0,a.width,c);d.push(f)}return Texture.cubemapFromImages(d,b)}};
Texture.prototype.toBlob=function(){var a=this.width,b=this.height;if(this.texture_type==gl.TEXTURE_CUBE_MAP){if(this.image){var c=createCanvas(this.image.width,this.image.height),d=c.getContext("2d");d.drawImage(this.image,0,0);return c.toBlob()}console.warning("Litegl: cannot call toBlob of a cubemap GL.Texture");return null}var e=new Uint8Array(a*b*4);this.drawTo(function(){gl.readPixels(0,0,a,b,gl.RGBA,gl.UNSIGNED_BYTE,e)});var f=createCanvas(a,b);if(!f.toBlob)throw"toBlob not supported on Canvas element";
c=f.getContext("2d");d=c.getImageData(0,0,a,b);d.data.set(e);c.putImageData(d,0,0);c=createCanvas(a,b);d=c.getContext("2d");d.translate(0,c.height);d.scale(1,-1);d.drawImage(f,0,0);return c.toBlob()};Texture.prototype.toBase64=function(){var a=this.width,b=this.height,c=new Uint8Array(a*b*4);this.drawTo(function(){gl.readPixels(0,0,a,b,gl.RGBA,gl.UNSIGNED_BYTE,c)});var d=createCanvas(a,b),e=d.getContext("2d"),f=e.getImageData(0,0,a,b);f.data.set(c);e.putImageData(f,0,0);return d.toDataURL("image/png")};
Texture.prototype.generateMetadata=function(){var a={};a.width=this.width;a.height=this.height;this.metadata=a};Texture.compareFormats=function(a,b){return a&&b?a==b?!0:a.width!=b.width||a.height!=b.height||a.type!=b.type||a.texture_type!=b.texture_type?!1:!0:!1};
function Shader(a,b,c){var d="";if(c)for(var e in c)d+="#define "+e+" "+(c[e]?c[e]:"")+"\n";this.program=gl.createProgram();gl.attachShader(this.program,Shader.compileSource(gl.VERTEX_SHADER,d+a));gl.attachShader(this.program,Shader.compileSource(gl.FRAGMENT_SHADER,d+b));gl.linkProgram(this.program);if(!gl.getProgramParameter(this.program,gl.LINK_STATUS))throw"link error: "+gl.getProgramInfoLog(this.program);this.attributes={};this.uniformInfo={};this.samplers={};this.extractShaderInfo()}
Shader.compileSource=function(a,b){var c=gl.createShader(a);gl.shaderSource(c,b);gl.compileShader(c);if(!gl.getShaderParameter(c,gl.COMPILE_STATUS))throw(a==gl.VERTEX_SHADER?"Vertex":"Fragment")+" shader compile error: "+gl.getShaderInfoLog(c);return c};
Shader.prototype.extractShaderInfo=function(){for(var a=0,b=gl.getProgramParameter(this.program,gl.ACTIVE_UNIFORMS);a<b;++a){var c=gl.getActiveUniform(this.program,a);if(!c)break;var d=c.name,e=d.indexOf("[");-1!=e&&-1==d.indexOf("].")&&(d=d.substr(0,e));if(c.type==gl.SAMPLER_2D||c.type==gl.SAMPLER_CUBE)this.samplers[d]=c.type;var e=Shader.getUniformFunc(c),f=!1;if(c.type==gl.FLOAT_MAT2||c.type==gl.FLOAT_MAT3||c.type==gl.FLOAT_MAT4)f=!0;this.uniformInfo[d]={type:c.type,func:e,size:c.size,is_matrix:f,
loc:gl.getUniformLocation(this.program,d)}}a=0;for(b=gl.getProgramParameter(this.program,gl.ACTIVE_ATTRIBUTES);a<b;++a){c=gl.getActiveAttrib(this.program,a);if(!c)break;e=Shader.getUniformFunc(c);this.uniformInfo[c.name]={type:c.type,func:e,size:c.size,loc:gl.getUniformLocation(this.program,c.name)};this.attributes[c.name]=gl.getAttribLocation(this.program,c.name)}};
Shader.getUniformFunc=function(a){var b=null;switch(a.type){case gl.FLOAT:b=1==a.size?gl.uniform1f:gl.uniform1fv;break;case gl.FLOAT_MAT2:b=gl.uniformMatrix2fv;break;case gl.FLOAT_MAT3:b=gl.uniformMatrix3fv;break;case gl.FLOAT_MAT4:b=gl.uniformMatrix4fv;break;case gl.FLOAT_VEC2:b=gl.uniform2fv;break;case gl.FLOAT_VEC3:b=gl.uniform3fv;break;case gl.FLOAT_VEC4:b=gl.uniform4fv;break;case gl.UNSIGNED_INT:case gl.INT:b=1==a.size?gl.uniform1i:gl.uniform1iv;break;case gl.INT_VEC2:b=gl.uniform2iv;break;case gl.INT_VEC3:b=
gl.uniform3iv;break;case gl.INT_VEC4:b=gl.uniform4iv;break;case gl.SAMPLER_2D:case gl.SAMPLER_CUBE:b=gl.uniform1i;break;default:b=gl.uniform1f}return b};
Shader.fromURL=function(a,b,c){function d(){var a=new GL.Shader(f,g),b;for(b in a)e[b]=a[b];e.ready=!0}var e=new GL.Shader("\n\t\t\tprecision highp float;\n\t\t\tattribute vec3 a_vertex;\n\t\t\tattribute mat4 u_mvp;\n\t\t\tvoid main() { \n\t\t\t\tgl_Position = u_mvp * vec4(a_vertex,1.0); \n\t\t\t}\n\t\t","\n\t\t\tprecision highp float;\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n\t\t\t}\n\t\t\t");e.ready=!1;var f=null,g=null;HttpRequest(a,null,function(a){f=a;g&&d()});
HttpRequest(b,null,function(a){g=a;f&&d()});return e};Shader._temp_uniform=new Float32Array(16);Shader.prototype.uniforms=function(a){gl.useProgram(this.program);for(var b in a){var c=this.uniformInfo[b];if(c){var d=a[b];null!=d&&(d.constructor===Array&&(d=new Float32Array(d)),c.is_matrix?c.func.call(gl,c.loc,!1,d):c.func.call(gl,c.loc,d))}}return this};
Shader.prototype.draw=function(a,b){this.drawBuffers(a.vertexBuffers,a.indexBuffers[b==gl.LINES?"lines":"triangles"],2>arguments.length?gl.TRIANGLES:b)};Shader.prototype.drawRange=function(a,b,c,d){this.drawBuffers(a.vertexBuffers,a.indexBuffers[b==gl.LINES?"lines":"triangles"],b,c,d)};Shader._temp_attribs_array=new Uint8Array(16);Shader._temp_attribs_array_zero=new Uint8Array(16);
Shader.prototype.drawBuffers=function(a,b,c,d,e){if(0!=e){gl.useProgram(this.program);var f=0,g=Shader._temp_attribs_array;g.set(Shader._temp_attribs_array_zero);for(var k in a){var h=a[k],l=h.attribute||k,p=this.attributes[l];null!=p&&h.buffer&&(g[p]=1,gl.bindBuffer(gl.ARRAY_BUFFER,h.buffer),gl.enableVertexAttribArray(p),gl.vertexAttribPointer(p,h.buffer.spacing,h.buffer.gl_type,!1,0,0),f=h.buffer.length/h.buffer.spacing)}a=0;0<d&&(a=d*(b?b.constructor.BYTES_PER_ELEMENT:1));0<e?f=e:b&&(f=b.buffer.length-
a);for(l in this.attributes)p=this.attributes[l],g[p]||gl.disableVertexAttribArray(this.attributes[l]);!f||b&&!b.buffer||(b?(gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,b.buffer),gl.drawElements(c,f,gl.UNSIGNED_SHORT,a),gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null)):gl.drawArrays(c,a,f));return this}};Shader.SCREEN_VERTEX_SHADER="\n\t\t\tprecision highp float;\n\t\t\tattribute vec3 a_vertex;\n\t\t\tattribute vec2 a_coord;\n\t\t\tvarying vec2 v_coord;\n\t\t\tvoid main() { \n\t\t\t\tv_coord = a_coord; \n\t\t\t\tgl_Position = vec4(a_coord * 2.0 - 1.0, 0.0, 1.0); \n\t\t\t}\n\t\t\t";
Shader.SCREEN_FRAGMENT_SHADER="\n\t\t\tprecision highp float;\n\t\t\tuniform sampler2D u_texture;\n\t\t\tvarying vec2 v_coord;\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = texture2D(u_texture, v_coord);\n\t\t\t}\n\t\t\t";Shader.SCREEN_FLAT_FRAGMENT_SHADER="\n\t\t\tprecision highp float;\n\t\t\tuniform vec4 u_color;\n\t\t\tvarying vec2 v_coord;\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = u_color;\n\t\t\t}\n\t\t\t";Shader.QUAD_VERTEX_SHADER="\n\t\t\tprecision highp float;\n\t\t\tattribute vec3 a_vertex;\n\t\t\tattribute vec2 a_coord;\n\t\t\tvarying vec2 v_coord;\n\t\t\tuniform vec2 u_position;\n\t\t\tuniform vec2 u_size;\n\t\t\tuniform vec2 u_viewport;\n\t\t\tuniform mat3 u_transform;\n\t\t\tvoid main() { \n\t\t\t\tv_coord = vec2(a_coord.x, 1.0 - a_coord.y); \n\t\t\t\tvec3 pos = vec3(u_position + a_coord * u_size, 1.0);\n\t\t\t\tpos = u_transform * pos;\n\t\t\t\tpos.z = 0.0;\n\t\t\t\t//normalize\n\t\t\t\tpos.x = (2.0 * pos.x / u_viewport.x) - 1.0;\n\t\t\t\tpos.y = -((2.0 * pos.y / u_viewport.y) - 1.0);\n\t\t\t\tgl_Position = vec4(pos, 1.0); \n\t\t\t}\n\t\t\t";
Shader.QUAD_FRAGMENT_SHADER="\n\t\t\tprecision highp float;\n\t\t\tuniform sampler2D u_texture;\n\t\t\tuniform vec4 u_color;\n\t\t\tvarying vec2 v_coord;\n\t\t\tvoid main() {\n\t\t\t\tgl_FragColor = u_color * texture2D(u_texture, v_coord);\n\t\t\t}\n\t\t\t";Shader.PRIMITIVE2D_VERTEX_SHADER="\n\t\t\tprecision highp float;\n\t\t\tattribute vec3 a_vertex;\n\t\t\tuniform vec2 u_viewport;\n\t\t\tuniform mat3 u_transform;\n\t\t\tvoid main() { \n\t\t\t\tvec3 pos = a_vertex;\n\t\t\t\tpos = u_transform * pos;\n\t\t\t\tpos.z = 0.0;\n\t\t\t\t//normalize\n\t\t\t\tpos.x = (2.0 * pos.x / u_viewport.x) - 1.0;\n\t\t\t\tpos.y = -((2.0 * pos.y / u_viewport.y) - 1.0);\n\t\t\t\tgl_Position = vec4(pos, 1.0); \n\t\t\t}\n\t\t\t";
Shader.prototype.toViewport=function(a){var b=Mesh.getScreenQuad();a&&this.uniforms(a);this.draw(b)};Shader.getScreenShader=function(){if(gl._screen_shader)return gl._screen_shader;var a=new GL.Shader(Shader.SCREEN_VERTEX_SHADER,Shader.SCREEN_FRAGMENT_SHADER);gl._screen_shader=a;return gl._screen_shader};Shader.getQuadShader=function(){if(gl._quad_shader)return gl._quad_shader;var a=new GL.Shader(Shader.QUAD_VERTEX_SHADER,Shader.QUAD_FRAGMENT_SHADER);gl._quad_shader=a;return gl._quad_shader};
Shader.getBlurShader=function(){if(gl._blur_shader)return gl._blur_shader;var a=new GL.Shader(Shader.SCREEN_VERTEX_SHADER,"\n\t\t\tprecision highp float;\n\t\t\tvarying vec2 v_coord;\n\t\t\tuniform sampler2D u_texture;\n\t\t\tuniform vec2 u_offset;\n\t\t\tuniform float u_intensity;\n\t\t\tvoid main() {\n\t\t\t   vec4 sum = vec4(0.0);\n\t\t\t   sum += texture2D(u_texture, v_coord + u_offset * -4.0) * 0.05/0.98;\n\t\t\t   sum += texture2D(u_texture, v_coord + u_offset * -3.0) * 0.09/0.98;\n\t\t\t   sum += texture2D(u_texture, v_coord + u_offset * -2.0) * 0.12/0.98;\n\t\t\t   sum += texture2D(u_texture, v_coord + u_offset * -1.0) * 0.15/0.98;\n\t\t\t   sum += texture2D(u_texture, v_coord) * 0.16/0.98;\n\t\t\t   sum += texture2D(u_texture, v_coord + u_offset * 4.0) * 0.05/0.98;\n\t\t\t   sum += texture2D(u_texture, v_coord + u_offset * 3.0) * 0.09/0.98;\n\t\t\t   sum += texture2D(u_texture, v_coord + u_offset * 2.0) * 0.12/0.98;\n\t\t\t   sum += texture2D(u_texture, v_coord + u_offset * 1.0) * 0.15/0.98;\n\t\t\t   gl_FragColor = u_intensity * sum;\n\t\t\t}\n\t\t\t");
gl._blur_shader=a;return gl._blur_shader};"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(a){setTimeout(a,1E3/60)};
var GL={blockable_keys:{Up:!0,Down:!0,Left:!0,Right:!0},LEFT_MOUSE_BUTTON:1,RIGHT_MOUSE_BUTTON:3,MIDDLE_MOUSE_BUTTON:2,create:function(a){function b(a){var c=gl.mouse_buttons;GL.augmentEvent(a,f);a.eventType=a.eventType||a.type;var d=getTime();if("mousedown"==a.eventType){if(0==c&&(f.removeEventListener("mousemove",b),document.addEventListener("mousemove",b),document.addEventListener("mouseup",b)),h=d,gl.onmousedown)gl.onmousedown(a)}else{if("mousemove"==a.eventType&&gl.onmousemove){a.click_time=
d-h;gl.onmousemove(a);return}if("mouseup"==a.eventType){if(0==gl.mouse_buttons&&(f.addEventListener("mousemove",b),document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",b)),a.click_time=d-h,h=d,gl.onmouseup)gl.onmouseup(a)}else!gl.onmousewheel||"mousewheel"!=a.eventType&&"wheel"!=a.eventType&&"DOMMouseScroll"!=a.eventType||(a.eventType="mousewheel",a.wheel="wheel"==a.type?-a.deltaY:null!=a.wheelDeltaY?a.wheelDeltaY:-60*a.detail,gl.onmousewheel(a))}a.stopPropagation();
a.preventDefault();return!1}function c(a){a=event.changedTouches[0];var b="";switch(event.type){case "touchstart":b="mousedown";break;case "touchmove":b="mousemove";break;case "touchend":b="mouseup";break;default:return}var c=document.createEvent("MouseEvent");c.initMouseEvent(b,!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null);a.target.dispatchEvent(c);event.preventDefault()}function d(a,b){a.eventType=a.type;var c=a.target.nodeName.toLowerCase();if("input"!=c&&"textarea"!=
c&&"select"!=c){a.character=String.fromCharCode(a.keyCode).toLowerCase();var c=!1,d=GL.mapKeyCode(a.keyCode);a.altKey||a.ctrlKey||a.metaKey||(d&&(gl.keys[d]="keydown"==a.type),c=gl.keys[a.keyCode],gl.keys[a.keyCode]="keydown"==a.type);if(c!=gl.keys[a.keyCode])if("keydown"==a.type&&gl.onkeydown)gl.onkeydown(a);else if("keyup"==a.type&&gl.onkeyup)gl.onkeyup(a);b&&(a.isChar||GL.blockable_keys[a.keyIdentifier||a.key])&&a.preventDefault()}}function e(a,b){console.log(a);if(b&&gl.onbuttondown)gl.onbuttondown(a);
else if(!b&&gl.onbuttonup)gl.onbuttonup(a)}a=a||{};var f=null;if(a.canvas)if("string"==typeof a.canvas){if(f=document.getElementById(a.canvas),!f)throw"Canvas element not found: "+a.canvas;}else f=a.canvas;else f=createCanvas(a.width||800,a.height||600);"alpha"in a||(a.alpha=!1);try{gl=f.getContext("webgl",a)}catch(g){}try{gl=gl||f.getContext("experimental-webgl",a)}catch(k){}if(!gl)throw"WebGL not supported";gl.derivatives_supported=gl.getExtension("OES_standard_derivatives")||!1;gl.depth_ext=gl.getExtension("WEBGL_depth_texture")||
gl.getExtension("WEBKIT_WEBGL_depth_texture")||gl.getExtension("MOZ_WEBGL_depth_texture");gl.float_ext=gl.getExtension("OES_texture_float");gl.float_ext_linear=gl.getExtension("OES_texture_float_linear");gl.half_float_ext=gl.getExtension("OES_texture_half_float");gl.half_float_ext_linear=gl.getExtension("OES_texture_half_float_linear");gl.half_float_ext_linear||(gl.half_float_ext=null);gl.HALF_FLOAT_OES=36193;gl.half_float_ext&&(gl.HALF_FLOAT_OES=gl.half_float_ext.HALF_FLOAT_OES);gl.max_texture_units=
gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);gl.HIGH_PRECISION_FORMAT=gl.half_float_ext?gl.HALF_FLOAT_OES:gl.float_ext?gl.FLOAT:gl.UNSIGNED_BYTE;gl._viewport_func=gl.viewport;gl.viewport_data=new Float32Array([0,0,gl.canvas.width,gl.canvas.height]);gl.viewport=function(a,b,c,d){this.viewport_data.set([a,b,c,d]);this._viewport_func(a,b,c,d)};gl.getViewport=function(){return new Float32Array(gl.viewport_data)};if("undefined"==typeof glMatrix)throw"glMatrix not found, LiteGL requires glMatrix to be included";
var h=0;gl.mouse_buttons=0;gl.animate=function(){function a(){b(a);var e=getTime(),f=(e-c)/1E3;if(d.onupdate)d.onupdate(f);if(d.ondraw)d.ondraw();c=e}var b=window.requestAnimationFrame,c=getTime(),d=this;b(a)};gl.captureMouse=function(a){f.addEventListener("mousedown",b);f.addEventListener("mousemove",b);a&&(f.addEventListener("mousewheel",b,!1),f.addEventListener("wheel",b,!1));f.addEventListener("contextmenu",function(a){a.preventDefault();return!1});f.addEventListener("touchstart",c,!0);f.addEventListener("touchmove",
c,!0);f.addEventListener("touchend",c,!0);f.addEventListener("touchcancel",c,!0)};gl.captureKeys=function(a){gl.keys={};document.addEventListener("keydown",function(b){d(b,a)});document.addEventListener("keyup",function(b){d(b,a)})};gl.gamepads=null;gl.captureGamepads=function(){var a=navigator.getGamepads||navigator.webkitGetGamepads||navigator.mozGetGamepads;a&&(this.gamepads=a.call(navigator),window.addEventListener("gamepadButtonDown",function(a){e(a,!0)},!1),window.addEventListener("MozGamepadButtonDown",
function(a){e(a,!0)},!1),window.addEventListener("WebkitGamepadButtonDown",function(a){e(a,!0)},!1),window.addEventListener("gamepadButtonUp",function(a){e(a,!1)},!1),window.addEventListener("MozGamepadButtonUp",function(a){e(a,!1)},!1),window.addEventListener("WebkitGamepadButtonUp",function(a){e(a,!1)},!1))};gl.getGamepads=function(){var a=navigator.getGamepads||navigator.webkitGetGamepads||navigator.mozGetGamepads;if(a){for(var a=a.call(navigator),b=null,c=0;4>c;c++)if(a[c]&&(b=a[c],this.gamepads))if(!this.gamepads[c]&&
a[c]&&this.ongamepadconnected)this.ongamepadconnected(b);else if(this.gamepads[c]&&!a[c]&&this.ongamepaddisconnected)this.ongamepaddisconnected(this.gamepads[c]);return this.gamepads=a}};gl.fullscreen=function(){var a=this.canvas;a.requestFullScreen?a.requestFullScreen():a.webkitRequestFullScreen?a.webkitRequestFullScreen():a.mozRequestFullScreen?a.mozRequestFullScreen():console.error("Fullscreen not supported")};return gl},mapKeyCode:function(a){return{8:"BACKSPACE",9:"TAB",13:"ENTER",16:"SHIFT",
27:"ESCAPE",32:"SPACE",37:"LEFT",38:"UP",39:"RIGHT",40:"DOWN"}[a]||(65<=a&&90>=a?String.fromCharCode(a):null)},dragging:!1,last_pos:null,augmentEvent:function(a,b){var c=null;b=b||a.target||gl.canvas;c=b.getBoundingClientRect();a.mousex=a.pageX-c.left;a.mousey=a.pageY-c.top;a.canvasx=a.mousex;a.canvasy=c.height-a.mousey;a.deltax=0;a.deltay=0;"mousedown"==a.type?(this.dragging=!0,gl.mouse_buttons|=1<<a.which):"mousemove"!=a.type&&"mouseup"==a.type&&(gl.mouse_buttons&=~(1<<a.which),0==gl.mouse_buttons&&
(this.dragging=!1));this.last_pos&&(a.deltax=a.mousex-this.last_pos[0],a.deltay=a.mousey-this.last_pos[1]);this.last_pos=[a.mousex,a.mousey];a.dragging=this.dragging;a.buttons_mask=gl.mouse_buttons;a.leftButton=gl.mouse_buttons&1<<GL.LEFT_MOUSE_BUTTON;a.rightButton=gl.mouse_buttons&1<<GL.RIGHT_MOUSE_BUTTON;a.isButtonPressed=function(a){return this.buttons_mask&1<<a}},Buffer:Buffer,Mesh:Mesh,Texture:Texture,Shader:Shader,textures:{},_loading_textures:{},loadTexture:function(a,b,c){if(this.textures[a])return this.textures[a];
if(this._loading_textures[a])return null;var d=new Image;d.url=a;d.onload=function(){var a=GL.Texture.fromImage(this,b);a.img=this;GL.textures[this.url]=a;delete GL._loading_textures[this.url];c&&c(a)};d.src=a;this._loading_textures[a]=!0;return null},BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,
SRC_ALPHA_SATURATE:776,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772},LEvent={jQuery:!1,bind:function(a,b,c,d){if(!a)throw"cannot bind event to null";if(!c)throw"cannot bind to null callback";if(a.constructor===String)throw"cannot bind event to a string";a.hasOwnProperty("__on_"+b)?a["__on_"+b].push([c,d]):a["__on_"+b]=[[c,d]]},unbind:function(a,b,c,d){if(!a)throw"cannot unbind event to null";if(!c)throw"cannot unbind from null callback";if(a.constructor===
String)throw"cannot bind event to a string";if(a.hasOwnProperty("__on_"+b)){for(var e in a["__on_"+b]){var f=a["__on_"+b][e];if(f[0]===c&&f[1]===d){a["__on_"+b].splice(e,1);break}}0==a["__on_"+b].length&&delete a["__on_"+b]}},unbindAll:function(a,b){if(!a)throw"cannot unbind events in null";if(!b){var c=[],d;for(d in a)"__on_"==d.substring(0,5)&&c.push(d);for(d in c)delete a[remove[d]]}else for(d in a)if("__on_"==d.substring(0,5)){for(var c=a[d],e=0;e<c.length;++e)c[e][1]==b&&(c.splice(e,1),--e);
0==c.length&&delete a[d]}},isBind:function(a,b,c,d){if(!a||!a.hasOwnProperty("__on_"+b))return!1;for(var e in a["__on_"+b]){var f=a["__on_"+b][e];if(f[0]===c&&f[1]===d)return!0}return!1},trigger:function(a,b,c,d){if(!a)throw"cannot trigger event from null";if(a.constructor===String)throw"cannot bind event to a string";LEvent.jQuery&&!d&&$(a).trigger(":"+b,c);if(a.hasOwnProperty("__on_"+b))for(var e in a["__on_"+b])if(d=a["__on_"+b][e],!1==d[0].call(d[1],b,c))break},triggerArray:function(a,b,c,d){for(var e in a){var f=
a[e];if(!f)throw"cannot trigger event from null";if(f.constructor===String)throw"cannot bind event to a string";LEvent.jQuery&&!d&&$(f).trigger(":"+b,c);if(f.hasOwnProperty("__on_"+b))for(e in f["__on_"+b]){var g=f["__on_"+b][e];if(!1==g[0].call(g[1],b,c))break}}}},CLIP_INSIDE=0,CLIP_OUTSIDE=1,CLIP_OVERLAP=2,geo={createPlane:function(a,b){return new Float32Array([b[0],b[1],b[2],-vec3.dot(a,b)])},distancePointToPlane:function(a,b){return(vec3.dot(a,b)+b[3])/Math.sqrt(b[0]*b[0]+b[1]*b[1]+b[2]*b[2])},
distance2PointToPlane:function(a,b){return(vec3.dot(a,b)+b[3])/(b[0]*b[0]+b[1]*b[1]+b[2]*b[2])},projectPointOnPlane:function(a,b,c,d){d=d||vec3.create();b=vec3.subtract(vec3.create(),a,b);b=vec3.dot(b,c);return vec3.subtract(d,a,vec3.scale(vec3.create(),c,b))},reflectPointInPlane:function(a,b,c){b=-(-1*(b[0]*c[0]+b[1]*c[1]+b[2]*c[2])+c[0]*a[0]+c[1]*a[1]+c[2]*a[2])/(c[0]*c[0]+c[1]*c[1]+c[2]*c[2]);return vec3.fromValues(a[0]+b*c[0]*2,a[1]+b*c[1]*2,a[2]+b*c[2]*2)},testRayPlane:function(a,b,c,d,e){c=
vec3.dot(c,d)-vec3.dot(d,a);d=vec3.dot(d,b);if(Math.abs(d)<EPSILON)return!1;d=c/d;if(0>d)return!1;e&&vec3.add(e,a,vec3.scale(e,b,d));return!0},testSegmentPlane:function(a,b,c,d,e){c=vec3.dot(c,d)-vec3.dot(d,a);b=vec3.sub(vec3.create(),b,a);d=vec3.dot(d,b);if(Math.abs(d)<EPSILON)return!1;d=c/d;if(0>d||1<d)return!1;e&&vec3.add(e,a,vec3.scale(e,b,d));return!0},testRaySphere:function(a,b,c,d,e){var f=vec3.subtract(vec3.create(),a,c),g=b[0]*b[0]+b[1]*b[1]+b[2]*b[2];c=2*f[0]*b[0]+2*f[1]*b[1]+2*f[2]*b[2];
d=c*c-4*g*(f[0]*f[0]+f[1]*f[1]+f[2]*f[2]-d*d);if(0>d)return!1;e&&(d=Math.sqrt(d),f=1/(2*g),g=(-c+d)*f,c=(-c-d)*f,c=g<c?g:c,vec3.add(e,a,vec3.scale(vec3.create(),b,c)));return!0},testRayCylinder:function(a,b,c,d,e,f){var g=vec3.clone(a);a=vec3.add(vec3.create(),a,vec3.scale(vec3.create(),b,1E5));var k=0;b=vec3.subtract(vec3.create(),d,c);var h=vec3.subtract(vec3.create(),g,c);c=vec3.subtract(vec3.create(),a,g);d=vec3.dot(h,b);a=vec3.dot(c,b);b=vec3.dot(b,b);if(0>d&&0>d+a||d>b&&d+a>b)return!1;var l=
vec3.dot(c,c),p=vec3.dot(h,c),k=b*l-a*a;e=vec3.dot(h,h)-e*e;var m=b*e-d*d;if(Math.abs(k)<EPSILON){if(0<m)return!1;k=0>d?-p/l:d>b?(a-p)/l:0;f&&vec3.add(f,g,vec3.scale(vec3.create(),c,k));return!0}h=b*p-a*d;m=h*h-k*m;if(0>m)return!1;k=(-h-Math.sqrt(m))/k;if(0>k||1<k)return!1;if(0>d+k*a){if(0>=a)return!1;k=-d/a;f&&vec3.add(f,g,vec3.scale(vec3.create(),c,k));return 0>=e+2*k*(p+k*l)}if(d+k*a>b){if(0<=a)return!1;k=(b-d)/a;f&&vec3.add(f,g,vec3.scale(vec3.create(),c,k));return 0>=e+b-2*d+k*(2*(p-a)+k*l)}f&&
vec3.add(f,g,vec3.scale(vec3.create(),c,k));return!0},testRayBox:function(a,b,c,d,e,f){e=e||vec3.create();f=f||Number.MAX_VALUE;for(var g=!0,k=new Float32Array(3),h=0,l=new Float32Array(3),p=new Float32Array(3),h=0;3>h;++h)a[h]<c[h]?(k[h]=1,p[h]=c[h],g=!1):a[h]>d[h]?(k[h]=0,p[h]=d[h],g=!1):k[h]=2;if(g)return vec3.copy(e,a),!0;for(h=0;3>h;++h)l[h]=2!=k[h]&&0!=b[h]?(p[h]-a[h])/b[h]:-1;g=0;for(h=1;3>h;h++)l[g]<l[h]&&(g=h);if(0>l[g]||l[g]>f)return!1;for(h=0;3>h;++h)if(g!=h){if(e[h]=a[h]+l[g]*b[h],e[h]<
c[h]||e[h]>d[h])return!1}else e[h]=p[h];return!0},testRayBBox:function(a,b,c,d,e,f){if(d){var g=mat4.invert(mat4.create(),d);b=vec3.add(vec3.create(),a,b);a=vec3.transformMat4(vec3.create(),a,g);vec3.transformMat4(b,b,g);vec3.sub(b,b,a);b=vec3.normalize(b,b)}a=this.testRayBox(a,b,c.subarray(6,9),c.subarray(9,12),e,f);d&&vec3.transformMat4(e,e,d);return a},testPointBBox:function(a,b){return a[0]<b[6]||a[0]>b[9]||a[1]<b[7]||a[0]>b[10]||a[2]<b[8]||a[0]>b[11]?!1:!0},testBBoxBBox:function(a,b){if(Math.abs(b[0]-
a[0])>a[3]+b[3]||Math.abs(b[1]-a[1])>a[4]+b[4]||Math.abs(b[2]-a[2])>a[5]+b[5])return!1;var c=BBox.getMin(b);geo.testPointBBox(c,a)&&(c=BBox.getMax(b),geo.testPointBBox(c,a));return!0},testSphereBBox:function(a,b,c){for(var d=0,e=BBox.getMin(c),f=BBox.getMax(c),g=0;3>g;++g)a[g]<e[g]?(c=a[g]-e[g],d+=c*c):a[g]>f[g]&&(c=a[g]-f[g],d+=c*c);return d<=b*b?!0:!1},closestPointBetweenLines:function(a,b,c,d,e,f){b=vec3.subtract(vec3.create(),b,a);d=vec3.subtract(vec3.create(),d,c);var g=vec3.subtract(vec3.create(),
a,c),k=vec3.dot(b,b),h=vec3.dot(b,d),l=vec3.dot(d,d),p=vec3.dot(b,g),m=vec3.dot(d,g),n=k*l-h*h,q;n<EPSILON?(q=0,k=h>l?p/h:m/l):(q=(h*m-l*p)/n,k=(k*m-h*p)/n);e&&vec3.add(e,a,vec3.scale(vec3.create(),b,q));f&&vec3.add(f,c,vec3.scale(vec3.create(),d,k));a=vec3.add(vec3.create(),g,vec3.subtract(vec3.create(),vec3.scale(vec3.create(),b,q),vec3.scale(vec3.create(),d,k)));return vec3.length(a)},extractPlanes:function(a,b){function c(a){var c=b.subarray(a,a+3),c=vec3.length(c);c||(c=1/c,b[a]*=c,b[a+1]*=c,
b[a+2]*=c,b[a+3]*=c)}b=b||new Float32Array(24);b.set([a[3]-a[0],a[7]-a[4],a[11]-a[8],a[15]-a[12]],0);c(0);b.set([a[3]+a[0],a[7]+a[4],a[11]+a[8],a[15]+a[12]],4);c(4);b.set([a[3]+a[1],a[7]+a[5],a[11]+a[9],a[15]+a[13]],8);c(8);b.set([a[3]-a[1],a[7]-a[5],a[11]-a[9],a[15]-a[13]],12);c(12);b.set([a[3]-a[2],a[7]-a[6],a[11]-a[10],a[15]-a[14]],16);c(16);b.set([a[3]+a[2],a[7]+a[6],a[11]+a[10],a[15]+a[14]],20);c(20);return b},frustumTestBox:function(a,b){var c=0,d=0,c=planeBoxOverlap(a.subarray(0,4),b);if(c==
CLIP_OUTSIDE)return CLIP_OUTSIDE;d+=c;c=planeBoxOverlap(a.subarray(4,8),b);if(c==CLIP_OUTSIDE)return CLIP_OUTSIDE;d+=c;c=planeBoxOverlap(a.subarray(8,12),b);if(c==CLIP_OUTSIDE)return CLIP_OUTSIDE;d+=c;c=planeBoxOverlap(a.subarray(12,16),b);if(c==CLIP_OUTSIDE)return CLIP_OUTSIDE;d+=c;c=planeBoxOverlap(a.subarray(16,20),b);if(c==CLIP_OUTSIDE)return CLIP_OUTSIDE;d+=c;c=planeBoxOverlap(a.subarray(20,24),b);return c==CLIP_OUTSIDE?CLIP_OUTSIDE:0==d+c?CLIP_INSIDE:CLIP_OVERLAP},frustumTestSphere:function(a,
b,c){var d,e=!1;d=distanceToPlane(a.subarray(0,4),b);if(d<-c)return CLIP_OUTSIDE;d>=-c&&d<=c&&(e=!0);d=distanceToPlane(a.subarray(4,8),b);if(d<-c)return CLIP_OUTSIDE;d>=-c&&d<=c&&(e=!0);d=distanceToPlane(a.subarray(8,12),b);if(d<-c)return CLIP_OUTSIDE;d>=-c&&d<=c&&(e=!0);d=distanceToPlane(a.subarray(12,16),b);if(d<-c)return CLIP_OUTSIDE;d>=-c&&d<=c&&(e=!0);d=distanceToPlane(a.subarray(16,20),b);if(d<-c)return CLIP_OUTSIDE;d>=-c&&d<=c&&(e=!0);d=distanceToPlane(a.subarray(20,24),b);if(d<-c)return CLIP_OUTSIDE;
d>=-c&&d<=c&&(e=!0);return e?CLIP_OVERLAP:CLIP_INSIDE},testPoint2DInPolygon:function(a,b){for(var c=!1,d=-1,e=a.length,f=e-1;++d<e;f=d)(a[d][1]<=b[1]&&b[1]<a[f][1]||a[f][1]<=b[1]&&b[1]<a[d][1])&&b[0]<(a[f][0]-a[d][0])*(b[1]-a[d][1])/(a[f][1]-a[d][1])+a[d][0]&&(c=!c);return c}},BBox={center:0,halfsize:3,min:6,max:9,radius:12,data_length:13,corners:new Float32Array([1,1,1,1,1,-1,1,-1,1,1,-1,-1,-1,1,1,-1,1,-1,-1,-1,1,-1,-1,-1]),create:function(){return new Float32Array(13)},clone:function(a){return new Float32Array(a)},
copy:function(a,b){a.set(b);return a},fromPoint:function(a){var b=this.create();b.set(a,0);b.set(a,6);b.set(a,9);return b},fromMinMax:function(a,b){var c=this.create();this.setMinMax(c,a,b);return c},fromCenterHalfsize:function(a,b){var c=this.create();this.setCenterHalfsize(c,a,b);return c},fromPoints:function(a){var b=this.create();this.setFromPoints(b,a);return b},setFromPoints:function(a,b){var c=a.subarray(6,9),d=a.subarray(9,12);c.set(b.subarray(0,3));d.set(b.subarray(0,3));for(var e=0,f=3;f<
b.length;f+=3)e=b.subarray(f,f+3),vec3.min(c,e,c),vec3.max(d,e,d);c=vec3.add(a.subarray(0,3),c,d);vec3.scale(c,c,0.5);vec3.subtract(a.subarray(3,6),d,c);a[12]=vec3.length(a.subarray(3,6));return a},setMinMax:function(a,b,c){a[6]=b[0];a[7]=b[1];a[8]=b[2];a[9]=c[0];a[10]=c[1];a[11]=c[2];var d=a.subarray(0,3);vec3.sub(d,c,b);vec3.scale(d,d,0.5);a.set([c[0]-d[0],c[1]-d[1],c[2]-d[2]],3);vec3.sub(a.subarray(3,6),c,d);a[12]=vec3.length(a.subarray(3,6));return a},setCenterHalfsize:function(a,b,c,d){a[0]=
b[0];a[1]=b[1];a[2]=b[2];a[3]=c[0];a[4]=c[1];a[5]=c[2];vec3.sub(a.subarray(6,9),a.subarray(0,3),a.subarray(3,6));vec3.add(a.subarray(9,12),a.subarray(0,3),a.subarray(3,6));a[12]=d?d:vec3.length(c);return a},transformMat4:function(a,b,c){var d=b.subarray(0,3);b=b.subarray(3,6);for(var e=new Float32Array(this.corners),f=0;8>f;++f){var g=e.subarray(3*f,3*f+3);vec3.multiply(g,b,g);vec3.add(g,g,d);mat4.multiplyVec3(g,c,g)}return this.setFromPoints(a,e)},getCorners:function(a,b){var c=a.subarray(0,3),d=
a.subarray(3,6),e=null;b?(b.set(this.corners),e=b):e=new Float32Array(this.corners);for(var f=0;8>f;++f){var g=e.subarray(3*f,3*f+3);vec3.multiply(g,d,g);vec3.add(g,g,c)}return e},getCenter:function(a){return a.subarray(0,3)},getHalfsize:function(a){return a.subarray(3,6)},getMin:function(a){return a.subarray(6,9)},getMax:function(a){return a.subarray(9,12)},getRadius:function(a){return a[12]}};function distanceToPlane(a,b){return vec3.dot(a,b)+a[3]}
function planeBoxOverlap(a,b){var c=a.subarray(0,3),d=a[3],e=b.subarray(0,3),f=b.subarray(3,6),f=vec3.fromValues(Math.abs(f[0]*c[0]),Math.abs(f[1]*c[1]),Math.abs(f[2]*c[2])),f=f[0]+f[1]+f[2],c=vec3.dot(c,e)+d;return c<=-f?CLIP_OUTSIDE:c<=f?CLIP_OVERLAP:CLIP_INSIDE}function HitTest(a,b,c){this.t=arguments.length?a:Number.MAX_VALUE;this.hit=b;this.normal=c}HitTest.prototype={mergeWith:function(a){0<a.t&&a.t<this.t&&(this.t=a.t,this.hit=a.hit,this.normal=a.normal)}};
function Octree(a){this.root=null;this.total_nodes=this.total_depth=0;a&&(this.buildFromMesh(a),this.total_nodes=this.trim())}Octree.MAX_NODE_TRIANGLES_RATIO=0.1;Octree.MAX_OCTREE_DEPTH=8;Octree.OCTREE_MARGIN_RATIO=0.01;Octree.OCTREE_MIN_MARGIN=0.1;var octree_tested_boxes=0,octree_tested_triangles=0;
Octree.prototype.buildFromMesh=function(a){this.total_nodes=this.total_depth=0;var b=a.getBuffer("vertices").data;if(a=a.getIndexBuffer("triangles"))a=a.data;var c=this.computeAABB(b);this.root=c;this.total_nodes=1;this.total_triangles=a?a.length/3:b.length/9;this.max_node_triangles=this.total_triangles*Octree.MAX_NODE_TRIANGLES_RATIO;var d=vec3.create();vec3.scale(d,c.size,Octree.OCTREE_MARGIN_RATIO);d[0]<Octree.OCTREE_MIN_MARGIN&&(d[0]=Octree.OCTREE_MIN_MARGIN);d[1]<Octree.OCTREE_MIN_MARGIN&&(d[1]=
Octree.OCTREE_MIN_MARGIN);d[2]<Octree.OCTREE_MIN_MARGIN&&(d[2]=Octree.OCTREE_MIN_MARGIN);vec3.sub(c.min,c.min,d);vec3.add(c.max,c.max,d);c.faces=[];c.inside=0;if(a)for(d=0;d<a.length;d+=3){var e=new Float32Array([b[3*a[d]],b[3*a[d]+1],b[3*a[d]+2],b[3*a[d+1]],b[3*a[d+1]+1],b[3*a[d+1]+2],b[3*a[d+2]],b[3*a[d+2]+1],b[3*a[d+2]+2]]);this.addToNode(e,c,0)}else for(d=0;d<b.length;d+=9)e=new Float32Array(b.subarray(d,d+9)),this.addToNode(e,c,0);return c};
Octree.prototype.addToNode=function(a,b,c){b.inside+=1;if(b.c){var d=this.computeAABB(a),e=!1,f;for(f in b.c){var g=b.c[f];if(Octree.isInsideAABB(d,g)){this.addToNode(a,g,c+1);e=!0;break}}e||(null==b.faces&&(b.faces=[]),b.faces.push(a))}else if(null==b.faces&&(b.faces=[]),b.faces.push(a),b.faces.length>this.max_node_triangles&&c<Octree.MAX_OCTREE_DEPTH){this.splitNode(b);this.total_depth<c+1&&(this.total_depth=c+1);var k=b.faces.concat();b.faces=null;for(f in k){a=k[f];var d=this.computeAABB(a),e=
!1,h;for(h in b.c)if(g=b.c[h],Octree.isInsideAABB(d,g)){this.addToNode(a,g,c+1);e=!0;break}e||(null==b.faces&&(b.faces=[]),b.faces.push(a))}}};Octree.prototype.octree_pos_ref=[[0,0,0],[0,0,1],[0,1,0],[0,1,1],[1,0,0],[1,0,1],[1,1,0],[1,1,1]];
Octree.prototype.splitNode=function(a){a.c=[];var b=[0.5*(a.max[0]-a.min[0]),0.5*(a.max[1]-a.min[1]),0.5*(a.max[2]-a.min[2])],c;for(c in this.octree_pos_ref){var d=this.octree_pos_ref[c],e={};this.total_nodes+=1;e.min=[a.min[0]+b[0]*d[0],a.min[1]+b[1]*d[1],a.min[2]+b[2]*d[2]];e.max=[e.min[0]+b[0],e.min[1]+b[1],e.min[2]+b[2]];e.faces=null;e.inside=0;a.c.push(e)}};
Octree.prototype.computeAABB=function(a){for(var b=new Float32Array([a[0],a[1],a[2]]),c=new Float32Array([a[0],a[1],a[2]]),d=0;d<a.length;d+=3)for(var e=0;3>e;e++)b[e]>a[d+e]&&(b[e]=a[d+e]),c[e]<a[d+e]&&(c[e]=a[d+e]);return{min:b,max:c,size:vec3.sub(vec3.create(),c,b)}};Octree.prototype.trim=function(a){a=a||this.root;if(!a.c)return 1;var b=1,c=[],d;for(d in a.c)a.c[d].inside&&(c.push(a.c[d]),b+=this.trim(a.c[d]));a.c=c;return b};
Octree.prototype.testRay=function(a,b,c,d){a=vec3.clone(a);b=vec3.clone(b);octree_tested_triangles=octree_tested_boxes=0;if(!this.root)throw"Error: octree not build";c=Octree.hitTestBox(a,b,vec3.clone(this.root.min),vec3.clone(this.root.max));if(!c)return null;c=Octree.testRayInNode(this.root,a,b);return null!=c?(b=vec3.scale(vec3.create(),b,c.t),vec3.add(b,b,a),c.pos=b,c):null};
Octree.testRayInNode=function(a,b,c){var d=null,e=null;octree_tested_boxes+=1;if(a.faces)for(var f=0,g=a.faces.length;f<g;++f)d=a.faces[f],octree_tested_triangles+=1,d=Octree.hitTestTriangle(b,c,d.subarray(0,3),d.subarray(3,6),d.subarray(6,9)),null!=d&&(e?e.mergeWith(d):e=d);if(a.c)for(f in a.c)g=a.c[f],d=Octree.hitTestBox(b,c,vec3.clone(g.min),vec3.clone(g.max)),null==d||e&&d.t>e.t||(d=Octree.testRayInNode(g,b,c),null!=d&&(e?e.mergeWith(d):e=d));return e};
Octree.isInsideAABB=function(a,b){return a.min[0]<b.min[0]||a.min[1]<b.min[1]||a.min[2]<b.min[2]||a.max[0]>b.max[0]||a.max[1]>b.max[1]||a.max[2]>b.max[2]?!1:!0};
Octree.hitTestBox=function(a,b,c,d){var e=vec3.subtract(vec3.create(),c,a),f=vec3.subtract(vec3.create(),d,a);if(0>vec3.maxValue(e)&&0<vec3.minValue(f))return new HitTest(0,a,b);vec3.multiply(e,e,[1/b[0],1/b[1],1/b[2]]);vec3.multiply(f,f,[1/b[0],1/b[1],1/b[2]]);var g=vec3.min(vec3.create(),e,f),e=vec3.max(vec3.create(),e,f),g=vec3.maxValue(g),e=vec3.minValue(e);return 0<g&&g<e?(a=vec3.add(vec3.create(),vec3.scale(vec3.create(),b,g),a),vec3.add(c,c,[1E-6,1E-6,1E-6]),vec3.subtract(c,c,[1E-6,1E-6,1E-6]),
new HitTest(g,a,vec3.fromValues((a[0]>d[0])-(a[0]<c[0]),(a[1]>d[1])-(a[1]<c[1]),(a[2]>d[2])-(a[2]<c[2])))):null};
Octree.hitTestTriangle=function(a,b,c,d,e){var f=vec3.subtract(vec3.create(),d,c),g=vec3.subtract(vec3.create(),e,c);e=vec3.cross(vec3.create(),f,g);vec3.normalize(e,e);if(!(0<vec3.dot(e,b))){d=vec3.dot(e,vec3.subtract(vec3.create(),c,a))/vec3.dot(e,b);if(0<d){b=vec3.scale(vec3.create(),b,d);vec3.add(b,b,a);var k=vec3.subtract(vec3.create(),b,c);a=vec3.dot(g,g);c=vec3.dot(g,f);var g=vec3.dot(g,k),h=vec3.dot(f,f),f=vec3.dot(f,k),k=a*h-c*c,h=(h*g-c*f)/k,f=(a*f-c*g)/k;if(0<=h&&0<=f&&1>=h+f)return new HitTest(d,
b,e)}return null}};function HitTest(a,b,c){this.t=arguments.length?a:Number.MAX_VALUE;this.hit=b;this.normal=c}HitTest.prototype={mergeWith:function(a){0<a.t&&a.t<this.t&&(this.t=a.t,this.hit=a.hit,this.normal=a.normal)}};
function Raytracer(a,b,c){this.viewport=c=c||gl.getViewport();var d=c[0],e=d+c[2],f=c[1],g=f+c[3];this.ray00=vec3.unproject(vec3.create(),vec3.fromValues(d,f,1),a,b,c);this.ray10=vec3.unproject(vec3.create(),vec3.fromValues(e,f,1),a,b,c);this.ray01=vec3.unproject(vec3.create(),vec3.fromValues(d,g,1),a,b,c);this.ray11=vec3.unproject(vec3.create(),vec3.fromValues(e,g,1),a,b,c);d=this.eye=vec3.create();vec3.unproject(d,d,a,b,c);vec3.subtract(this.ray00,this.ray00,d);vec3.subtract(this.ray10,this.ray10,
d);vec3.subtract(this.ray01,this.ray01,d);vec3.subtract(this.ray11,this.ray11,d)}Raytracer.prototype.getRayForPixel=function(a,b){a=(a-this.viewport[0])/this.viewport[2];b=1-(b-this.viewport[1])/this.viewport[3];var c=vec3.lerp(vec3.create(),this.ray00,this.ray10,a),d=vec3.lerp(vec3.create(),this.ray01,this.ray11,a);return vec3.normalize(vec3.create(),vec3.lerp(vec3.create(),c,d,b))};var _hittest_inv=mat4.create();
Raytracer.hitTestBox=function(a,b,c,d,e){var f=new Float32Array(30);e&&(e=mat4.invert(_hittest_inv,e),a=mat4.multiplyVec3(f.subarray(3,6),e,a),b=mat4.rotateVec3(f.subarray(6,9),e,b));var g=vec3.subtract(f.subarray(9,12),c,a);vec3.divide(g,g,b);var k=vec3.subtract(f.subarray(12,15),d,a);vec3.divide(k,k,b);e=vec3.min(f.subarray(15,18),g,k);g=vec3.max(f.subarray(18,21),g,k);e=vec3.maxValue(e);g=vec3.minValue(g);return 0<e&&e<g?(b=vec3.scale(f.subarray(21,24),b,e),vec3.add(b,a,b),vec3.addValue(f.subarray(24,
27),c,1E-6),vec3.subValue(f.subarray(27,30),d,1E-6),new HitTest(e,b,vec3.fromValues((b[0]>d[0])-(b[0]<c[0]),(b[1]>d[1])-(b[1]<c[1]),(b[2]>d[2])-(b[2]<c[2])))):null};Raytracer.hitTestSphere=function(a,b,c,d){var e=vec3.subtract(vec3.create(),a,c),f=vec3.dot(b,b),g=2*vec3.dot(b,e),e=vec3.dot(e,e)-d*d,e=g*g-4*f*e;return 0<e?(f=(-g-Math.sqrt(e))/(2*f),a=vec3.add(vec3.create(),a,vec3.scale(vec3.create(),b,f)),new HitTest(f,a,vec3.scale(vec3.create(),vec3.subtract(vec3.create(),a,c),1/d))):null};
Raytracer.hitTestTriangle=function(a,b,c,d,e){var f=vec3.subtract(vec3.create(),d,c),g=vec3.subtract(vec3.create(),e,c);e=vec3.cross(vec3.create(),f,g);vec3.normalize(e,e);d=vec3.dot(e,vec3.subtract(vec3.create(),c,a))/vec3.dot(e,b);if(0<d){a=vec3.add(vec3.create(),a,vec3.scale(vec3.create(),b,d));var k=vec3.subtract(vec3.create(),a,c);c=vec3.dot(g,g);b=vec3.dot(g,f);var g=vec3.dot(g,k),h=vec3.dot(f,f),f=vec3.dot(f,k),k=c*h-b*b,h=(h*g-b*f)/k,f=(c*f-b*g)/k;if(0<=h&&0<=f&&1>=h+f)return new HitTest(d,
a,e)}return null};GL.Raytracer=Raytracer;
Mesh.parseOBJ=function(a,b){b=b||{};for(var c=[],d=[],e=[],f=[],g=[],k=[],h=[],l={},p=0,m=null,n=null,q=0,t=0,r=n=0,x=0,C=0,s=null,F=!1,H=!1,D=!1,M=!1,N=0,L=b.noindex?b.noindex:1E7<a.length?!0:!1,O=b.flipAxis,z=O||b.flipNormals,w=null,u=[],A=a.split("\n"),y=A.length,v=0;v<y;++v)if(m=A[v].replace(/[ \t]+/g," ").replace(/\s\s*$/,""),"#"!=m[0]&&""!=m)if(s=m.split(" "),M&&"v"==s[0]&&(M=!1),"v"==s[0])O?g.push(-1*parseFloat(s[1]),parseFloat(s[3]),parseFloat(s[2])):g.push(parseFloat(s[1]),parseFloat(s[2]),
parseFloat(s[3]));else if("vt"==s[0])k.push(parseFloat(s[1]),parseFloat(s[2]));else if("vn"==s[0])z?h.push(-parseFloat(s[2]),-parseFloat(s[3]),parseFloat(s[1])):h.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]));else if("f"==s[0]){if(M=!0,!(4>s.length)){for(var B=[],m=1;m<s.length;++m){if(!(s[m]in l)||L){n=s[m].split("/");if(1==n.length)n=t=q=parseInt(n[0])-1;else if(2==n.length)q=parseInt(n[0])-1,t=parseInt(n[1])-1,n=-1;else if(3==n.length)q=parseInt(n[0])-1,t=parseInt(n[1])-1,n=parseInt(n[2])-
1;else return console.err("Problem parsing: unknown number of values per face"),!1;C=x=r=0;3*q+2<g.length&&(F=!0,r=g[3*q+0],x=g[3*q+1],C=g[3*q+2]);c.push(r,x,C);x=r=0;2*t+1<k.length&&(H=!0,r=k[2*t+0],x=k[2*t+1]);d.push(r,x);x=r=0;C=1;-1!=n&&(3*n+2<h.length&&(D=!0,r=h[3*n+0],x=h[3*n+1],C=h[3*n+2]),e.push(r,x,C));L||(l[s[m]]=p++)}L||(q=l[s[m]],B.push(q),N<q&&(N=q))}if(!L)for(m=2;m<B.length;m++)f.push(B[0],B[m-1],B[m])}}else"g"==s[0]||"usemtl"==s[0]?1<s.length&&(null!=w&&(w.length=f.length-w.start,0<
w.length&&u.push(w)),w={name:s[1],start:f.length,length:-1,material:""}):"usemtl"==s[0]&&w&&(w.material=s[1]);if(!g.length)return console.error("OBJ doesnt have vertices, maybe the file is not a OBJ"),null;w&&1<f.length-w.start&&(w.length=f.length-w.start,u.push(w));if((65536<N||L)&&0<f.length){console.log("Deindexing mesh...");g=new Float32Array(3*f.length);k=e&&e.length?new Float32Array(3*f.length):null;h=d&&d.length?new Float32Array(2*f.length):null;for(m=0;m<f.length;m+=1)g.set(c.slice(3*f[m],
3*f[m]+3),3*m),k&&k.set(e.slice(3*f[m],3*f[m]+3),3*m),h&&h.set(d.slice(2*f[m],2*f[m]+2),2*m);c=g;k&&(e=k);h&&(d=h);f=null}m={};F&&(m.vertices=new Float32Array(c));D&&0<e.length&&(m.normals=new Float32Array(e));H&&0<d.length&&(m.coords=new Float32Array(d));f&&0<f.length&&(m.triangles=new Uint16Array(f));c={};1<u.length&&(c.groups=u);m.info=c;u=null;u=Mesh.load(m,null,b.mesh);u.updateBounding();return u};Mesh.parsers[".obj"]=Mesh.parseOBJ.bind(Mesh);

//lightweight scene container
//This scene is meant to work in client or server side
//only dependency should be glMatrix (avoid using litegl.js)

(function(global){

var last_object_id = 0;


/* Temporary containers ************/
var temp_mat4 = mat4.create();
var temp_vec2 = vec3.create();
var temp_vec3 = vec3.create();
var temp_vec4 = vec3.create();
var temp_quat = quat.create();

//Scene Node
function SceneNode()
{
	this._ctor();
}

SceneNode.prototype._ctor = function()
{
	this._uid = last_object_id++;

	this._position = vec3.create();
	this._rotation = quat.create();
	this._scale = vec3.fromValues(1,1,1);
	this._local_matrix = mat4.create();
	this._global_matrix = mat4.create(); //in global space
	this._must_update_matrix = false;

	//could be used for many things
	this._color = vec4.fromValues(1,1,1,1);
	
	this.flags = {};
	
	//object inside this object
	this.children = [];
}

Object.defineProperty(SceneNode.prototype, 'position', {
	get: function() { return this._position; },
	set: function(v) { this._position.set(v); this._must_update_matrix = true; },
	enumerable: true
});

Object.defineProperty(SceneNode.prototype, 'positionX', {
	get: function() { return this._position[0]; },
	set: function(v) { this._position[0] = v; this._must_update_matrix = true; },
	enumerable: true 
});
Object.defineProperty(SceneNode.prototype, 'positionY', {
	get: function() { return this._position[1]; },
	set: function(v) { this._position[1] = v; this._must_update_matrix = true; },
	enumerable: true
});
Object.defineProperty(SceneNode.prototype, 'positionZ', {
	get: function() { return this._position[2]; },
	set: function(v) { this._position[2] = v; this._must_update_matrix = true; },
	enumerable: true 
});

Object.defineProperty(SceneNode.prototype, 'rotation', {
	get: function() { return this._rotation; },
	set: function(v) { this._rotation.set(v); this._must_update_matrix = true; },
	enumerable: true //avoid problems
});

Object.defineProperty(SceneNode.prototype, 'color', {
	get: function() { return this._color; },
	set: function(v) { this._color.set(v); },
	enumerable: true //avoid problems
});

Object.defineProperty(SceneNode.prototype, 'opacity', {
	get: function() { return this._color[3]; },
	set: function(v) { this._color[3] = v; },
	enumerable: true //avoid problems
});


/* disabled because the property and the action sound the same
Object.defineProperty(SceneNode.prototype, 'scale', {
	get: function() { return this._scale; },
	set: function(v) { 
		this._scale.set(v); 
		this._must_update_matrix = true; 
	},
	enumerable: false //avoid problems
});
*/

Object.defineProperty(SceneNode.prototype, 'parentNode', {
	get: function() { return this._parent; },
	set: function(v) { throw("Cannot set parentNode of GameObject"); },
	enumerable: false //avoid problems
});

SceneNode.prototype.addChild = function(node)
{
	if(node._parent)
		throw("addChild: Cannot add a child with a parent, remove from parent first");

	node._parent = this;

	this.children.push(node);
	change_scene(node, this._scene);

	//recursive change all children
	function change_scene(node, scene)
	{
		node._scene = scene;
		for(var i in node.children)
			change_scene( node.children[i], scene );
	}
}

SceneNode.prototype.removeChild = function(node)
{
	if(node._parent != this)
		throw("removeChild: Not its children");


	var pos = this.children.indexOf(node);
	if(pos == -1)
		throw("removeChild: impossible, should be children");

	this.children.splice(pos,1);
	node._parent = null;
	change_scene(node);

	//recursive change all children
	function change_scene(node)
	{
		node._scene = null;
		for(var i in node.children)
			change_scene( node.children[i] );
	}
}

//recursively retrieves all children nodes
SceneNode.prototype.getAllChildren = function(r)
{
	r = r || [];

	for(var i in this.children)
	{
		var node = this.children[i];
		r.push(node);
		node.getAllChildren(r);
	}

	return r;
}


SceneNode.prototype.serialize = function()
{
	var r = {
		position: [ this._position[0],this._position[1],this._position[2] ],
		rotation: [ this._rotation[0],this._rotation[1],this._rotation[2],this._rotation[3] ],
		scale: [ this._scale[0],this._scale[1],this._scale[2] ],
		children: []
	};

	for(var i in this.children)
	{
		var node = this.children[i];
		r.children.push( node.serialize() );
	}

	return r;
}

SceneNode.prototype.configure = function(o)
{
	//transform
	if(o.position) vec3.copy( this._position, o.position );
	if(o.rotation && o.rotation.length == 4) quat.copy( this._rotation, o.rotation );
	if(o.scale) vec3.copy( this._scale, o.scale );
	this.updateGlobalMatrix();

	//children
	//...
}

//transforming
SceneNode.prototype.translate = function(v)
{
	vec3.add( this._position, this._position, v );
	this._must_update_matrix = true;
}

SceneNode.prototype.rotate = function(angle_in_rad, axis)
{
	quat.setAxisAngle( temp_quat, axis, angle_in_rad );
	quat.multiply( this._rotation, this._rotation, temp_quat );
	this._must_update_matrix = true;
}

SceneNode.prototype.scale = function(v)
{
	vec3.mul( this._scale, this._scale, v );
	this._must_update_matrix = true;
}

SceneNode.prototype.getLocalMatrix = function()
{
	if(this._must_update_matrix)
		this.updateLocalMatrix();
	return this._local_matrix;
}

SceneNode.prototype.getGlobalMatrix = function()
{
	this.updateGlobalMatrix();
	return this._global_matrix;
}

SceneNode.prototype.getGlobalRotation = function(result)
{
	result = result || vec3.create();
	quat.identity(result);
	var current = this;
	//while we havent reach the tree root
	while(current != this._scene._root)
	{
		quat.multiply( result, current._rotation, result );
		current = current._parent;
	}

	return result;
}

SceneNode.prototype.updateLocalMatrix = function()
{
	var m = this._local_matrix;

	//clear
	mat4.identity( m );

	//translate
	mat4.translate( m, m, this._position );

	//rotate
	mat4.fromQuat( temp_mat4, this._rotation );
	mat4.multiply( m, m, temp_mat4 );

	//scale
	mat4.scale( m, m, this._scale );

	this._must_update_matrix = false;
}

//fast skips recomputation of parent, use it only if you are sure its already updated
SceneNode.prototype.updateGlobalMatrix = function(fast)
{
	var global = null;
	if(this._must_update_matrix)
		this.updateLocalMatrix();

	if(this._parent && this._scene && this._parent != this._scene._root)
	{
		global = fast ? this._parent._global_matrix : this._parent.getGlobalMatrix();
		mat4.multiply( this._global_matrix, global, this._local_matrix );
	}
	else
		this._global_matrix.set( this._local_matrix );
}

SceneNode.prototype.updateMatrices = function(fast)
{
	this.updateLocalMatrix();
	this.updateGlobalMatrix(fast);
}


SceneNode.prototype.fromMatrix = function(m, is_global)
{
	if(is_global && this._parent)
	{
		mat4.copy(this._global_matrix, m); //assign to global
		var M_parent = this._parent.getGlobalMatrix(); //get parent transform
		mat4.invert(M_parent,M_parent); //invert
		m = mat4.multiply( this._local_matrix, M_parent, m ); //transform from global to local
	}

	//pos
	var M = mat4.clone(m);
	mat4.multiplyVec3(this._position, M, [0,0,0]);

	//scale
	var tmp = vec3.create();
	this._scale[0] = vec3.length( mat4.rotateVec3(tmp,M,[1,0,0]) );
	this._scale[1] = vec3.length( mat4.rotateVec3(tmp,M,[0,1,0]) );
	this._scale[2] = vec3.length( mat4.rotateVec3(tmp,M,[0,0,1]) );

	mat4.scale( mat4.create(), M, [1/this._scale[0],1/this._scale[1],1/this._scale[2]] );

	//rot
	//quat.fromMat4(this._rotation, M);
	//*
	vec3.normalize( M.subarray(0,3), M.subarray(0,3) );
	vec3.normalize( M.subarray(4,7), M.subarray(4,7) );
	vec3.normalize( M.subarray(8,11), M.subarray(8,11) );
	var M3 = mat3.fromMat4( mat3.create(), M);
	mat3.transpose(M3, M3);
	quat.fromMat3(this._rotation, M3);
	quat.normalize(this._rotation, this._rotation);
	//*/

	if(m != this._local_matrix)
		mat4.copy(this._local_matrix, m);

	this._must_update_matrix = false;
}


SceneNode.prototype.getLocalPoint = function(v, result)
{
	result = result || vec3.create();
	if(this._must_update_matrix)
		this.updateLocalMatrix();
	return vec3.transformMat4(result, v, this._local_matrix );	
}

SceneNode.prototype.getLocalVector = function(v, result)
{
	result = result || vec3.create();
	return vec3.transformQuat( result, v, this._rotation );
}


SceneNode.prototype.getGlobalPoint = function(v, result)
{
	result = result || vec3.create();
	var m = this.getGlobalMatrix();
	return vec3.transformMat4(result, result, m );	
}

SceneNode.prototype.getGlobalVector = function(v, result)
{
	result = result || vec3.create();
	var quat = this.getGlobalRotation(temp_quat);
	return vec3.transformQuat( result, v, quat );
}

//recursive search
SceneNode.prototype.findNode = function(id)
{
	for(var i in this.children)
	{
		var node = this.children[i];
		if( node.id == id )
			return node[i];
		var r = node.findNode(id);
		if(r) return r;
	}
	return null;
}

//call methods inside
SceneNode.prototype.propagate = function(method, params)
{
	for(var i in this.children)
	{
		var node = this.children[i];
		if(node[method])
			node[method].apply(node, params);
		node.propagate(method, params);
	}
}

global.SceneNode = SceneNode;


//* Scene container 

function Scene()
{
	this._root = new SceneNode();
	this._root._scene = this;
}

Scene.prototype.clear = function()
{
	this._root = new SceneNode();
	this._root._scene = this;
}

Scene.prototype.getNodeById = function(id)
{
	return this._root.findNode(id);
}

Scene.prototype.update = function(dt)
{
	this.root.propagate("update",[dt]);
}


Object.defineProperty(Scene.prototype, 'root', {
	get: function() { return this._root; },
	set: function(v) { throw("Cannot set root of scene"); },
	enumerable: false //avoid problems
});

global.Scene = Scene;

/* Basic Scene Renderer *************/

function Renderer(context) {
	
	var gl = this.gl = context;
	
	this.point_size = 5;
	
	this._view_matrix = mat4.create();
	this._projection_matrix = mat4.create();
	this._viewprojection_matrix = mat4.create();
	this._mvp_matrix = mat4.create();
	this._model_matrix = mat4.create();
	
	this._nodes = [];
	this._uniforms = {
		u_view: this._view_matrix,
		u_viewprojection: this._viewprojection_matrix,
		u_model: this._model_matrix,
		u_mvp: this._mvp_matrix
	};
	
	//set some default stuff
	global.gl = this.gl;
	
	//global containers and basic data
	gl.meshes = {};
	gl.meshes["plane"] = GL.Mesh.plane({size:1});
	gl.meshes["planeXZ"] = GL.Mesh.plane({size:1,xz:true});
	gl.meshes["cube"] = GL.Mesh.cube({size:1});
	
	gl.textures = {};
	gl.textures["notfound"] = this.default_texture = new GL.Texture(1,1,{ filter: gl.NEAREST, pixel_data: new Uint8Array([0,0,0,255]) });
	gl.textures["white"] = this.default_texture = new GL.Texture(1,1,{ filter: gl.NEAREST, pixel_data: new Uint8Array([255,255,255,255]) });
	
	gl.shaders = {};
	this.createShaders();
	
}

Renderer.prototype.render = function(scene, camera, nodes)
{
	if (!scene || !camera)
		throw("Renderer.render: not enough parameters");

	this._camera = camera;	
	camera.updateMatrices(); //multiply
	camera.extractPlanes(); //for frustrum culling
	
	this._view_matrix.set(camera._view_matrix);
	this._projection_matrix.set(camera._projection_matrix);
	this._viewprojection_matrix.set(camera._viewprojection_matrix);
	this._uniforms.u_camera_position = camera.position;

	this._nodes.length = 0;
	if(!nodes)
		scene.root.getAllChildren( this._nodes );
	nodes = nodes || this._nodes;

	//pre rendering
	if(scene.root.preRender)
		scene.root.preRender(this,camera);
	for (var i = 0; i < nodes.length; ++i)
	{
		var node = nodes[i];
		
		//recompute matrices
		node.updateGlobalMatrix(true);
		
		if(node.preRender)
			node.preRender(this,camera);
	}
	
	//rendering	
	for (var i = 0; i < nodes.length; ++i)
	{
		var node = nodes[i];
		if(node.flags.visible === false)
			continue;
		
		this._model_matrix.set( node._global_matrix );
		mat4.multiply(this._mvp_matrix, this._viewprojection_matrix, this._model_matrix );
		
		if(node.render)
			node.render(this, camera);
		else
			this.renderNode(node, camera);
	}
	
	//post rendering
	if(scene.root.postRender)
		scene.root.postRender(this,camera);
	for (var i = 0; i < nodes.length; ++i)
	{
		var node = nodes[i];
		if(node.postRender)
			node.postRender(this,camera);
	}
}

Renderer.prototype.renderNode = function(node, camera)
{
	//get mesh
	var mesh = null;
	if (node._mesh) //hardcoded mesh
		mesh = node._mesh;
	else if (node.mesh) //shared mesh
		mesh = gl.meshes[node.mesh];
		
	if(!mesh)
		return;
	
	if (!node._uniforms)
		node._uniforms = { u_color: node._color, u_texture: 0 };
		
	var texture = null;
	if(node._texture)
		texture = node._texture;
	else if(node.texture)
		texture = gl.textures[ node.texture ];
	if(texture)
		texture.bind(0);
	
	var shader = null;
	if (node.shader)
		shader = gl.shaders[ node.shader ];
	if (!shader)
		shader = texture ? this._texture_shader : this._flat_shader;
		
	//flags
	gl.frontFace( node.flags.flip_normals ? gl.CW : gl.CCW );
	gl[ node.flags.depth_test === false ? "disable" : "enable"]( gl.DEPTH_TEST );
	if( node.flags.depth_write === false )
		gl.depthMask( false );
	gl[ node.flags.two_sided === true ? "disable" : "enable"]( gl.CULL_FACE );
	
	//blend
	if(node.flags.blend)
	{
		gl.enable( gl.BLEND );
		gl.blendFunc( gl.SRC_ALPHA, node.blendMode == "additive" ? gl.ONE : gl.ONE_MINUS_SRC_ALPHA );
	}
	
	if(node.onRender)
		node.onRender(this, camera, shader);
	
	shader.uniforms( this._uniforms );
	shader.uniforms( node._uniforms );
	shader.draw( mesh, node.primitive === undefined ? gl.TRIANGLES : node.primitive);

	if( node.flags.flip_normals ) gl.frontFace( gl.CCW );
	if( node.flags.depth_test === false ) gl.enable( gl.DEPTH_TEST );
	if( node.flags.blend ) gl.disable( gl.BLEND );
	if( node.flags.two_sided ) gl.disable( gl.CULL_FACE );
	if( node.flags.depth_write === false )
		gl.depthMask( true );
}

Renderer.prototype.setPointSize = function(v)
{
	this.point_size = v;
	gl.shaders["point"].uniforms({u_pointSize: this.point_size});
}


global.Renderer = Renderer;


//Camera ************************************
function Camera( options )
{
	this.type = Camera.PERSPECTIVE;

	this._position = vec3.fromValues(0,100, 100);
	this._target = vec3.fromValues(0,0,0);
	this._up = vec3.fromValues(0,1,0);
	
	this.near = 0.1;
	this.far = 10000;
	this.aspect = 1.0;
	this.fov = 45; //persp
	this.frustum_size = 50; //ortho

	this._view_matrix = mat4.create();
	this._projection_matrix = mat4.create();
	this._viewprojection_matrix = mat4.create();
	this._model_matrix = mat4.create(); //inverse of view
	
	this._must_update_matrix = false;

	this._top = vec3.create();
	this._right = vec3.create();
	this._front = vec3.create();
	
	if(options)
	{
		if(options.position) this._position.set(options.position);
		if(options.target) this._target.set(options.target);
		if(options.up) this._up.set(options.up);
		if(options.near) this.near = options.near;
		if(options.far) this.far = options.far;
		if(options.fov) this.fov = options.fov;
		if(options.aspect) this.aspect = options.aspect;
	}
	

	this.updateMatrices();
}

Camera.PERSPECTIVE = 1;
Camera.ORTHOGRAPHIC = 2;


Object.defineProperty(Camera.prototype, 'position', {
	get: function() { return this._position; },
	set: function(v) { this._position.set(v); this._must_update_matrix = true; },
	enumerable: false //avoid problems
});

Object.defineProperty(Camera.prototype, 'target', {
	get: function() { return this._target; },
	set: function(v) { this._target.set(v); this._must_update_matrix = true; },
	enumerable: false //avoid problems
});


Object.defineProperty(Camera.prototype, 'up', {
	get: function() { return this._up; },
	set: function(v) { this._up.set(v); this._must_update_matrix = true; },
	enumerable: false //avoid problems
});

Camera.prototype.perspective = function(fov, aspect, near, far)
{
	this.type = Camera.PERSPECTIVE;
	this.fov = fov;
	this.aspect = aspect;
	this.near = near;
	this.far = far;
	
	this._must_update_matrix = true;
}

Camera.prototype.ortho = function(frustum_size)
{
	this.type = Camera.ORTHOGRAPHIC;
	this.frustum_size = frustum_size;
}

Camera.prototype.lookAt = function(position,target,up)
{
	vec3.copy(this._position, position);
	vec3.copy(this._target, target);
	vec3.copy(this._up, up);
	
	this._must_update_matrix = true;
}

Camera.prototype.updateMatrices = function()
{
	if(this.type == Camera.ORTHOGRAPHIC)
		mat4.ortho(this._projection_matrix, -this.frustum_size*this.aspect, this.frustum_size*this.aspect, -this.frustum_size, this.frustum_size, this.near, this.far);
	else
		mat4.perspective(this._projection_matrix, this.fov * DEG2RAD, this.aspect, this.near, this.far);
	mat4.lookAt(this._view_matrix, this._position, this._target, this._up);
	mat4.multiply(this._viewprojection_matrix, this._projection_matrix, this._view_matrix );
	mat4.invert(this._model_matrix, this._view_matrix );
	
	this._must_update_matrix = false;

	mat4.rotateVec3( this._right, this._model_matrix, [1,0,0] );
	mat4.rotateVec3( this._top,   this._model_matrix, [0,1,0] );
	mat4.rotateVec3( this._front, this._model_matrix, [0,0,1] );

	this.distance = vec3.distance(this._position, this._target);
}

Camera.prototype.getModel = function(m)
{
	m = m || mat4.create();
	mat4.invert(this._model_matrix, this._view_matrix );
	mat4.copy(m, this._model_matrix);
	return m;
}

Camera.prototype.updateVectors = function(model)
{
	var front = vec3.subtract( temp_vec3, this._target, this._position);
	var dist = vec3.length(front);
	mat4.multiplyVec3(this._position, model, [0,0,0]);
	mat4.multiplyVec3(this._target, model, [0,0,-dist]);
	mat4.rotateVec3(this._up, model, [0,1,0]);
}

Camera.prototype.getLocalVector = function(v, result)
{
	if(this._must_update_matrix)
		this.updateMatrices();
		
	return mat4.rotateVec3( result || vec3.create(), this._model_matrix, v );
}

Camera.prototype.getLocalPoint = function(v, result)
{
	if(this._must_update_matrix)
		this.updateMatrices();
	
	return vec3.transformMat4( result || vec3.create(), v, this._model_matrix );
}

Camera.prototype.getFront = function(dest)
{
	dest = dest || vec3.create();
	vec3.subtract(dest, this._target, this._position);
	vec3.normalize(dest, dest);
	return dest;
}

Camera.prototype.move = function(v)
{
	vec3.add(this._target, this._target, v);
	vec3.add(this._position, this._position, v);
	this._must_update_matrix = true;
}

Camera.prototype.moveLocal = function(v)
{
	var delta = mat4.rotateVec3(temp_vec3, this.model_matrix, v);
	vec3.add(this._target, this._target, delta);
	vec3.add(this._position, this._position, delta);
	this._must_update_matrix = true;
}

Camera.prototype.rotate = function(angle_in_deg, axis)
{
	var R = quat.setAxisAngle( temp_quat, axis, angle_in_deg * DEG2RAD );
	var front = vec3.subtract( temp_vec3, this._target, this._position );
	vec3.transformQuat(front, front, R );
	vec3.add(this._target, this._position, front);
	this._must_update_matrix = true;
}

Camera.prototype.orbit = function(angle_in_deg, axis, center)
{
	center = center || this._target;
	var R = quat.setAxisAngle( temp_quat, axis, angle_in_deg * DEG2RAD );
	var front = vec3.subtract( temp_vec3, this._position, this._target );
	vec3.transformQuat(front, front, R );
	vec3.add(this._position, center, front);
	this._must_update_matrix = true;
}

Camera.prototype.orbitDistanceFactor = function(f, center)
{
	center = center || this._target;
	var front = vec3.subtract( temp_vec3, this._position, center);
	vec3.scale(front, front,f);
	vec3.add(this._position, center, front);
	this._must_update_matrix = true;
}

//from 3D to 2D
Camera.prototype.project = function( vec, viewport )
{
	viewport = viewport || [0,0,gl.canvas.width, gl.canvas.height];
	var result = mat4.multiplyVec3( temp_vec3, this._viewprojection_matrix, vec );
	result[0] /= result[2];
	result[1] /= result[2];
	return vec3.fromValues( (result[0]+1) * (viewport[2]*0.5) + viewport[0], (result[1]+1) * (viewport[3]*0.5) + viewport[1], result[2] );
}

//from 2D to 3D
Camera.prototype.unproject = function( vec, viewport )
{
	viewport = viewport || [0,0,gl.canvas.width, gl.canvas.height];
	return vec3.unproject(vec3.create(), vec, this._view_matrix, this._projection_matrix, viewport );
}

Camera.prototype.getRayPlaneCollision = function(x,y, position, normal, result)
{
	var RT = new GL.Raytracer(this._view_matrix, this._projection_matrix);
	var start = this._position;
	var dir = RT.getRayForPixel( x,y );
	result = result || vec3.create();
	if( geo.testRayPlane( start, dir, position, normal, result ) )
		return result;
	return null;
}

Camera.prototype.extractPlanes = function()
{
	var vp = this._viewprojection_matrix;
	var planes = this._planes || new Float32Array(4*6);

	//right
	planes.set( [vp[3] - vp[0], vp[7] - vp[4], vp[11] - vp[8], vp[15] - vp[12] ], 0); 
	normalize(0);

	//left
	planes.set( [vp[3] + vp[0], vp[ 7] + vp[ 4], vp[11] + vp[ 8], vp[15] + vp[12] ], 4);
	normalize(4);

	//bottom
	planes.set( [ vp[ 3] + vp[ 1], vp[ 7] + vp[ 5], vp[11] + vp[ 9], vp[15] + vp[13] ], 8);
	normalize(8);

	//top
	planes.set( [ vp[ 3] - vp[ 1], vp[ 7] - vp[ 5], vp[11] - vp[ 9], vp[15] - vp[13] ],12);
	normalize(12);

	//back
	planes.set( [ vp[ 3] - vp[ 2], vp[ 7] - vp[ 6], vp[11] - vp[10], vp[15] - vp[14] ],16);
	normalize(16);

	//front
	planes.set( [ vp[ 3] + vp[ 2], vp[ 7] + vp[ 6], vp[11] + vp[10], vp[15] + vp[14] ],20);
	normalize(20);

	this._planes = planes;

	function normalize(pos)
	{
		var N = planes.subarray(pos,pos+3);
		var l = vec3.length(N);
		if(l) return;
		l = 1.0 / l;
		planes[pos] *= l;
		planes[pos+1] *= l;
		planes[pos+2] *= l;
		planes[pos+3] *= l;
	}
}

var CLIP_INSIDE = 0;
var CLIP_OUTSIDE = 1;
var CLIP_OVERLAP = 2;

//box in {center:vec3,halfsize:vec3} format
Camera.prototype.testBox = function(box)
{
	if(!this._planes) this.extractPlanes();
	var planes = this._planes;

	var flag = 0, o = 0;

	flag = planeOverlap(planes.subarray(0,4),box);
	if (flag == CLIP_OUTSIDE) return CLIP_OUTSIDE; o+= flag;
	flag =  planeOverlap(planes.subarray(4,8),box);
	if (flag == CLIP_OUTSIDE) return CLIP_OUTSIDE; o+= flag;
	flag =  planeOverlap(planes.subarray(8,12),box);
	if (flag == CLIP_OUTSIDE) return CLIP_OUTSIDE; o+= flag;
	flag =  planeOverlap(planes.subarray(12,16),box);
	if (flag == CLIP_OUTSIDE) return CLIP_OUTSIDE; o+= flag;
	flag =  planeOverlap(planes.subarray(16,20),box);
	if (flag == CLIP_OUTSIDE) return CLIP_OUTSIDE; o+= flag;
	flag =  planeOverlap(planes.subarray(20,24),box);
	if (flag == CLIP_OUTSIDE) return CLIP_OUTSIDE; o+= flag;

	if (o==0) return CLIP_INSIDE;
	else return CLIP_OVERLAP;
}

Camera.prototype.testSphere = function(center, radius)
{
	if(!this._planes) this.extractPlanes();
	var planes = this._planes;

	var dist;
	var overlap = false;

	dist = distanceToPlane( planes.subarray(0,4), center );
	if( dist < -radius ) return CLIP_OUTSIDE;
	else if(dist >= -radius && dist <= radius)	overlap = true;
	dist = distanceToPlane( planes.subarray(4,8), center );
	if( dist < -radius ) return CLIP_OUTSIDE;
	else if(dist >= -radius && dist <= radius)	overlap = true;
	dist = distanceToPlane( planes.subarray(8,12), center );
	if( dist < -radius ) return CLIP_OUTSIDE;
	else if(dist >= -radius && dist <= radius)	overlap = true;
	dist = distanceToPlane( planes.subarray(12,16), center );
	if( dist < -radius ) return CLIP_OUTSIDE;
	else if(dist >= -radius && dist <= radius)	overlap = true;
	dist = distanceToPlane( planes.subarray(16,20), center );
	if( dist < -radius ) return CLIP_OUTSIDE;
	else if(dist >= -radius && dist <= radius)	overlap = true;
	dist = distanceToPlane( planes.subarray(20,24), center );
	if( dist < -radius ) return CLIP_OUTSIDE;
	else if(dist >= -radius && dist <= radius)	overlap = true;
}

global.Camera = Camera;

/* used functions */

function distanceToPlane(plane, point)
{
	return vec3.dot(plane,point) + plane[3];
}

function planeOverlap(plane, box)
{
	var n = plane.subarray(0,3);
	var d = plane[3];

	var tmp = vec3.fromValues(
		Math.abs( box.halfsize[0] * n[0]),
		Math.abs( box.halfsize[1] * n[1]),
		Math.abs( box.halfsize[2] * n[2])
	);

	var radius = tmp[0]+tmp[1]+tmp[2];
	var distance = vec3.dot(n,box.center) + d;

	if (distance <= - radius) return CLIP_OUTSIDE;
	else if (distance <= radius) return CLIP_OVERLAP;
	else return CLIP_INSIDE;
}

Renderer.prototype.createShaders = function()
{
	this._flat_shader = new GL.Shader('\
				precision highp float;\
				attribute vec3 a_vertex;\
				uniform mat4 u_mvp;\
				void main() {\
					gl_Position = u_mvp * vec4(a_vertex,1.0);\
					gl_PointSize = 5.0;\
				}\
				', '\
				precision highp float;\
				uniform vec4 u_color;\
				void main() {\
				  gl_FragColor = u_color;\
				}\
			');
	gl.shaders["flat"] = this._flat_shader;
	
	this._point_shader = new GL.Shader('\
				precision highp float;\
				attribute vec3 a_vertex;\
				uniform mat4 u_mvp;\
				uniform float u_pointSize;\
				void main() {\
					gl_PointSize = u_pointSize;\
					gl_Position = u_mvp * vec4(a_vertex,1.0);\
				}\
				', '\
				precision highp float;\
				uniform vec4 u_color;\
				void main() {\
				  if( distance( gl_PointCoord, vec2(0.5)) > 0.5)\
				     discard;\
				  gl_FragColor = u_color;\
				}\
			');
	gl.shaders["point"] = this._point_shader;	
	
	this._color_shader = new GL.Shader('\
		precision highp float;\
		attribute vec3 a_vertex;\
		attribute vec4 a_color;\
		varying vec4 v_color;\
		uniform vec4 u_color;\
		uniform mat4 u_mvp;\
		uniform mat4 u_modelt;\
		void main() {\
			v_color = a_color * u_color;\
			gl_Position = u_mvp * vec4(a_vertex,1.0);\
			gl_PointSize = 5.0;\
		}\
		', '\
		precision highp float;\
		varying vec4 v_color;\
		void main() {\
		  gl_FragColor = v_color;\
		}\
	');
	gl.shaders["color"] = this._color_shader;
	
	this._texture_shader = new GL.Shader('\
		precision highp float;\
		attribute vec3 a_vertex;\
		attribute vec2 a_coord;\
		varying vec2 v_coord;\
		uniform mat4 u_mvp;\
		uniform mat4 u_modelt;\
		void main() {\
			v_coord = a_coord;\
			gl_Position = u_mvp * vec4(a_vertex,1.0);\
			gl_PointSize = 5.0;\
		}\
		', '\
		precision highp float;\
		varying vec2 v_coord;\
		uniform vec4 u_color;\
		uniform sampler2D u_texture;\
		void main() {\
			gl_FragColor = u_color * texture2D(u_texture, v_coord);\
		}\
	');
	gl.shaders["texture"] = this._flat_shader;	
	
	
	//basic phong shader
	this._phong_shader = new GL.Shader('\
			precision highp float;\
			attribute vec3 a_vertex;\
			attribute vec3 a_normal;\
			varying vec3 v_normal;\
			uniform mat4 u_mvp;\
			uniform mat4 u_model;\
			void main() {\
				v_normal = (u_model * vec4(a_normal,0.0)).xyz;\
				gl_Position = u_mvp * vec4(a_vertex,1.0);\
			}\
			', '\
			precision highp float;\
			varying vec3 v_normal;\
			uniform vec3 u_lightvector;\
			uniform vec4 u_color;\
			void main() {\
			  vec3 N = normalize(v_normal);\
			  gl_FragColor = u_color * max(0.0, dot(u_lightvector,N));\
			}\
		');
	gl.shaders["phong"] = this._phong_shader;

	//basic phong shader
	this._phong_shader = new GL.Shader('\
			precision highp float;\
			attribute vec3 a_vertex;\
			attribute vec3 a_normal;\
			attribute vec2 a_coord;\
			varying vec2 v_coord;\
			varying vec3 v_normal;\
			uniform mat4 u_mvp;\
			uniform mat4 u_model;\
			void main() {\n\
				v_coord = a_coord;\n\
				v_normal = (u_model * vec4(a_normal,0.0)).xyz;\n\
				gl_Position = u_mvp * vec4(a_vertex,1.0);\n\
			}\
			', '\
			precision highp float;\
			varying vec3 v_normal;\
			varying vec2 v_coord;\
			uniform vec3 u_lightvector;\
			uniform vec4 u_color;\
			uniform sampler2D u_texture;\
			void main() {\
			  vec3 N = normalize(v_normal);\
			  gl_FragColor = u_color * texture2D(u_texture, v_coord) * max(0.0, dot(u_lightvector,N));\
			}\
		');
	gl.shaders["textured_phong"] = this._phong_shader;
}


//footer

})(window);
