import Link from"../compnent/Card"
export default function sign(){
  return(
    <main>
       <div className=" flex bg-slate-400  w-full  justify-between items-center">
        <div className="text-2xl  rounded-full font-serif ">
        <div className=" flex">
        <img src="logo.png.png"className="w-16 h-16 rounded-full  "/>
        <h1 className="pt-5 "><span className="text-green-400">ONLINE<span className="ml-2 text-green-600">PAY</span></span></h1> 
        </div>
        </div>
        <ul className="text-2xl flex ml-[7%] " >
        <li className="  font-sans text-black m-2   bg-blue-500 pl-2 pr-2  rounded-t rounded-r rounded-b"><a href="/home" >Home</a></li>
        <li className="  font-sans text-black m-2  hover:text-white  "><a href="/men"   className="   hover:bg-green-600 pl-2 pr-2  rounded-t rounded-r rounded-b  hover:underline   hover:underline-offset-8    ">MEN</a></li>
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
   <main className=" bg-slate-200 w-screen h-screen pt-6">
 <div className="  bg-white font-semibold  text-2xl w-[40%] h-96 box-shadow shadow-white ml-[27%]    border-2 border-b-gray-400  border-t-gray-400  border-l-gray-400 border-r-gray-400">
  <div className=" flex">
  <img src="logo.png.png"className="w-16 h-16 rounded-full  "/>
  <h1 className="  pt-5"><span className="text-green-400">ONLINE<span className="ml-2 text-green-600">PAY</span></span></h1> 
   </div>
  <div className="flex pl-3  mt-3">
    <Link/>
  <button className=" flex  w-52 h-9 mt-2 m-4 bg-black  text-white    rounded-r-2xl rounded-l-2xl  justify-center items-center"><span className="fa fa-user !text-2xl "><span className=" ml-2">Phone/Emali</span></span></button>
  <button className=" flex  w-52 h-9 mt-2 m-4 bg-blue-500  text-white rounded-r-2xl rounded-l-2xl  justify-center items-center"><span className=" fa fa-google !text-2xl"><span className=" ml-2">GOOGLE</span></span></button>
  </div>
  <div>
  <h1></h1>
  <input type="text" placeholder="" />
  <input type="text" placeholder="" />
 </div>
 </div>
 </main>
 </main>
  )
}