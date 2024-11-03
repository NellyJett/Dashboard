
import { 
    DashboardIcon,
    VerificationIcon,
    UserIcon,
    WalletIcon,
    SettingIcon,
    PaymentIcon,
 } from './icons'
import logo from '../assets/logo.png'
import {
    Sidebar,
    Menu,
    MenuItem,
    SubMenu,
    sidebarClasses
} from 'react-pro-sidebar'
const AdminLayout = () =>{
    return(
        <>
        <div className='flex w-full h-screen'>
            <div className='bg-[#ffffff] w-[229px] h-full'>
                <div className='flex flex-col h-[15%] w-full place-content-center items-center justify-center'>
                    <img src={logo} alt="logo" className='w-auto h-auto self-center'/>
                    <h2 className='self-center ml-[-2px] font-semibold text-start'>Admin Portal</h2>
                </div>
                <div className='h-[85%] scrollbar-thin overflow-y-scroll'>
                    <Sidebar  
                        width='100%'
                        rootStyles={{
                            [`.${sidebarClasses.container}`]: {
                              height: '90%',
                              backgroundColor: '#ffffff'
                            },
                        }}>
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
                                // component={<Link to={'/'} />}
                                // active={location.hash === '/' ? true : false}
                            >
                                Dashboard
                            </MenuItem>
                        </Menu>
                        <Menu>
                            <MenuItem icon={<VerificationIcon fill={location.pathname.includes('api') ? '#D9912B' : '#686677'} />}>
                                Verification
                            </MenuItem>
                        </Menu>
                        <Menu>
                            <SubMenu label="Users" icon={<UserIcon fill={location.pathname.includes('api')? '#D9912B':'#686677'}/>}>
                                <MenuItem>Admin</MenuItem>
                                <MenuItem>Regular User</MenuItem>
                            </SubMenu>
                        </Menu>
                        <Menu>
                        <Menu>
                            <SubMenu label="Wallet" icon={<WalletIcon fill={location.pathname.includes('api') ? "#D9912B":'#686677'} />}>
                                <MenuItem>View Balance</MenuItem>
                                <MenuItem>Transaction History</MenuItem>
                                <MenuItem>Deposit Funds</MenuItem>
                                <MenuItem>Withdraw Funds</MenuItem>
                            </SubMenu>
                        </Menu>
                        <Menu>
                            <SubMenu label="Payments" icon={<PaymentIcon fill={location.pathname.includes('api') ? "D9912B" : "#686677"}/>}>
                                <MenuItem>Make Payment</MenuItem>
                                <MenuItem>Payment History</MenuItem>
                                <MenuItem>Payment Methods</MenuItem>
                                <MenuItem>Invoices</MenuItem>
                            </SubMenu>
                        </Menu>
                        <Menu>
                            <MenuItem>
                                Stats
                            </MenuItem>
                        </Menu>
                        <Menu>
                            <MenuItem>
                                Settings
                            </MenuItem>
                        </Menu>
                    </Menu>

                    </Sidebar>
                </div>
            </div>
            <div className='bg-green-400 w-4/5'></div>
        </div>
        </>
    )
}

export default AdminLayout