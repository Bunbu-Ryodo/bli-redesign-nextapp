"use client";

import Navbar from '../components/Navbar/Navbar';
import { bebasNeue, dosisSemibold } from '../fonts';
import Image from 'next/image';
import Taiji from './taiji.jpg';
import Tori from './tori.jpg';
import Katana from './katana.jpg';
import Shine from './shine.jpg';
import Makiwara from './makiwara.jpg';
import Omedetou from './omedetou.jpg';
import { useSelector } from 'react-redux';

export default function YourProfile(){
    const taiji = useSelector((state) => state.profileReducer.value.taiji);
    const tori = useSelector((state) => state.profileReducer.value.tori);
    const katana = useSelector((state) => state.profileReducer.value.katana);
    const makiwara = useSelector((state) => state.profileReducer.value.makiwara);
    const shine = useSelector((state) => state.profileReducer.value.shine);
    const name = useSelector((state) => state.profileReducer.value.name);
    const wisdom = useSelector((state) => state.profileReducer.value.wisdom);
    const experience = useSelector((state) => state.profileReducer.value.experience);
    
    console.log(taiji);

    return (
        <div className="container mx-auto h-full">
            <Navbar></Navbar>
            <div className="container flex flex-row">
                <div className="w-1/4">
                    <Image src={taiji ? Taiji : tori ? Tori : katana ? Katana : shine ? Shine : Makiwara ? makiwara : ''} alt="profileImage"></Image>
                </div>
            </div>
        </div>
    )
}