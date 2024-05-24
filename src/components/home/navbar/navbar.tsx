import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import { ChevronDown, Lock, Activity, Flash, Server, TagUser } from './Icons'
// import { AcmeLogo } from './AcmeLogo.jsx'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isActivePage, setIsActivePage] = React.useState(false)
  const menuItems = [
    'decorations',
    'catering',
    'makeup',
    'stewards',
    'salon',
    'DeeJay',
    'outfits',
    'accessories',
    'photography',
    'drinks/cold room',
    'contact',
    'sign in',
  ]
  const icons = {
    chevron: <ChevronDown fill='currentColor' size={16} />,
    // scale: <Scale className='text-warning' fill='currentColor' size={30} />,
    lock: <Lock className='text-success' fill='currentColor' size={30} />,
    activity: (
      <Activity className='text-secondary' fill='currentColor' size={30} />
    ),
    flash: <Flash className='text-primary' fill='currentColor' size={30} />,
    server: <Server className='text-success' fill='currentColor' size={30} />,
    user: <TagUser className='text-danger' fill='currentColor' size={30} />,
  }

  return (
    <Navbar
      // height='5rem'
      maxWidth={'full'}
      className='bg-[#FFFFFFB3]'
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className='sm:hidden' justify='start'>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>

      <NavbarContent className='sm:hidde pr-3' justify='center'>
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className='font-bold text-inherit'>ZEIN</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='end'>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 text-xl bg-transparent ml-9 data-[hover=true]:bg-transparent'
                endContent={icons.chevron}
                radius='sm'
                variant='light'
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='ACME features'
            className='w-[340px]'
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key='usage_metrics'
              description='Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key='production_ready'
              description='ACME runs on ACME, join us and others serving requests at web scale.'
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key='99_uptime'
              description='Applications stay on the grid with high availability and high uptime guarantees.'
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key='supreme_support'
              description='Overcome any challenge with a supporting team ready to respond.'
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/*        
         
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className='p-0 text-xl bg-transparent data-[hover=true]:bg-transparent'
                endContent={icons.chevron}
                radius='sm'
                variant='light'
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label='ACME features'
            className='w-[340px]'
            itemClasses={{
              base: 'gap-4',
            }}
          >
            <DropdownItem
              key='usage_metrics'
              description='Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key='production_ready'
              description='ACME runs on ACME, join us and others serving requests at web scale.'
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key='99_uptime'
              description='Applications stay on the grid with high availability and high uptime guarantees.'
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key='supreme_support'
              description='Overcome any challenge with a supporting team ready to respond.'
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
        <NavbarItem>
          <Link href='#' aria-current='page' className='text-xl mx-9'>
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-xl'>
            Location
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className='' justify='end'>
        <NavbarItem className='hidden text-xl lg:flex'>
          <Link href='#' className='text-xl'>
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='#'
            variant='flat'
            className='text-xl'
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className='w-full'
              color={
                index === 2
                  ? 'warning'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
