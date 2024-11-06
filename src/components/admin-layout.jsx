import { useState } from 'react';
import { 
    DashboardIcon,
    VerificationIcon,
    UserIcon,
    WalletIcon,
    SettingIcon,
    PaymentIcon,
    StatsIcon,
    BellIcon,
    BeIcon,
    Icon,
    MenuOpenIcon,
    MenuCloseIcon,
    DropDownIcon,
} from './icons';
import logo from '../assets/logo.png';
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    sidebarClasses
} from 'react-pro-sidebar';
import LineChart from './LineChart'

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isOpenFirst, setIsOpenFirst] = useState(false);
    const [isOpenSecond, setIsOpenSecond] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleFirstDropdown = () => {
        setIsOpenFirst(prev => !prev);
        setIsOpenSecond(false); // Close the other dropdown when opening this one
    };

    const toggleSecondDropdown = () => {
        setIsOpenSecond(prev => !prev);
        setIsOpenFirst(false); // Close the other dropdown when opening this one
    };


    return (
        <div className="flex w-full h-screen p-4">
            {/* Sidebar */}
            <div
                className={`bg-[#ffffff] 
                    ${isSidebarOpen ? 'w-[229px]' : 'w-[80px]'}
                    h-full transition-all duration-300 overflow-hidden
                    lg:w-[229px] lg:block ${isSidebarOpen ? 'block' : 'sm:hidden'}`}
            >
                {/* ///////////Logo and clolappsible////// */}
                 <div className='fixed'>
                    {/* /////Logo///// */}
                    <div className="flex flex-col items-center justify-center h-[15%] p-4">
                        <img src={logo} alt="logo" className={`h-auto transition-all duration-300 ${isSidebarOpen ? 'w-15' : 'w-8'}`} />
                        {isSidebarOpen && <h2 className="ml-2 font-semibold text-center">Admin Portal</h2>}
                    </div>
                    {/* ///////clolappsible///// */}
                    <div className="h-[85%] scrollbar-thin overflow-y-scroll pl-2 fixed ">
                        <Sidebar  
                            width="100%"
                            rootStyles={{
                                [`.${sidebarClasses.container}`]: {
                                    height: '90%',
                                    backgroundColor: '#ffffff'
                                },
                            }}
                        >
                            <Menu
                                menuItemStyles={{
                                    button: {
                                        [`&.active`]: {
                                            backgroundColor: '#fcfcfc',
                                            color: '#D9912B',
                                        },
                                    },
                                }}
                            >
                                <MenuItem
                                    icon={<DashboardIcon fill={location.pathname === '/' ? '#D9912B' : '#686677'} />}
                                >
                                    {isSidebarOpen && "Dashboard"}
                                </MenuItem>
                                <MenuItem icon={<VerificationIcon fill={location.pathname.includes('api') ? '#D9912B' : '#686677'} />}>
                                    {isSidebarOpen && "Verification"}
                                </MenuItem>
                                <SubMenu label={isSidebarOpen ? "Users" : ""} icon={<UserIcon fill={location.pathname.includes('api') ? '#D9912B' : '#686677'} />}>
                                    {isSidebarOpen && <MenuItem>Admin</MenuItem>}
                                    {isSidebarOpen && <MenuItem>Regular User</MenuItem>}
                                </SubMenu>
                                <SubMenu label={isSidebarOpen ? "Wallet" : ""} icon={<WalletIcon fill={location.pathname.includes('api') ? '#D9912B' : '#686677'} />}>
                                    {isSidebarOpen && <MenuItem>View Balance</MenuItem>}
                                    {isSidebarOpen && <MenuItem>Transaction History</MenuItem>}
                                    {isSidebarOpen && <MenuItem>Deposit Funds</MenuItem>}
                                    {isSidebarOpen && <MenuItem>Withdraw Funds</MenuItem>}
                                </SubMenu>
                                <SubMenu label={isSidebarOpen ? "Payments" : ""} icon={<PaymentIcon fill={location.pathname.includes('api') ? '#D9912B' : '#686677'} />}>
                                    {isSidebarOpen && <MenuItem>Make Payment</MenuItem>}
                                    {isSidebarOpen && <MenuItem>Payment History</MenuItem>}
                                    {isSidebarOpen && <MenuItem>Payment Methods</MenuItem>}
                                    {isSidebarOpen && <MenuItem>Invoices</MenuItem>}
                                </SubMenu>
                                <MenuItem icon={<StatsIcon fill={location.pathname.includes('api') ? '#D9912B' : '#686677'} />}>
                                    {isSidebarOpen && "Stats"}
                                </MenuItem>
                                <MenuItem icon={<SettingIcon fill={location.pathname.includes('api') ? '#D9912B' : '#686677'} />}>
                                    {isSidebarOpen && "Settings"}
                                </MenuItem>
                            </Menu>
                        </Sidebar>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className='flex flex-col justify-between items-center h-full mb-4 w-full pl-4 pr-4'>
                <div className="lg:hidden"> 
                    <button 
                        onClick={toggleSidebar}
                        className=" bg-gray-200 rounded-md shadow-md"
                        aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
                    >
                        {isSidebarOpen ? <MenuCloseIcon /> : <MenuOpenIcon />}
                    </button>
                </div>

                <div className={`bg-[#ffffff] transition-all flex-1 ${isSidebarOpen ? 'w-[calc(100%-50px)]' : 'w-[calc(100%-80px)] lg:w-[calc(100%-50px)]'}`}>
                    <div className="flex justify-between items-center h-[50px] mb-7 mt-3">
                        <div className="w-[30%]">
                            <Icon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />   
                        </div>
                        <div className={`w-full flex gap-4 ${isSidebarOpen ? 'sm:w-[15%]' : 'sm:w-auto'} sm:mt-2 pl-20`}>
                            <BeIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                            <BellIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                        </div>
                    </div>
                    
                    {/* Grid layout for small screens */}
                    <div className="w-full space-y-[45px]">
                        {/* First Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:h-[142.51px] gap-4 sm:gap-[45px]">
                            {/* Fans */}
                            <div className="p-4 rounded-lg shadow-md flex flex-col bg-[#FBF2E1] sm:h-[142.51px]">
                                <div className="flex flex-row items-center justify-between w-full">
                                    <div className="flex flex-row items-center">
                                        <UserIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                                        <h2 className="text-sm sm:text-base ml-2">Fans</h2>
                                    </div>
                                    <div className="flex items-center">
                                    <p className="text-xs sm:text-sm">Online: <span>5k</span></p>
                                </div>
                            </div>
                                <h1 className="w-full mt-2 sm:mt-4 font-extrabold text-base sm:text-lg">10,000</h1>
                                <div className="flex w-full gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm">
                                    <p>Active: <span>8020</span></p>
                                    <p>|</p>
                                    <p>Inactive: <span>1980</span></p>
                                </div>
                            </div>
                            
                            {/* Celebrities */}
                            <div className="p-4 rounded-lg shadow-md flex flex-col bg-[#FBF2E1] sm:h-[142.51px]">
                                <div className="flex flex-row items-center justify-between w-full">
                                    <div className="flex flex-row items-center">
                                        <UserIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                                        <h2 className="text-sm sm:text-base ml-2">Celebrities</h2>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-xs sm:text-sm">Online: <span>200</span></p>
                                    </div>
                                </div>
                                <h1 className="w-full mt-2 sm:mt-4 font-extrabold text-base sm:text-lg">900</h1>
                                <div className="flex w-full gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm">
                                    <p>Active: <span>900</span></p>
                                    <p>|</p>
                                    <p>Inactive: <span>0</span></p>
                                </div>
                            </div>

                            {/* NGOs */}
                            <div className="p-4 rounded-lg shadow-md flex flex-col bg-[#FBF2E1] sm:h-[142.51px]">
                                <div className="flex flex-row items-center justify-between w-full">
                                    <div className="flex flex-row items-center">
                                        <UserIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                                        <h2 className="text-sm sm:text-base ml-2">NGO's</h2>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-xs sm:text-sm">Online: <span>2</span></p>
                                    </div>
                                </div>
                                <h1 className="w-full mt-2 sm:mt-4 font-extrabold text-base sm:text-lg">10</h1>
                                <div className="flex w-full gap-2 sm:gap-4 mt-4 sm:mt-6 text-xs sm:text-sm">
                                    <p>Active: <span>10</span></p>
                                    <p>|</p>
                                    <p>Inactive: <span>0</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Second Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 w-full sm:h-[142.51px] gap-4 sm:gap-[45px]">
                            <div className="border border-[#D9912B] rounded-lg bg-white p-4 sm:h-[142.51px]">
                                <p className="text-[#686677]">Total Wallet Balance (NGN)</p>
                                <p className="mt-10 text-[#D9912B] font-bold">NGN1,000,000,000.0</p>
                            </div>
                            <div className="border border-[#D9912B] rounded-lg bg-white p-4 sm:h-[142.51px]">
                                <p className="text-[#686677]">Total Wallet Balance ($)</p>
                                <p className="mt-10 text-[#D9912B] font-bold">$10,000.00</p>
                            </div>
                            <div className="border border-[#D9912B] rounded-lg bg-white p-4 sm:h-[142.51px]">
                                <p className="text-[#686677]">Total Platform Requests</p>
                                <p className="mt-10 text-[#D9912B] font-bold">10,000</p>
                            </div>
                        </div>
                    </div>

                    {/* //////////////Button//////////////// */}
                    <div className='w-full mt-8'>
                        <div className='w-[65%]'>
                            <div className='flex justify-between  items-center flex-col sm:flex-row mt-12'>
                                <h1 className='font-[Aeonik] font-bold text-[#171717]'>Service Report</h1>
                                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                                    {/* First Button */}
                                    <div className="relative inline-block">
                                        <button
                                            onClick={toggleFirstDropdown}
                                            className="rounded-full w-20 h-10 border border-1 flex items-center justify-center border-[#D9912B]"
                                        >   
                                            <p>NGN</p>
                                            <DropDownIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                                        </button>

                                        {isOpenFirst && (
                                            <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                                                <ul className="py-1">
                                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">NGN</li>
                                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                    
                                    {/* Second Button */}
                                    <div className="relative inline-block">
                                        <button
                                            onClick={toggleSecondDropdown}
                                            className="rounded-full w-35 h-10 border border-1 flex items-center justify-center border-[#D9912B]"
                                        >   
                                            <p className=''>Last Months</p>
                                            <DropDownIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                                        </button>

                                        {isOpenSecond && (
                                            <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
                                                <ul className="py-1">
                                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">NGN</li>
                                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
                                                    <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='flex flex-col justify-center items-center'>
                                    <p className='text-[#979797] font-[Aeonik] text-[20px] leading-[44px] mt-6'>
                                        Commission Recieved
                                    </p>
                                    <p className='font-[Aeonik] text-[#D9912B] leading[34.813px] font-medium'>
                                        NGN10,000
                                    </p>
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <p className='font-[Aeonik] leading-[37.134px] text-[#979797] font-normal'>
                                        Successful Request
                                    </p>
                                    <p className='font-[Aeonik] text-[#D9912B] leading[34.813px] font-medium'>
                                        900
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Graph */}
                        <div className=''>
                            <LineChart />
                        </div>
                        {/* Graph end */}
                    </div>
                    {/* ////////////////Button end///////////////////// */}
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
