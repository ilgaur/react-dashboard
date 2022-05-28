import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider'; 
const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const activeLink = 'flex items-center w-40 gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const normalLink = 'flex items-center w-40 gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-lg hover:bg-gray-200 text-gray-700 dark:text-gray-200 dark:hover:text-black m-2';
  return ( 
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
        <div className="display: inline-flex">
          <Link to ="/" onClick={() => { setActiveMenu(false) }} className="flex inline-flex items-center gap-3 ml-3 mt-4
           flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware /> <span>Shoppy</span>
          </Link>
          <div className="pl-5 p-5 mt-6 ml-14">
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button"
            onClick={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)}
            className="text-xl rounded-full hover:bg-light-grayblock md:hidden">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
          </div>
        </div>  
        <div className="mt-10">
          {links.map((item) => (
            <div key={item.title}>
              <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                {item.title}
              </p>  
              {item.links.map((link) => (
                <div className="flex">
                <NavLink to={`/${link.name}`}
                key={link.name}
                onClick={() => {}}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                >
                  <div className="mt-1 pl-2">
                  {link.icon}
                  </div>
                  <span className="capitalize">
                  {link.name}
                  </span>
               
                </NavLink>
                </div>
              ))}
            </div>
          ))}
        </div>
        </div>
        </>)}
    </div>
  )
}

export default Sidebar