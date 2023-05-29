define(["exports","./Transforms-f17097e5","./Matrix3-b2351961","./ComponentDatatype-ab629b88","./defaultValue-f6d5e6da","./GeometryAttribute-9c1a6bab","./GeometryAttributes-1e4ddcd2","./GeometryOffsetAttribute-2579b8d2","./IndexDatatype-a9b1bc18","./Math-355606c6"],function(t,i,e,a,n,o,r,s,u,m){"use strict";let l=new e.Cartesian3(1,1,1),f=Math.cos,d=Math.sin;function c(t){t=n.defaultValue(t,n.defaultValue.EMPTY_OBJECT);let i=n.defaultValue(t.radii,l),a=n.defaultValue(t.innerRadii,i),o=n.defaultValue(t.minimumClock,0),r=n.defaultValue(t.maximumClock,m.CesiumMath.TWO_PI),s=n.defaultValue(t.minimumCone,0),u=n.defaultValue(t.maximumCone,m.CesiumMath.PI),f=Math.round(n.defaultValue(t.stackPartitions,10)),d=Math.round(n.defaultValue(t.slicePartitions,8)),c=Math.round(n.defaultValue(t.subdivisions,128));this._radii=e.Cartesian3.clone(i),this._innerRadii=e.Cartesian3.clone(a),this._minimumClock=o,this._maximumClock=r,this._minimumCone=s,this._maximumCone=u,this._stackPartitions=f,this._slicePartitions=d,this._subdivisions=c,this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidOutlineGeometry"}c.packedLength=2*e.Cartesian3.packedLength+8,c.pack=function(t,i,a){return a=n.defaultValue(a,0),e.Cartesian3.pack(t._radii,i,a),a+=e.Cartesian3.packedLength,e.Cartesian3.pack(t._innerRadii,i,a),a+=e.Cartesian3.packedLength,i[a++]=t._minimumClock,i[a++]=t._maximumClock,i[a++]=t._minimumCone,i[a++]=t._maximumCone,i[a++]=t._stackPartitions,i[a++]=t._slicePartitions,i[a++]=t._subdivisions,i[a]=n.defaultValue(t._offsetAttribute,-1),i};let C=new e.Cartesian3,_=new e.Cartesian3,p={radii:C,innerRadii:_,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,subdivisions:void 0,offsetAttribute:void 0};c.unpack=function(t,i,a){i=n.defaultValue(i,0);let o=e.Cartesian3.unpack(t,i,C);i+=e.Cartesian3.packedLength;let r=e.Cartesian3.unpack(t,i,_);i+=e.Cartesian3.packedLength;let s=t[i++],u=t[i++],m=t[i++],l=t[i++],f=t[i++],d=t[i++],h=t[i++],b=t[i];return n.defined(a)?(a._radii=e.Cartesian3.clone(o,a._radii),a._innerRadii=e.Cartesian3.clone(r,a._innerRadii),a._minimumClock=s,a._maximumClock=u,a._minimumCone=m,a._maximumCone=l,a._stackPartitions=f,a._slicePartitions=d,a._subdivisions=h,a._offsetAttribute=-1===b?void 0:b,a):(p.minimumClock=s,p.maximumClock=u,p.minimumCone=m,p.maximumCone=l,p.stackPartitions=f,p.slicePartitions=d,p.subdivisions=h,p.offsetAttribute=-1===b?void 0:b,new c(p))},c.createGeometry=function(t){let l=t._radii;if(l.x<=0||l.y<=0||l.z<=0)return;let c=t._innerRadii;if(c.x<=0||c.y<=0||c.z<=0)return;let C=t._minimumClock,_=t._maximumClock,p=t._minimumCone,h=t._maximumCone,b=t._subdivisions,y=e.Ellipsoid.fromCartesian3(l),k=t._slicePartitions+1,x=t._stackPartitions+1;k=Math.round(k*Math.abs(_-C)/m.CesiumMath.TWO_PI),x=Math.round(x*Math.abs(h-p)/m.CesiumMath.PI),k<2&&(k=2),x<2&&(x=2);let A=0,P=1,v=c.x!==l.x||c.y!==l.y||c.z!==l.z,M=!1,V=!1;v&&(P=2,p>0&&(M=!0,A+=k),h<Math.PI&&(V=!0,A+=k));let g=b*P*(x+k),G=new Float64Array(3*g),w=2*(g+A-(k+x)*P),E=u.IndexDatatype.createTypedArray(g,w),O,D,I,T,z=0,L=Array(x),R=Array(x);for(O=0;O<x;O++)T=p+O*(h-p)/(x-1),L[O]=d(T),R[O]=f(T);let N=Array(b),B=Array(b);for(O=0;O<b;O++)I=C+O*(_-C)/(b-1),N[O]=d(I),B[O]=f(I);for(O=0;O<x;O++)for(D=0;D<b;D++)G[z++]=l.x*L[O]*B[D],G[z++]=l.y*L[O]*N[D],G[z++]=l.z*R[O];if(v)for(O=0;O<x;O++)for(D=0;D<b;D++)G[z++]=c.x*L[O]*B[D],G[z++]=c.y*L[O]*N[D],G[z++]=c.z*R[O];for(L.length=b,R.length=b,O=0;O<b;O++)T=p+O*(h-p)/(b-1),L[O]=d(T),R[O]=f(T);for(N.length=k,B.length=k,O=0;O<k;O++)I=C+O*(_-C)/(k-1),N[O]=d(I),B[O]=f(I);for(O=0;O<b;O++)for(D=0;D<k;D++)G[z++]=l.x*L[O]*B[D],G[z++]=l.y*L[O]*N[D],G[z++]=l.z*R[O];if(v)for(O=0;O<b;O++)for(D=0;D<k;D++)G[z++]=c.x*L[O]*B[D],G[z++]=c.y*L[O]*N[D],G[z++]=c.z*R[O];for(z=0,O=0;O<x*P;O++){let t=O*b;for(D=0;D<b-1;D++)E[z++]=t+D,E[z++]=t+D+1}let S=x*b*P;for(O=0;O<k;O++)for(D=0;D<b-1;D++)E[z++]=S+O+D*k,E[z++]=S+O+(D+1)*k;if(v)for(S=x*b*P+k*b,O=0;O<k;O++)for(D=0;D<b-1;D++)E[z++]=S+O+D*k,E[z++]=S+O+(D+1)*k;if(v){let t=x*b*P,i=t+b*k;if(M)for(O=0;O<k;O++)E[z++]=t+O,E[z++]=i+O;if(V)for(t+=b*k-k,i+=b*k-k,O=0;O<k;O++)E[z++]=t+O,E[z++]=i+O}let U=new r.GeometryAttributes({position:new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:G})});if(n.defined(t._offsetAttribute)){let i=G.length,e=t._offsetAttribute===s.GeometryOffsetAttribute.NONE?0:1,n=new Uint8Array(i/3).fill(e);U.applyOffset=new o.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new o.Geometry({attributes:U,indices:E,primitiveType:o.PrimitiveType.LINES,boundingSphere:i.BoundingSphere.fromEllipsoid(y),offsetAttribute:t._offsetAttribute})},t.EllipsoidOutlineGeometry=c});