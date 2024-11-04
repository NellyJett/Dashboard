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
    MenuCloseIcon
} from './icons';
import logo from '../assets/logo.png';
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    sidebarClasses
} from 'react-pro-sidebar';

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
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
                {/* Logo Section */}
                <div className="flex flex-col items-center justify-center h-[15%] p-4">
                    <img src={logo} alt="logo" className={`h-auto transition-all duration-300 ${isSidebarOpen ? 'w-15' : 'w-8'}`} />
                    {isSidebarOpen && <h2 className="ml-2 font-semibold text-center">Admin Portal</h2>}
                </div>
                
                {/* Collapsible Menu */}
                <div className="h-[85%] scrollbar-thin overflow-y-scroll pl-2">
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

            {/* Main Content */}
            <div className='flex flex-col justify-between items-center h-full mb-4 w-full'>
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
                    <div className="flex justify-between items-center h-[50px] mb-7 mt-5">
                        <div className="w-[30%]">
                            <Icon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />   
                        </div>
                        <div className={`w-full flex gap-4 ${isSidebarOpen ? 'sm:w-[15%]' : 'sm:w-auto'} sm:mt-2 pl-20`}>
                            <BeIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                            <BellIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                        </div>
                    </div>
                    
                    {/* Grid layout for small screens */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-[45px] h-[142.51px] w-full ">
                        <div className=" p-4 rounded-lg shadow-md flex flex-col bg-[#FBF2E1] h-[142.51px]">
                            <div className='flex flex-row justify-between w-full h-[50px]'>
                                <div className='flex flex-row '>
                                    <UserIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                                    <h2>Celebrities</h2>
                                </div>
                                <div>
                                    <p>Online: <span>5k</span></p>
                                </div>
                            </div>
                            
                            <h1 className='w-full h-[50px] mt-4 font-extrabold size-10'>10,000</h1>
                            <div className='flex w-full gap-4 mt-8'>
                                <p>Active: <span>8020</span></p>
                                <p>|</p>
                                <p>Inactive: <span>1980</span></p>
                            </div>
                                
                        </div>
                        <div className=" p-4 rounded-lg shadow-md flex flex-col bg-[#FBF2E1] h-[142.51px]">
                            <div className='flex flex-row justify-between w-full h-[50px]'>
                                <div className='flex flex-row '>
                                    <UserIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                                    <h2>Celebrities</h2>
                                </div>
                                <div>
                                    <p>Online: <span>200</span></p>
                                </div>
                            </div>
                            
                            <h1 className='w-full h-[50px] mt-4 font-extrabold size-10'>900</h1>
                            <div className='flex w-full gap-4 mt-8'>
                                <p>Active: <span>900</span></p>
                                <p>|</p>
                                <p>Inactive: <span>0</span></p>
                            </div>
                            
                        </div>
                        <div className=" p-4 rounded-lg shadow-md flex flex-col bg-[#FBF2E1] h-[142.51px]">
                            <div className='flex flex-row justify-between w-full h-[50px]'>
                                <div className='flex flex-row '>
                                    <UserIcon fill={location.pathname.includes('api') ? "#D9912B" : "#686677"} />
                                    <h2>NGO's</h2>
                                </div>
                                <div>
                                    <p>Online: <span>2</span></p>
                                </div>
                            </div>
                            
                            <h1 className='w-full h-[50px] mt-4 font-extrabold size-10'>10</h1>
                            <div className='flex w-full gap-4 mt-8'>
                                <p>Active: <span>10</span></p>
                                <p>|</p>
                                <p>Inactive: <span>0</span></p>
                            </div>
                            
                        </div>
                    </div>
                    <div className='grid grid-col-1 sm:grid-cols-3 w-full h-[142.51px] gap-[45px] mt-[115.75px]'>
                        <div className='border border-1 border-[#D9912B] rounded-[14.84px] bg-[#ffffff] p-4'>
                            <div>
                                <p className='text-gray-400'>Total Wallet</p>
                                <p className='text-gray-400'>Ballance (NGN)</p>
                            </div>
                            <div className='mt-10'>
                                <p className='text-[#D9912B]'>NGN1,000,000,000.0</p>
                            </div>
                        </div>
                        <div>2</div>
                        <div>3</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
