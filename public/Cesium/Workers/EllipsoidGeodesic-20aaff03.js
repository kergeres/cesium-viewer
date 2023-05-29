define(["exports","./Matrix3-b2351961","./defaultValue-f6d5e6da","./Math-355606c6"],function(t,a,i,e){"use strict";function n(t,a,i,e,n,s,h){let r=t*i*(4+t*(4-3*i))/16;return(1-r)*t*a*(e+r*n*(h+r*s*(2*h*h-1)))}let s=new a.Cartesian3,h=new a.Cartesian3;function r(t,i,r,o){a.Cartesian3.normalize(o.cartographicToCartesian(i,h),s),a.Cartesian3.normalize(o.cartographicToCartesian(r,h),h),function(t,a,i,s,h,r,o){let d=(a-i)/a,u=r-s,c=Math.atan((1-d)*Math.tan(h)),l=Math.atan((1-d)*Math.tan(o)),M=Math.cos(c),g=Math.sin(c),_=Math.cos(l),p=Math.sin(l),f=M*_,m=M*p,H=g*p,C=g*_,v,O,S,q,U,A=u,b=e.CesiumMath.TWO_PI,w=Math.cos(A),R=Math.sin(A);do{let t;w=Math.cos(A),R=Math.sin(A);let a=m-C*w;v=Math.atan2(S=Math.sqrt(_*_*R*R+a*a),O=H+f*w),0===S?(t=0,q=1):q=1-(t=f*R/S)*t,b=A,isFinite(U=O-2*H/q)||(U=0),A=u+n(d,t,q,v,S,O,U)}while(Math.abs(A-b)>e.CesiumMath.EPSILON12);let x=q*(a*a-i*i)/(i*i),y=x*(256+x*(x*(74-47*x)-128))/1024,E=U*U,P=i*(1+x*(4096+x*(x*(320-175*x)-768))/16384)*(v-y*S*(U+y*(O*(2*E-1)-y*U*(4*S*S-3)*(4*E-3)/6)/4)),D=Math.atan2(_*R,m-C*w),T=Math.atan2(M*R,m*w-C);t._distance=P,t._startHeading=D,t._endHeading=T,t._uSquared=x}(t,o.maximumRadius,o.minimumRadius,i.longitude,i.latitude,r.longitude,r.latitude),t._start=a.Cartographic.clone(i,t._start),t._end=a.Cartographic.clone(r,t._end),t._start.height=0,t._end.height=0,function(t){let a=t._uSquared,i=t._ellipsoid.maximumRadius,e=t._ellipsoid.minimumRadius,n=(i-e)/i,s=Math.cos(t._startHeading),h=Math.sin(t._startHeading),r=(1-n)*Math.tan(t._start.latitude),o=1/Math.sqrt(1+r*r),d=Math.atan2(r,s),u=o*h,c=u*u,l=1-c,M=a/4,g=M*M,_=g*M,p=g*g,f=1+M-3*g/4+5*_/4-175*p/64,m=1-M+15*g/8-35*_/8,H=1-3*M+35*g/4,C=1-5*M,v=t._constants;v.a=i,v.b=e,v.f=n,v.cosineHeading=s,v.sineHeading=h,v.tanU=r,v.cosineU=o,v.sineU=o*r,v.sigma=d,v.sineAlpha=u,v.sineSquaredAlpha=c,v.cosineSquaredAlpha=l,v.cosineAlpha=Math.sqrt(l),v.u2Over4=M,v.u4Over16=g,v.u6Over64=_,v.u8Over256=p,v.a0=f,v.a1=m,v.a2=H,v.a3=C,v.distanceRatio=f*d-m*Math.sin(2*d)*M/2-H*Math.sin(4*d)*g/16-C*Math.sin(6*d)*_/48-5*Math.sin(8*d)*p/512}(t)}function o(t,e,n){let s=i.defaultValue(n,a.Ellipsoid.WGS84);this._ellipsoid=s,this._start=new a.Cartographic,this._end=new a.Cartographic,this._constants={},this._startHeading=void 0,this._endHeading=void 0,this._distance=void 0,this._uSquared=void 0,i.defined(t)&&i.defined(e)&&r(this,t,e,s)}Object.defineProperties(o.prototype,{ellipsoid:{get:function(){return this._ellipsoid}},surfaceDistance:{get:function(){return this._distance}},start:{get:function(){return this._start}},end:{get:function(){return this._end}},startHeading:{get:function(){return this._startHeading}},endHeading:{get:function(){return this._endHeading}}}),o.prototype.setEndPoints=function(t,a){r(this,t,a,this._ellipsoid)},o.prototype.interpolateUsingFraction=function(t,a){return this.interpolateUsingSurfaceDistance(this._distance*t,a)},o.prototype.interpolateUsingSurfaceDistance=function(t,e){let s=this._constants,h=s.distanceRatio+t/s.b,r=Math.cos(2*h),o=Math.sin(2*h),d=Math.sin(4*h),u=h*h,c=s.u8Over256,l=s.u2Over4,M=s.u6Over64,g=s.u4Over16,_=2*(h*u)*c*r/3+h*(1-l+7*g/4-15*M/4+579*c/64-(g-15*M/4+187*c/16)*r-(5*M/4-115*c/16)*Math.cos(4*h)-29*c*Math.cos(6*h)/16)+(l/2-g+71*M/32-85*c/16)*o+(5*g/16-5*M/4+383*c/96)*d-u*((M-11*c/2)*o+5*c*d/2)+(29*M/96-29*c/16)*Math.sin(6*h)+539*c*Math.sin(8*h)/1536,p=Math.asin(Math.sin(_)*s.cosineAlpha),f=Math.atan(s.a/s.b*Math.tan(p));_-=s.sigma;let m=Math.cos(2*s.sigma+_),H=Math.sin(_),C=Math.cos(_),v=s.cosineU*C,O=s.sineU*H,S=Math.atan2(H*s.sineHeading,v-O*s.cosineHeading)-n(s.f,s.sineAlpha,s.cosineSquaredAlpha,_,H,C,m);return i.defined(e)?(e.longitude=this._start.longitude+S,e.latitude=f,e.height=0,e):new a.Cartographic(this._start.longitude+S,f,0)},t.EllipsoidGeodesic=o});