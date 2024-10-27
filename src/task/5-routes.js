import { namespaceWrapper, app } from "@_koii/namespace-wrapper";

export function routes() {
    app.get("/escrow-status", async (_req, res) => {
        const escrowDetails = await namespaceWrapper.storeGet("escrowDetails");
        res.status(200).json({ escrowDetails });
    });
}
