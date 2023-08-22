"use client"
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React, { Fragment } from 'react'

interface MenuContentProps {
    name: string;
    href: string;
    description?: string;
}
interface NavbarLinkItemProps {
    menuContent?: MenuContentProps[] | undefined;
    label: string;
    link?: string;
    menuButtonStyle?: string;
}

const NavbarLinkItem = ({ menuContent, label, link, menuButtonStyle }: NavbarLinkItemProps) => {
    return (
        link && menuContent === undefined ? (
            <Link href={link} className='px-4 lg:mx-2 text-gray-700 font-semibold dark:text-gray-200'>{label}</Link>
        ) : (
            <div>
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="lg:mx-2 inline-flex w-full justify-center rounded-md bg-transparent bg-opacity-20 px-4 py-2 font-semibold text-gray-700 dark:text-gray-200 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            {label}
                            <ChevronDownIcon
                                className="ml-2 mt-[2px] h-5 w-5 text-gray-700 dark:text-gray-300 hover:text-violet-100"
                                aria-hidden="true"
                            />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="px-1 py-1 ">
                                {
                                    menuContent?.map(menuItem => (
                                        <Menu.Item key={menuItem.name}>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                >
                                                    {active ? (
                                                        <span
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <span
                                                            className="mr-2 h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                    {menuItem.name}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))
                                }


                            </div>

                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

        )

    )
}

export default NavbarLinkItem