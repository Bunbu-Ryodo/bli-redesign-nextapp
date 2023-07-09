import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: {
        taiji: false,
        tori: false,
        katana: false,
        makiwara: false,
        shine: false,
        name: '',
        wisdom: '',
        experience: ''
    }
}

export const profile = createSlice({
    name: "profile",
    initialState,
    reducers: {
        toggleTaijiTrue: function(state){
            const newState = {value:{}};
            state.value.tori ? newState.value.tori = false : newState.value.tori = state.value.tori;
            state.value.katana ? newState.value.katana = false : newState.value.katana = state.value.katana;
            state.value.makiwara ? newState.value.makiwara = false : newState.value.makiwara = state.value.makiwara;
            state.value.shine ? newState.value.shine = false : newState.value.shine = state.value.shine;
            newState.value.name = state.value.name;
            newState.value.wisdom = state.value.wisdom;
            newState.value.experience = state.value.experience;

            newState.value.taiji = true;
            return newState;
        },
        toggleToriTrue: function(state){
            const newState = {value:{}};
            state.value.taiji ? newState.value.taiji = false : newState.value.taiji = state.value.taiji;
            state.value.katana ? newState.value.katana = false : newState.value.katana = state.value.katana;
            state.value.makiwara ? newState.value.makiwara = false : newState.value.makiwara = state.value.makiwara;
            state.value.shine ? newState.value.shine = false : newState.value.shine = state.value.shine;
            newState.value.name = state.value.name;
            newState.value.wisdom = state.value.wisdom;
            newState.value.experience = state.value.experience;

            newState.value.tori = true;
            return newState;
        },
        toggleKatanaTrue: function(state){
            const newState = {value:{}};
            state.value.taiji ? newState.value.taiji = false : newState.value.taiji = state.value.taiji;
            state.value.tori ? newState.value.tori = false : newState.value.tori = state.value.tori;
            state.value.makiwara ? newState.value.makiwara = false : newState.value.makiwara = state.value.makiwara;
            state.value.shine ? newState.value.shine = false : newState.value.shine = state.value.shine;
            newState.value.name = state.value.name;
            newState.value.wisdom = state.value.wisdom;
            newState.value.experience = state.value.experience;

            newState.value.katana = true;
            return newState;
        },
        toggleMakiwaraTrue: function(state){
            const newState = {value:{}};
            state.value.taiji ? newState.value.taiji = false : newState.value.taiji = state.value.taiji;
            state.value.tori ? newState.value.tori = false : newState.value.tori = state.value.tori;
            state.value.shine ? newState.value.shine = false : newState.value.shine = state.value.shine;
            state.value.katana ? newState.value.katana = false : newState.value.katana = state.value.katana;
            newState.value.name = state.value.name;
            newState.value.wisdom = state.value.wisdom;
            newState.value.experience = state.value.experience;

            newState.value.makiwara = true;
            return newState;
        },  
        toggleShineTrue: function(state){
            const newState = {value:{}};
            state.value.taiji ? newState.value.taiji = false : newState.value.taiji = state.value.taiji;
            state.value.tori ? newState.value.tori = false : newState.value.tori = state.value.tori;
            state.value.makiwara ? newState.value.makiwara = false : newState.value.makiwara = state.value.makiwara;
            state.value.katana ? newState.value.katana = false : newState.value.katana = state.value.katana;
            newState.value.name = state.value.name;
            newState.value.wisdom = state.value.wisdom;
            newState.value.experience = state.value.experience;

            newState.value.shine = true;
            return newState;
        },
        setName: function(state, action){
            return {
                value: {
                    taiji: state.value.taiji,
                    tori: state.value.tori,
                    katana: state.value.katana,
                    makiwara: state.value.makiwara,
                    shine: state.value.shine,
                    name: action.payload,
                    wisdom: state.value.wisdom,
                    experience: state.value.experiencce
                }
            }
        },
        setWisdom: function(state, action){
            return {
                value: {
                    taiji: state.value.taiji,
                    tori: state.value.tori,
                    katana: state.value.katana,
                    makiwara: state.value.makiwara,
                    shine: state.value.shine,
                    name: state.value.name,
                    wisdom: action.payload,
                    experience: state.value.experience
                }
            }
        },
        setExperience: function(state, action){
            return {
                value: {
                    taiji: state.value.taiji,
                    tori: state.value.tori,
                    katana: state.value.katana,
                    makiwara: state.value.makiwara,
                    shine: state.value.shine,
                    name: state.value.name,
                    wisdom: state.value.wisdom,
                    experience: action.payload
            }
        }
    }
}});

export const { toggleTaijiTrue, toggleToriTrue, toggleKatanaTrue, toggleMakiwaraTrue, toggleShineTrue, setName, setWisdom, setExperience } = profile.actions;
export default profile.reducer;