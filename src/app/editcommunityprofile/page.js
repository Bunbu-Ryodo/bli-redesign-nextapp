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
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTaijiTrue, toggleToriTrue, toggleKatanaTrue, toggleMakiwaraTrue, toggleShineTrue, setName, setWisdom, setExperience } from '@/redux/features/profile-slice.js';

export default function EditCommunityProfile(){

    const [nickname, setNickname] = useState('');
    const [wiseWords, setWiseWords] = useState('');
    const [martialJourney, setMartialJourney] = useState('');



    const dispatch = useDispatch(); 
    const taiji = useSelector((state) => state.profileReducer.value.taiji);
    const tori = useSelector((state) => state.profileReducer.value.tori);
    const katana = useSelector((state) => state.profileReducer.value.katana);
    const makiwara = useSelector((state) => state.profileReducer.value.makiwara);
    const shine = useSelector((state) => state.profileReducer.value.shine);
    const name = useSelector((state) => state.profileReducer.value.name);
    const wisdom = useSelector((state) => state.profileReducer.value.wisdom);
    const experience = useSelector((state) => state.profileReducer.value.experience);

    console.log(taiji);

    function selectTaiji(){
        dispatch(toggleTaijiTrue());
    }

    function selectTori(){
        dispatch(toggleToriTrue());
    }

    function selectKatana(){
        dispatch(toggleKatanaTrue());
    }

    function selectMakiwara(){
        dispatch(toggleMakiwaraTrue());
    }

    function selectShine(){
        dispatch(toggleShineTrue());
    }

    function changeName(txt){
        dispatch(setName(txt));
    }

    function changeWisdom(txt){
        dispatch(setWisdom(txt));
    }

    function changeExperience(txt){
        dispatch(setExperience(txt));
    }

    return(
        <div className="container mx-auto h-full w-full">
            <Navbar></Navbar>
            <h3 className={bebasNeue.className + " text-blitzRed text-2xl ml-1 mb-2"}>Edit Community Profile</h3>
            <div className="container flex flex-col items-center w-full">
                <h3 className="text-xl ml-1 mt-5 mb-5">Choose an Avatar</h3>
                <div className="flex flex-row mx-auto justify-evenly space-x-4">
                    <div onClick={selectTaiji} className={taiji ? "border-8 border-blitzYellow" : "" + " border-8 border-blitzBlack hover:border-blitzBlue"}>
                        <Image src={Taiji} alt="Taiji" className="cursor-pointer hover:opacity-80"/>
                    </div>
                    <div onClick={selectTori} className={tori ? "border-8 border-blitzYellow" : "" + " border-8 border-blitzBlack hover:border-blitzBlue"}>
                        <Image src={Tori} alt="Tori" className="cursor-pointer hover:opacity-80"/>
                    </div>
                    <div onClick={selectKatana} className={katana ? "border-8 border-blitzYellow" : "" + " border-8 border-blitzBlack hover:border-blitzBlue"}>
                        <Image src={Katana} alt="Katana" className="cursor-pointer hover:opacity-80"/>
                    </div>
                    <div onClick={selectMakiwara} className={makiwara ? "border-8 border-blitzYellow" : "" + " border-8 border-blitzBlack hover:border-blitzBlue"}>   
                        <Image src={Makiwara} alt="Makiwara" className="cursor-pointer hover:opacity-80"/>
                    </div>
                    <div onClick={selectShine} className={shine ? "border-8 border-blitzYellow" : "" + " border-8 border-blitzBlack hover:border-blitzBlue"}>
                        <Image src={Shine} alt="Shine" className="cursor-pointer hover:opacity-80"/>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col w-full my-10 items-center">
                <h3 className="text-xl m1-1 mt-5 mb-5">What should we call you?</h3>
                <input onChange={(e) => setNickname(e.target.value)}placeholder="Call me..." className="flex border border-blitzRed focus:outline-none w-80 h-10 px-2 max-[1440px]:w-60"></input>
            </div>
            <div className="container flex flex-col w-full my-10 items-center">
                <h3 className="text-xl m1-1 mt-5 mb-5">Give us some words of wisdom...</h3>
                <textarea onBlur={(e) => setWiseWords(e.target.value)} placeholder="What is the sound of one hand clapping in the woods?" rows="10" className="flex border border-blitzRed focus:outline-none w-80 h-40 px-2 resize-none"></textarea>
            </div>
            <div className="container flex flex-col w-full my-10 items-center">
                <h3 className="text-xl m1-1 mt-5 mb-5">Describe your martial arts experience...</h3>
                <textarea onBlur={(e) => setMartialJourney(e.target.value)} placeholder="11th Dan Ameridote" rows="10" className="flex border border-blitzRed focus:outline-none w-80 h-40 px-2 resize-none"></textarea>
            </div>
            <div className="container flex flex-col w-full my-10 items-center">
                <h3 className="text-xl m1-1 mt-5 mb-5">Upload Your Certificate</h3>
                <div className="border-4 border-blitzBlue" >
                    <Image src={Omedetou} alt={"Omedetou"}/>
                </div>
                <button onClick={
                    function(){
                        changeName(nickname);
                        changeWisdom(wiseWords);
                        changeExperience(martialJourney);
                    }
                }className={dosisSemibold.className + " p-1 px-10 text-white bg-blitzRed baseline self-center text-center align-middle w-9/6 max-[970px]:w-full mx-auto mt-8 h-14 leading-12"}>Save Changes</button>
            </div>
        </div>
    )
}