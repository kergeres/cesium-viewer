define(["exports","./AttributeCompression-0b8f7b7d","./Matrix2-7a8e9daf","./Matrix3-b2351961","./defaultValue-f6d5e6da","./Math-355606c6","./Transforms-f17097e5","./ComponentDatatype-ab629b88","./EncodedCartesian3-abad5e8c","./GeometryAttribute-9c1a6bab","./IndexDatatype-a9b1bc18","./IntersectionTests-f1b36d69","./Plane-5931b53e"],function(e,t,i,n,r,a,s,o,u,l,p,d,f){"use strict";let y=new n.Cartesian3,c=new n.Cartesian3,m=new n.Cartesian3,C={calculateACMR:function(e){let t=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).indices,i=e.maximumIndex,n=r.defaultValue(e.cacheSize,24),a=t.length;if(!r.defined(i)){i=0;let e=0,n=t[0];for(;e<a;)n>i&&(i=n),n=t[++e]}let s=[];for(let e=0;e<i+1;e++)s[e]=0;let o=n+1;for(let e=0;e<a;++e)o-s[t[e]]>n&&(s[t[e]]=o,++o);return(o-n+1)/(a/3)}};C.tipsify=function(e){let t,i,n,a;let s=(e=r.defaultValue(e,r.defaultValue.EMPTY_OBJECT)).indices,o=e.maximumIndex,u=r.defaultValue(e.cacheSize,24),l=s.length,p=0,d=0,f=s[0];if(r.defined(o))p=o+1;else{for(;d<l;)f>p&&(p=f),f=s[++d];if(-1===p)return 0;++p}let y=[];for(i=0;i<p;i++)y[i]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};d=0;let c=0;for(;d<l;)y[s[d]].vertexTriangles.push(c),++y[s[d]].numLiveTriangles,y[s[d+1]].vertexTriangles.push(c),++y[s[d+1]].numLiveTriangles,y[s[d+2]].vertexTriangles.push(c),++y[s[d+2]].numLiveTriangles,++c,d+=3;let m=0,C=u+1;t=1;let h=[],v=[],b,g,A=0,T=[],x=l/3,P=[];for(i=0;i<x;i++)P[i]=!1;for(;-1!==m;){h=[],a=(g=y[m]).vertexTriangles.length;for(let e=0;e<a;++e)if(!P[c=g.vertexTriangles[e]]){P[c]=!0,d=c+c+c;for(let e=0;e<3;++e)n=s[d],h.push(n),v.push(n),T[A]=n,++A,b=y[n],--b.numLiveTriangles,C-b.timeStamp>u&&(b.timeStamp=C,++C),++d}m=function(e,i,n,r,a,s,o){let u,l=-1,p=-1,d=0;for(;d<n.length;){let e=n[d];r[e].numLiveTriangles&&(u=0,a-r[e].timeStamp+2*r[e].numLiveTriangles<=i&&(u=a-r[e].timeStamp),(u>p||-1===p)&&(p=u,l=e)),++d}return -1===l?function(e,i,n,r){for(;i.length>=1;){let t=i[i.length-1];if(i.splice(i.length-1,1),e[t].numLiveTriangles>0)return t}for(;t<r;){if(e[t].numLiveTriangles>0)return++t-1;++t}return -1}(r,s,0,o):l}(0,u,h,y,C,v,p)}return T};let h={};function v(e,t,i,n,r){e[t++]=i,e[t++]=n,e[t++]=n,e[t++]=r,e[t++]=r,e[t]=i}function b(e){let t={};for(let i in e)if(e.hasOwnProperty(i)&&r.defined(e[i])&&r.defined(e[i].values)){let n=e[i];t[i]=new l.GeometryAttribute({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return t}h.toWireframe=function(e){let t=e.indices;if(r.defined(t)){switch(e.primitiveType){case l.PrimitiveType.TRIANGLES:e.indices=function(e){let t=e.length,i=t/3*6,n=p.IndexDatatype.createTypedArray(t,i),r=0;for(let i=0;i<t;i+=3,r+=6)v(n,r,e[i],e[i+1],e[i+2]);return n}(t);break;case l.PrimitiveType.TRIANGLE_STRIP:e.indices=function(e){let t=e.length;if(t>=3){let i=6*(t-2),n=p.IndexDatatype.createTypedArray(t,i);v(n,0,e[0],e[1],e[2]);let r=6;for(let i=3;i<t;++i,r+=6)v(n,r,e[i-1],e[i],e[i-2]);return n}return new Uint16Array}(t);break;case l.PrimitiveType.TRIANGLE_FAN:e.indices=function(e){if(e.length>0){let t=e.length-1,i=6*(t-1),n=p.IndexDatatype.createTypedArray(t,i),r=e[0],a=0;for(let i=1;i<t;++i,a+=6)v(n,a,r,e[i],e[i+1]);return n}return new Uint16Array}(t)}e.primitiveType=l.PrimitiveType.LINES}return e},h.createLineSegmentsForVectors=function(e,t,i){t=r.defaultValue(t,"normal"),i=r.defaultValue(i,1e4);let n=e.attributes.position.values,a=e.attributes[t].values,u=n.length,p=new Float64Array(2*u),d,f=0;for(let e=0;e<u;e+=3)p[f++]=n[e],p[f++]=n[e+1],p[f++]=n[e+2],p[f++]=n[e]+a[e]*i,p[f++]=n[e+1]+a[e+1]*i,p[f++]=n[e+2]+a[e+2]*i;let y=e.boundingSphere;return r.defined(y)&&(d=new s.BoundingSphere(y.center,y.radius+i)),new l.Geometry({attributes:{position:new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})},primitiveType:l.PrimitiveType.LINES,boundingSphere:d})},h.createAttributeLocations=function(e){let t=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],i=e.attributes,n={},a,s=0,o=t.length;for(a=0;a<o;++a){let e=t[a];r.defined(i[e])&&(n[e]=s++)}for(let e in i)i.hasOwnProperty(e)&&!r.defined(n[e])&&(n[e]=s++);return n},h.reorderForPreVertexCache=function(e){let t=l.Geometry.computeNumberOfVertices(e),i=e.indices;if(r.defined(i)){let n=new Int32Array(t);for(let e=0;e<t;e++)n[e]=-1;let a=i.length,s=p.IndexDatatype.createTypedArray(t,a),u,l=0,d=0,f=0;for(;l<a;)-1!==(u=n[i[l]])?s[d]=u:(n[u=i[l]]=f,s[d]=f,++f),++l,++d;e.indices=s;let y=e.attributes;for(let e in y)if(y.hasOwnProperty(e)&&r.defined(y[e])&&r.defined(y[e].values)){let i=y[e],r=i.values,a=0,s=i.componentsPerAttribute,u=o.ComponentDatatype.createTypedArray(i.componentDatatype,f*s);for(;a<t;){let e=n[a];if(-1!==e)for(let t=0;t<s;t++)u[s*e+t]=r[s*a+t];++a}i.values=u}}return e},h.reorderForPostVertexCache=function(e,t){let i=e.indices;if(e.primitiveType===l.PrimitiveType.TRIANGLES&&r.defined(i)){let n=i.length,r=0;for(let e=0;e<n;e++)i[e]>r&&(r=i[e]);e.indices=C.tipsify({indices:i,maximumIndex:r,cacheSize:t})}return e},h.fitToUnsignedShortIndices=function(e){let t=[],i=l.Geometry.computeNumberOfVertices(e);if(r.defined(e.indices)&&i>=a.CesiumMath.SIXTY_FOUR_KILOBYTES){let i,n=[],s=[],o=0,u=b(e.attributes),p=e.indices,d=p.length;e.primitiveType===l.PrimitiveType.TRIANGLES?i=3:e.primitiveType===l.PrimitiveType.LINES?i=2:e.primitiveType===l.PrimitiveType.POINTS&&(i=1);for(let f=0;f<d;f+=i){for(let t=0;t<i;++t){let i=p[f+t],a=n[i];r.defined(a)||(a=o++,n[i]=a,function(e,t,i){for(let n in t)if(t.hasOwnProperty(n)&&r.defined(t[n])&&r.defined(t[n].values)){let r=t[n];for(let t=0;t<r.componentsPerAttribute;++t)e[n].values.push(r.values[i*r.componentsPerAttribute+t])}}(u,e.attributes,i)),s.push(a)}o+i>=a.CesiumMath.SIXTY_FOUR_KILOBYTES&&(t.push(new l.Geometry({attributes:u,indices:s,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),n=[],s=[],o=0,u=b(e.attributes))}0!==s.length&&t.push(new l.Geometry({attributes:u,indices:s,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};let g=new n.Cartesian3,A=new n.Cartographic;h.projectTo2D=function(e,t,i,a,u){let p=e.attributes[t],d=(u=r.defined(u)?u:new s.GeographicProjection).ellipsoid,f=p.values,y=new Float64Array(f.length),c=0;for(let e=0;e<f.length;e+=3){let t=n.Cartesian3.fromArray(f,e,g),i=d.cartesianToCartographic(t,A),r=u.project(i,g);y[c++]=r.x,y[c++]=r.y,y[c++]=r.z}return e.attributes[i]=p,e.attributes[a]=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:y}),delete e.attributes[t],e};let T={high:0,low:0};h.encodeAttribute=function(e,t,i,n){let r=e.attributes[t],a=r.values,s=a.length,p=new Float32Array(s),d=new Float32Array(s);for(let e=0;e<s;++e)u.EncodedCartesian3.encode(a[e],T),p[e]=T.high,d[e]=T.low;let f=r.componentsPerAttribute;return e.attributes[i]=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:f,values:p}),e.attributes[n]=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:f,values:d}),delete e.attributes[t],e};let x=new n.Cartesian3;function P(e,t){if(r.defined(t)){let r=t.values,a=r.length;for(let t=0;t<a;t+=3)n.Cartesian3.unpack(r,t,x),i.Matrix4.multiplyByPoint(e,x,x),n.Cartesian3.pack(x,r,t)}}function w(e,t){if(r.defined(t)){let i=t.values,r=i.length;for(let t=0;t<r;t+=3)n.Cartesian3.unpack(i,t,x),n.Matrix3.multiplyByVector(e,x,x),x=n.Cartesian3.normalize(x,x),n.Cartesian3.pack(x,i,t)}}let S=new i.Matrix4,I=new n.Matrix3;h.transformToWorldCoordinates=function(e){let t=e.modelMatrix;if(i.Matrix4.equals(t,i.Matrix4.IDENTITY))return e;let n=e.geometry.attributes;P(t,n.position),P(t,n.prevPosition),P(t,n.nextPosition),(r.defined(n.normal)||r.defined(n.tangent)||r.defined(n.bitangent))&&(i.Matrix4.inverse(t,S),i.Matrix4.transpose(S,S),i.Matrix4.getMatrix3(S,I),w(I,n.normal),w(I,n.tangent),w(I,n.bitangent));let a=e.geometry.boundingSphere;return r.defined(a)&&(e.geometry.boundingSphere=s.BoundingSphere.transform(a,t,a)),e.modelMatrix=i.Matrix4.clone(i.Matrix4.IDENTITY),e};let O=new n.Cartesian3;function E(e,t){let i,a,u,d,f,y,c,m;let C=e.length;e[0].modelMatrix;let h=r.defined(e[0][t].indices),v=e[0][t].primitiveType,b=function(e,t){let i;let n=e.length,a={},s=e[0][t].attributes;for(i in s)if(s.hasOwnProperty(i)&&r.defined(s[i])&&r.defined(s[i].values)){let u=s[i],p=u.values.length,d=!0;for(let a=1;a<n;++a){let n=e[a][t].attributes[i];if(!r.defined(n)||u.componentDatatype!==n.componentDatatype||u.componentsPerAttribute!==n.componentsPerAttribute||u.normalize!==n.normalize){d=!1;break}p+=n.values.length}d&&(a[i]=new l.GeometryAttribute({componentDatatype:u.componentDatatype,componentsPerAttribute:u.componentsPerAttribute,normalize:u.normalize,values:o.ComponentDatatype.createTypedArray(u.componentDatatype,p)}))}return a}(e,t);for(i in b)if(b.hasOwnProperty(i))for(f=b[i].values,d=0,a=0;a<C;++a)for(c=(y=e[a][t].attributes[i].values).length,u=0;u<c;++u)f[d++]=y[u];if(h){let i=0;for(a=0;a<C;++a)i+=e[a][t].indices.length;let n=l.Geometry.computeNumberOfVertices(new l.Geometry({attributes:b,primitiveType:l.PrimitiveType.POINTS})),r=p.IndexDatatype.createTypedArray(n,i),s=0,o=0;for(a=0;a<C;++a){let i=e[a][t].indices,n=i.length;for(d=0;d<n;++d)r[s++]=o+i[d];o+=l.Geometry.computeNumberOfVertices(e[a][t])}m=r}let g,A=new n.Cartesian3,T=0;for(a=0;a<C;++a){if(g=e[a][t].boundingSphere,!r.defined(g)){A=void 0;break}n.Cartesian3.add(g.center,A,A)}if(r.defined(A))for(n.Cartesian3.divideByScalar(A,C,A),a=0;a<C;++a){g=e[a][t].boundingSphere;let i=n.Cartesian3.magnitude(n.Cartesian3.subtract(g.center,A,O))+g.radius;i>T&&(T=i)}return new l.Geometry({attributes:b,indices:m,primitiveType:v,boundingSphere:r.defined(A)?new s.BoundingSphere(A,T):void 0})}h.combineInstances=function(e){let t=[],i=[],n=e.length;for(let a=0;a<n;++a){let n=e[a];r.defined(n.geometry)?t.push(n):r.defined(n.westHemisphereGeometry)&&r.defined(n.eastHemisphereGeometry)&&i.push(n)}let a=[];return t.length>0&&a.push(E(t,"geometry")),i.length>0&&(a.push(E(i,"westHemisphereGeometry")),a.push(E(i,"eastHemisphereGeometry"))),a};let N=new n.Cartesian3,L=new n.Cartesian3,M=new n.Cartesian3,z=new n.Cartesian3;h.computeNormal=function(e){let t;let i=e.indices,r=e.attributes,s=r.position.values,u=r.position.values.length/3,p=i.length,d=Array(u),f=Array(p/3),y=Array(p);for(t=0;t<u;t++)d[t]={indexOffset:0,count:0,currentCount:0};let c=0;for(t=0;t<p;t+=3){let e=i[t],r=i[t+1],a=i[t+2],o=3*e,u=3*r,l=3*a;L.x=s[o],L.y=s[o+1],L.z=s[o+2],M.x=s[u],M.y=s[u+1],M.z=s[u+2],z.x=s[l],z.y=s[l+1],z.z=s[l+2],d[e].count++,d[r].count++,d[a].count++,n.Cartesian3.subtract(M,L,M),n.Cartesian3.subtract(z,L,z),f[c]=n.Cartesian3.cross(M,z,new n.Cartesian3),c++}let m,C=0;for(t=0;t<u;t++)d[t].indexOffset+=C,C+=d[t].count;for(c=0,t=0;t<p;t+=3){let e=(m=d[i[t]]).indexOffset+m.currentCount;y[e]=c,m.currentCount++,y[e=(m=d[i[t+1]]).indexOffset+m.currentCount]=c,m.currentCount++,y[e=(m=d[i[t+2]]).indexOffset+m.currentCount]=c,m.currentCount++,c++}let h=new Float32Array(3*u);for(t=0;t<u;t++){let e=3*t;if(m=d[t],n.Cartesian3.clone(n.Cartesian3.ZERO,N),m.count>0){for(c=0;c<m.count;c++)n.Cartesian3.add(N,f[y[m.indexOffset+c]],N);n.Cartesian3.equalsEpsilon(n.Cartesian3.ZERO,N,a.CesiumMath.EPSILON10)&&n.Cartesian3.clone(f[y[m.indexOffset]],N)}n.Cartesian3.equalsEpsilon(n.Cartesian3.ZERO,N,a.CesiumMath.EPSILON10)&&(N.z=1),n.Cartesian3.normalize(N,N),h[e]=N.x,h[e+1]=N.y,h[e+2]=N.z}return e.attributes.normal=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:h}),e};let D=new n.Cartesian3,G=new n.Cartesian3,V=new n.Cartesian3;h.computeTangentAndBitangent=function(e){let t,i,r,a;e.attributes;let s=e.indices,u=e.attributes.position.values,p=e.attributes.normal.values,d=e.attributes.st.values,f=e.attributes.position.values.length/3,y=s.length,c=Array(3*f);for(t=0;t<c.length;t++)c[t]=0;for(t=0;t<y;t+=3){let e=s[t],n=s[t+1],o=s[t+2];i=3*e,r=3*n,a=3*o;let l=2*e,p=2*n,f=2*o,y=u[i],m=u[i+1],C=u[i+2],h=d[l],v=d[l+1],b=d[p+1]-v,g=d[f+1]-v,A=1/((d[p]-h)*g-(d[f]-h)*b),T=(g*(u[r]-y)-b*(u[a]-y))*A,x=(g*(u[r+1]-m)-b*(u[a+1]-m))*A,P=(g*(u[r+2]-C)-b*(u[a+2]-C))*A;c[i]+=T,c[i+1]+=x,c[i+2]+=P,c[r]+=T,c[r+1]+=x,c[r+2]+=P,c[a]+=T,c[a+1]+=x,c[a+2]+=P}let m=new Float32Array(3*f),C=new Float32Array(3*f);for(t=0;t<f;t++){r=(i=3*t)+1,a=i+2;let e=n.Cartesian3.fromArray(p,i,D),s=n.Cartesian3.fromArray(c,i,V),o=n.Cartesian3.dot(e,s);n.Cartesian3.multiplyByScalar(e,o,G),n.Cartesian3.normalize(n.Cartesian3.subtract(s,G,s),s),m[i]=s.x,m[r]=s.y,m[a]=s.z,n.Cartesian3.normalize(n.Cartesian3.cross(e,s,s),s),C[i]=s.x,C[r]=s.y,C[a]=s.z}return e.attributes.tangent=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:m}),e.attributes.bitangent=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C}),e};let R=new i.Cartesian2,F=new n.Cartesian3,B=new n.Cartesian3,_=new n.Cartesian3,k=new i.Cartesian2;function q(e,t){Math.abs(e.y)<a.CesiumMath.EPSILON6&&(e.y=t?-a.CesiumMath.EPSILON6:a.CesiumMath.EPSILON6)}h.compressVertices=function(e){let a,s,u,p,d,f;let y=e.attributes.extrudeDirection;if(r.defined(y)){let i=y.values;s=i.length/3;let r=new Float32Array(2*s),u=0;for(a=0;a<s;++a)n.Cartesian3.fromArray(i,3*a,F),n.Cartesian3.equals(F,n.Cartesian3.ZERO)?u+=2:(k=t.AttributeCompression.octEncodeInRange(F,65535,k),r[u++]=k.x,r[u++]=k.y);return e.attributes.compressedAttributes=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:r}),delete e.attributes.extrudeDirection,e}let c=e.attributes.normal,m=e.attributes.st,C=r.defined(c),h=r.defined(m);if(!C&&!h)return e;let v=e.attributes.tangent,b=e.attributes.bitangent,g=r.defined(v),A=r.defined(b);C&&(u=c.values),h&&(p=m.values),g&&(d=v.values),A&&(f=b.values);let T=s=(C?u.length:p.length)/(C?3:2),x=h&&C?2:1;x+=g||A?1:0,T*=x;let P=new Float32Array(T),w=0;for(a=0;a<s;++a){h&&(i.Cartesian2.fromArray(p,2*a,R),P[w++]=t.AttributeCompression.compressTextureCoordinates(R));let e=3*a;C&&r.defined(d)&&r.defined(f)?(n.Cartesian3.fromArray(u,e,F),n.Cartesian3.fromArray(d,e,B),n.Cartesian3.fromArray(f,e,_),t.AttributeCompression.octPack(F,B,_,R),P[w++]=R.x,P[w++]=R.y):(C&&(n.Cartesian3.fromArray(u,e,F),P[w++]=t.AttributeCompression.octEncodeFloat(F)),g&&(n.Cartesian3.fromArray(d,e,F),P[w++]=t.AttributeCompression.octEncodeFloat(F)),A&&(n.Cartesian3.fromArray(f,e,F),P[w++]=t.AttributeCompression.octEncodeFloat(F)))}return e.attributes.compressedAttributes=new l.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:x,values:P}),C&&delete e.attributes.normal,h&&delete e.attributes.st,A&&delete e.attributes.bitangent,g&&delete e.attributes.tangent,e};let U=new n.Cartesian3;function Y(e,t,i,r){n.Cartesian3.add(e,n.Cartesian3.multiplyByScalar(n.Cartesian3.subtract(t,e,U),e.y/(e.y-t.y),U),i),n.Cartesian3.clone(i,r),q(i,!0),q(r,!1)}let Z=new n.Cartesian3,H=new n.Cartesian3,W=new n.Cartesian3,X=new n.Cartesian3,j={positions:Array(7),indices:Array(9)};function J(e,t){let i=e.attributes;if(0===i.position.values.length)return;for(let e in i)if(i.hasOwnProperty(e)&&r.defined(i[e])&&r.defined(i[e].values)){let t=i[e];t.values=o.ComponentDatatype.createTypedArray(t.componentDatatype,t.values)}let n=l.Geometry.computeNumberOfVertices(e);return e.indices=p.IndexDatatype.createTypedArray(n,e.indices),t&&(e.boundingSphere=s.BoundingSphere.fromVertices(i.position.values)),e}function K(e){let t=e.attributes,i={};for(let e in t)if(t.hasOwnProperty(e)&&r.defined(t[e])&&r.defined(t[e].values)){let n=t[e];i[e]=new l.GeometryAttribute({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return new l.Geometry({attributes:i,indices:[],primitiveType:e.primitiveType})}function Q(e,t,i){let n=r.defined(e.geometry.boundingSphere);t=J(t,n),i=J(i,n),r.defined(i)&&!r.defined(t)?e.geometry=i:!r.defined(i)&&r.defined(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=i,e.geometry=void 0)}function $(e,t){let i=new e,n=new e,r=new e;return function(a,s,o,u,l,p,d,f){let y=e.fromArray(l,a*t,i),c=e.fromArray(l,s*t,n),m=e.fromArray(l,o*t,r);e.multiplyByScalar(y,u.x,y),e.multiplyByScalar(c,u.y,c),e.multiplyByScalar(m,u.z,m);let C=e.add(y,c,y);e.add(C,m,C),f&&e.normalize(C,C),e.pack(C,p,d*t)}}let ee=$(i.Cartesian4,4),et=$(n.Cartesian3,3),ei=$(i.Cartesian2,2),en=function(e,t,i,n,r,s,o){let u=r[e]*n.x,l=r[t]*n.y,p=r[i]*n.z;s[o]=u+l+p>a.CesiumMath.EPSILON6?1:0},er=new n.Cartesian3,ea=new n.Cartesian3,es=new n.Cartesian3,eo=new n.Cartesian3;function eu(e,t,s,o,u,l,p,d,f,C,h,v,b,g,A,T){if(!(r.defined(l)||r.defined(p)||r.defined(d)||r.defined(f)||r.defined(C)||0!==g))return;let x=function(e,t,s,o,u){let l,p,d,f,C,h,v,b;if(r.defined(u)||(u=new n.Cartesian3),r.defined(t.z)){if(n.Cartesian3.equalsEpsilon(e,t,a.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_X,u);if(n.Cartesian3.equalsEpsilon(e,s,a.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_Y,u);if(n.Cartesian3.equalsEpsilon(e,o,a.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_Z,u);l=n.Cartesian3.subtract(s,t,y),p=n.Cartesian3.subtract(o,t,c),d=n.Cartesian3.subtract(e,t,m),f=n.Cartesian3.dot(l,l),C=n.Cartesian3.dot(l,p),h=n.Cartesian3.dot(l,d),v=n.Cartesian3.dot(p,p),b=n.Cartesian3.dot(p,d)}else{if(i.Cartesian2.equalsEpsilon(e,t,a.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_X,u);if(i.Cartesian2.equalsEpsilon(e,s,a.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_Y,u);if(i.Cartesian2.equalsEpsilon(e,o,a.CesiumMath.EPSILON14))return n.Cartesian3.clone(n.Cartesian3.UNIT_Z,u);l=i.Cartesian2.subtract(s,t,y),p=i.Cartesian2.subtract(o,t,c),d=i.Cartesian2.subtract(e,t,m),f=i.Cartesian2.dot(l,l),C=i.Cartesian2.dot(l,p),h=i.Cartesian2.dot(l,d),v=i.Cartesian2.dot(p,p),b=i.Cartesian2.dot(p,d)}u.y=v*h-C*b,u.z=f*b-C*h;let g=f*v-C*C;if(0!==g)return u.y/=g,u.z/=g,u.x=1-u.y-u.z,u}(o,n.Cartesian3.fromArray(u,3*e,er),n.Cartesian3.fromArray(u,3*t,ea),n.Cartesian3.fromArray(u,3*s,es),eo);if(r.defined(x)){if(r.defined(l)&&et(e,t,s,x,l,v.normal.values,T,!0),r.defined(C)){let i;let r=n.Cartesian3.fromArray(C,3*e,er),a=n.Cartesian3.fromArray(C,3*t,ea),o=n.Cartesian3.fromArray(C,3*s,es);n.Cartesian3.multiplyByScalar(r,x.x,r),n.Cartesian3.multiplyByScalar(a,x.y,a),n.Cartesian3.multiplyByScalar(o,x.z,o),n.Cartesian3.equals(r,n.Cartesian3.ZERO)&&n.Cartesian3.equals(a,n.Cartesian3.ZERO)&&n.Cartesian3.equals(o,n.Cartesian3.ZERO)?((i=er).x=0,i.y=0,i.z=0):(i=n.Cartesian3.add(r,a,r),n.Cartesian3.add(i,o,i),n.Cartesian3.normalize(i,i)),n.Cartesian3.pack(i,v.extrudeDirection.values,3*T)}if(r.defined(h)&&en(e,t,s,x,h,v.applyOffset.values,T),r.defined(p)&&et(e,t,s,x,p,v.tangent.values,T,!0),r.defined(d)&&et(e,t,s,x,d,v.bitangent.values,T,!0),r.defined(f)&&ei(e,t,s,x,f,v.st.values,T),g>0)for(let i=0;i<g;i++){let n=b[i];!function(e,t,i,n,r,a,s){let o=a.componentsPerAttribute,u=a.values,l=s.values;switch(o){case 4:ee(e,t,i,n,u,l,r,!1);break;case 3:et(e,t,i,n,u,l,r,!1);break;case 2:ei(e,t,i,n,u,l,r,!1);break;default:l[r]=u[e]*n.x+u[t]*n.y+u[i]*n.z}}(e,t,s,x,T,A[n],v[n])}}}function el(e,t,i,n,r,a){let s=e.position.values.length/3;if(-1!==r){let o=n[r],u=i[o];return -1===u?(i[o]=s,e.position.values.push(a.x,a.y,a.z),t.push(s),s):(t.push(u),u)}return e.position.values.push(a.x,a.y,a.z),t.push(s),s}let ep={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function ed(e){let t,i,s,o,u;let l=e.geometry,p=l.attributes,d=p.position.values,f=r.defined(p.normal)?p.normal.values:void 0,y=r.defined(p.bitangent)?p.bitangent.values:void 0,c=r.defined(p.tangent)?p.tangent.values:void 0,m=r.defined(p.st)?p.st.values:void 0,C=r.defined(p.extrudeDirection)?p.extrudeDirection.values:void 0,h=r.defined(p.applyOffset)?p.applyOffset.values:void 0,v=l.indices,b=[];for(let e in p)p.hasOwnProperty(e)&&!ep[e]&&r.defined(p[e])&&b.push(e);let g=b.length,A=K(l),T=K(l),x=[];x.length=d.length/3;let P=[];for(P.length=d.length/3,u=0;u<x.length;++u)x[u]=-1,P[u]=-1;let w=v.length;for(u=0;u<w;u+=3){let e=v[u],l=v[u+1],w=v[u+2],S=n.Cartesian3.fromArray(d,3*e),I=n.Cartesian3.fromArray(d,3*l),O=n.Cartesian3.fromArray(d,3*w),E=function(e,t,i){let n;if(e.x>=0||t.x>=0||i.x>=0)return;!function(e,t,i){let n;if(0!==e.y&&0!==t.y&&0!==i.y)return q(e,e.y<0),q(t,t.y<0),void q(i,i.y<0);let r=Math.abs(e.y),s=Math.abs(t.y),o=Math.abs(i.y);n=r>s?r>o?a.CesiumMath.sign(e.y):a.CesiumMath.sign(i.y):s>o?a.CesiumMath.sign(t.y):a.CesiumMath.sign(i.y);let u=n<0;q(e,u),q(t,u),q(i,u)}(e,t,i);let r=e.y<0,s=t.y<0,o=i.y<0;n=0+((r?1:0)+(s?1:0)+(o?1:0));let u=j.indices;1===n?(u[1]=3,u[2]=4,u[5]=6,u[7]=6,u[8]=5,r?(Y(e,t,Z,W),Y(e,i,H,X),u[0]=0,u[3]=1,u[4]=2,u[6]=1):s?(Y(t,i,Z,W),Y(t,e,H,X),u[0]=1,u[3]=2,u[4]=0,u[6]=2):o&&(Y(i,e,Z,W),Y(i,t,H,X),u[0]=2,u[3]=0,u[4]=1,u[6]=0)):2===n&&(u[2]=4,u[4]=4,u[5]=3,u[7]=5,u[8]=6,r?s?o||(Y(i,e,Z,W),Y(i,t,H,X),u[0]=0,u[1]=1,u[3]=0,u[6]=2):(Y(t,i,Z,W),Y(t,e,H,X),u[0]=2,u[1]=0,u[3]=2,u[6]=1):(Y(e,t,Z,W),Y(e,i,H,X),u[0]=1,u[1]=2,u[3]=1,u[6]=0));let l=j.positions;return l[0]=e,l[1]=t,l[2]=i,l.length=3,1!==n&&2!==n||(l[3]=Z,l[4]=H,l[5]=W,l[6]=X,l.length=7),j}(S,I,O);if(r.defined(E)&&E.positions.length>3){let n=E.positions,r=E.indices,a=r.length;for(let S=0;S<a;++S){let a=r[S],I=n[a];I.y<0?(t=T.attributes,i=T.indices,s=x):(t=A.attributes,i=A.indices,s=P),o=el(t,i,s,v,a<3?u+a:-1,I),eu(e,l,w,I,d,f,c,y,m,C,h,t,b,g,p,o)}}else r.defined(E)&&(S=E.positions[0],I=E.positions[1],O=E.positions[2]),S.y<0?(t=T.attributes,i=T.indices,s=x):(t=A.attributes,i=A.indices,s=P),o=el(t,i,s,v,u,S),eu(e,l,w,S,d,f,c,y,m,C,h,t,b,g,p,o),o=el(t,i,s,v,u+1,I),eu(e,l,w,I,d,f,c,y,m,C,h,t,b,g,p,o),o=el(t,i,s,v,u+2,O),eu(e,l,w,O,d,f,c,y,m,C,h,t,b,g,p,o)}Q(e,T,A)}let ef=f.Plane.fromPointNormal(n.Cartesian3.ZERO,n.Cartesian3.UNIT_Y),ey=new n.Cartesian3,ec=new n.Cartesian3;function em(e,t,i,s,o,u,l){if(!r.defined(l))return;let p=n.Cartesian3.fromArray(s,3*e,er);n.Cartesian3.equalsEpsilon(p,i,a.CesiumMath.EPSILON10)?u.applyOffset.values[o]=l[e]:u.applyOffset.values[o]=l[t]}function eC(e){let t;let i=e.geometry,s=i.attributes,o=s.position.values,u=r.defined(s.applyOffset)?s.applyOffset.values:void 0,l=i.indices,p=K(i),f=K(i),y=l.length,c=[];c.length=o.length/3;let m=[];for(m.length=o.length/3,t=0;t<c.length;++t)c[t]=-1,m[t]=-1;for(t=0;t<y;t+=2){let e;let i=l[t],s=l[t+1],y=n.Cartesian3.fromArray(o,3*i,er),C=n.Cartesian3.fromArray(o,3*s,ea);Math.abs(y.y)<a.CesiumMath.EPSILON6&&(y.y<0?y.y=-a.CesiumMath.EPSILON6:y.y=a.CesiumMath.EPSILON6),Math.abs(C.y)<a.CesiumMath.EPSILON6&&(C.y<0?C.y=-a.CesiumMath.EPSILON6:C.y=a.CesiumMath.EPSILON6);let h=p.attributes,v=p.indices,b=m,g=f.attributes,A=f.indices,T=c,x=d.IntersectionTests.lineSegmentPlane(y,C,ef,es);if(r.defined(x)){let r=n.Cartesian3.multiplyByScalar(n.Cartesian3.UNIT_Y,5*a.CesiumMath.EPSILON9,ey);y.y<0&&(n.Cartesian3.negate(r,r),h=f.attributes,v=f.indices,b=c,g=p.attributes,A=p.indices,T=m);let d=n.Cartesian3.add(x,r,ec);e=el(h,v,b,l,t,y),em(i,s,y,o,e,h,u),e=el(h,v,b,l,-1,d),em(i,s,d,o,e,h,u),n.Cartesian3.negate(r,r),n.Cartesian3.add(x,r,d),e=el(g,A,T,l,-1,d),em(i,s,d,o,e,g,u),e=el(g,A,T,l,t+1,C),em(i,s,C,o,e,g,u)}else{let n,r,a;y.y<0?(n=f.attributes,r=f.indices,a=c):(n=p.attributes,r=p.indices,a=m),e=el(n,r,a,l,t,y),em(i,s,y,o,e,n,u),e=el(n,r,a,l,t+1,C),em(i,s,C,o,e,n,u)}}Q(e,f,p)}let eh=new i.Cartesian2,ev=new i.Cartesian2,eb=new n.Cartesian3,eg=new n.Cartesian3,eA=new n.Cartesian3,eT=new n.Cartesian3,ex=new n.Cartesian3,eP=new n.Cartesian3,ew=new i.Cartesian4;function eS(e){let t=e.attributes,i=t.position.values,r=t.prevPosition.values,a=t.nextPosition.values,s=i.length;for(let e=0;e<s;e+=3){let t=n.Cartesian3.unpack(i,e,eb);if(t.x>0)continue;let o=n.Cartesian3.unpack(r,e,eg);(t.y<0&&o.y>0||t.y>0&&o.y<0)&&(e-3>0?(r[e]=i[e-3],r[e+1]=i[e-2],r[e+2]=i[e-1]):n.Cartesian3.pack(t,r,e));let u=n.Cartesian3.unpack(a,e,eA);(t.y<0&&u.y>0||t.y>0&&u.y<0)&&(e+3<s?(a[e]=i[e+3],a[e+1]=i[e+4],a[e+2]=i[e+5]):n.Cartesian3.pack(t,a,e))}}let eI=5*a.CesiumMath.EPSILON9,eO=a.CesiumMath.EPSILON6;h.splitLongitude=function(e){let t=e.geometry,o=t.boundingSphere;if(r.defined(o)&&(o.center.x-o.radius>0||s.BoundingSphere.intersectPlane(o,f.Plane.ORIGIN_ZX_PLANE)!==s.Intersect.INTERSECTING))return e;if(t.geometryType!==l.GeometryType.NONE)switch(t.geometryType){case l.GeometryType.POLYLINES:!function(e){let t=e.geometry,s=t.attributes,o=s.position.values,u=s.prevPosition.values,l=s.nextPosition.values,p=s.expandAndWidth.values,f=r.defined(s.st)?s.st.values:void 0,y=r.defined(s.color)?s.color.values:void 0,c=K(t),m=K(t),C,h,v,b=!1,g=o.length/3;for(C=0;C<g;C+=4){let e=C,t=C+2,s=n.Cartesian3.fromArray(o,3*e,eb),g=n.Cartesian3.fromArray(o,3*t,eg);if(Math.abs(s.y)<eO)for(s.y=eO*(g.y<0?-1:1),o[3*C+1]=s.y,o[3*(C+1)+1]=s.y,h=3*e;h<3*e+12;h+=3)u[h]=o[3*C],u[h+1]=o[3*C+1],u[h+2]=o[3*C+2];if(Math.abs(g.y)<eO)for(g.y=eO*(s.y<0?-1:1),o[3*(C+2)+1]=g.y,o[3*(C+3)+1]=g.y,h=3*e;h<3*e+12;h+=3)l[h]=o[3*(C+2)],l[h+1]=o[3*(C+2)+1],l[h+2]=o[3*(C+2)+2];let A=c.attributes,T=c.indices,x=m.attributes,P=m.indices,w=d.IntersectionTests.lineSegmentPlane(s,g,ef,eT);if(r.defined(w)){b=!0;let o=n.Cartesian3.multiplyByScalar(n.Cartesian3.UNIT_Y,eI,ex);s.y<0&&(n.Cartesian3.negate(o,o),A=m.attributes,T=m.indices,x=c.attributes,P=c.indices);let d=n.Cartesian3.add(w,o,eP);A.position.values.push(s.x,s.y,s.z,s.x,s.y,s.z),A.position.values.push(d.x,d.y,d.z),A.position.values.push(d.x,d.y,d.z),A.prevPosition.values.push(u[3*e],u[3*e+1],u[3*e+2]),A.prevPosition.values.push(u[3*e+3],u[3*e+4],u[3*e+5]),A.prevPosition.values.push(s.x,s.y,s.z,s.x,s.y,s.z),A.nextPosition.values.push(d.x,d.y,d.z),A.nextPosition.values.push(d.x,d.y,d.z),A.nextPosition.values.push(d.x,d.y,d.z),A.nextPosition.values.push(d.x,d.y,d.z),n.Cartesian3.negate(o,o),n.Cartesian3.add(w,o,d),x.position.values.push(d.x,d.y,d.z),x.position.values.push(d.x,d.y,d.z),x.position.values.push(g.x,g.y,g.z,g.x,g.y,g.z),x.prevPosition.values.push(d.x,d.y,d.z),x.prevPosition.values.push(d.x,d.y,d.z),x.prevPosition.values.push(d.x,d.y,d.z),x.prevPosition.values.push(d.x,d.y,d.z),x.nextPosition.values.push(g.x,g.y,g.z,g.x,g.y,g.z),x.nextPosition.values.push(l[3*t],l[3*t+1],l[3*t+2]),x.nextPosition.values.push(l[3*t+3],l[3*t+4],l[3*t+5]);let S=i.Cartesian2.fromArray(p,2*e,eh),I=Math.abs(S.y);A.expandAndWidth.values.push(-1,I,1,I),A.expandAndWidth.values.push(-1,-I,1,-I),x.expandAndWidth.values.push(-1,I,1,I),x.expandAndWidth.values.push(-1,-I,1,-I);let O=n.Cartesian3.magnitudeSquared(n.Cartesian3.subtract(w,s,eA));if(O/=n.Cartesian3.magnitudeSquared(n.Cartesian3.subtract(g,s,eA)),r.defined(y)){let n=i.Cartesian4.fromArray(y,4*e,ew),r=i.Cartesian4.fromArray(y,4*t,ew),s=a.CesiumMath.lerp(n.x,r.x,O),o=a.CesiumMath.lerp(n.y,r.y,O),u=a.CesiumMath.lerp(n.z,r.z,O),l=a.CesiumMath.lerp(n.w,r.w,O);for(h=4*e;h<4*e+8;++h)A.color.values.push(y[h]);for(A.color.values.push(s,o,u,l),A.color.values.push(s,o,u,l),x.color.values.push(s,o,u,l),x.color.values.push(s,o,u,l),h=4*t;h<4*t+8;++h)x.color.values.push(y[h])}if(r.defined(f)){let n=i.Cartesian2.fromArray(f,2*e,eh),r=i.Cartesian2.fromArray(f,2*(C+3),ev),s=a.CesiumMath.lerp(n.x,r.x,O);for(h=2*e;h<2*e+4;++h)A.st.values.push(f[h]);for(A.st.values.push(s,n.y),A.st.values.push(s,r.y),x.st.values.push(s,n.y),x.st.values.push(s,r.y),h=2*t;h<2*t+4;++h)x.st.values.push(f[h])}v=A.position.values.length/3-4,T.push(v,v+2,v+1),T.push(v+1,v+2,v+3),v=x.position.values.length/3-4,P.push(v,v+2,v+1),P.push(v+1,v+2,v+3)}else{let e,t;for(s.y<0?(e=m.attributes,t=m.indices):(e=c.attributes,t=c.indices),e.position.values.push(s.x,s.y,s.z),e.position.values.push(s.x,s.y,s.z),e.position.values.push(g.x,g.y,g.z),e.position.values.push(g.x,g.y,g.z),h=3*C;h<3*C+12;++h)e.prevPosition.values.push(u[h]),e.nextPosition.values.push(l[h]);for(h=2*C;h<2*C+8;++h)e.expandAndWidth.values.push(p[h]),r.defined(f)&&e.st.values.push(f[h]);if(r.defined(y))for(h=4*C;h<4*C+16;++h)e.color.values.push(y[h]);v=e.position.values.length/3-4,t.push(v,v+2,v+1),t.push(v+1,v+2,v+3)}}b&&(eS(m),eS(c)),Q(e,m,c)}(e);break;case l.GeometryType.TRIANGLES:ed(e);break;case l.GeometryType.LINES:eC(e)}else(function(e){switch(e.primitiveType){case l.PrimitiveType.TRIANGLE_FAN:return function(e){let t=l.Geometry.computeNumberOfVertices(e),i=p.IndexDatatype.createTypedArray(t,3*(t-2));i[0]=1,i[1]=0,i[2]=2;let n=3;for(let e=3;e<t;++e)i[n++]=e-1,i[n++]=0,i[n++]=e;e.indices=i,e.primitiveType=l.PrimitiveType.TRIANGLES}(e);case l.PrimitiveType.TRIANGLE_STRIP:return function(e){let t=l.Geometry.computeNumberOfVertices(e),i=p.IndexDatatype.createTypedArray(t,3*(t-2));i[0]=0,i[1]=1,i[2]=2,t>3&&(i[3]=0,i[4]=2,i[5]=3);let n=6;for(let e=3;e<t-1;e+=2)i[n++]=e,i[n++]=e-1,i[n++]=e+1,e+2<t&&(i[n++]=e,i[n++]=e+1,i[n++]=e+2);e.indices=i,e.primitiveType=l.PrimitiveType.TRIANGLES}(e);case l.PrimitiveType.TRIANGLES:return function(e){if(r.defined(e.indices))return;let t=l.Geometry.computeNumberOfVertices(e),i=p.IndexDatatype.createTypedArray(t,t);for(let e=0;e<t;++e)i[e]=e;e.indices=i}(e);case l.PrimitiveType.LINE_STRIP:return function(e){let t=l.Geometry.computeNumberOfVertices(e),i=p.IndexDatatype.createTypedArray(t,2*(t-1));i[0]=0,i[1]=1;let n=2;for(let e=2;e<t;++e)i[n++]=e-1,i[n++]=e;e.indices=i,e.primitiveType=l.PrimitiveType.LINES}(e);case l.PrimitiveType.LINE_LOOP:return function(e){let t=l.Geometry.computeNumberOfVertices(e),i=p.IndexDatatype.createTypedArray(t,2*t);i[0]=0,i[1]=1;let n=2;for(let e=2;e<t;++e)i[n++]=e-1,i[n++]=e;i[n++]=t-1,i[n]=0,e.indices=i,e.primitiveType=l.PrimitiveType.LINES}(e);case l.PrimitiveType.LINES:return function(e){if(r.defined(e.indices))return;let t=l.Geometry.computeNumberOfVertices(e),i=p.IndexDatatype.createTypedArray(t,t);for(let e=0;e<t;++e)i[e]=e;e.indices=i}(e)}})(t),t.primitiveType===l.PrimitiveType.TRIANGLES?ed(e):t.primitiveType===l.PrimitiveType.LINES&&eC(e);return e},e.GeometryPipeline=h});