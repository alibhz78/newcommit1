import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Home = () => {
  const dir=useRef()
  const moshtarak=useRef()
  const whatsap=useRef()
  const tel=useRef()
  const insta=useRef()
  const gotowhatsap=()=>{
    dir.current.style="left:60%"
    whatsap.current.style.color="white"
  }
  const gototelegram=()=>{
    dir.current.style="left:85.2%"
    tel.current.style.color="white"
  }
  const gotoinsta=()=>{
    dir.current.style="left:10.2%"
    insta.current.style.color="white"
  }
  
  useEffect(() => {
 
  }, []);
  return (
    <>
      <div id="main-div" className="main-div">
        {" "}
        <div id="divpedar" className="divpedar">
          <ul className="ulpedar">
            <li className="lipedar">
              <Link className="a" to={"/Instegram"}>
                <i ref={insta} class="fa fa-instagram icon9" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="lipedar">
              <Link className="a" to={"/Gmail"}>
                <i className="fa fa-envelope icon9" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="lipedar liWhatsapp">
              <Link className="a" to={"/Whatsapp"}>
                {" "}
                <i ref={whatsap} className="fa fa-whatsapp icon9" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="lipedar">
              <Link className="a" to={"/Telegram"}>
                {" "}
                <i ref={tel} class="fa fa-telegram icon9" aria-hidden="true"></i>
              </Link>
            </li>
            <div ref={dir} id="dir" className="dire"></div>
          </ul>
        </div>
        <header className="main-header">
          <Outlet />
          <div className="pesare-header flex">
            <div className="div-menu flex">
              <img
                className="img-logo"
                src={require("./—Pngtree—modern abstract 3d logo_4092287.png")}
                alt=""
              />
              <ul className="ul-main flex">
                <li>
                  {" "}
                  <Link className="link-1" to={"/"}>
                    {" "}
                    صفحه اصلی{" "}
                  </Link>
                </li>
                <li className="li-1">
                  <Link className="link-1" to={"/Frontend"}>
                    فرانت اند
                  </Link>

                  <div className="ul-1">
                    <ul className="pesar-ul-1">
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php5
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="li-1">
                  <Link className="link-1" to={"/magalat"}>
                    مقالات
                  </Link>

                  <div className="ul-1">
                    <ul className="pesar-ul-1">
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="li-1">
                  <Link className="link-1" to={"/security"}>
                    امنیت
                  </Link>

                  <div className="ul-1">
                    <ul className="pesar-ul-1">
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                      <li>
                        <Link className="link-ul-1" to={"/n"}>
                          php
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
            <div className="vorod">
      
                <Link className="vorod-link-1" to={"/favorit"}><i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                
              <span>
                <Link to={"/Main"}> ورود / ثبت نام</Link>
              </span>
            </div>
          </div>
          <div class="mohtava-header flex">
            <h2>ما به هر قیمتی دوره آموزشی تولید نمی کنیم !</h2>
            <h4>
              با آکادمی سبزلرن، برنامه نویسی رو با خیال راحت یاد بگیر و پیشرفت
              کن.
            </h4>
            <div className="div-input-1 flex">
              <input
                className="input-1"
                type="text"
                name=""
                id=""
                placeholder="چی دوست داری یاد بگیری...!؟"
              />
              <i className="fa fa-search input-i" aria-hidden="true"></i>
            </div>
          </div>
          <ul className="ul-icon-amozesh flex">
            <li>
              <i className="fa fa-graduation-cap" aria-hidden="true"></i>
              <h3>17,000</h3>
              <h3>کاربر توی سبزلرن ثبت نام کردن</h3>
            </li>
            <li>
              <i className="fa fa-book" aria-hidden="true"></i>
              <h3>30</h3>
              <h3>دوره آموزشی داریم</h3>
            </li>
            <li>
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <h3>21,660</h3>
              <h3>دقیقه آموزش تولید کردیم</h3>
            </li>
          </ul>
        </header>
        <div className="body">
          <div className="jadid-dokme flex">
            <div>
              <h3 className="h3-1">جدیدترین دوره ها</h3>
              <p>سکوی پرتاپ شما به موفقیت</p>
            </div>
            <Link className="dokme-doreha" to={"/doreha"}> محصولات <i className="fa fa-long-arrow-left" aria-hidden="true"></i></Link>
          </div>
          <ul className="ul-amozesh flex">
            <li className="li-amozesh">
              <div className=" li-after">
                60% <p>تخفیف</p>{" "}
              </div>
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
            <li className="li-amozesh">
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i class="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
            <li className="li-amozesh">
              <div className=" li-after">
                40% <p>تخفیف</p>
              </div>
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
            <li className="li-amozesh">
              <div className=" li-after">
                80%<p>تخفیف</p>
              </div>
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
            <li className="li-amozesh">
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
            <li className="li-amozesh">
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
            <li className="li-amozesh">
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
            <li className="li-amozesh">
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
            <li className="li-amozesh">
              <div className="div-img-amozesh">
                <img src={require("./cec1e10e3be4.webp")} alt="" />
                <a href="">
                  <i
                    className="fa fa-play i-for-amozesh"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>

              <h4>
                <a href="">دوره جامع متخصص php [2022]</a>
              </h4>
              <div className="name-and-star flex">
                <a href="">
                  <i className="fa fa-television" aria-hidden="true"></i> آرین
                  شجاعی
                </a>
                <img src={require("./kindpng_115096.png")} alt="" />
              </div>
              <div className="foot-amozesh flex">
                <span>
                  <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                </span>
                <span>380,000</span>
              </div>
            </li>
          </ul>
          <div className="div-ul-takhfif flex">
            <ul className="ul-takhfif">
              <li className="sli li-takhfif flex">
                <div className="li-takhfif-img">
                  <img src={require("./php.webp")} alt="" />
                </div>

                <div className="div-pedar-emtyaz flex">
                  <a href="">آموزش پایتون با </a>
                  <div className="div-emtaz flex">
                    <span>امتیاز 4.75 از 27 رای</span>
                    <img src={require("./kindpng_115096.png")} alt="" />
                  </div>
                  <a className="a-price" href="">
                    400.000 نومان
                  </a>
                </div>
              </li>
              <li className="li-takhfif flex">
                <div className="li-takhfif-img">
                  <img src={require("./css-style-sheet.jpg")} alt="" />
                </div>

                <div className="div-pedar-emtyaz flex">
                  <a href="">آموزش پایتون با گرایش پایتون</a>
                  <div className="div-emtaz flex">
                    <span>امتیاز 5 از 27 رای</span>
                    <img src={require("./kindpng_115096.png")} alt="" />
                  </div>
                  <a className="a-price" href="">
                    400.000 نومان
                  </a>
                </div>
              </li>
              <li className="li-takhfif flex">
                <div className="li-takhfif-img">
                  <img src={require("./js-1.jpg")} alt="" />
                </div>

                <div className="div-pedar-emtyaz flex">
                  <a href="">آموزش جاواسکریپ با گرایش پایتون</a>
                  <div className="div-emtaz flex">
                    <span>امتیاز 3 از 27 رای</span>
                    <img src={require("./kindpng_115096.png")} alt="" />
                  </div>
                  <a className="a-price" href="">
                    2000.0000 نومان
                  </a>
                </div>
              </li>
            </ul>
            <div className="ul-takhfif2 flex">
              <a className="one2 a-takhfif2 flex" href="">
                <img className="img2" src={require("./php.webp")} alt="" />
                <h4>آموزش پایتون دوره مجازی ...</h4>
              </a>
              <a className="a-takhfif2 flex" href="">
                <img
                  className="img2"
                  src={require("./css-style-sheet.jpg")}
                  alt=""
                />
                <h4>آموزش پایتون دوره مجازی ...</h4>
              </a>
              <a className="a-takhfif2 flex" href="">
                <img className="img2" src={require("./js-1.jpg")} alt="" />
                <h4>آموزش پایتون دوره مجازی ...</h4>
              </a>
            </div>
          </div>
          <h3 className="h3-title">ما چه کمکی بهتون میکنیم؟</h3>
          <ul class="ul-icon flex">
            <li class="li-icon flex">
              <i class="fa fa-css3" aria-hidden="true"></i>
              <div>
                <h4>دوره های اختصاصی</h4>
                <p>با پشتیبانی و کیفیت بالا ارائه میده !</p>
              </div>
            </li>
            <li class="li-icon flex">
              <i class="fa fa-gg" aria-hidden="true"></i>
              <div>
                <h4>دوره های اختصاصی</h4>
                <p>با پشتیبانی و کیفیت بالا ارائه میده !</p>
              </div>
            </li>
            <li class="li-icon flex">
              <i className="fa fa-viacoin" aria-hidden="true"></i>
              <div>
                <h4>دوره های اختصاصی</h4>
                <p>با پشتیبانی و کیفیت بالا ارائه میده !</p>
              </div>
            </li>
            <li className="li-icon flex">
              <i className="fa fa-envira" aria-hidden="true"></i>
              <div>
                <h4>دوره های اختصاصی</h4>
                <p>با پشتیبانی و کیفیت بالا ارائه میده !</p>
              </div>
            </li>
          </ul>
          <ul className="ul2-amozesh flex">
            <li className="li2-amozesh flex">
              <img src={require("./1.jpg")} alt="" />
              <a href="">بهترین کد ادیتور آنلاین | کد ادیتور آنلاین چیست ؟</a>
              <p>
                کد ادیتور آنلاین یک ابزار برای ویرایش کردن کد در وب بوده که به
                صورت...
              </p>
              <a className="a-bishtar-bekhanid" href="">
                بیشتر بخوانید
              </a>
            </li>
            <li className="li2-amozesh flex">
              <img src={require("./2.jpg")} alt="" />
              <a href="">بهترین کد ادیتور آنلاین | کد ادیتور آنلاین چیست ؟</a>
              <p>
                کد ادیتور آنلاین یک ابزار برای ویرایش کردن کد در وب بوده که به
                صورت...
              </p>
              <a className="a-bishtar-bekhanid" href="">
                بیشتر بخوانید
              </a>
            </li>
            <li className="li2-amozesh flex">
              <img src={require("./3.jpg")} alt="" />
              <a href="">بهترین کد ادیتور آنلاین | کد ادیتور آنلاین چیست ؟</a>
              <p>
                کد ادیتور آنلاین یک ابزار برای ویرایش کردن کد در وب بوده که به
                صورت...
              </p>
              <a className="a-bishtar-bekhanid" href="">
                بیشتر بخوانید
              </a>
            </li>
            <li className="li2-amozesh flex">
              <img src={require("./4.jpg")} alt="" />
              <a href="">بهترین کد ادیتور آنلاین | کد ادیتور آنلاین چیست ؟</a>
              <p>
                کد ادیتور آنلاین یک ابزار برای ویرایش کردن کد در وب بوده که به
                صورت...
              </p>
              <a className="a-bishtar-bekhanid" href="">
                بیشتر بخوانید
              </a>
            </li>
            <li className="li2-amozesh flex">
              <img src={require("./5.jpg")} alt="" />
              <a href="">بهترین کد ادیتور آنلاین | کد ادیتور آنلاین چیست ؟</a>
              <p>
                کد ادیتور آنلاین یک ابزار برای ویرایش کردن کد در وب بوده که به
                صورت...
              </p>
              <a className="a-bishtar-bekhanid" href="">
                بیشتر بخوانید
              </a>
            </li>
            <li className="li2-amozesh flex">
              <img src={require("./6.jpg")} alt="" />
              <a href="">بهترین کد ادیتور آنلاین | کد ادیتور آنلاین چیست ؟</a>
              <p>
                کد ادیتور آنلاین یک ابزار برای ویرایش کردن کد در وب بوده که به
                صورت...
              </p>
              <a className="a-bishtar-bekhanid" href="">
                بیشتر بخوانید
              </a>
            </li>
          </ul>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <li className="li-amozesh li-swiper">
                <div className="div-img-amozesh">
                  <img src={require("./cec1e10e3be4.webp")} alt="" />
                  <a href="">
                    <i
                      className="fa fa-play i-for-amozesh"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                <h4>
                  <a href="">دوره جامع متخصص php [2022]</a>
                </h4>
                <div className="name-and-star flex">
                  <a href="">
                    <i className="fa fa-television" aria-hidden="true"></i> آرین
                    شجاعی
                  </a>
                  <img src={require("./kindpng_115096.png")} alt="" />
                </div>
                <div className="foot-amozesh flex">
                  <span>
                    <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                  </span>
                  <span>380,000</span>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <li className="li-amozesh li-swiper">
                <div className="div-img-amozesh">
                  <img src={require("./cec1e10e3be4.webp")} alt="" />
                  <a href="">
                    <i
                      className="fa fa-play i-for-amozesh"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                <h4>
                  <a href="">دوره جامع متخصص php [2022]</a>
                </h4>
                <div className="name-and-star flex">
                  <a href="">
                    <i className="fa fa-television" aria-hidden="true"></i> آرین
                    شجاعی
                  </a>
                  <img src={require("./kindpng_115096.png")} alt="" />
                </div>
                <div className="foot-amozesh flex">
                  <span>
                    <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                  </span>
                  <span>380,000</span>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="li-amozesh li-swiper">
                <div className="div-img-amozesh">
                  <img src={require("./cec1e10e3be4.webp")} alt="" />
                  <a href="">
                    <i
                      className="fa fa-play i-for-amozesh"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                <h4>
                  <a href="">دوره جامع متخصص php [2022]</a>
                </h4>
                <div className="name-and-star flex">
                  <a href="">
                    <i className="fa fa-television" aria-hidden="true"></i> آرین
                    شجاعی
                  </a>
                  <img src={require("./kindpng_115096.png")} alt="" />
                </div>
                <div className="foot-amozesh flex">
                  <span>
                    <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                  </span>
                  <span>380,000</span>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="li-amozesh li-swiper">
                <div className="div-img-amozesh">
                  <img src={require("./cec1e10e3be4.webp")} alt="" />
                  <a href="">
                    <i
                      className="fa fa-play i-for-amozesh"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                <h4>
                  <a href="">دوره جامع متخصص php [2022]</a>
                </h4>
                <div className="name-and-star flex">
                  <a href="">
                    <i className="fa fa-television" aria-hidden="true"></i> آرین
                    شجاعی
                  </a>
                  <img src={require("./kindpng_115096.png")} alt="" />
                </div>
                <div className="foot-amozesh flex">
                  <span>
                    <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                  </span>
                  <span>380,000</span>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="li-amozesh li-swiper">
                <div className="div-img-amozesh">
                  <img src={require("./cec1e10e3be4.webp")} alt="" />
                  <a href="">
                    <i
                      className="fa fa-play i-for-amozesh"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                <h4>
                  <a href="">دوره جامع متخصص php [2022]</a>
                </h4>
                <div className="name-and-star flex">
                  <a href="">
                    <i className="fa fa-television" aria-hidden="true"></i> آرین
                    شجاعی
                  </a>
                  <img src={require("./kindpng_115096.png")} alt="" />
                </div>
                <div className="foot-amozesh flex">
                  <span>
                    <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                  </span>
                  <span>380,000</span>
                </div>
              </li>
            </SwiperSlide>
            <SwiperSlide>
              <li className="li-amozesh li-swiper">
                <div className="div-img-amozesh">
                  <img src={require("./cec1e10e3be4.webp")} alt="" />
                  <a href="">
                    <i
                      className="fa fa-play i-for-amozesh"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>

                <h4>
                  <a href="">دوره جامع متخصص php [2022]</a>
                </h4>
                <div className="name-and-star flex">
                  <a href="">
                    <i className="fa fa-television" aria-hidden="true"></i> آرین
                    شجاعی
                  </a>
                  <img src={require("./kindpng_115096.png")} alt="" />
                </div>
                <div className="foot-amozesh flex">
                  <span>
                    <i className="fa fa-user-o" aria-hidden="true"></i> 4.913
                  </span>
                  <span>380,000</span>
                </div>
              </li>
            </SwiperSlide>
          </Swiper>
          <div className="footer">
            <ul className="ul-footer">
              <li className="li-footer">
                <h4>درباره ما</h4>
                <p>
                  وقتی تازه شروع به یادگیری برنامه نویسی کردم. یکی از مشکلاتی که
                  در فرآیند یادگیری داشتم، کمبود آموزش های خوب با پشتیبانی قابل
                  قبول بود که باعث شد اون موقع تصمیم بگیرم اگر روزی توانایی مالی
                  و فنی قابل قبولی داشتم یک وب سایت برای حل این مشکل راه اندازی
                  کنم! و خب امروز آکادمی آموزش برنامه نویسی سبزلرن به عنوان یک
                  آکادمی خصوصی فعالیت میکنه و این به این معنی هست که هر مدرسی
                  اجازه تدریس در اون رو نداره و باید از فیلترینگ های خاص آکادمی
                  سبزلرن رد شه! این به این معنی هست که ما برامون فن بیان و نحوه
                  تعامل مدرس با دانشجو بسیار مهمه! ما در آکادمی سبزلرن تضمین
                  پشتیبانی خوب و با کیفیت رو به شما میدیم . چرا که مدرسین وب
                  سایت سبزلرن حتی برای پشتیبانی دوره های رایگان شون هم هزینه
                  دریافت میکنند و متعهد هستند که هوای کاربر های عزیز رو داشته
                  باشند !
                </p>
              </li>
              <li className="li-footer flex">
                <h4>آخرین مطالب</h4>{" "}
                <Link className="link-footer" to={"/A"}>
                  بررسی بازار کار جاوا اسکریپت | تمام روش‌ های کسب درآمد از جاوا
                  اسکریپت
                </Link>
                <Link className="link-footer" to={"/A"}>
                  معرفی بهترین دوره فرانت‌ اند | دوره جامع فرانت‌ اند
                </Link>
                <Link className="link-footer" to={"/A"}>
                  افزونه کروم برای طراحان وب | افزونه ‌های مهم کروم در برنامه
                  ‌نویسی
                </Link>
                <Link className="link-footer" to={"/A"}>
                  کلین کد چیست ؟ | مزایا و اصول کد ‌نویسی تمیز چیست؟
                </Link>
                <Link className="link-footer" to={"/A"}>
                  بررسی تفاوت ui و UI | ux بهتر است یا UX ؟
                </Link>
              </li>
              <li className="li-footer">
                <h4>دسترسی سریع</h4>
                <div className="div-footer-1">
                  <Link className="link-footer-dastresi" to={"/b"}>
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>{" "}
                    آموزش HTML
                  </Link>
                  <Link className="link-footer-dastresi" to={"/b"}>
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>{" "}
                    آموزش CSS
                  </Link>
                  <Link className="link-footer-dastresi" to={"/b"}>
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>{" "}
                    آموزش جاوا{" "}
                  </Link>
                  <Link className="link-footer-dastresi" to={"/b"}>
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>{" "}
                    آموزش استرپ
                  </Link>
                  <Link className="link-footer-dastresi" to={"/b"}>
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>{" "}
                    آموزش ری اکت
                  </Link>
                  <Link className="link-footer-dastresi" to={"/b"}>
                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>{" "}
                    آموزش پایتون
                  </Link>
                </div>
                <Link className="link-footer-gavanin-darbare" to={"/c"}>
                  {" "}
                  قوانین و مقررات
                </Link>
                <br />
                <br />
                <Link className="link-footer-gavanin-darbare" to={"/c"}>
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu-responsiv">
          <ul className="ul-menu-footer">
            <li>
              {" "}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#53CEF7" : "#F0F2F7",
                    color: isActive ? "white" : "black",
                  };
                }}
                className="navlink-footer"
                to={"/home"}
              >
                <i class="fa fa-home" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#53CEF7" : "#F0F2F7",
                    color: isActive ? "white" : "black",
                  };
                }}
                className="navlink-footer"
                to={"/Frontend"}
              >
                <i class="fa fa-code" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#53CEF7" : "#F0F2F7",
                    color: isActive ? "white" : "black",
                  };
                }}
                className="navlink-footer"
                to={"/magalat"}
              >
                <i class="fa fa-archive" aria-hidden="true"></i>
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "#53CEF7" : "#F0F2F7",
                    color: isActive ? "white" : "black",
                  };
                }}
                className="navlink-footer"
                to={"/security"}
              >
                <i class="fa fa-shield" aria-hidden="true"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
