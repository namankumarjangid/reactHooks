import React, { createContext } from 'react'
import ComB from "./ComB";

export const BioData = createContext();

const ComA = () => {
    return (
        <BioData.Provider value={"Thapa Technical Subs"}>
            <ComB />
        </BioData.Provider>
    )
}
export default ComA
