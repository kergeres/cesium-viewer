define(["exports","./RuntimeError-346a3079","./when-4bbc8319","./WebGLConstants-1c8239cc"],function(t,n,r,e){"use strict";var a=function(t){null==t&&(t=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=Array(this.N),this.mti=this.N+1,t.constructor==Array?this.init_by_array(t,t.length):this.init_seed(t)};a.prototype.init_seed=function(t){for(this.mt[0]=t>>>0,this.mti=1;this.mti<this.N;this.mti++)t=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30,this.mt[this.mti]=(1812433253*((4294901760&t)>>>16)<<16)+1812433253*(65535&t)+this.mti,this.mt[this.mti]>>>=0},a.prototype.init_by_array=function(t,n){var r,e,a;for(this.init_seed(19650218),r=1,e=0,a=this.N>n?this.N:n;a;a--){var i=this.mt[r-1]^this.mt[r-1]>>>30;this.mt[r]=(this.mt[r]^(1664525*((4294901760&i)>>>16)<<16)+1664525*(65535&i))+t[e]+e,this.mt[r]>>>=0,e++,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1),e>=n&&(e=0)}for(a=this.N-1;a;a--)i=this.mt[r-1]^this.mt[r-1]>>>30,this.mt[r]=(this.mt[r]^(1566083941*((4294901760&i)>>>16)<<16)+1566083941*(65535&i))-r,this.mt[r]>>>=0,++r>=this.N&&(this.mt[0]=this.mt[this.N-1],r=1);this.mt[0]=2147483648},a.prototype.random_int=function(){var t,n,r=[0,this.MATRIX_A];if(this.mti>=this.N){for(this.mti==this.N+1&&this.init_seed(5489),t=0;t<this.N-this.M;t++)n=this.mt[t]&this.UPPER_MASK|this.mt[t+1]&this.LOWER_MASK,this.mt[t]=this.mt[t+this.M]^n>>>1^r[1&n];for(;t<this.N-1;t++)n=this.mt[t]&this.UPPER_MASK|this.mt[t+1]&this.LOWER_MASK,this.mt[t]=this.mt[t+(this.M-this.N)]^n>>>1^r[1&n];n=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^n>>>1^r[1&n],this.mti=0}return n=this.mt[this.mti++],n^=n>>>11,n^=n<<7&2636928640,n^=n<<15&4022730752,(n^=n>>>18)>>>0},a.prototype.random_int31=function(){return this.random_int()>>>1},a.prototype.random_incl=function(){return this.random_int()*(1/4294967295)},a.prototype.random=function(){return this.random_int()*(1/4294967296)},a.prototype.random_excl=function(){return(this.random_int()+.5)*(1/4294967296)},a.prototype.random_long=function(){return(67108864*(this.random_int()>>>5)+(this.random_int()>>>6))*(1/9007199254740992)};var i={EPSILON1:.1,EPSILON2:.01,EPSILON3:.001,EPSILON4:1e-4,EPSILON5:1e-5,EPSILON6:1e-6,EPSILON7:1e-7,EPSILON8:1e-8,EPSILON9:1e-9,EPSILON10:1e-10,EPSILON11:1e-11,EPSILON12:1e-12,EPSILON13:1e-13,EPSILON14:1e-14,EPSILON15:1e-15,EPSILON16:1e-16,EPSILON17:1e-17,EPSILON18:1e-18,EPSILON19:1e-19,EPSILON20:1e-20,EPSILON21:1e-21,GRAVITATIONALPARAMETER:3986004418e5,SOLAR_RADIUS:6955e5,LUNAR_RADIUS:1737400,SIXTY_FOUR_KILOBYTES:65536,FOUR_GIGABYTES:4294967296};i.sign=r.defaultValue(Math.sign,function(t){return 0==(t=+t)||t!=t?t:t>0?1:-1}),i.signNotZero=function(t){return t<0?-1:1},i.toSNorm=function(t,n){return n=r.defaultValue(n,255),Math.round((.5*i.clamp(t,-1,1)+.5)*n)},i.fromSNorm=function(t,n){return n=r.defaultValue(n,255),i.clamp(t,0,n)/n*2-1},i.normalize=function(t,n,r){return 0===(r=Math.max(r-n,0))?0:i.clamp((t-n)/r,0,1)},i.sinh=r.defaultValue(Math.sinh,function(t){return(Math.exp(t)-Math.exp(-t))/2}),i.cosh=r.defaultValue(Math.cosh,function(t){return(Math.exp(t)+Math.exp(-t))/2}),i.lerp=function(t,n,r){return(1-r)*t+r*n},i.PI=Math.PI,i.ONE_OVER_PI=1/Math.PI,i.PI_OVER_TWO=Math.PI/2,i.PI_OVER_THREE=Math.PI/3,i.PI_OVER_FOUR=Math.PI/4,i.PI_OVER_SIX=Math.PI/6,i.THREE_PI_OVER_TWO=3*Math.PI/2,i.TWO_PI=2*Math.PI,i.ONE_OVER_TWO_PI=1/(2*Math.PI),i.RADIANS_PER_DEGREE=Math.PI/180,i.DEGREES_PER_RADIAN=180/Math.PI,i.RADIANS_PER_ARCSECOND=i.RADIANS_PER_DEGREE/3600,i.toRadians=function(t){return t*i.RADIANS_PER_DEGREE},i.toDegrees=function(t){return t*i.DEGREES_PER_RADIAN},i.convertLongitudeRange=function(t){var n=i.TWO_PI,r=t-Math.floor(t/n)*n;return r<-Math.PI?r+n:r>=Math.PI?r-n:r},i.clampToLatitudeRange=function(t){return i.clamp(t,-1*i.PI_OVER_TWO,i.PI_OVER_TWO)},i.negativePiToPi=function(t){return t>=-i.PI&&t<=i.PI?t:i.zeroToTwoPi(t+i.PI)-i.PI},i.zeroToTwoPi=function(t){if(t>=0&&t<=i.TWO_PI)return t;var n=i.mod(t,i.TWO_PI);return Math.abs(n)<i.EPSILON14&&Math.abs(t)>i.EPSILON14?i.TWO_PI:n},i.mod=function(t,n){return i.sign(t)===i.sign(n)&&Math.abs(t)<Math.abs(n)?t:(t%n+n)%n},i.equalsEpsilon=function(t,n,e,a){e=r.defaultValue(e,0);var i=Math.abs(t-n);return i<=(a=r.defaultValue(a,e))||i<=e*Math.max(Math.abs(t),Math.abs(n))},i.lessThan=function(t,n,r){return t-n<-r},i.lessThanOrEquals=function(t,n,r){return t-n<r},i.greaterThan=function(t,n,r){return t-n>r},i.greaterThanOrEquals=function(t,n,r){return t-n>-r};var s=[1];i.factorial=function(t){var n=s.length;if(t>=n)for(var r=s[n-1],e=n;e<=t;e++){var a=r*e;s.push(a),r=a}return s[t]},i.incrementWrap=function(t,n,e){return e=r.defaultValue(e,0),++t>n&&(t=e),t},i.isPowerOfTwo=function(t){return 0!==t&&0==(t&t-1)},i.nextPowerOfTwo=function(t){return--t,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},i.previousPowerOfTwo=function(t){return t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,t=((t|=t>>32)>>>0)-(t>>>1)},i.clamp=function(t,n,r){return t<n?n:t>r?r:t};var o=new a;i.setRandomNumberSeed=function(t){o=new a(t)},i.nextRandomNumber=function(){return o.random()},i.randomBetween=function(t,n){return i.nextRandomNumber()*(n-t)+t},i.acosClamped=function(t){return Math.acos(i.clamp(t,-1,1))},i.asinClamped=function(t){return Math.asin(i.clamp(t,-1,1))},i.chordLength=function(t,n){return 2*n*Math.sin(.5*t)},i.logBase=function(t,n){return Math.log(t)/Math.log(n)},i.cbrt=r.defaultValue(Math.cbrt,function(t){var n=Math.pow(Math.abs(t),1/3);return t<0?-n:n}),i.log2=r.defaultValue(Math.log2,function(t){return Math.log(t)*Math.LOG2E}),i.fog=function(t,n){var r=t*n;return 1-Math.exp(-r*r)},i.fastApproximateAtan=function(t){return t*(-.1784*Math.abs(t)-.0663*t*t+1.0301)},i.fastApproximateAtan2=function(t,n){var r,e,a=Math.abs(t);e=Math.max(a,r=Math.abs(n));var s=(r=Math.min(a,r))/e;return a=i.fastApproximateAtan(s),a=Math.abs(n)>Math.abs(t)?i.PI_OVER_TWO-a:a,a=t<0?i.PI-a:a,a=n<0?-a:a};var u={BYTE:e.WebGLConstants.BYTE,UNSIGNED_BYTE:e.WebGLConstants.UNSIGNED_BYTE,SHORT:e.WebGLConstants.SHORT,UNSIGNED_SHORT:e.WebGLConstants.UNSIGNED_SHORT,INT:e.WebGLConstants.INT,UNSIGNED_INT:e.WebGLConstants.UNSIGNED_INT,FLOAT:e.WebGLConstants.FLOAT,DOUBLE:e.WebGLConstants.DOUBLE,getSizeInBytes:function(t){switch(t){case u.BYTE:return Int8Array.BYTES_PER_ELEMENT;case u.UNSIGNED_BYTE:return Uint8Array.BYTES_PER_ELEMENT;case u.SHORT:return Int16Array.BYTES_PER_ELEMENT;case u.UNSIGNED_SHORT:return Uint16Array.BYTES_PER_ELEMENT;case u.INT:return Int32Array.BYTES_PER_ELEMENT;case u.UNSIGNED_INT:return Uint32Array.BYTES_PER_ELEMENT;case u.FLOAT:return Float32Array.BYTES_PER_ELEMENT;case u.DOUBLE:return Float64Array.BYTES_PER_ELEMENT}},fromTypedArray:function(t){return t instanceof Int8Array?u.BYTE:t instanceof Uint8Array?u.UNSIGNED_BYTE:t instanceof Int16Array?u.SHORT:t instanceof Uint16Array?u.UNSIGNED_SHORT:t instanceof Int32Array?u.INT:t instanceof Uint32Array?u.UNSIGNED_INT:t instanceof Float32Array?u.FLOAT:t instanceof Float64Array?u.DOUBLE:void 0},validate:function(t){return r.defined(t)&&(t===u.BYTE||t===u.UNSIGNED_BYTE||t===u.SHORT||t===u.UNSIGNED_SHORT||t===u.INT||t===u.UNSIGNED_INT||t===u.FLOAT||t===u.DOUBLE)},createTypedArray:function(t,n){switch(t){case u.BYTE:return new Int8Array(n);case u.UNSIGNED_BYTE:return new Uint8Array(n);case u.SHORT:return new Int16Array(n);case u.UNSIGNED_SHORT:return new Uint16Array(n);case u.INT:return new Int32Array(n);case u.UNSIGNED_INT:return new Uint32Array(n);case u.FLOAT:return new Float32Array(n);case u.DOUBLE:return new Float64Array(n)}},createArrayBufferView:function(t,n,e,a){switch(e=r.defaultValue(e,0),a=r.defaultValue(a,(n.byteLength-e)/u.getSizeInBytes(t)),t){case u.BYTE:return new Int8Array(n,e,a);case u.UNSIGNED_BYTE:return new Uint8Array(n,e,a);case u.SHORT:return new Int16Array(n,e,a);case u.UNSIGNED_SHORT:return new Uint16Array(n,e,a);case u.INT:return new Int32Array(n,e,a);case u.UNSIGNED_INT:return new Uint32Array(n,e,a);case u.FLOAT:return new Float32Array(n,e,a);case u.DOUBLE:return new Float64Array(n,e,a)}},fromName:function(t){switch(t){case"BYTE":return u.BYTE;case"UNSIGNED_BYTE":return u.UNSIGNED_BYTE;case"SHORT":return u.SHORT;case"UNSIGNED_SHORT":return u.UNSIGNED_SHORT;case"INT":return u.INT;case"UNSIGNED_INT":return u.UNSIGNED_INT;case"FLOAT":return u.FLOAT;case"DOUBLE":return u.DOUBLE}}},E=Object.freeze(u);t.CesiumMath=i,t.ComponentDatatype=E});