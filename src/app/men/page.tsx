import Link from "@/app/compnent/Card"
export default function MEN(){
  return(
  <main>
  
    <Link/>
    <div className=" flex bg-slate-400  w-full  justify-between items-center">
        <div className="text-2xl  rounded-full font-serif ">
        <div className=" flex">
        <img src="logo.png.png"className="w-16 h-16 rounded-full  "/>
        <h1 className="pt-5 "><span className="text-green-400">ONLINE<span className="ml-2 text-green-600">PAY</span></span></h1> 
        </div>
        </div>
        <ul className="text-2xl flex ml-[7%] " >
        <li className="  font-sans text-black m-2 hover:text-white  "><a href="/home"className="   hover:bg-green-600 pl-2 pr-2  rounded-t rounded-r rounded-b  hover:underline   hover:underline-offset-8 "    >Home</a></li>
        <li className="  font-sans text-black m-2 bg-blue-500 pl-2 pr-2  rounded-t rounded-r rounded-b "><a href="/men"   >MEN</a></li>
        <li className="  font-sans text-black m-2  hover:text-white "><a href="/women"  className="    hover:bg-green-600 pl-2 pr-2  rounded-t rounded-r rounded-b  hover:underline   hover:underline-offset-8   ">WOMEN</a></li>
        <li className="  font-sans text-black  m-2 hover:text-white "><a href="/sale"   className="     hover:bg-green-600 pl-2 pr-2  rounded-t rounded-r rounded-b  hover:underline   hover:underline-offset-8   ">SALE</a></li>
        </ul>
        <div  className=" flex w-4/5 ml-3  mr-3 hover:border-2 border-black">
        <input  type="text" placeholder="Search in PayOnilne" className="pr-72 rounded-s  "/>
        <div className="bg-white  rounded-e pr-2 ">
        <button className="fa fa-search p-2  !text-1xl"></button>
        </div>
        </div>
        <div className=" flex   justify-around">
        <button className="fa fa-sign-in !text-3xl hover:text-white hover:underline "><a href="/sign"></a></button> 
        <button className="fa fa-sign-out !text-3xl m-3  hover:text-white hover:underline"></button> 
        </div>
  </div>
  <div className=" flex gap-x-7 mt-7  pl-5 ">
          
          <div className="  w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t  rounded-b">
          <img src="1.png"alt="my" className="  h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">White-TShrit-For-Kids/Boy's</h1>
         <h1 className=" flex pl-6 "> $ :<h1 className="pl-1 flex">8,536.00</h1>
              <p className=" font-light  text-clip flex text-xs"></p></h1>
              <span className="fa fa-star checked text-yellow-400 pl-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex  w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className="   w-72 h-96   px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="2.png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear </h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="3.png"alt="my" className="h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96 mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="4.png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
</div>
<div className=" flex gap-x-7 mt-7  pl-5 ">
         
          <div className="  w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t  rounded-b">
          <img src="5.png"alt="my" className="  h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">White-TShrit-For-Kids/Boy's</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">8,536.00</h1>
              <p className=" font-light  text-clip flex text-xs  "></p></h1>
              <span className="fa fa-star checked text-yellow-400 pl-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex  w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className="   w-72 h-96   px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="6.png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear </h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="7.png"alt="my" className="h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96 mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="8.png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
</div>
<div className=" flex gap-x-7 mt-7  pl-5 ">
          
          <div className="  w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t  rounded-b">
          <img src="9.png"alt="my" className="  h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">White-TShrit-For-Kids/Boy's</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">8,536.00</h1>
              <p className=" font-light  text-clip flex text-xs  "></p></h1>
              <span className="fa fa-star checked text-yellow-400 pl-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex  w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className="   w-72 h-96   px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="10.png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear </h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="11.png"alt="my" className="h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96 mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="12.png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
</div>
<div className=" flex gap-x-7 mt-7  pl-5 ">
        
          <div className="  w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t  rounded-b">
          <img src="13.png"alt="my" className="  h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">White-TShrit-For-Kids/Boy's</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">8,536.00</h1>
              <p className=" font-light  text-clip flex text-xs  "></p></h1>
              <span className="fa fa-star checked text-yellow-400 pl-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex  w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className="   w-72 h-96   px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="14.png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear </h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src="15.png"alt="my" className="h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96 mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
</div>
<div className=" flex gap-x-7 mt-7  pl-5 ">
        
          <div className="  w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t  rounded-b">
          <img src=".png"alt="my" className="  h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">White-TShrit-For-Kids/Boy's</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">8,536.00</h1>
              <p className=" font-light  text-clip flex text-xs  "></p></h1>
              <span className="fa fa-star checked text-yellow-400 pl-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex  w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className="   w-72 h-96   px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear </h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className="h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96 mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
</div>
<div className=" flex gap-x-7 mt-7  pl-5 ">
          <div className="  w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t  rounded-b">
          <img src=".png"alt="my" className="  h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">White-TShrit-For-Kids/Boy's</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">8,536.00</h1>
              <p className=" font-light  text-clip flex text-xs  "></p></h1>
              <span className="fa fa-star checked text-yellow-400 pl-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex  w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className="   w-72 h-96   px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear </h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className="h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96 mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
</div>
<div className=" flex gap-x-7 mt-7  pl-5 ">
          <div className="  w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t  rounded-b">
          <img src=".png"alt="my" className="  h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">White-TShrit-For-Kids/Boy's</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">8,536.00</h1>
              <p className=" font-light  text-clip flex text-xs  "></p></h1>
              <span className="fa fa-star checked text-yellow-400 pl-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex  w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className="   w-72 h-96   px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear </h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96  mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className="h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
     <div className=" w-72 h-96 mt-1 px-1 py-1 rounded-r rounded-t rounded-b">
         <img src=".png"alt="my" className=" h-52  w-80  rounded-r-xl rounded-t-xl  rounded-b-xl"/>
         <h1 className="text-1xl pl-6 mt-3 font-semibold">World Wear Footwear</h1>
         <h1 className=" flex pl-6"> $ :<h1 className="pl-1 flex">5,336.00</h1>
              <p className=" font-light  text-clip flex text-xs mt-1 "></p></h1>
              <span className="fa fa-star checked text-yellow-400 ml-6"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star checked text-yellow-400"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star flex">2762 Ratings</span>
              <button className=" flex w-52 h-9 mt-2 ml-4 bg-red-500  text-white rounded-r rounded-t  rounded-b  justify-center items-center">Add To Card</button>
     </div> 
</div>
<h1  className=' bg-slate-400 w-5/5 h-5/5 pl-7'>
        <div className=' pl-5 pt-44 text-2xl'>Customer Care
       <ul className=' mt-6 font-extralight'>
        <li> <a href='#'></a>Help Center     </li>
        <li> <a href='#'></a>How to Buy </li>
        <li> <a href='#'></a>Corporate & Bulk Purchasing </li>
        <li> <a href='#'></a> Returns & Refunds          </li>
        <li> <a href='#'></a>PayOnline Shop       </li>
        <li> <a href='#'></a> </li>
        <li> <a href='#'></a>Purchase Protection    </li>
        <li> <a href='#'></a> PayOnline Pick up Point</li>
        </ul>
        </div>
        <div className='  w-1/2 h-24 '></div>
        <div className='  w-1/2 h-24 '></div>
        <div className='  w-1/2 h-24 '></div>
      </h1>
</main>
    
  )
}