const SLASH_PERCENT = 0.7;

export function distribution(submitters, bounty, roundNumber) {
    console.log(`Calculating distribution for Round ${roundNumber}`);

    const distributionList = {};
    const verifiedSubmitters = submitters.filter((submitter) => submitter.votes > 0);

    if (verifiedSubmitters.length === 0) {
        console.log(`No verified submitters for round ${roundNumber}, skipping distribution.`);
        return distributionList;
    }

    const reward = Math.floor(bounty / verifiedSubmitters.length);
    verifiedSubmitters.forEach((submitter) => {
        distributionList[submitter.publicKey] = reward;
    });

    return distributionList;
}
