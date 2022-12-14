import logo from '../../images/logo.png'
import {HiMenuAlt4} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { useContext, useState } from 'react';
import Modal from "./Modal";
import {TransactionContext} from "../context/TransactionContext"



 
const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
     const [open,setOpen] = useState(false);
     const [action,setAction] = useState('create');
     const isLoading = false;

     const {formData,setFormData,handleChange,sendTransaction} = useContext(TransactionContext);
      const handleFormOpen = (action) => {
        console.log(action,'the form opener')
      setOpen(true)
      setAction(action)
    }

     const handleSubmit = (e) => {

      // const {addressTo,amount,keyword,message,contractName,blockchainSymbol} = formData;
      e.preventDefault();
      
      sendTransaction();
    }
  const NavBarItem = ({title,classprops}) => {
    return (
        <li className={`mx-4 cursor-pointer ${classprops}`} onClick={()=>title.split(' ')[0] !== 'Show' && handleFormOpen(title.split(' ')[0])}>{title}</li>
    )
    
}
    return (
        <nav className="w-full main flex justify-between  items-center p-4">
             <div className="md:flex-1 flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>


            <ul className="text-white md:flex hidden list-none flex-row justify-around items-center flex-1">
                   {["Create contract", "Mint nft", "Exchange Nft", "Show Nfts"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg"  />,
            )}
            </ul>

            <div className="flex relative">
            {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}

{toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Create contract", "Mint nft", "Exchange Nft", "Show Nfts"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" onClick={()=>handleFormOpen(item)} />,
            )}
          </ul> 
        )}
            </div> 

{
          open ? (
            <Modal isLoading={isLoading} setOpen={setOpen} handleSubmit = {handleSubmit} handleChange={handleChange} action={action} /> 
          ): null
        }
        </nav> 
    )
}

export default Navbar 
