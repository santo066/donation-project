

const getStoredDonationApplication = () => {
    const storedDonationApplication = localStorage.getItem('Donation-application')
    if (storedDonationApplication) {
        return JSON.parse(storedDonationApplication);
    }
    return [];
}

const saveDonationApplication = id => {
    const storedDonationApplication = getStoredDonationApplication();

    const exists = storedDonationApplication.find(donationId => donationId === id);
    if (!exists) {
        storedDonationApplication.push(id);
        localStorage.setItem('Donation-application',JSON.stringify(storedDonationApplication));
    }
}

export { getStoredDonationApplication, saveDonationApplication };