const store = {
       homeCarouselInfos:[
              {hasVideo:false,bg:'url(../../../public/images/home/home-1-slider.jpg)',title:'اهمیت قهوه',icon:'images/home/home-1-slider-img.png'},
              {hasVideo:true,title:'دانه های قهوه خاص',icon:"images/home/home-1-slider-img-2.png"},
              {hasVideo:false,bg:'url(../../../public/images/home/home-1-slider-img-2.jpg)',title:'خانه ی قهوه',icon:'images/home/home-1-slider-img-3.png'},

       ],
       
       homeBookTablePersonCount:['1 نفر','2 نفر','3 نفر','4 نفر','5 نفر','6 نفر','7 نفر','8 نفر','9 نفر','10 نفر'],
       homeBookTableTimes:[
              '9:30 ق.ظ',
              '10:00 ق.ظ',
              '10:30 ق.ظ',
              '11:00 ق.ظ',
              '11:30 ق.ظ',
              '12:00 ق.ظ',
              '12:30 ق.ظ',
              '01:00 ب.ظ',
              '01:30 ب.ظ',
              '02:00 ب.ظ',
              '02:30 ب.ظ',
              '03:00 ب.ظ',
              '03:30 ب.ظ',
              '04:00 ب.ظ',
              '04:30 ب.ظ',
              '05:00 ب.ظ',
              '05:30 ب.ظ',
              '06:00 ب.ظ',
              '06:30 ب.ظ',
              '07:00 ب.ظ',
       ],
       baristaProperties:[
              {title:'مکان زیبا',img:'images/home/h-1-img-1.jpg',text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،'},
              {title:'قهوه را حس کنید',img:'images/home/h-1-img-2.jpg',text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،'},
              {title:'طعم واقعی',img:'images/home/h-1-img-3.jpg',text:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،'},
       ],
       coffeeTools:[
              {img:"images/home/home-1-icon-img-1.png",title:'قهوه ساز',aos:"zoom-out-right"},
              {img:"images/home/home-1-icon-img-2.png",title:'آسیاب قهوه',aos:"zoom-in-down"},
              {img:"images/home/home-1-icon-img-3.png",title:'فنجان قهوه',aos:"zoom-in-down"},
              {img:"images/home/home-1-icon-img-4.png",title:'اسپرسو ساز',aos:"zoom-out-left"}
       ],
       homeVerticalSwiper:[
              'images/home/main-home-project-pres-1.jpg',
              'images/home/main-home-project-pres-2.jpg',
              'images/home/main-home-project-pres-3.jpg',
       ],
       homeMenuItems:[
              {img:'images/home/h-1-list-icon-img-150x150.jpg',title:'کافه لاته',price:60000,infos:'قهوه تازه و شیر',new:true},
              {img:'images/home/h-1-list-icon-img-2-150x150.jpg',title:'بستنی لاته',price:70000,infos:'اسپرسو . شیر . یخ و سس کاراملی',new:false},
              {img:'images/home/h-1-list-icon-img-3-150x150.jpg',title:'کافه موکا',price:100000,infos:'اسپرسو همراه شیر و خامه',new:false},
              {img:'images/home/h-1-list-icon-img-4-150x150.jpg',title:'اسپرسو ماچیاتو',price:65000,infos:'اسپرسو غلیظ و شیر',new:false},
              {img:'images/home/h-1-list-icon-img-5-150x150.jpg',title:'موکا شکلات سفید',price:60000,infos:'اسپرسو شکلات سفید شیر یخ خامه',new:false},
              {img:'images/home/h-1-list-icon-img-6-150x150.jpg',title:'کارامل ماچیاتو',price:55000,infos:'اسپرسو و طعم دهنده وانیل و شیر',new:false},
              {img:'images/home/h-1-list-icon-img-7-150x150.jpg',title:'کافه امریکانو',price:90000,infos:'اسپرسو و لایه رقیق خامه',new:false},
              {img:'images/home/h-1-list-icon-img-8-150x150.jpg',title:'کافه یخی دودی',price:95000,infos:'اسپرسو یخ و بخار',new:true},
              {img:'images/home/h-1-list-icon-img-9-150x150.jpg',title:'کاپوچینو',price:120000,infos:'اسپرسو و لایه ای از فوم',new:false},
              {img:'images/home/h-1-list-icon-img-10-150x150.jpg',title:'موکا یخی',price:55000,infos:'اسپرسو همراه سس موکا و یخ',new:false},
              {img:'images/home/h-1-list-icon-img-11-150x150.jpg',title:'لاته وانیلی',price:95000,infos:'اسپرسو باطعم شیر و خامه',new:false},
              {img:'images/home/h-1-list-icon-img-12-150x150.jpg',title:'لاته یخی',price:97000,infos:'اسپرسو همراه شیر ویخ',new:false},
       ],
       homeProducts:[
              {img:'images/home/product-image-1.jpg',title:'کیسه کاغذی',fullStar:['','',''],halfStar:[''],price:'46000',sale:false,off:false,},
              {img:'images/home/product-image-2.jpg',title:'بسته کاغذی',fullStar:['','','',''],halfStar:[''],price:'98000',sale:true,off:true,oofPrice:'79.00'},
              {img:'images/home/product-image-3.jpg',title:'بسته پلاستیکی',fullStar:['','','','',''],halfStar:[],price:'27000',sale:false,off:false,},
              {img:'images/home/product-image-4.jpg',title:'قهوه جوش',fullStar:['','','','',],halfStar:[],price:'71000',sale:false,off:false,},
       ],
       homeLastNewItems:[
              {img:"images/home/home-1-blog-f-img-1.jpg",title:"ساده اش کن" ,date:"23.02.2016"},
              {img:"images/home/home-1-blog-f-img-2.jpg",title:"خرید قهوه" ,date:"23.01.2017"},
              {img:"images/home/home-1-blog-f-img-3.jpg",title:"کافه بار" ,date:"17.07.2017"},
       ],
       footer:{
              firstCol:{
                     title:'ساعات کاری',
                     daysAndHours:[
                            {title:"شنبه *" ,close:false , hourText:'12:00 - 01:00'},
                            {title:"یکشنبه" ,close:false , hourText:'9:00 - 22:00'},
                            {title:"دوشنبه" ,close:false ,  hourText:'9:00 - 1:00'},
                            {title:"سه شنبه" ,close:false , hourText:'9:00 - 22:00'},
                            {title:"چهارشنبه" ,close:false , hourText:'9:00 - 22:00'},
                            {title:"پنجشنبه" ,close:false , hourText:'9:00 - 22:00'},
                            {title:"جمعه *" ,close:true ,  hourText:'تعطیل'},
                     ]
              },
              secondCol:{
                     title:'آخرین پست ها',
                     items:[
                            {title:"ذهن خود را گسترش دهید، همه چیز را تغییر دهید"  , date:'14.02.2017'},
                            {title:"مکان هایی برای غیب شدن"  , date:'14.02.2017'},
                            {title:"لوئیس هاوس"  , date:'14.02.2017'},
                            {title:"انتظارات خود را بالا ببرید"  , date:'14.02.2017'},
                     ]
              }
       }
}

export default store