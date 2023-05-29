define(["exports","./Matrix3-b2351961","./defaultValue-f6d5e6da","./Math-355606c6","./RuntimeError-9b4ce3fb"],function(t,e,n,a,u){"use strict";function r(t,e,a,u){this.x=n.defaultValue(t,0),this.y=n.defaultValue(e,0),this.z=n.defaultValue(a,0),this.w=n.defaultValue(u,0)}r.fromElements=function(t,e,a,u,i){return n.defined(i)?(i.x=t,i.y=e,i.z=a,i.w=u,i):new r(t,e,a,u)},r.fromColor=function(t,e){return n.defined(e)?(e.x=t.red,e.y=t.green,e.z=t.blue,e.w=t.alpha,e):new r(t.red,t.green,t.blue,t.alpha)},r.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e):new r(t.x,t.y,t.z,t.w)},r.packedLength=4,r.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t.x,e[a++]=t.y,e[a++]=t.z,e[a]=t.w,e},r.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new r),a.x=t[e++],a.y=t[e++],a.z=t[e++],a.w=t[e],a},r.packArray=function(t,e){let a=t.length,u=4*a;n.defined(e)?(Array.isArray(e)||e.length===u)&&e.length!==u&&(e.length=u):e=Array(u);for(let n=0;n<a;++n)r.pack(t[n],e,4*n);return e},r.unpackArray=function(t,e){let a=t.length;n.defined(e)?e.length=a/4:e=Array(a/4);for(let n=0;n<a;n+=4){let a=n/4;e[a]=r.unpack(t,n,e[a])}return e},r.fromArray=r.unpack,r.maximumComponent=function(t){return Math.max(t.x,t.y,t.z,t.w)},r.minimumComponent=function(t){return Math.min(t.x,t.y,t.z,t.w)},r.minimumByComponent=function(t,e,n){return n.x=Math.min(t.x,e.x),n.y=Math.min(t.y,e.y),n.z=Math.min(t.z,e.z),n.w=Math.min(t.w,e.w),n},r.maximumByComponent=function(t,e,n){return n.x=Math.max(t.x,e.x),n.y=Math.max(t.y,e.y),n.z=Math.max(t.z,e.z),n.w=Math.max(t.w,e.w),n},r.clamp=function(t,e,n,u){let r=a.CesiumMath.clamp(t.x,e.x,n.x),i=a.CesiumMath.clamp(t.y,e.y,n.y),o=a.CesiumMath.clamp(t.z,e.z,n.z),l=a.CesiumMath.clamp(t.w,e.w,n.w);return u.x=r,u.y=i,u.z=o,u.w=l,u},r.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w},r.magnitude=function(t){return Math.sqrt(r.magnitudeSquared(t))};let i=new r;r.distance=function(t,e){return r.subtract(t,e,i),r.magnitude(i)},r.distanceSquared=function(t,e){return r.subtract(t,e,i),r.magnitudeSquared(i)},r.normalize=function(t,e){let n=r.magnitude(t);return e.x=t.x/n,e.y=t.y/n,e.z=t.z/n,e.w=t.w/n,e},r.dot=function(t,e){return t.x*e.x+t.y*e.y+t.z*e.z+t.w*e.w},r.multiplyComponents=function(t,e,n){return n.x=t.x*e.x,n.y=t.y*e.y,n.z=t.z*e.z,n.w=t.w*e.w,n},r.divideComponents=function(t,e,n){return n.x=t.x/e.x,n.y=t.y/e.y,n.z=t.z/e.z,n.w=t.w/e.w,n},r.add=function(t,e,n){return n.x=t.x+e.x,n.y=t.y+e.y,n.z=t.z+e.z,n.w=t.w+e.w,n},r.subtract=function(t,e,n){return n.x=t.x-e.x,n.y=t.y-e.y,n.z=t.z-e.z,n.w=t.w-e.w,n},r.multiplyByScalar=function(t,e,n){return n.x=t.x*e,n.y=t.y*e,n.z=t.z*e,n.w=t.w*e,n},r.divideByScalar=function(t,e,n){return n.x=t.x/e,n.y=t.y/e,n.z=t.z/e,n.w=t.w/e,n},r.negate=function(t,e){return e.x=-t.x,e.y=-t.y,e.z=-t.z,e.w=-t.w,e},r.abs=function(t,e){return e.x=Math.abs(t.x),e.y=Math.abs(t.y),e.z=Math.abs(t.z),e.w=Math.abs(t.w),e};let o=new r;r.lerp=function(t,e,n,a){return r.multiplyByScalar(e,n,o),a=r.multiplyByScalar(t,1-n,a),r.add(o,a,a)};let l=new r;r.mostOrthogonalAxis=function(t,e){let n=r.normalize(t,l);return r.abs(n,n),e=n.x<=n.y?n.x<=n.z?n.x<=n.w?r.clone(r.UNIT_X,e):r.clone(r.UNIT_W,e):n.z<=n.w?r.clone(r.UNIT_Z,e):r.clone(r.UNIT_W,e):n.y<=n.z?n.y<=n.w?r.clone(r.UNIT_Y,e):r.clone(r.UNIT_W,e):n.z<=n.w?r.clone(r.UNIT_Z,e):r.clone(r.UNIT_W,e)},r.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w},r.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]&&t.z===e[n+2]&&t.w===e[n+3]},r.equalsEpsilon=function(t,e,u,r){return t===e||n.defined(t)&&n.defined(e)&&a.CesiumMath.equalsEpsilon(t.x,e.x,u,r)&&a.CesiumMath.equalsEpsilon(t.y,e.y,u,r)&&a.CesiumMath.equalsEpsilon(t.z,e.z,u,r)&&a.CesiumMath.equalsEpsilon(t.w,e.w,u,r)},r.ZERO=Object.freeze(new r(0,0,0,0)),r.ONE=Object.freeze(new r(1,1,1,1)),r.UNIT_X=Object.freeze(new r(1,0,0,0)),r.UNIT_Y=Object.freeze(new r(0,1,0,0)),r.UNIT_Z=Object.freeze(new r(0,0,1,0)),r.UNIT_W=Object.freeze(new r(0,0,0,1)),r.prototype.clone=function(t){return r.clone(this,t)},r.prototype.equals=function(t){return r.equals(this,t)},r.prototype.equalsEpsilon=function(t,e,n){return r.equalsEpsilon(this,t,e,n)},r.prototype.toString=function(){return`(${this.x}, ${this.y}, ${this.z}, ${this.w})`};let s=new Float32Array(1),f=new Uint8Array(s.buffer),c=new Uint32Array([287454020]),h=68===new Uint8Array(c.buffer)[0];function d(t,e,a,u,r,i,o,l,s,f,c,h,d,m,y,x){this[0]=n.defaultValue(t,0),this[1]=n.defaultValue(r,0),this[2]=n.defaultValue(s,0),this[3]=n.defaultValue(d,0),this[4]=n.defaultValue(e,0),this[5]=n.defaultValue(i,0),this[6]=n.defaultValue(f,0),this[7]=n.defaultValue(m,0),this[8]=n.defaultValue(a,0),this[9]=n.defaultValue(o,0),this[10]=n.defaultValue(c,0),this[11]=n.defaultValue(y,0),this[12]=n.defaultValue(u,0),this[13]=n.defaultValue(l,0),this[14]=n.defaultValue(h,0),this[15]=n.defaultValue(x,0)}r.packFloat=function(t,e){return n.defined(e)||(e=new r),s[0]=t,h?(e.x=f[0],e.y=f[1],e.z=f[2],e.w=f[3]):(e.x=f[3],e.y=f[2],e.z=f[1],e.w=f[0]),e},r.unpackFloat=function(t){return h?(f[0]=t.x,f[1]=t.y,f[2]=t.z,f[3]=t.w):(f[0]=t.w,f[1]=t.z,f[2]=t.y,f[3]=t.x),s[0]},d.packedLength=16,d.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t[0],e[a++]=t[1],e[a++]=t[2],e[a++]=t[3],e[a++]=t[4],e[a++]=t[5],e[a++]=t[6],e[a++]=t[7],e[a++]=t[8],e[a++]=t[9],e[a++]=t[10],e[a++]=t[11],e[a++]=t[12],e[a++]=t[13],e[a++]=t[14],e[a]=t[15],e},d.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new d),a[0]=t[e++],a[1]=t[e++],a[2]=t[e++],a[3]=t[e++],a[4]=t[e++],a[5]=t[e++],a[6]=t[e++],a[7]=t[e++],a[8]=t[e++],a[9]=t[e++],a[10]=t[e++],a[11]=t[e++],a[12]=t[e++],a[13]=t[e++],a[14]=t[e++],a[15]=t[e],a},d.packArray=function(t,e){let a=t.length,u=16*a;n.defined(e)?(Array.isArray(e)||e.length===u)&&e.length!==u&&(e.length=u):e=Array(u);for(let n=0;n<a;++n)d.pack(t[n],e,16*n);return e},d.unpackArray=function(t,e){let a=t.length;n.defined(e)?e.length=a/16:e=Array(a/16);for(let n=0;n<a;n+=16){let a=n/16;e[a]=d.unpack(t,n,e[a])}return e},d.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e):new d(t[0],t[4],t[8],t[12],t[1],t[5],t[9],t[13],t[2],t[6],t[10],t[14],t[3],t[7],t[11],t[15])},d.fromArray=d.unpack,d.fromColumnMajorArray=function(t,e){return d.clone(t,e)},d.fromRowMajorArray=function(t,e){return n.defined(e)?(e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15],e):new d(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15])},d.fromRotationTranslation=function(t,a,u){return a=n.defaultValue(a,e.Cartesian3.ZERO),n.defined(u)?(u[0]=t[0],u[1]=t[1],u[2]=t[2],u[3]=0,u[4]=t[3],u[5]=t[4],u[6]=t[5],u[7]=0,u[8]=t[6],u[9]=t[7],u[10]=t[8],u[11]=0,u[12]=a.x,u[13]=a.y,u[14]=a.z,u[15]=1,u):new d(t[0],t[3],t[6],a.x,t[1],t[4],t[7],a.y,t[2],t[5],t[8],a.z,0,0,0,1)},d.fromTranslationQuaternionRotationScale=function(t,e,a,u){n.defined(u)||(u=new d);let r=a.x,i=a.y,o=a.z,l=e.x*e.x,s=e.x*e.y,f=e.x*e.z,c=e.x*e.w,h=e.y*e.y,m=e.y*e.z,y=e.y*e.w,x=e.z*e.z,w=e.z*e.w,M=e.w*e.w;return u[0]=(l-h-x+M)*r,u[1]=2*(s+w)*r,u[2]=2*(f-y)*r,u[3]=0,u[4]=2*(s-w)*i,u[5]=(-l+h-x+M)*i,u[6]=2*(m+c)*i,u[7]=0,u[8]=2*(f+y)*o,u[9]=2*(m-c)*o,u[10]=(-l-h+x+M)*o,u[11]=0,u[12]=t.x,u[13]=t.y,u[14]=t.z,u[15]=1,u},d.fromTranslationRotationScale=function(t,e){return d.fromTranslationQuaternionRotationScale(t.translation,t.rotation,t.scale,e)},d.fromTranslation=function(t,n){return d.fromRotationTranslation(e.Matrix3.IDENTITY,t,n)},d.fromScale=function(t,e){return n.defined(e)?(e[0]=t.x,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t.y,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t.z,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e):new d(t.x,0,0,0,0,t.y,0,0,0,0,t.z,0,0,0,0,1)},d.fromUniformScale=function(t,e){return n.defined(e)?(e[0]=t,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=t,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=t,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e):new d(t,0,0,0,0,t,0,0,0,0,t,0,0,0,0,1)},d.fromRotation=function(t,e){return n.defined(e)||(e=new d),e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=0,e[4]=t[3],e[5]=t[4],e[6]=t[5],e[7]=0,e[8]=t[6],e[9]=t[7],e[10]=t[8],e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};let m=new e.Cartesian3,y=new e.Cartesian3,x=new e.Cartesian3;d.fromCamera=function(t,a){let u=t.position,r=t.direction,i=t.up;e.Cartesian3.normalize(r,m),e.Cartesian3.normalize(e.Cartesian3.cross(m,i,y),y),e.Cartesian3.normalize(e.Cartesian3.cross(y,m,x),x);let o=y.x,l=y.y,s=y.z,f=m.x,c=m.y,h=m.z,w=x.x,M=x.y,p=x.z,g=u.x,C=u.y,z=u.z,b=-(o*g)+-(l*C)+-(s*z),O=-(w*g)+-(M*C)+-(p*z),V=f*g+c*C+h*z;return n.defined(a)?(a[0]=o,a[1]=w,a[2]=-f,a[3]=0,a[4]=l,a[5]=M,a[6]=-c,a[7]=0,a[8]=s,a[9]=p,a[10]=-h,a[11]=0,a[12]=b,a[13]=O,a[14]=V,a[15]=1,a):new d(o,l,s,b,w,M,p,O,-f,-c,-h,V,0,0,0,1)},d.computePerspectiveFieldOfView=function(t,e,n,a,u){let r=1/Math.tan(.5*t);return u[0]=r/e,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=r,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=(a+n)/(n-a),u[11]=-1,u[12]=0,u[13]=0,u[14]=2*a*n/(n-a),u[15]=0,u},d.computeOrthographicOffCenter=function(t,e,n,a,u,r,i){let o=1/(e-t),l=1/(a-n),s=1/(r-u),f=-(e+t)*o,c=-(a+n)*l,h=-(r+u)*s;return o*=2,l*=2,s*=-2,i[0]=o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=l,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=s,i[11]=0,i[12]=f,i[13]=c,i[14]=h,i[15]=1,i},d.computePerspectiveOffCenter=function(t,e,n,a,u,r,i){return i[0]=2*u/(e-t),i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*u/(a-n),i[6]=0,i[7]=0,i[8]=(e+t)/(e-t),i[9]=(a+n)/(a-n),i[10]=-(r+u)/(r-u),i[11]=-1,i[12]=0,i[13]=0,i[14]=-2*r*u/(r-u),i[15]=0,i},d.computeInfinitePerspectiveOffCenter=function(t,e,n,a,u,r){return r[0]=2*u/(e-t),r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=2*u/(a-n),r[6]=0,r[7]=0,r[8]=(e+t)/(e-t),r[9]=(a+n)/(a-n),r[10]=-1,r[11]=-1,r[12]=0,r[13]=0,r[14]=-2*u,r[15]=0,r},d.computeViewportTransformation=function(t,e,a,u){n.defined(u)||(u=new d),t=n.defaultValue(t,n.defaultValue.EMPTY_OBJECT);let r=n.defaultValue(t.x,0),i=n.defaultValue(t.y,0),o=n.defaultValue(t.width,0),l=n.defaultValue(t.height,0);e=n.defaultValue(e,0);let s=.5*o,f=.5*l,c=.5*((a=n.defaultValue(a,1))-e),h=e+c;return u[0]=s,u[1]=0,u[2]=0,u[3]=0,u[4]=0,u[5]=f,u[6]=0,u[7]=0,u[8]=0,u[9]=0,u[10]=c,u[11]=0,u[12]=r+s,u[13]=i+f,u[14]=h,u[15]=1,u},d.computeView=function(t,n,a,u,r){return r[0]=u.x,r[1]=a.x,r[2]=-n.x,r[3]=0,r[4]=u.y,r[5]=a.y,r[6]=-n.y,r[7]=0,r[8]=u.z,r[9]=a.z,r[10]=-n.z,r[11]=0,r[12]=-e.Cartesian3.dot(u,t),r[13]=-e.Cartesian3.dot(a,t),r[14]=e.Cartesian3.dot(n,t),r[15]=1,r},d.toArray=function(t,e){return n.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e):[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]},d.getElementIndex=function(t,e){return 4*t+e},d.getColumn=function(t,e,n){let a=4*e,u=t[a],r=t[a+1],i=t[a+2],o=t[a+3];return n.x=u,n.y=r,n.z=i,n.w=o,n},d.setColumn=function(t,e,n,a){let u=4*e;return(a=d.clone(t,a))[u]=n.x,a[u+1]=n.y,a[u+2]=n.z,a[u+3]=n.w,a},d.getRow=function(t,e,n){let a=t[e],u=t[e+4],r=t[e+8],i=t[e+12];return n.x=a,n.y=u,n.z=r,n.w=i,n},d.setRow=function(t,e,n,a){return(a=d.clone(t,a))[e]=n.x,a[e+4]=n.y,a[e+8]=n.z,a[e+12]=n.w,a},d.setTranslation=function(t,e,n){return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=t[15],n};let w=new e.Cartesian3;d.setScale=function(t,e,n){let a=d.getScale(t,w),u=e.x/a.x,r=e.y/a.y,i=e.z/a.z;return n[0]=t[0]*u,n[1]=t[1]*u,n[2]=t[2]*u,n[3]=t[3],n[4]=t[4]*r,n[5]=t[5]*r,n[6]=t[6]*r,n[7]=t[7],n[8]=t[8]*i,n[9]=t[9]*i,n[10]=t[10]*i,n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n};let M=new e.Cartesian3;d.setUniformScale=function(t,e,n){let a=d.getScale(t,M),u=e/a.x,r=e/a.y,i=e/a.z;return n[0]=t[0]*u,n[1]=t[1]*u,n[2]=t[2]*u,n[3]=t[3],n[4]=t[4]*r,n[5]=t[5]*r,n[6]=t[6]*r,n[7]=t[7],n[8]=t[8]*i,n[9]=t[9]*i,n[10]=t[10]*i,n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n};let p=new e.Cartesian3;d.getScale=function(t,n){return n.x=e.Cartesian3.magnitude(e.Cartesian3.fromElements(t[0],t[1],t[2],p)),n.y=e.Cartesian3.magnitude(e.Cartesian3.fromElements(t[4],t[5],t[6],p)),n.z=e.Cartesian3.magnitude(e.Cartesian3.fromElements(t[8],t[9],t[10],p)),n};let g=new e.Cartesian3;d.getMaximumScale=function(t){return d.getScale(t,g),e.Cartesian3.maximumComponent(g)};let C=new e.Cartesian3;d.setRotation=function(t,e,n){let a=d.getScale(t,C);return n[0]=e[0]*a.x,n[1]=e[1]*a.x,n[2]=e[2]*a.x,n[3]=t[3],n[4]=e[3]*a.y,n[5]=e[4]*a.y,n[6]=e[5]*a.y,n[7]=t[7],n[8]=e[6]*a.z,n[9]=e[7]*a.z,n[10]=e[8]*a.z,n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n};let z=new e.Cartesian3;d.getRotation=function(t,e){let n=d.getScale(t,z);return e[0]=t[0]/n.x,e[1]=t[1]/n.x,e[2]=t[2]/n.x,e[3]=t[4]/n.y,e[4]=t[5]/n.y,e[5]=t[6]/n.y,e[6]=t[8]/n.z,e[7]=t[9]/n.z,e[8]=t[10]/n.z,e},d.multiply=function(t,e,n){let a=t[0],u=t[1],r=t[2],i=t[3],o=t[4],l=t[5],s=t[6],f=t[7],c=t[8],h=t[9],d=t[10],m=t[11],y=t[12],x=t[13],w=t[14],M=t[15],p=e[0],g=e[1],C=e[2],z=e[3],b=e[4],O=e[5],V=e[6],T=e[7],A=e[8],E=e[9],I=e[10],U=e[11],N=e[12],S=e[13],P=e[14],_=e[15];return n[0]=a*p+o*g+c*C+y*z,n[1]=u*p+l*g+h*C+x*z,n[2]=r*p+s*g+d*C+w*z,n[3]=i*p+f*g+m*C+M*z,n[4]=a*b+o*O+c*V+y*T,n[5]=u*b+l*O+h*V+x*T,n[6]=r*b+s*O+d*V+w*T,n[7]=i*b+f*O+m*V+M*T,n[8]=a*A+o*E+c*I+y*U,n[9]=u*A+l*E+h*I+x*U,n[10]=r*A+s*E+d*I+w*U,n[11]=i*A+f*E+m*I+M*U,n[12]=a*N+o*S+c*P+y*_,n[13]=u*N+l*S+h*P+x*_,n[14]=r*N+s*S+d*P+w*_,n[15]=i*N+f*S+m*P+M*_,n},d.add=function(t,e,n){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n[3]=t[3]+e[3],n[4]=t[4]+e[4],n[5]=t[5]+e[5],n[6]=t[6]+e[6],n[7]=t[7]+e[7],n[8]=t[8]+e[8],n[9]=t[9]+e[9],n[10]=t[10]+e[10],n[11]=t[11]+e[11],n[12]=t[12]+e[12],n[13]=t[13]+e[13],n[14]=t[14]+e[14],n[15]=t[15]+e[15],n},d.subtract=function(t,e,n){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n[3]=t[3]-e[3],n[4]=t[4]-e[4],n[5]=t[5]-e[5],n[6]=t[6]-e[6],n[7]=t[7]-e[7],n[8]=t[8]-e[8],n[9]=t[9]-e[9],n[10]=t[10]-e[10],n[11]=t[11]-e[11],n[12]=t[12]-e[12],n[13]=t[13]-e[13],n[14]=t[14]-e[14],n[15]=t[15]-e[15],n},d.multiplyTransformation=function(t,e,n){let a=t[0],u=t[1],r=t[2],i=t[4],o=t[5],l=t[6],s=t[8],f=t[9],c=t[10],h=t[12],d=t[13],m=t[14],y=e[0],x=e[1],w=e[2],M=e[4],p=e[5],g=e[6],C=e[8],z=e[9],b=e[10],O=e[12],V=e[13],T=e[14];return n[0]=a*y+i*x+s*w,n[1]=u*y+o*x+f*w,n[2]=r*y+l*x+c*w,n[3]=0,n[4]=a*M+i*p+s*g,n[5]=u*M+o*p+f*g,n[6]=r*M+l*p+c*g,n[7]=0,n[8]=a*C+i*z+s*b,n[9]=u*C+o*z+f*b,n[10]=r*C+l*z+c*b,n[11]=0,n[12]=a*O+i*V+s*T+h,n[13]=u*O+o*V+f*T+d,n[14]=r*O+l*V+c*T+m,n[15]=1,n},d.multiplyByMatrix3=function(t,e,n){let a=t[0],u=t[1],r=t[2],i=t[4],o=t[5],l=t[6],s=t[8],f=t[9],c=t[10],h=e[0],d=e[1],m=e[2],y=e[3],x=e[4],w=e[5],M=e[6],p=e[7],g=e[8];return n[0]=a*h+i*d+s*m,n[1]=u*h+o*d+f*m,n[2]=r*h+l*d+c*m,n[3]=0,n[4]=a*y+i*x+s*w,n[5]=u*y+o*x+f*w,n[6]=r*y+l*x+c*w,n[7]=0,n[8]=a*M+i*p+s*g,n[9]=u*M+o*p+f*g,n[10]=r*M+l*p+c*g,n[11]=0,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},d.multiplyByTranslation=function(t,e,n){let a=e.x,u=e.y,r=e.z,i=a*t[0]+u*t[4]+r*t[8]+t[12],o=a*t[1]+u*t[5]+r*t[9]+t[13],l=a*t[2]+u*t[6]+r*t[10]+t[14];return n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=i,n[13]=o,n[14]=l,n[15]=t[15],n},d.multiplyByScale=function(t,e,n){let a=e.x,u=e.y,r=e.z;return 1===a&&1===u&&1===r?d.clone(t,n):(n[0]=a*t[0],n[1]=a*t[1],n[2]=a*t[2],n[3]=t[3],n[4]=u*t[4],n[5]=u*t[5],n[6]=u*t[6],n[7]=t[7],n[8]=r*t[8],n[9]=r*t[9],n[10]=r*t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n)},d.multiplyByUniformScale=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3],n[4]=t[4]*e,n[5]=t[5]*e,n[6]=t[6]*e,n[7]=t[7],n[8]=t[8]*e,n[9]=t[9]*e,n[10]=t[10]*e,n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n},d.multiplyByVector=function(t,e,n){let a=e.x,u=e.y,r=e.z,i=e.w,o=t[0]*a+t[4]*u+t[8]*r+t[12]*i,l=t[1]*a+t[5]*u+t[9]*r+t[13]*i,s=t[2]*a+t[6]*u+t[10]*r+t[14]*i,f=t[3]*a+t[7]*u+t[11]*r+t[15]*i;return n.x=o,n.y=l,n.z=s,n.w=f,n},d.multiplyByPointAsVector=function(t,e,n){let a=e.x,u=e.y,r=e.z,i=t[0]*a+t[4]*u+t[8]*r,o=t[1]*a+t[5]*u+t[9]*r,l=t[2]*a+t[6]*u+t[10]*r;return n.x=i,n.y=o,n.z=l,n},d.multiplyByPoint=function(t,e,n){let a=e.x,u=e.y,r=e.z,i=t[0]*a+t[4]*u+t[8]*r+t[12],o=t[1]*a+t[5]*u+t[9]*r+t[13],l=t[2]*a+t[6]*u+t[10]*r+t[14];return n.x=i,n.y=o,n.z=l,n},d.multiplyByScalar=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n[4]=t[4]*e,n[5]=t[5]*e,n[6]=t[6]*e,n[7]=t[7]*e,n[8]=t[8]*e,n[9]=t[9]*e,n[10]=t[10]*e,n[11]=t[11]*e,n[12]=t[12]*e,n[13]=t[13]*e,n[14]=t[14]*e,n[15]=t[15]*e,n},d.negate=function(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e[4]=-t[4],e[5]=-t[5],e[6]=-t[6],e[7]=-t[7],e[8]=-t[8],e[9]=-t[9],e[10]=-t[10],e[11]=-t[11],e[12]=-t[12],e[13]=-t[13],e[14]=-t[14],e[15]=-t[15],e},d.transpose=function(t,e){let n=t[1],a=t[2],u=t[3],r=t[6],i=t[7],o=t[11];return e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=n,e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=a,e[9]=r,e[10]=t[10],e[11]=t[14],e[12]=u,e[13]=i,e[14]=o,e[15]=t[15],e},d.abs=function(t,e){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e[3]=Math.abs(t[3]),e[4]=Math.abs(t[4]),e[5]=Math.abs(t[5]),e[6]=Math.abs(t[6]),e[7]=Math.abs(t[7]),e[8]=Math.abs(t[8]),e[9]=Math.abs(t[9]),e[10]=Math.abs(t[10]),e[11]=Math.abs(t[11]),e[12]=Math.abs(t[12]),e[13]=Math.abs(t[13]),e[14]=Math.abs(t[14]),e[15]=Math.abs(t[15]),e},d.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t[12]===e[12]&&t[13]===e[13]&&t[14]===e[14]&&t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[4]===e[4]&&t[5]===e[5]&&t[6]===e[6]&&t[8]===e[8]&&t[9]===e[9]&&t[10]===e[10]&&t[3]===e[3]&&t[7]===e[7]&&t[11]===e[11]&&t[15]===e[15]},d.equalsEpsilon=function(t,e,a){return a=n.defaultValue(a,0),t===e||n.defined(t)&&n.defined(e)&&Math.abs(t[0]-e[0])<=a&&Math.abs(t[1]-e[1])<=a&&Math.abs(t[2]-e[2])<=a&&Math.abs(t[3]-e[3])<=a&&Math.abs(t[4]-e[4])<=a&&Math.abs(t[5]-e[5])<=a&&Math.abs(t[6]-e[6])<=a&&Math.abs(t[7]-e[7])<=a&&Math.abs(t[8]-e[8])<=a&&Math.abs(t[9]-e[9])<=a&&Math.abs(t[10]-e[10])<=a&&Math.abs(t[11]-e[11])<=a&&Math.abs(t[12]-e[12])<=a&&Math.abs(t[13]-e[13])<=a&&Math.abs(t[14]-e[14])<=a&&Math.abs(t[15]-e[15])<=a},d.getTranslation=function(t,e){return e.x=t[12],e.y=t[13],e.z=t[14],e},d.getMatrix3=function(t,e){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};let b=new e.Matrix3,O=new e.Matrix3,V=new r,T=new r(0,0,0,1);d.inverse=function(t,n){let i=t[0],o=t[4],l=t[8],s=t[12],f=t[1],c=t[5],h=t[9],m=t[13],y=t[2],x=t[6],w=t[10],M=t[14],p=t[3],g=t[7],C=t[11],z=t[15],A=w*z,E=M*C,I=x*z,U=M*g,N=x*C,S=w*g,P=y*z,_=M*p,q=y*C,R=w*p,W=y*g,L=x*p,k=A*c+U*h+N*m-(E*c+I*h+S*m),B=E*f+P*h+R*m-(A*f+_*h+q*m),$=I*f+_*c+W*m-(U*f+P*c+L*m),j=S*f+q*c+L*h-(N*f+R*c+W*h),v=E*o+I*l+S*s-(A*o+U*l+N*s),X=A*i+_*l+q*s-(E*i+P*l+R*s),Y=U*i+P*o+L*s-(I*i+_*o+W*s),Z=N*i+R*o+W*l-(S*i+q*o+L*l);A=l*m,E=s*h,I=o*m,U=s*c,N=o*h,S=l*c,P=i*m,_=s*f,q=i*h,R=l*f,W=i*c,L=o*f;let D=A*g+U*C+N*z-(E*g+I*C+S*z),F=E*p+P*C+R*z-(A*p+_*C+q*z),G=I*p+_*g+W*z-(U*p+P*g+L*z),H=S*p+q*g+L*C-(N*p+R*g+W*C),Q=I*w+S*M+E*x-(N*M+A*x+U*w),J=q*M+A*y+_*w-(P*w+R*M+E*y),K=P*x+L*M+U*y-(W*M+I*y+_*x),tt=W*w+N*y+R*x-(q*x+L*w+S*y),te=i*k+o*B+l*$+s*j;if(Math.abs(te)<a.CesiumMath.EPSILON21){if(e.Matrix3.equalsEpsilon(d.getMatrix3(t,b),O,a.CesiumMath.EPSILON7)&&r.equals(d.getRow(t,3,V),T))return n[0]=0,n[1]=0,n[2]=0,n[3]=0,n[4]=0,n[5]=0,n[6]=0,n[7]=0,n[8]=0,n[9]=0,n[10]=0,n[11]=0,n[12]=-t[12],n[13]=-t[13],n[14]=-t[14],n[15]=1,n;throw new u.RuntimeError("matrix is not invertible because its determinate is zero.")}return te=1/te,n[0]=k*te,n[1]=B*te,n[2]=$*te,n[3]=j*te,n[4]=v*te,n[5]=X*te,n[6]=Y*te,n[7]=Z*te,n[8]=D*te,n[9]=F*te,n[10]=G*te,n[11]=H*te,n[12]=Q*te,n[13]=J*te,n[14]=K*te,n[15]=tt*te,n},d.inverseTransformation=function(t,e){let n=t[0],a=t[1],u=t[2],r=t[4],i=t[5],o=t[6],l=t[8],s=t[9],f=t[10],c=t[12],h=t[13],d=t[14];return e[0]=n,e[1]=r,e[2]=l,e[3]=0,e[4]=a,e[5]=i,e[6]=s,e[7]=0,e[8]=u,e[9]=o,e[10]=f,e[11]=0,e[12]=-n*c-a*h-u*d,e[13]=-r*c-i*h-o*d,e[14]=-l*c-s*h-f*d,e[15]=1,e};let A=new d;function E(t,e,a,u){this.west=n.defaultValue(t,0),this.south=n.defaultValue(e,0),this.east=n.defaultValue(a,0),this.north=n.defaultValue(u,0)}d.inverseTranspose=function(t,e){return d.inverse(d.transpose(t,A),e)},d.IDENTITY=Object.freeze(new d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)),d.ZERO=Object.freeze(new d(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)),d.COLUMN0ROW0=0,d.COLUMN0ROW1=1,d.COLUMN0ROW2=2,d.COLUMN0ROW3=3,d.COLUMN1ROW0=4,d.COLUMN1ROW1=5,d.COLUMN1ROW2=6,d.COLUMN1ROW3=7,d.COLUMN2ROW0=8,d.COLUMN2ROW1=9,d.COLUMN2ROW2=10,d.COLUMN2ROW3=11,d.COLUMN3ROW0=12,d.COLUMN3ROW1=13,d.COLUMN3ROW2=14,d.COLUMN3ROW3=15,Object.defineProperties(d.prototype,{length:{get:function(){return d.packedLength}}}),d.prototype.clone=function(t){return d.clone(this,t)},d.prototype.equals=function(t){return d.equals(this,t)},d.equalsArray=function(t,e,n){return t[0]===e[n]&&t[1]===e[n+1]&&t[2]===e[n+2]&&t[3]===e[n+3]&&t[4]===e[n+4]&&t[5]===e[n+5]&&t[6]===e[n+6]&&t[7]===e[n+7]&&t[8]===e[n+8]&&t[9]===e[n+9]&&t[10]===e[n+10]&&t[11]===e[n+11]&&t[12]===e[n+12]&&t[13]===e[n+13]&&t[14]===e[n+14]&&t[15]===e[n+15]},d.prototype.equalsEpsilon=function(t,e){return d.equalsEpsilon(this,t,e)},d.prototype.toString=function(){return`(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})
(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})
(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})
(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`},Object.defineProperties(E.prototype,{width:{get:function(){return E.computeWidth(this)}},height:{get:function(){return E.computeHeight(this)}}}),E.packedLength=4,E.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t.west,e[a++]=t.south,e[a++]=t.east,e[a]=t.north,e},E.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new E),a.west=t[e++],a.south=t[e++],a.east=t[e++],a.north=t[e],a},E.computeWidth=function(t){let e=t.east,n=t.west;return e<n&&(e+=a.CesiumMath.TWO_PI),e-n},E.computeHeight=function(t){return t.north-t.south},E.fromDegrees=function(t,e,u,r,i){return t=a.CesiumMath.toRadians(n.defaultValue(t,0)),e=a.CesiumMath.toRadians(n.defaultValue(e,0)),u=a.CesiumMath.toRadians(n.defaultValue(u,0)),r=a.CesiumMath.toRadians(n.defaultValue(r,0)),n.defined(i)?(i.west=t,i.south=e,i.east=u,i.north=r,i):new E(t,e,u,r)},E.fromRadians=function(t,e,a,u,r){return n.defined(r)?(r.west=n.defaultValue(t,0),r.south=n.defaultValue(e,0),r.east=n.defaultValue(a,0),r.north=n.defaultValue(u,0),r):new E(t,e,a,u)},E.fromCartographicArray=function(t,e){let u=Number.MAX_VALUE,r=-Number.MAX_VALUE,i=Number.MAX_VALUE,o=-Number.MAX_VALUE,l=Number.MAX_VALUE,s=-Number.MAX_VALUE;for(let e=0,n=t.length;e<n;e++){let n=t[e];u=Math.min(u,n.longitude),r=Math.max(r,n.longitude),l=Math.min(l,n.latitude),s=Math.max(s,n.latitude);let f=n.longitude>=0?n.longitude:n.longitude+a.CesiumMath.TWO_PI;i=Math.min(i,f),o=Math.max(o,f)}return r-u>o-i&&(u=i,(r=o)>a.CesiumMath.PI&&(r-=a.CesiumMath.TWO_PI),u>a.CesiumMath.PI&&(u-=a.CesiumMath.TWO_PI)),n.defined(e)?(e.west=u,e.south=l,e.east=r,e.north=s,e):new E(u,l,r,s)},E.fromCartesianArray=function(t,u,r){u=n.defaultValue(u,e.Ellipsoid.WGS84);let i=Number.MAX_VALUE,o=-Number.MAX_VALUE,l=Number.MAX_VALUE,s=-Number.MAX_VALUE,f=Number.MAX_VALUE,c=-Number.MAX_VALUE;for(let e=0,n=t.length;e<n;e++){let n=u.cartesianToCartographic(t[e]);i=Math.min(i,n.longitude),o=Math.max(o,n.longitude),f=Math.min(f,n.latitude),c=Math.max(c,n.latitude);let r=n.longitude>=0?n.longitude:n.longitude+a.CesiumMath.TWO_PI;l=Math.min(l,r),s=Math.max(s,r)}return o-i>s-l&&(i=l,(o=s)>a.CesiumMath.PI&&(o-=a.CesiumMath.TWO_PI),i>a.CesiumMath.PI&&(i-=a.CesiumMath.TWO_PI)),n.defined(r)?(r.west=i,r.south=f,r.east=o,r.north=c,r):new E(i,f,o,c)},E.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e.west=t.west,e.south=t.south,e.east=t.east,e.north=t.north,e):new E(t.west,t.south,t.east,t.north)},E.equalsEpsilon=function(t,e,a){return a=n.defaultValue(a,0),t===e||n.defined(t)&&n.defined(e)&&Math.abs(t.west-e.west)<=a&&Math.abs(t.south-e.south)<=a&&Math.abs(t.east-e.east)<=a&&Math.abs(t.north-e.north)<=a},E.prototype.clone=function(t){return E.clone(this,t)},E.prototype.equals=function(t){return E.equals(this,t)},E.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t.west===e.west&&t.south===e.south&&t.east===e.east&&t.north===e.north},E.prototype.equalsEpsilon=function(t,e){return E.equalsEpsilon(this,t,e)},E.validate=function(t){},E.southwest=function(t,a){return n.defined(a)?(a.longitude=t.west,a.latitude=t.south,a.height=0,a):new e.Cartographic(t.west,t.south)},E.northwest=function(t,a){return n.defined(a)?(a.longitude=t.west,a.latitude=t.north,a.height=0,a):new e.Cartographic(t.west,t.north)},E.northeast=function(t,a){return n.defined(a)?(a.longitude=t.east,a.latitude=t.north,a.height=0,a):new e.Cartographic(t.east,t.north)},E.southeast=function(t,a){return n.defined(a)?(a.longitude=t.east,a.latitude=t.south,a.height=0,a):new e.Cartographic(t.east,t.south)},E.center=function(t,u){let r=t.east,i=t.west;r<i&&(r+=a.CesiumMath.TWO_PI);let o=a.CesiumMath.negativePiToPi(.5*(i+r)),l=.5*(t.south+t.north);return n.defined(u)?(u.longitude=o,u.latitude=l,u.height=0,u):new e.Cartographic(o,l)},E.intersection=function(t,e,u){let r=t.east,i=t.west,o=e.east,l=e.west;r<i&&o>0?r+=a.CesiumMath.TWO_PI:o<l&&r>0&&(o+=a.CesiumMath.TWO_PI),r<i&&l<0?l+=a.CesiumMath.TWO_PI:o<l&&i<0&&(i+=a.CesiumMath.TWO_PI);let s=a.CesiumMath.negativePiToPi(Math.max(i,l)),f=a.CesiumMath.negativePiToPi(Math.min(r,o));if((t.west<t.east||e.west<e.east)&&f<=s)return;let c=Math.max(t.south,e.south),h=Math.min(t.north,e.north);return c>=h?void 0:n.defined(u)?(u.west=s,u.south=c,u.east=f,u.north=h,u):new E(s,c,f,h)},E.simpleIntersection=function(t,e,a){let u=Math.max(t.west,e.west),r=Math.max(t.south,e.south),i=Math.min(t.east,e.east),o=Math.min(t.north,e.north);if(!(r>=o||u>=i))return n.defined(a)?(a.west=u,a.south=r,a.east=i,a.north=o,a):new E(u,r,i,o)},E.union=function(t,e,u){n.defined(u)||(u=new E);let r=t.east,i=t.west,o=e.east,l=e.west;r<i&&o>0?r+=a.CesiumMath.TWO_PI:o<l&&r>0&&(o+=a.CesiumMath.TWO_PI),r<i&&l<0?l+=a.CesiumMath.TWO_PI:o<l&&i<0&&(i+=a.CesiumMath.TWO_PI);let s=a.CesiumMath.negativePiToPi(Math.min(i,l)),f=a.CesiumMath.negativePiToPi(Math.max(r,o));return u.west=s,u.south=Math.min(t.south,e.south),u.east=f,u.north=Math.max(t.north,e.north),u},E.expand=function(t,e,a){return n.defined(a)||(a=new E),a.west=Math.min(t.west,e.longitude),a.south=Math.min(t.south,e.latitude),a.east=Math.max(t.east,e.longitude),a.north=Math.max(t.north,e.latitude),a},E.contains=function(t,e){let n=e.longitude,u=e.latitude,r=t.west,i=t.east;return i<r&&(i+=a.CesiumMath.TWO_PI,n<0&&(n+=a.CesiumMath.TWO_PI)),(n>r||a.CesiumMath.equalsEpsilon(n,r,a.CesiumMath.EPSILON14))&&(n<i||a.CesiumMath.equalsEpsilon(n,i,a.CesiumMath.EPSILON14))&&u>=t.south&&u<=t.north};let I=new e.Cartographic;function U(t,e){this.x=n.defaultValue(t,0),this.y=n.defaultValue(e,0)}E.subsample=function(t,u,r,i){u=n.defaultValue(u,e.Ellipsoid.WGS84),r=n.defaultValue(r,0),n.defined(i)||(i=[]);let o=0,l=t.north,s=t.south,f=t.east,c=t.west;I.height=r,I.longitude=c,I.latitude=l,i[o]=u.cartographicToCartesian(I,i[o]),o++,I.longitude=f,i[o]=u.cartographicToCartesian(I,i[o]),o++,I.latitude=s,i[o]=u.cartographicToCartesian(I,i[o]),o++,I.longitude=c,i[o]=u.cartographicToCartesian(I,i[o]),o++,I.latitude=l<0?l:s>0?s:0;for(let e=1;e<8;++e)I.longitude=-Math.PI+e*a.CesiumMath.PI_OVER_TWO,E.contains(t,I)&&(i[o]=u.cartographicToCartesian(I,i[o]),o++);return 0===I.latitude&&(I.longitude=c,i[o]=u.cartographicToCartesian(I,i[o]),o++,I.longitude=f,i[o]=u.cartographicToCartesian(I,i[o]),o++),i.length=o,i},E.subsection=function(t,e,u,r,i,o){if(n.defined(o)||(o=new E),t.west<=t.east){let n=t.east-t.west;o.west=t.west+e*n,o.east=t.west+r*n}else{let n=a.CesiumMath.TWO_PI+t.east-t.west;o.west=a.CesiumMath.negativePiToPi(t.west+e*n),o.east=a.CesiumMath.negativePiToPi(t.west+r*n)}let l=t.north-t.south;return o.south=t.south+u*l,o.north=t.south+i*l,1===e&&(o.west=t.east),1===r&&(o.east=t.east),1===u&&(o.south=t.north),1===i&&(o.north=t.north),o},E.MAX_VALUE=Object.freeze(new E(-Math.PI,-a.CesiumMath.PI_OVER_TWO,Math.PI,a.CesiumMath.PI_OVER_TWO)),U.fromElements=function(t,e,a){return n.defined(a)?(a.x=t,a.y=e,a):new U(t,e)},U.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e.x=t.x,e.y=t.y,e):new U(t.x,t.y)},U.fromCartesian3=U.clone,U.fromCartesian4=U.clone,U.packedLength=2,U.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t.x,e[a]=t.y,e},U.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new U),a.x=t[e++],a.y=t[e],a},U.packArray=function(t,e){let a=t.length,u=2*a;n.defined(e)?(Array.isArray(e)||e.length===u)&&e.length!==u&&(e.length=u):e=Array(u);for(let n=0;n<a;++n)U.pack(t[n],e,2*n);return e},U.unpackArray=function(t,e){let a=t.length;n.defined(e)?e.length=a/2:e=Array(a/2);for(let n=0;n<a;n+=2){let a=n/2;e[a]=U.unpack(t,n,e[a])}return e},U.fromArray=U.unpack,U.maximumComponent=function(t){return Math.max(t.x,t.y)},U.minimumComponent=function(t){return Math.min(t.x,t.y)},U.minimumByComponent=function(t,e,n){return n.x=Math.min(t.x,e.x),n.y=Math.min(t.y,e.y),n},U.maximumByComponent=function(t,e,n){return n.x=Math.max(t.x,e.x),n.y=Math.max(t.y,e.y),n},U.clamp=function(t,e,n,u){let r=a.CesiumMath.clamp(t.x,e.x,n.x),i=a.CesiumMath.clamp(t.y,e.y,n.y);return u.x=r,u.y=i,u},U.magnitudeSquared=function(t){return t.x*t.x+t.y*t.y},U.magnitude=function(t){return Math.sqrt(U.magnitudeSquared(t))};let N=new U;U.distance=function(t,e){return U.subtract(t,e,N),U.magnitude(N)},U.distanceSquared=function(t,e){return U.subtract(t,e,N),U.magnitudeSquared(N)},U.normalize=function(t,e){let n=U.magnitude(t);return e.x=t.x/n,e.y=t.y/n,e},U.dot=function(t,e){return t.x*e.x+t.y*e.y},U.cross=function(t,e){return t.x*e.y-t.y*e.x},U.multiplyComponents=function(t,e,n){return n.x=t.x*e.x,n.y=t.y*e.y,n},U.divideComponents=function(t,e,n){return n.x=t.x/e.x,n.y=t.y/e.y,n},U.add=function(t,e,n){return n.x=t.x+e.x,n.y=t.y+e.y,n},U.subtract=function(t,e,n){return n.x=t.x-e.x,n.y=t.y-e.y,n},U.multiplyByScalar=function(t,e,n){return n.x=t.x*e,n.y=t.y*e,n},U.divideByScalar=function(t,e,n){return n.x=t.x/e,n.y=t.y/e,n},U.negate=function(t,e){return e.x=-t.x,e.y=-t.y,e},U.abs=function(t,e){return e.x=Math.abs(t.x),e.y=Math.abs(t.y),e};let S=new U;U.lerp=function(t,e,n,a){return U.multiplyByScalar(e,n,S),a=U.multiplyByScalar(t,1-n,a),U.add(S,a,a)};let P=new U,_=new U;U.angleBetween=function(t,e){return U.normalize(t,P),U.normalize(e,_),a.CesiumMath.acosClamped(U.dot(P,_))};let q=new U;function R(t,e,a,u){this[0]=n.defaultValue(t,0),this[1]=n.defaultValue(a,0),this[2]=n.defaultValue(e,0),this[3]=n.defaultValue(u,0)}U.mostOrthogonalAxis=function(t,e){let n=U.normalize(t,q);return U.abs(n,n),e=n.x<=n.y?U.clone(U.UNIT_X,e):U.clone(U.UNIT_Y,e)},U.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t.x===e.x&&t.y===e.y},U.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]},U.equalsEpsilon=function(t,e,u,r){return t===e||n.defined(t)&&n.defined(e)&&a.CesiumMath.equalsEpsilon(t.x,e.x,u,r)&&a.CesiumMath.equalsEpsilon(t.y,e.y,u,r)},U.ZERO=Object.freeze(new U(0,0)),U.ONE=Object.freeze(new U(1,1)),U.UNIT_X=Object.freeze(new U(1,0)),U.UNIT_Y=Object.freeze(new U(0,1)),U.prototype.clone=function(t){return U.clone(this,t)},U.prototype.equals=function(t){return U.equals(this,t)},U.prototype.equalsEpsilon=function(t,e,n){return U.equalsEpsilon(this,t,e,n)},U.prototype.toString=function(){return`(${this.x}, ${this.y})`},R.packedLength=4,R.pack=function(t,e,a){return a=n.defaultValue(a,0),e[a++]=t[0],e[a++]=t[1],e[a++]=t[2],e[a++]=t[3],e},R.unpack=function(t,e,a){return e=n.defaultValue(e,0),n.defined(a)||(a=new R),a[0]=t[e++],a[1]=t[e++],a[2]=t[e++],a[3]=t[e++],a},R.packArray=function(t,e){let a=t.length,u=4*a;n.defined(e)?(Array.isArray(e)||e.length===u)&&e.length!==u&&(e.length=u):e=Array(u);for(let n=0;n<a;++n)R.pack(t[n],e,4*n);return e},R.unpackArray=function(t,e){let a=t.length;n.defined(e)?e.length=a/4:e=Array(a/4);for(let n=0;n<a;n+=4){let a=n/4;e[a]=R.unpack(t,n,e[a])}return e},R.clone=function(t,e){if(n.defined(t))return n.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):new R(t[0],t[2],t[1],t[3])},R.fromArray=R.unpack,R.fromColumnMajorArray=function(t,e){return R.clone(t,e)},R.fromRowMajorArray=function(t,e){return n.defined(e)?(e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3],e):new R(t[0],t[1],t[2],t[3])},R.fromScale=function(t,e){return n.defined(e)?(e[0]=t.x,e[1]=0,e[2]=0,e[3]=t.y,e):new R(t.x,0,0,t.y)},R.fromUniformScale=function(t,e){return n.defined(e)?(e[0]=t,e[1]=0,e[2]=0,e[3]=t,e):new R(t,0,0,t)},R.fromRotation=function(t,e){let a=Math.cos(t),u=Math.sin(t);return n.defined(e)?(e[0]=a,e[1]=u,e[2]=-u,e[3]=a,e):new R(a,-u,u,a)},R.toArray=function(t,e){return n.defined(e)?(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e):[t[0],t[1],t[2],t[3]]},R.getElementIndex=function(t,e){return 2*t+e},R.getColumn=function(t,e,n){let a=2*e,u=t[a],r=t[a+1];return n.x=u,n.y=r,n},R.setColumn=function(t,e,n,a){let u=2*e;return(a=R.clone(t,a))[u]=n.x,a[u+1]=n.y,a},R.getRow=function(t,e,n){let a=t[e],u=t[e+2];return n.x=a,n.y=u,n},R.setRow=function(t,e,n,a){return(a=R.clone(t,a))[e]=n.x,a[e+2]=n.y,a};let W=new U;R.setScale=function(t,e,n){let a=R.getScale(t,W),u=e.x/a.x,r=e.y/a.y;return n[0]=t[0]*u,n[1]=t[1]*u,n[2]=t[2]*r,n[3]=t[3]*r,n};let L=new U;R.setUniformScale=function(t,e,n){let a=R.getScale(t,L),u=e/a.x,r=e/a.y;return n[0]=t[0]*u,n[1]=t[1]*u,n[2]=t[2]*r,n[3]=t[3]*r,n};let k=new U;R.getScale=function(t,e){return e.x=U.magnitude(U.fromElements(t[0],t[1],k)),e.y=U.magnitude(U.fromElements(t[2],t[3],k)),e};let B=new U;R.getMaximumScale=function(t){return R.getScale(t,B),U.maximumComponent(B)};let $=new U;R.setRotation=function(t,e,n){let a=R.getScale(t,$);return n[0]=e[0]*a.x,n[1]=e[1]*a.x,n[2]=e[2]*a.y,n[3]=e[3]*a.y,n};let j=new U;R.getRotation=function(t,e){let n=R.getScale(t,j);return e[0]=t[0]/n.x,e[1]=t[1]/n.x,e[2]=t[2]/n.y,e[3]=t[3]/n.y,e},R.multiply=function(t,e,n){let a=t[0]*e[0]+t[2]*e[1],u=t[0]*e[2]+t[2]*e[3],r=t[1]*e[0]+t[3]*e[1],i=t[1]*e[2]+t[3]*e[3];return n[0]=a,n[1]=r,n[2]=u,n[3]=i,n},R.add=function(t,e,n){return n[0]=t[0]+e[0],n[1]=t[1]+e[1],n[2]=t[2]+e[2],n[3]=t[3]+e[3],n},R.subtract=function(t,e,n){return n[0]=t[0]-e[0],n[1]=t[1]-e[1],n[2]=t[2]-e[2],n[3]=t[3]-e[3],n},R.multiplyByVector=function(t,e,n){let a=t[0]*e.x+t[2]*e.y,u=t[1]*e.x+t[3]*e.y;return n.x=a,n.y=u,n},R.multiplyByScalar=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n},R.multiplyByScale=function(t,e,n){return n[0]=t[0]*e.x,n[1]=t[1]*e.x,n[2]=t[2]*e.y,n[3]=t[3]*e.y,n},R.multiplyByUniformScale=function(t,e,n){return n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n},R.negate=function(t,e){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e},R.transpose=function(t,e){let n=t[0],a=t[2],u=t[1],r=t[3];return e[0]=n,e[1]=a,e[2]=u,e[3]=r,e},R.abs=function(t,e){return e[0]=Math.abs(t[0]),e[1]=Math.abs(t[1]),e[2]=Math.abs(t[2]),e[3]=Math.abs(t[3]),e},R.equals=function(t,e){return t===e||n.defined(t)&&n.defined(e)&&t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]},R.equalsArray=function(t,e,n){return t[0]===e[n]&&t[1]===e[n+1]&&t[2]===e[n+2]&&t[3]===e[n+3]},R.equalsEpsilon=function(t,e,a){return a=n.defaultValue(a,0),t===e||n.defined(t)&&n.defined(e)&&Math.abs(t[0]-e[0])<=a&&Math.abs(t[1]-e[1])<=a&&Math.abs(t[2]-e[2])<=a&&Math.abs(t[3]-e[3])<=a},R.IDENTITY=Object.freeze(new R(1,0,0,1)),R.ZERO=Object.freeze(new R(0,0,0,0)),R.COLUMN0ROW0=0,R.COLUMN0ROW1=1,R.COLUMN1ROW0=2,R.COLUMN1ROW1=3,Object.defineProperties(R.prototype,{length:{get:function(){return R.packedLength}}}),R.prototype.clone=function(t){return R.clone(this,t)},R.prototype.equals=function(t){return R.equals(this,t)},R.prototype.equalsEpsilon=function(t,e){return R.equalsEpsilon(this,t,e)},R.prototype.toString=function(){return`(${this[0]}, ${this[2]})
(${this[1]}, ${this[3]})`},t.Cartesian2=U,t.Cartesian4=r,t.Matrix2=R,t.Matrix4=d,t.Rectangle=E});