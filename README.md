**Overview

This project is a Trustless Escrow decentralized application (dApp) built on the Koii Network, designed to facilitate secure, transparent, and verifiable high-value transactions. The application simulates real-world escrow scenarios by validating each step in a transaction lifecycle, such as insurance verification, inspection, custody, and compliance. We've also incorporated a KPL Mind Token to reward users, incentivizing active participation and creating a dynamic ecosystem.

**Features

Trustless Escrow Transactions: Our dApp enables high-value transactions (e.g., luxury goods or real estate) where third-party verifications are required for added security and trust.
KPL Mind Token: Integrated token rewards system that encourages user engagement.
Node Verification: Distributed nodes in the Koii network validate transaction steps through verification rounds, allowing for consensus without needing centralized control.
Simulated Data and Mock Verification: The project currently uses mock data to simulate the real-world functions of an escrow transaction, focusing on steps like insurance verification, inspection, custody confirmation, and compliance checks.
Technologies

Koii Network: Utilizes the Koii ecosystem for decentralized transactions and task validation.
Node.js: Powers the backend for task management and dApp logic.
Express.js: Provides the structure and routing for the dApp API.
KPL Mind Token: Rewards mechanism designed to incentivize user participation within the ecosystem.
Project Structure

src/: Contains the core task files for initializing, verifying, submitting, and auditing transactions.
mock data: Included to simulate real-world data for testing and development.
Koii Integration: Links to Koii's testnet and utilizes EZ Sandbox tools for debugging and deployment.
Getting Started

**Prerequisites
Node.js and Yarn should be installed.
Koii Desktop Node for task submission and verification.
