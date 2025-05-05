import { inject, PLATFORM_ID } from '@angular/core';
import { Token } from './../../../../../node_modules/lightningcss/node/ast.d';
import { HttpInterceptorFn } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
const pLATFORM_ID=inject(PLATFORM_ID)

if(isPlatformBrowser(pLATFORM_ID)){
  if(localStorage.getItem('userToken')){
    req=req.clone({
      setHeaders:{
        token:localStorage.getItem('userToken')!
      }
    })
  }
}


  return next(req);
};
