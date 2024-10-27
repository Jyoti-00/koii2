import fetch from 'node-fetch';
import { namespaceWrapper } from "@_koii/namespace-wrapper";

export async function task(roundNumber) {
    console.log(`Executing verification task for Round ${roundNumber}`);

    try {
        const insuranceVerification = await fetch("http://localhost:3001/insurance").then(res => res.json());
        const inspectionVerification = await fetch("http://localhost:3001/inspection").then(res => res.json());
        const custodyVerification = await fetch("http://localhost:3001/custody").then(res => res.json());
        const complianceVerification = await fetch("http://localhost:3001/compliance").then(res => res.json());

        await namespaceWrapper.storeSet("insurance", insuranceVerification);
        await namespaceWrapper.storeSet("inspection", inspectionVerification);
        await namespaceWrapper.storeSet("custody", custodyVerification);
        await namespaceWrapper.storeSet("compliance", complianceVerification);

        console.log("All verification data retrieved and stored successfully");
    } catch (error) {
        console.error("Error fetching verification data:", error);
    }
}
