'use client'

import React from 'react'
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="Navbar gap-2 w-[100%] flex justify-center items-center relative z-101 navbar navbar-expand-lg pt-5">
                <h2 className ="text-white font-paquito text-2xl">MENU</h2>
                <Image src="/images/white-thunderbird.png" alt="logo hermanos gutierrez" width={100} height={100}></Image>
        </nav>
    )
}
export default Navbar
