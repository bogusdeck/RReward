import React from "react";

const PostReview = () => {
  return (
    <div>
      <h2 className=" md:col-span-5 font-bold text-3xl text-center text-gray-900">Product Review</h2>
      
      <div class="min-h-screen bg-gray-900 flex items-center justify-center">
  
  
  <form class="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-6">
    
    
    <div class="md:col-span-5">
      <label class="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Poduct Name">
       Product Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proname" type="text" placeholder="Product Name" />
    </div>


    <div class="md:col-span-5">
      <label class="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Purchase Date">
        Purchase Date
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="purdate" type="date"/>
    </div>

    <div class="md:col-span-5">
      <label class="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Product Review">
        Product Review
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proreview" type="textarea" placeholder="Product Review"/>
    </div>

    <div class="md:col-span-5">
      <label class="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Product Image">
        Product Image
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proreview" type="file" placeholder="Choose Image"/>
    </div>
    
    <div class="md:col-span-5 text-center">
      <button class="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2" type="button">
        Post Review
      </button>
    </div>
    
    
  </form>
</div>
    </div>
  );
};

export default PostReview;
