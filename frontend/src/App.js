import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
    const [escrowStatus, setEscrowStatus] = useState({});

    useEffect(() => {
        axios.get("http://localhost:4000/escrow-status")
            .then(response => {
                setEscrowStatus(response.data.escrowDetails);
            })
            .catch(error => console.error("Error fetching escrow status:", error));
    }, []);

    return (
        <div className="App">
            <header>
                <h1>GAEH Trustless Escrow System</h1>
                <h2>High-Value Asset Transaction Verification</h2>
            </header>
            <main>
                <section className="escrow-details">
                    <h3>Escrow Details</h3>
                    <p>Asset ID: <strong>{escrowStatus.assetId}</strong></p>
                    <p>Buyer: <strong>{escrowStatus.buyer}</strong></p>
                    <p>Seller: <strong>{escrowStatus.seller}</strong></p>
                </section>
                <section className="verification-status">
                    <h3>Verification Status</h3>
                    <ul>
                        <li>Insurance: <strong>{escrowStatus.verifications?.insurance ? "Verified" : "Pending"}</strong></li>
                        <li>Inspection: <strong>{escrowStatus.verifications?.inspection ? "Verified" : "Pending"}</strong></li>
                        <li>Custody: <strong>{escrowStatus.verifications?.custody ? "Verified" : "Pending"}</strong></li>
                        <li>Compliance: <strong>{escrowStatus.verifications?.compliance ? "Verified" : "Pending"}</strong></li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 GAEH Escrow Services</p>
            </footer>
        </div>
    );
}

export default App;
