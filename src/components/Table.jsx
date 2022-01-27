import React from 'react';

const Table = () => {
  return (
    
    <div class="flex justify-flex items-center flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-gray-900 ">
            <table class="min-w-full divide-x border border-gray-900 divide-gray-900">
              <thead class="bg-black">
                <tr>
                  <th scope="col" class="px-3 py-1 border-gray-900 border text-left text-xs  text-white uppercase tracking-wider">
                    Address From
                  </th>
                  <th scope="col" class="px-3 py-1 border-gray-900 border text-left text-xs  text-white uppercase tracking-wider">
                    Address To
                  </th>
                  <th scope="col" class="px-3 py-1 border-gray-900 border text-left text-xs  text-white uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" class="px-3 py-1 border-gray-900 border text-left text-xs  text-white uppercase tracking-wider">
                    Charge Fees
                  </th>
                  <th scope="col" class="px-3 py-1 border-gray-900 border text-left text-xs  text-white uppercase tracking-wider">
                    Token
                  </th>
                  <th scope="col" class="px-3 py-1 border-gray-900 border text-left text-xs  text-white uppercase tracking-wider">
                    Timestamp
                  </th>
                  {/* <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th> */}
                </tr>
              </thead>
              <tbody class="bg-black divide-y divide-gray-200">
                <tr>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    <div class="flex items-center">
                      {/* <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                      </div> */}
                      <div class="ml-4">
                        <div class="text-sm font-medium text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                        </div>
                        {/* <div class="text-sm text-white">
                          jane.cooper@example.com
                        </div> */}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    <div class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    {/* <div class="text-sm text-white">Optimization</div> */}
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    {/* <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span> */}
                    <span class="text-white text-xs">20 ISH</span>
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  {/* <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td> */}
                </tr>
                <tr>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    <div class="flex items-center">
                      {/* <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                      </div> */}
                      <div class="ml-4">
                        <div class="text-sm font-medium text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                        </div>
                        {/* <div class="text-sm text-white">
                          jane.cooper@example.com
                        </div> */}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    <div class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    {/* <div class="text-sm text-white">Optimization</div> */}
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    {/* <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span> */}
                    <span class="text-white text-xs">20 ISH</span>
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  {/* <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td> */}
                </tr>
                <tr>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    <div class="flex items-center">
                      {/* <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt=""/>
                      </div> */}
                      <div class="ml-4">
                        <div class="text-sm font-medium text-white">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                        </div>
                        {/* <div class="text-sm text-white">
                          jane.cooper@example.com
                        </div> */}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    <div class="text-sm text-white">Lorem ipsum dolor sit amet consectetur adipisicing</div>
                    {/* <div class="text-sm text-white">Optimization</div> */}
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap">
                    {/* <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      Active
                    </span> */}
                    <span class="text-white text-xs">20 ISH</span>
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  <td class="px-6 py-2 border border-gray-900 whitespace-nowrap text-sm text-white">
                    Admin
                  </td>
                  {/* <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                  </td> */}
                </tr>
    
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Table;
