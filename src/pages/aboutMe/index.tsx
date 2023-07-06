import React, { useState } from "react";

const aboutMe = () => {
    return(
    <div className="flex flex-col pt-16 bg-meMain" dir="rtl">
        <div className="flex justify-center p-8" >
            <div className="w-1/2 flex justify-center">
                <img src="/images/me/1.jpg" alt="" className="w-80 h-[30rem] shadow-lg border p-4 bg-white" />
            </div>
            <div className="w-1/2 flex flex-col gap-8 text-base"> 
                <p className="text-mePrimary text-lg font-semibold">
                    با سلام
                </p>
                <p>
                    من  <span className=" text-meRed text-lg font-semibold">محمد پیریان</span> هستم
                </p>
            <div className="flex flex-col gap-1">  
                <p className="text-lg font-semibold mb-2">
                    این پروژه یک سایت به صورت آزمایشی می باشد که شامل بخش هایی مثل :
                </p>
                <p>
                    - پنل ادمین و مدیریت
                </p>
                <p>
                    - سبد خرید
                </p>
                <p>
                    - جستجو و فیلتر کردن
                </p>
                <p>
                    - کاتالوگ محصول
                </p>
                <p>
                    - مدیریت خرید
                </p>
                <p>
                    - احراز هویت کاربر و ادمین
                </p>
                </div>
                <div className="flex flex-col gap-1">
                <p className="text-lg font-semibold mb-2">
                    تکنولوژی و کتابخانه هایی که توی این پروژه استفاده شدند :
                </p>
                <p>
                    - ری اکت (React)
                </p>
                <p>
                    - نکست (Next.Js)
                </p>
                <p>
                    - تایپ اسکریپت (TypeScript)
                </p>
                <p>
                    - تیلویند (Tailwind)
                </p>
                <p>
                    - ریداکس (Redux)
                </p>
                <p>
                    - ری اکت کوئری (React Query)
                </p>
                <p>
                    - اکسیوس (Axios)
                </p>
                <p>
                    - توستیفای (Tostify)
                </p>
                <p>
                    - ری اکت کوییل (ReactQuill)
                </p>
                </div>
                <div>
                <p className="text-lg font-semibold mb-2">
                    خوشحال میشم من رو توی این راه همراهی و  کمک کنین با نظرات و انتقادات هاتون
                </p>
                <p className="text-lg mb-2">
                    راه های ارتباطی با من :
                </p>
                <p>
ایمیل : mohammadpiriyan@gmail.com
                </p>
                <p>
شماره تماس : 09385736655
                </p>
                </div>
            </div>
        </div>
        
        
    </div>
    )
    
};

export default aboutMe;
