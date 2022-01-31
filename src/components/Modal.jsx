import React from 'react';

const Modal = () => {
  <div className=" sm:w-80 w-full h-96 flex flex-col justify-start px-3 py-1 items-center blue-glassmorphism">
              <h2 className="text-center font-bold text-white">Exhange tokens</h2>
              <div className="flex items-center justify-around">
      {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                
                  className="text-white w-32 mt-2 mx-1 border-[1px] p-1 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded cursor-pointer"
                >
                  Send
                </button>
              )}
              {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  
                  className="text-white w-32 mt-2 border-[1px] p-1   border-[#3d4f7c] hover:bg-[#3d4f7c] rounded cursor-pointer"
                >
                  Receive
                </button>
              )}
              </div>
             
                <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
                 {isLoading
              ? <Loader />
              : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-32 mt-2 border-[1px] p-1 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded cursor-pointer"
                >
                  Done
                </button>
              )}
            </div>
};

export default Modal;
