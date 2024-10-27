import { namespaceWrapper } from "@_koii/namespace-wrapper";

export async function submission(roundNumber) {
    console.log(`Submitting verification data for Round ${roundNumber}`);
    
    const verifications = {
        insurance: await namespaceWrapper.storeGet("insurance"),
        inspection: await namespaceWrapper.storeGet("inspection"),
        custody: await namespaceWrapper.storeGet("custody"),
        compliance: await namespaceWrapper.storeGet("compliance")
    };
    
    // Ensure the data returned is valid JSON
    return JSON.stringify(verifications);
}
