define(["exports","./defaultValue-f6d5e6da","./Math-355606c6"],function(e,d,t){"use strict";let i=t.CesiumMath.EPSILON10;e.arrayRemoveDuplicates=function(e,t,n,f){if(!d.defined(e))return;n=d.defaultValue(n,!1);let u=d.defined(f),l=e.length;if(l<2)return e;let r,s,a,c=e[0],h=0,p=-1;for(r=1;r<l;++r)t(c,s=e[r],i)?(d.defined(a)||(a=e.slice(0,r),h=r-1,p=0),u&&f.push(r)):(d.defined(a)&&(a.push(s),h=r,u&&(p=f.length)),c=s);return n&&t(e[0],e[l-1],i)&&(u&&(d.defined(a)?f.splice(p,0,h):f.push(l-1)),d.defined(a)?a.length-=1:a=e.slice(0,-1)),d.defined(a)?a:e}});