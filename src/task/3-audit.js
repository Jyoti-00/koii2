import { namespaceWrapper } from "@_koii/namespace-wrapper";

export async function audit(submission, roundNumber, submitterKey) {
    console.log(`Auditing submission for Round ${roundNumber}`);
    
    try {
        // Parse the JSON submission
        const verifications = JSON.parse(submission);

        // Ensure each verification is confirmed as `true`
        return verifications.insurance.isVerified && 
               verifications.inspection.isVerified && 
               verifications.custody.isVerified && 
               verifications.compliance.isVerified;
    } catch (error) {
        console.error("Error parsing submission JSON:", error);
        return false;
    }
}
